Future<void> runOccasionSaveAction({
  required Future<void> Function() action,
  required void Function(bool isSaving) setSaving,
}) async {
  setSaving(true);
  try {
    await action();
  } finally {
    setSaving(false);
  }
}
