import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/components/schedule/db_events.dart';
import 'package:fstapp/components/schedule/event_model.dart';
import 'package:fstapp/components/speakers/counseling_availability.dart';
import 'package:fstapp/components/speakers/db_speakers.dart';
import 'package:fstapp/components/speakers/slot_chip.dart';
import 'package:fstapp/components/speakers/speaker_avatar.dart';
import 'package:fstapp/components/speakers/speakers_bundle.dart';
import 'package:fstapp/components/speakers/speakers_strings.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/services/exception_handler.dart';
import 'package:fstapp/services/time_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/navigate_back_button.dart';

import 'topic_picker.dart';

/// Counseling entry point ("Poradenský rozcestník"): choose exactly one area,
/// see the matching counselors and their free slots, and book. Non-logged-in
/// users still see the offer (read-only) with a sign-in prompt (decision R7).
@RoutePage()
class CounselingPage extends StatefulWidget {
  static const ROUTE = "counseling";

  const CounselingPage({super.key});

  @override
  State<CounselingPage> createState() => _CounselingPageState();
}

class _CounselingPageState extends State<CounselingPage> {
  bool _isLoading = true;
  bool _isLoadingAvailability = false;

  SpeakersBundle _bundle = SpeakersBundle.empty();
  List<EventModel> _myReservations = [];
  int? _selectedTopicId;
  CounselingAvailability? _availability;

  int get _occasionId => RightsService.currentOccasionId()!;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) => _loadInitial());
  }

  Future<void> _loadInitial() async {
    await ExceptionHandler.guard(context, futureFunction: () async {
      final bundle = await DbSpeakers.getSpeakers(_occasionId);
      final reservations = await _loadReservations();
      if (mounted) {
        setState(() {
          _bundle = bundle;
          _myReservations = reservations;
        });
      }
    });
    if (mounted) setState(() => _isLoading = false);
  }

  Future<List<EventModel>> _loadReservations() async {
    if (!AuthService.isLoggedIn()) return [];
    final all = await DbEvents.getAllEvents(_occasionId, false);
    return all
        .where((e) => e.isCounselingSlot && (e.isSignedIn == true))
        .toList()
      ..sort((a, b) => a.startTime.compareTo(b.startTime));
  }

  Future<void> _selectTopic(int topicId) async {
    setState(() {
      _selectedTopicId = topicId;
      _availability = null;
      _isLoadingAvailability = true;
    });
    final avail = await ExceptionHandler.guard(
      context,
      futureFunction: () =>
          DbSpeakers.getCounselingAvailability(_occasionId, topicId),
    );
    if (mounted) {
      setState(() {
        _availability = avail;
        _isLoadingAvailability = false;
      });
    }
  }

  Future<void> _bookSlot(int slotId) async {
    if (!AuthService.isLoggedIn()) {
      ToastHelper.Show(context, SpeakersStrings.signInToReserve,
          severity: ToastSeverity.NotOk);
      return;
    }
    await DbEvents.signInToEvent(context, slotId);
    await _reloadAfterChange();
  }

  Future<void> _cancelReservation(int eventId) async {
    await DbEvents.signOutFromEvent(context, eventId);
    await _reloadAfterChange();
  }

  /// Refresh both the user's reservations and the currently-shown availability
  /// after a booking / cancellation.
  Future<void> _reloadAfterChange() async {
    await ExceptionHandler.guard(context, futureFunction: () async {
      final reservations = await _loadReservations();
      CounselingAvailability? avail = _availability;
      if (_selectedTopicId != null) {
        avail = await DbSpeakers.getCounselingAvailability(
            _occasionId, _selectedTopicId!);
      }
      if (mounted) {
        setState(() {
          _myReservations = reservations;
          _availability = avail;
        });
      }
    });
  }

  String _formatSlotTime(DateTime? dt) {
    if (dt == null) return "";
    return DateFormat("E HH:mm", context.locale.languageCode)
        .format(dt.toOccasionTime());
  }

  String _formatReservationTime(DateTime? dt) {
    if (dt == null) return "";
    return DateFormat("EEEE d.M. HH:mm", context.locale.languageCode)
        .format(dt.toOccasionTime());
  }

  @override
  Widget build(BuildContext context) {
    final visibleTopics =
        _bundle.topics.where((t) => !t.isHidden).toList();
    return Scaffold(
      appBar: AppBar(
        leading: const ScheduleBackButton(),
        title: Text(SpeakersStrings.counselingTitle),
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : Align(
              alignment: Alignment.topCenter,
              child: ConstrainedBox(
                constraints:
                    BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
                child: ListView(
                  padding: const EdgeInsets.all(16),
                  children: [
                    if (_myReservations.isNotEmpty) ...[
                      _sectionTitle(SpeakersStrings.yourReservation),
                      ..._myReservations.map(_buildReservationTile),
                      const SizedBox(height: 24),
                    ],
                    _sectionTitle(SpeakersStrings.chooseArea),
                    TopicPicker(
                      topics: visibleTopics,
                      selectedTopicId: _selectedTopicId,
                      onSelected: _selectTopic,
                    ),
                    const SizedBox(height: 16),
                    if (_selectedTopicId != null) _buildAvailability(),
                  ],
                ),
              ),
            ),
    );
  }

  Widget _sectionTitle(String text) => Padding(
        padding: const EdgeInsets.only(bottom: 8),
        child: Text(
          text,
          style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
        ),
      );

  Widget _buildReservationTile(EventModel e) {
    return Card(
      child: ListTile(
        leading: const Icon(Icons.event_available),
        title: Text(e.title ?? ""),
        subtitle: Text(_formatReservationTime(e.startTime)),
        trailing: TextButton(
          onPressed: () => _cancelReservation(e.id!),
          child: Text(SpeakersStrings.cancelReservation),
        ),
      ),
    );
  }

  Widget _buildAvailability() {
    if (_isLoadingAvailability) {
      return const Padding(
        padding: EdgeInsets.all(24),
        child: Center(child: CircularProgressIndicator()),
      );
    }
    final counselors = _availability?.counselors ?? const [];
    if (counselors.isEmpty) {
      return Padding(
        padding: const EdgeInsets.symmetric(vertical: 24),
        child: Text(SpeakersStrings.noCounselorsForArea),
      );
    }
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        _sectionTitle(SpeakersStrings.chooseCounselorAndTime),
        if (!AuthService.isLoggedIn())
          Padding(
            padding: const EdgeInsets.only(bottom: 12),
            child: Text(
              SpeakersStrings.signInToReserve,
              style: TextStyle(color: ThemeConfig.redColor(context)),
            ),
          ),
        ...counselors.map(_buildCounselorCard),
      ],
    );
  }

  Widget _buildCounselorCard(CounselorModel c) {
    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                SpeakerAvatar(imageUrl: c.image, radius: 22),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(c.title ?? "",
                          style: const TextStyle(
                              fontWeight: FontWeight.bold, fontSize: 16)),
                      if (c.subtitle != null && c.subtitle!.isNotEmpty)
                        Text(c.subtitle!,
                            style: TextStyle(
                                color: ThemeConfig.grey700(context))),
                    ],
                  ),
                ),
              ],
            ),
            const SizedBox(height: 12),
            Wrap(
              spacing: 8,
              runSpacing: 8,
              children: c.slots
                  .map((s) => SlotChip(
                        slot: s,
                        timeLabel: _formatSlotTime(s.startTime),
                        onTap: () => _bookSlot(s.id),
                      ))
                  .toList(),
            ),
          ],
        ),
      ),
    );
  }
}
