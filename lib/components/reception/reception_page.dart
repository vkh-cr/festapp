import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/reception/reception_service.dart';
import 'package:fstapp/components/reception/reception_strings.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/router_service.dart';
import 'package:qr_flutter/qr_flutter.dart';
import 'package:fstapp/services/exception_handler.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/components/_shared/person_fields_strings.dart';
import 'package:fstapp/widgets/buttons_helper.dart';

@RoutePage()
class ReceptionPage extends StatefulWidget {
  const ReceptionPage({super.key});
  static const ROUTE = 'reception';
  @override
  State<ReceptionPage> createState() => _ReceptionPageState();
}

class _ReceptionPageState extends State<ReceptionPage> {
  final _formKey = GlobalKey<FormState>();
  final _name = TextEditingController(),
      _surname = TextEditingController(),
      _email = TextEditingController();
  String? _sex;
  int? _group;
  String? _accommodation, _commandId, _userId, _qr, _manualCode, _createdEmail;
  bool _loading = false, _confirmSameName = false;
  List<Map<String, dynamic>> _groups = [],
      _accommodations = [],
      _matches = [],
      _recent = [];

  void _draftChanged([VoidCallback? update]) {
    setState(() {
      update?.call();
      _commandId = null;
      _confirmSameName = false;
      _matches = [];
    });
  }

  Future<void> _handleError(Object error) async {
    if (error is ReceptionCommandException &&
        error.kind != ReceptionCommandError.unexpected) {
      ToastHelper.Show(context, ReceptionStrings.commandError(error.kind),
          severity: ToastSeverity.NotOk);
      return;
    }
    await ExceptionHandler.handle(context, error: error);
  }

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) => _load());
  }

  @override
  void dispose() {
    _qr = null;
    _name.dispose();
    _surname.dispose();
    _email.dispose();
    super.dispose();
  }

  Future<void> _load() async {
    if (!RightsService.canUseReception()) return;
    final data = await ReceptionService.options();
    final recent = await ReceptionService.recent();
    if (!mounted) return;
    setState(() {
      _groups = _maps(data['groups']);
      _accommodations = _maps(data['accommodations']);
      _recent = recent;
    });
  }

  List<Map<String, dynamic>> _maps(dynamic value) =>
      (value as List? ?? const [])
          .whereType<Map>()
          .map((e) => Map<String, dynamic>.from(e))
          .toList();
  Future<void> _submit() async {
    if (!_formKey.currentState!.validate() || _sex == null) return;
    setState(() => _loading = true);
    _commandId ??= ReceptionService.newCommandId();
    try {
      final result = await ReceptionService.create(
          commandId: _commandId!,
          profile: {
            'name': _name.text.trim(),
            'surname': _surname.text.trim(),
            'email': _email.text.trim(),
            'sex': _sex
          },
          groupId: _group,
          accommodationCode: _accommodation,
          confirmSameName: _confirmSameName);
      if (result['message'] == 'same_name_confirmation_required') {
        setState(() {
          _matches = _maps(result['candidates']);
          _confirmSameName = false;
        });
        return;
      }
      final issued = await ReceptionService.issue(result['userId'].toString());
      if (!mounted) return;
      setState(() {
        _userId = result['userId'].toString();
        _createdEmail = result['email']?.toString();
        _qr = issued['payload']?.toString();
        _manualCode = issued['manualCode']?.toString();
        _matches = [];
      });
    } catch (error) {
      if (mounted) {
        await _handleError(error);
      }
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  void _reset() {
    setState(() {
      _qr = null;
      _manualCode = null;
      _userId = null;
      _createdEmail = null;
      _commandId = null;
      _confirmSameName = false;
      _matches = [];
      _sex = null;
      _group = null;
      _accommodation = null;
      _name.clear();
      _surname.clear();
      _email.clear();
    });
  }

  Future<void> _rotate() async {
    if (_userId == null) return;
    final r = await ReceptionService.issue(_userId!);
    if (mounted) {
      setState(() {
        _qr = r['payload']?.toString();
        _manualCode = r['manualCode']?.toString();
      });
    }
  }

  Future<void> _issueRecent(Map<String, dynamic> registration) async {
    setState(() => _loading = true);
    try {
      final userId = registration['userId'].toString();
      final issued = await ReceptionService.issue(userId);
      if (!mounted) return;
      _name.text = registration['name']?.toString() ?? '';
      _surname.text = registration['surname']?.toString() ?? '';
      setState(() {
        _userId = userId;
        _createdEmail = registration['email']?.toString();
        _qr = issued['payload']?.toString();
        _manualCode = issued['manualCode']?.toString();
      });
    } catch (error) {
      if (mounted) await _handleError(error);
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  Future<void> _cancel(String user) async {
    final ok = await showDialog<bool>(
            context: context,
            builder: (c) => AlertDialog(
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(16)),
                    title: Text(ReceptionStrings.cancel),
                    content: Text(ReceptionStrings.cancelWarning),
                    actions: [
                      TextButton(
                          onPressed: () => Navigator.pop(c, false),
                          child: Text(ReceptionStrings.no)),
                      FilledButton(
                          onPressed: () => Navigator.pop(c, true),
                          child: Text(ReceptionStrings.yes))
                    ])) ??
        false;
    if (!ok) return;
    await ReceptionService.cancel(user);
    if (user == _userId) _reset();
    await _load();
  }

  String? _required(String? v) => v == null || v.trim().isEmpty ? '*' : null;
  @override
  Widget build(BuildContext context) {
    if (!RightsService.canUseReception())
      return Scaffold(
          appBar: AppBar(
              leading:
                  BackButton(onPressed: () => RouterService.popOrHome(context)),
              title: Text(ReceptionStrings.title)),
          body: Center(child: Text(ReceptionStrings.accessDenied)));
    return Scaffold(
        appBar: AppBar(title: Text(ReceptionStrings.title)),
        body: SingleChildScrollView(
            padding: const EdgeInsets.all(20),
            child: Center(
                child: ConstrainedBox(
                    constraints: const BoxConstraints(maxWidth: 640),
                    child: _qr != null
                        ? _success()
                        : Column(
                            crossAxisAlignment: CrossAxisAlignment.stretch,
                            children: [
                                Text(ReceptionStrings.subtitle),
                                const SizedBox(height: 16),
                                Form(
                                    key: _formKey,
                                    child: Column(children: [
                                      TextFormField(
                                          controller: _name,
                                          onChanged: (_) => _draftChanged(),
                                          decoration: InputDecoration(
                                              labelText: CommonStrings.name),
                                          validator: _required),
                                      TextFormField(
                                          controller: _surname,
                                          onChanged: (_) => _draftChanged(),
                                          decoration: InputDecoration(
                                              labelText:
                                                  PersonFieldsStrings.surname),
                                          validator: _required),
                                      TextFormField(
                                          controller: _email,
                                          onChanged: (_) => _draftChanged(),
                                          decoration: InputDecoration(
                                              labelText:
                                                  PersonFieldsStrings.email),
                                          keyboardType:
                                              TextInputType.emailAddress,
                                          validator: _required),
                                      DropdownButtonFormField<String>(
                                          value: _sex,
                                          decoration: InputDecoration(
                                              labelText:
                                                  '${PersonFieldsStrings.sexLabel} *'),
                                          items: [
                                            DropdownMenuItem(
                                                value: 'male',
                                                child: Text(
                                                    PersonFieldsStrings.male)),
                                            DropdownMenuItem(
                                                value: 'female',
                                                child: Text(PersonFieldsStrings
                                                    .female)),
                                            DropdownMenuItem(
                                                value: 'unspecified',
                                                child: Text(ReceptionStrings
                                                    .unspecified))
                                          ],
                                          onChanged: (v) =>
                                              _draftChanged(() => _sex = v),
                                          validator: (v) =>
                                              v == null ? '*' : null),
                                      DropdownButtonFormField<int>(
                                          value: _group,
                                          decoration: InputDecoration(
                                              labelText:
                                                  ReceptionStrings.group),
                                          items: [
                                            DropdownMenuItem(
                                                value: null,
                                                child: Text(
                                                    ReceptionStrings.none)),
                                            ..._groups.map((g) =>
                                                DropdownMenuItem(
                                                    value: (g['id'] as num)
                                                        .toInt(),
                                                    child: Text(
                                                        g['title'].toString())))
                                          ],
                                          onChanged: (v) =>
                                              _draftChanged(() => _group = v)),
                                      DropdownButtonFormField<String>(
                                          value: _accommodation,
                                          decoration: InputDecoration(
                                              labelText: ReceptionStrings
                                                  .accommodation),
                                          items: [
                                            DropdownMenuItem(
                                                value: null,
                                                child: Text(
                                                    ReceptionStrings.none)),
                                            ..._accommodations.map((a) =>
                                                DropdownMenuItem(
                                                    value: a['code'].toString(),
                                                    child: Text(
                                                        a['title'].toString())))
                                          ],
                                          onChanged: (v) => _draftChanged(
                                              () => _accommodation = v))
                                    ])),
                                if (_matches.isNotEmpty)
                                  Card(
                                      color: Theme.of(context)
                                          .colorScheme
                                          .errorContainer,
                                      child: Padding(
                                          padding: const EdgeInsets.all(12),
                                          child: Column(children: [
                                            Text(ReceptionStrings
                                                .duplicateWarning),
                                            ..._matches.map((m) => Text(
                                                '${m['name']} ${m['surname']} · ${m['email']}')),
                                            CheckboxListTile(
                                                value: _confirmSameName,
                                                onChanged: (v) => setState(() =>
                                                    _confirmSameName =
                                                        v ?? false),
                                                title: Text(ReceptionStrings
                                                    .confirmDifferent))
                                          ]))),
                                const SizedBox(height: 16),
                                if (_loading)
                                  const Center(
                                      child: CircularProgressIndicator())
                                else
                                  ButtonsHelper.actionButton(
                                    context: context,
                                    label: ReceptionStrings.create,
                                    icon: Icons.person_add_alt_1,
                                    expand: true,
                                    onPressed: _submit,
                                  ),
                                if (_recent.isNotEmpty) ...[
                                  const Divider(height: 40),
                                  ..._recent.map(_recentCard)
                                ]
                              ])))));
  }

  Widget _recentCard(Map<String, dynamic> registration) {
    final used = registration['qrUsed'] == true;
    final colors = Theme.of(context).colorScheme;
    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      elevation: 0,
      color: colors.surfaceContainerHigh,
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(
              '${registration['name']} ${registration['surname']}',
              style: Theme.of(context)
                  .textTheme
                  .titleMedium
                  ?.copyWith(fontWeight: FontWeight.w700),
            ),
            if (registration['email'] != null)
              Text(
                registration['email'].toString(),
                style: TextStyle(color: colors.onSurfaceVariant),
              ),
            const SizedBox(height: 8),
            Row(children: [
              Icon(
                used ? Icons.check_circle_outline : Icons.schedule,
                size: 18,
                color: used ? colors.primary : colors.onSurfaceVariant,
              ),
              const SizedBox(width: 6),
              Expanded(
                child: Text(
                  used ? ReceptionStrings.used : ReceptionStrings.unused,
                  style: TextStyle(color: colors.onSurfaceVariant),
                ),
              ),
            ]),
            const SizedBox(height: 16),
            ButtonsHelper.actionButton(
              context: context,
              label: ReceptionStrings.issueQr,
              icon: Icons.qr_code_2,
              expand: true,
              onPressed: () => _issueRecent(registration),
            ),
            const SizedBox(height: 4),
            TextButton.icon(
              onPressed: _loading
                  ? null
                  : () => _cancel(registration['userId'].toString()),
              icon: const Icon(Icons.person_off_outlined),
              label: Text(ReceptionStrings.cancel),
            ),
          ],
        ),
      ),
    );
  }

  Widget _success() => Column(children: [
        Text('${_name.text} ${_surname.text}',
            style: Theme.of(context).textTheme.headlineSmall),
        Text(_createdEmail ?? ''),
        const SizedBox(height: 12),
        QrImageView(data: _qr!, size: 280),
        if (_manualCode != null) ...[
          const SizedBox(height: 8),
          SelectableText(
            _manualCode!,
            style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                  fontWeight: FontWeight.w800,
                  letterSpacing: 3,
                ),
          ),
          Text(ReceptionStrings.manualCodeValidity,
              style: Theme.of(context).textTheme.bodySmall),
        ],
        const SizedBox(height: 16),
        FilledButton.tonal(
            onPressed: _rotate, child: Text(ReceptionStrings.rotate)),
        TextButton(
            onPressed: _userId == null ? null : () => _cancel(_userId!),
            child: Text(ReceptionStrings.cancel)),
        TextButton(onPressed: _reset, child: Text(ReceptionStrings.create))
      ]);
}
