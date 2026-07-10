import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:fstapp/app_router.gr.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/components/html/html_editor_page.dart';
import 'package:fstapp/components/images/db_images.dart';
import 'package:fstapp/components/images/image_area.dart';
import 'package:fstapp/components/images/image_compression_helper.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/map/db_places.dart';
import 'package:fstapp/components/map/place_model.dart';
import 'package:fstapp/components/speakers/db_speakers.dart';
import 'package:fstapp/components/speakers/speaker_model.dart';
import 'package:fstapp/components/speakers/speaker_topic_model.dart';
import 'package:fstapp/components/speakers/speakers_strings.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/exception_handler.dart';
import 'package:fstapp/services/toast_helper.dart';

/// Admin dialog to create or edit a speaker (lecturer / counselor).
///
/// For an existing speaker it also exposes the counseling-slot generator and
/// the current slot grid. Pops `true` when anything was persisted so the parent
/// tab can reload. All writes go through [DbSpeakers] wrapped in
/// [ExceptionHandler.guard].
class SpeakerEditorDialog extends StatefulWidget {
  final SpeakerModel speaker;
  final List<SpeakerTopicModel> topics;

  const SpeakerEditorDialog({
    super.key,
    required this.speaker,
    required this.topics,
  });

  @override
  State<SpeakerEditorDialog> createState() => _SpeakerEditorDialogState();
}

class _SpeakerEditorDialogState extends State<SpeakerEditorDialog> {
  late final TextEditingController _nameController;
  late final TextEditingController _subtitleController;
  late final TextEditingController _orderController;

  String? _image;
  String? _description;
  bool _isHidden = false;
  late Set<int> _selectedTopics;
  bool _changed = false;

  // Slot generator state.
  DateTime? _slotFrom;
  DateTime? _slotTo;
  final TextEditingController _slotLengthController =
      TextEditingController(text: '20');
  final TextEditingController _slotBreakController =
      TextEditingController(text: '0');
  final TextEditingController _slotCapacityController =
      TextEditingController(text: '1');
  int? _slotPlaceId;
  List<PlaceModel> _places = [];

  int get _occasionId => RightsService.currentOccasionId()!;

  bool get _isExisting => widget.speaker.id != null;

  @override
  void initState() {
    super.initState();
    final s = widget.speaker;
    _nameController = TextEditingController(text: s.title ?? '');
    _subtitleController = TextEditingController(text: s.subtitle ?? '');
    _orderController = TextEditingController(text: s.order.toString());
    _image = s.image;
    _description = s.description;
    _isHidden = s.isHidden;
    _selectedTopics = s.topics.toSet();
    if (_isExisting) {
      _loadPlaces();
    }
  }

  @override
  void dispose() {
    _nameController.dispose();
    _subtitleController.dispose();
    _orderController.dispose();
    _slotLengthController.dispose();
    _slotBreakController.dispose();
    _slotCapacityController.dispose();
    super.dispose();
  }

  Future<void> _loadPlaces() async {
    final places = await ExceptionHandler.guard<List<PlaceModel>>(
      context,
      futureFunction: () => DbPlaces.getAllPlaces(),
    );
    if (places != null && mounted) {
      setState(() => _places = places);
    }
  }

  Future<void> _editBio() async {
    final result = await RouterService.navigatePageInfo(
      context,
      HtmlEditorRoute(
        content: {HtmlEditorPage.parContent: _description},
        occasionId: _occasionId,
      ),
    );
    if (result != null && mounted) {
      setState(() => _description = result as String);
    }
  }

  Future<void> _save() async {
    final name = _nameController.text.trim();
    if (name.isEmpty) {
      ToastHelper.Show(context, CommonStrings.fieldCannotBeEmpty,
          severity: ToastSeverity.NotOk);
      return;
    }

    final model = widget.speaker
      ..title = name
      ..subtitle = _subtitleController.text.trim().isEmpty
          ? null
          : _subtitleController.text.trim()
      ..description = _description
      ..image = _image
      ..order = int.tryParse(_orderController.text.trim()) ?? 0
      ..isHidden = _isHidden
      ..topics = _selectedTopics.toList();

    final saved = await ExceptionHandler.guard<SpeakerModel>(
      context,
      futureFunction: () => DbSpeakers.updateSpeaker(_occasionId, model),
    );
    if (saved != null && mounted) {
      ToastHelper.Show(context, CommonStrings.saved);
      // Pop the saved model so callers (e.g. the event edit speaker picker) can
      // pre-select the freshly created speaker (decision R6b). The close button
      // still pops _changed (bool); callers treat any truthy result as reload.
      Navigator.of(context).pop(saved);
    }
  }

  Future<void> _pickDateTime(bool isFrom) async {
    final now = DateTime.now();
    final initial = (isFrom ? _slotFrom : _slotTo) ?? now;
    final date = await showDatePicker(
      context: context,
      initialDate: initial,
      firstDate: DateTime(2000),
      lastDate: DateTime(2100),
    );
    if (date == null || !mounted) return;
    final time = await showTimePicker(
      context: context,
      initialTime: TimeOfDay.fromDateTime(initial),
    );
    if (time == null || !mounted) return;
    final picked =
        DateTime(date.year, date.month, date.day, time.hour, time.minute);
    setState(() {
      if (isFrom) {
        _slotFrom = picked;
      } else {
        _slotTo = picked;
      }
    });
  }

  Future<void> _generateSlots() async {
    if (_slotFrom == null || _slotTo == null) {
      ToastHelper.Show(context, CommonStrings.fieldCannotBeEmpty,
          severity: ToastSeverity.NotOk);
      return;
    }
    final slotMinutes = int.tryParse(_slotLengthController.text.trim()) ?? 0;
    final breakMinutes = int.tryParse(_slotBreakController.text.trim()) ?? 0;
    final capacity = int.tryParse(_slotCapacityController.text.trim()) ?? 1;

    final result = await ExceptionHandler.guard<({int created, List<int> eventIds})>(
      context,
      futureFunction: () => DbSpeakers.createCounselingSlots(
        speakerId: widget.speaker.id!,
        // The pickers yield occasion-local wall-clock times; convert to UTC
        // through the occasion timezone (same convention as event editing).
        start: _slotFrom!.toUtcFromOccasionTime(),
        end: _slotTo!.toUtcFromOccasionTime(),
        slotMinutes: slotMinutes,
        placeId: _slotPlaceId,
        capacity: capacity,
        breakMinutes: breakMinutes,
      ),
    );
    if (result != null && mounted) {
      _changed = true;
      ToastHelper.Show(context, SpeakersStrings.slotsCreated(result.created));
      await _reloadSpeaker();
    }
  }

  Future<void> _deleteEmptySlots() async {
    final confirm = await DialogHelper.showConfirmationDialog(
      context,
      SpeakersStrings.deleteEmptySlots,
      CommonStrings.confirmRemoval,
    );
    if (confirm != true) return;
    final deleted = await ExceptionHandler.guard<int>(
      context,
      futureFunction: () =>
          DbSpeakers.deleteEmptyCounselingSlots(widget.speaker.id!),
    );
    if (deleted != null && mounted) {
      _changed = true;
      ToastHelper.Show(context, SpeakersStrings.slotsDeleted(deleted));
      await _reloadSpeaker();
    }
  }

  /// Refreshes the in-dialog slot grid after a slot mutation.
  Future<void> _reloadSpeaker() async {
    final data = await ExceptionHandler.guard(
      context,
      futureFunction: () => DbSpeakers.getSpeakersForEdit(_occasionId),
    );
    if (data == null || !mounted) return;
    final fresh = data.speakers.where((s) => s.id == widget.speaker.id).toList();
    if (fresh.isNotEmpty) {
      setState(() => widget.speaker.events = fresh.first.events);
    }
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    return AlertDialog(
      title: Text(
          _isExisting ? SpeakersStrings.editSpeaker : SpeakersStrings.addSpeaker),
      content: SizedBox(
        width: 520,
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              TextField(
                controller: _nameController,
                decoration: InputDecoration(labelText: SpeakersStrings.name),
              ),
              const SizedBox(height: 12),
              TextField(
                controller: _subtitleController,
                decoration:
                    InputDecoration(labelText: SpeakersStrings.roleSubtitle),
              ),
              const SizedBox(height: 16),
              Text(SpeakersStrings.avatar, style: theme.textTheme.labelLarge),
              const SizedBox(height: 8),
              ImageArea(
                imageUrl: _image,
                onFileSelected: (file) async {
                  try {
                    final bytes = await file.readAsBytes();
                    final compressed =
                        await ImageCompressionHelper.compress(bytes, 400);
                    final url = await DbImages.uploadImage(
                        compressed, RightsService.currentOccasionId(), null);
                    if (mounted) setState(() => _image = url);
                    return url;
                  } catch (e) {
                    if (mounted) {
                      ToastHelper.Show(context, CommonStrings.unexpectedError,
                          severity: ToastSeverity.NotOk);
                    }
                    return null;
                  }
                },
                onRemove: () async {
                  final imageUrl = _image;
                  if (imageUrl == null || imageUrl.isEmpty) return;
                  final confirm = await DialogHelper.showConfirmationDialog(
                    context,
                    CommonStrings.confirmRemoval,
                    SpeakersStrings.avatar,
                  );
                  if (confirm != true) return;
                  await ExceptionHandler.guardVoid(
                    context,
                    futureFunction: () => DbImages.removeImage(imageUrl),
                  );
                  if (mounted) setState(() => _image = null);
                },
              ),
              const SizedBox(height: 16),
              Row(
                children: [
                  Expanded(
                    child: Text(SpeakersStrings.bio,
                        style: theme.textTheme.labelLarge),
                  ),
                  TextButton.icon(
                    icon: const Icon(Icons.edit),
                    onPressed: _editBio,
                    label: Text(CommonStrings.editContent),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              // Counseling competence areas only matter when counseling is on (R5).
              if (FeatureService.isCounselingEnabled()) ...[
                Text(SpeakersStrings.topics, style: theme.textTheme.labelLarge),
                if (widget.topics.isEmpty)
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 8.0),
                    child: Text('—', style: theme.textTheme.bodySmall),
                  ),
                ...widget.topics.map((t) => CheckboxListTile(
                      dense: true,
                      contentPadding: EdgeInsets.zero,
                      value: _selectedTopics.contains(t.id),
                      title: Text(t.title ?? ''),
                      onChanged: (v) => setState(() {
                        if (v == true) {
                          _selectedTopics.add(t.id!);
                        } else {
                          _selectedTopics.remove(t.id);
                        }
                      }),
                    )),
                const SizedBox(height: 12),
              ],
              TextField(
                controller: _orderController,
                keyboardType: TextInputType.number,
                decoration: InputDecoration(labelText: CommonStrings.order),
              ),
              SwitchListTile(
                contentPadding: EdgeInsets.zero,
                title: Text(CommonStrings.hide),
                value: _isHidden,
                onChanged: (v) => setState(() => _isHidden = v),
              ),
              // The counseling slot generator is gated on the counseling
              // feature (R5); an unsaved speaker has no id to attach slots to.
              if (_isExisting && FeatureService.isCounselingEnabled()) ...[
                const Divider(height: 32),
                _buildCounselingSection(theme),
              ],
            ],
          ),
        ),
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(_changed),
          child: Text(CommonStrings.storno),
        ),
        FilledButton(
          onPressed: _save,
          child: Text(CommonStrings.save),
        ),
      ],
    );
  }

  Widget _buildCounselingSection(ThemeData theme) {
    final slots = widget.speaker.events
        .where((e) => e.isCounselingSlot)
        .toList()
      ..sort((a, b) => (a.startTime ?? DateTime(0))
          .compareTo(b.startTime ?? DateTime(0)));
    final fmt = DateFormat.MMMd().add_Hm();

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(SpeakersStrings.counselingSlots,
            style: theme.textTheme.titleSmall
                ?.copyWith(fontWeight: FontWeight.bold)),
        const SizedBox(height: 12),
        Row(
          children: [
            Expanded(
              child: _dateTimeField(
                  SpeakersStrings.slotFrom, _slotFrom, () => _pickDateTime(true)),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: _dateTimeField(
                  SpeakersStrings.slotTo, _slotTo, () => _pickDateTime(false)),
            ),
          ],
        ),
        const SizedBox(height: 12),
        Row(
          children: [
            Expanded(
              child: TextField(
                controller: _slotLengthController,
                keyboardType: TextInputType.number,
                decoration:
                    InputDecoration(labelText: SpeakersStrings.slotLength),
              ),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: TextField(
                controller: _slotBreakController,
                keyboardType: TextInputType.number,
                decoration:
                    InputDecoration(labelText: SpeakersStrings.slotBreak),
              ),
            ),
          ],
        ),
        const SizedBox(height: 12),
        Row(
          children: [
            Expanded(
              child: TextField(
                controller: _slotCapacityController,
                keyboardType: TextInputType.number,
                decoration:
                    InputDecoration(labelText: SpeakersStrings.slotCapacity),
              ),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: DropdownButtonFormField<int?>(
                initialValue: _slotPlaceId,
                isExpanded: true,
                decoration:
                    InputDecoration(labelText: SpeakersStrings.slotPlace),
                items: [
                  DropdownMenuItem<int?>(value: null, child: Text('—')),
                  ..._places.map((p) => DropdownMenuItem<int?>(
                        value: p.id,
                        child: Text(p.title ?? '???'),
                      )),
                ],
                onChanged: (v) => setState(() => _slotPlaceId = v),
              ),
            ),
          ],
        ),
        const SizedBox(height: 12),
        Wrap(
          spacing: 12,
          runSpacing: 8,
          children: [
            FilledButton.icon(
              icon: const Icon(Icons.add_circle_outline, size: 18),
              onPressed: _generateSlots,
              label: Text(SpeakersStrings.generateSlots),
            ),
            OutlinedButton.icon(
              icon: const Icon(Icons.delete_sweep_outlined, size: 18),
              onPressed: _deleteEmptySlots,
              label: Text(SpeakersStrings.deleteEmptySlots),
            ),
          ],
        ),
        const SizedBox(height: 16),
        if (slots.isNotEmpty)
          Wrap(
            spacing: 8,
            runSpacing: 8,
            children: slots.map((slot) {
              final label = slot.startTime != null
                  ? '${fmt.format(slot.startTime!)} · ${slot.occupied}/${slot.maxParticipants ?? 1}'
                  : '${slot.occupied}/${slot.maxParticipants ?? 1}';
              final full = slot.maxParticipants != null &&
                  slot.occupied >= slot.maxParticipants!;
              return Chip(
                label: Text(label),
                backgroundColor: full
                    ? theme.colorScheme.errorContainer
                    : theme.colorScheme.secondaryContainer,
              );
            }).toList(),
          ),
      ],
    );
  }

  Widget _dateTimeField(String label, DateTime? value, VoidCallback onTap) {
    final fmt = DateFormat.yMd().add_Hm();
    return TextField(
      readOnly: true,
      controller: TextEditingController(
          text: value != null ? fmt.format(value) : ''),
      decoration: InputDecoration(labelText: label),
      onTap: onTap,
    );
  }
}
