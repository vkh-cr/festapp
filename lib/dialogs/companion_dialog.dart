import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/data_services/db_companions.dart';
import 'package:fstapp/data_models/companion_model.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/services/dialog_helper.dart';

class CompanionDialog extends StatefulWidget {
  final int eventId;
  final bool Function()? canSignIn;
  final int maxCompanions;
  final List<CompanionModel> companions;
  final Future<void> Function()? refreshData;

  const CompanionDialog({
    super.key,
    required this.eventId,
    required this.maxCompanions,
    required this.companions,
    this.refreshData,
    this.canSignIn,
  });

  @override
  _CompanionDialogState createState() => _CompanionDialogState();
}

class _CompanionDialogState extends State<CompanionDialog> {
  final TextEditingController _nameController = TextEditingController();
  late List<CompanionModel> _companions;

  @override
  void initState() {
    super.initState();
    _companions = widget.companions;
  }

  Future<void> _createCompanion() async {
    if (_companions.length < widget.maxCompanions &&
        _nameController.text.isNotEmpty) {
      await DbCompanions.create(_nameController.text);
      _nameController.clear();
      _companions =
      await DbCompanions.getAllCompanions();
      if (mounted) setState(() {});
    }
  }

  Future<void> _deleteCompanion(CompanionModel companion) async {
    var answer = await DialogHelper.showConfirmationDialog(
        context,
        "Delete companion".tr(),
        "By deleting your companion you will also sign him/her out of all signed in sessions."
            .tr());
    if (!answer) {
      return;
    }
    await DbCompanions.delete(companion);
    await widget.refreshData?.call();
    _companions = await DbCompanions.getAllCompanions();
    if (mounted) setState(() {});
  }

  Future<void> _signInCompanion(CompanionModel companion) async {
    // This check could also be done inside DbCompanions.signIn, but UI disabling is clearer.
    if (!(widget.canSignIn?.call() ?? false)) return;
    await DbCompanions.signIn(context, widget.eventId, companion);
    await widget.refreshData?.call();
    _companions = await DbCompanions.getAllCompanions();
    if (mounted) setState(() {});
  }

  Future<void> _signOutCompanion(CompanionModel companion) async {
    await DbCompanions.signOut(context, widget.eventId, companion);
    await widget.refreshData?.call();
    _companions = await DbCompanions.getAllCompanions();
    if (mounted) setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    bool currentCanSignIn = widget.canSignIn?.call() ?? false;
    return AlertDialog(
      title: const Text("Companions").tr(),
      content: SingleChildScrollView(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 480),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Text(
                "If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}.",
              ).tr(namedArgs: {"max_companions": FeatureService.getMaxCompanions().toString()}),
              const SizedBox(height: 20),
              Visibility(
                visible: _companions.length < widget.maxCompanions,
                child: Column(
                  children: [
                    TextField(
                      controller: _nameController,
                      decoration:
                      InputDecoration(labelText: "Companion Name".tr()),
                      inputFormatters: [
                        LengthLimitingTextInputFormatter(30),
                      ],
                    ),
                    const SizedBox(height: 20),
                    ElevatedButton(
                      onPressed: _createCompanion,
                      child: const Text("Create Companion").tr(),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 20),
              SizedBox(
                width: 380,
                height: 150,
                child: ListView.builder(
                  shrinkWrap: false,
                  physics: const NeverScrollableScrollPhysics(),
                  itemCount: _companions.length,
                  itemBuilder: (context, index) {
                    final companion = _companions[index];
                    return Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 8.0),
                      child: Row(
                        children: [
                          if (companion.isSignedIn(widget.eventId)) const Icon(Icons.check_circle),
                          const SizedBox(width: 4),
                          Expanded(
                            child: Text(companion.name),
                          ),
                          if (!companion.isSignedIn(widget.eventId))
                            ElevatedButton(
                              onPressed: currentCanSignIn ? () => _signInCompanion(companion) : null,
                              child: const Text("Sign in someone").tr(),
                            ),
                          if (companion.isSignedIn(widget.eventId))
                            ElevatedButton(
                              child: const Text("Sign out someone").tr(),
                              onPressed: () => _signOutCompanion(companion),
                            ),
                          IconButton(
                            icon: const Icon(Icons.delete),
                            onPressed: () => _deleteCompanion(companion),
                          ),
                        ],
                      ),
                    );
                  },
                ),
              ),
            ],
          ),
        ),
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(),
          child: const Text("Ok").tr(),
        ),
      ],
    );
  }
}