import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/components/users/companion/db_companions.dart';
import 'package:fstapp/components/users/companion/companion_model.dart';
import 'package:fstapp/components/users/user_strings.dart';
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
      _companions = await DbCompanions.getAllCompanions();
      if (mounted) setState(() {});
    }
  }

  Future<void> _deleteCompanion(CompanionModel companion) async {
    var answer = await DialogHelper.showConfirmationDialog(context,
        UserStrings.deleteCompanion, UserStrings.deleteCompanionConfirm);
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
      title: Text(CommonStrings.companions),
      content: SingleChildScrollView(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 480),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                UserStrings.companionInfo(
                    maxCompanions:
                        FeatureService.getMaxCompanions().toString()),
              ),
              const SizedBox(height: 20),
              Visibility(
                visible: _companions.length < widget.maxCompanions,
                child: Column(
                  children: [
                    TextField(
                      controller: _nameController,
                      decoration: InputDecoration(
                          labelText: UserStrings.companionName),
                      inputFormatters: [
                        LengthLimitingTextInputFormatter(30),
                      ],
                    ),
                    const SizedBox(height: 20),
                    ElevatedButton(
                      onPressed: _createCompanion,
                      child: Text(UserStrings.createCompanion),
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
                      padding: const EdgeInsets.symmetric(
                          horizontal: 8.0, vertical: 8.0),
                      child: Row(
                        children: [
                          if (companion.isSignedIn(widget.eventId))
                            const Icon(Icons.check_circle),
                          const SizedBox(width: 4),
                          Expanded(
                            child: Text(companion.name),
                          ),
                          if (!companion.isSignedIn(widget.eventId))
                            ElevatedButton(
                              onPressed: currentCanSignIn
                                  ? () => _signInCompanion(companion)
                                  : null,
                              child: Text(UserStrings.signIn),
                            ),
                          if (companion.isSignedIn(widget.eventId))
                            ElevatedButton(
                              child: Text(UserStrings.signOut),
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
          child: Text(CommonStrings.ok),
        ),
      ],
    );
  }
}
