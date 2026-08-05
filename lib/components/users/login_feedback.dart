Future<void> finishSuccessfulSignIn({
  required Future<void> Function() navigate,
  required Future<void> Function() showFeedback,
}) async {
  await navigate();
  await showFeedback();
}
