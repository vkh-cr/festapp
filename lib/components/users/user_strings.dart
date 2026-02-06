import 'package:easy_localization/easy_localization.dart';

class UserStrings {
  // Column Titles
  static String get id => 'UserColumns.id'.tr();
  static String get unit => 'UserColumns.unit'.tr();
  static String get email => 'UserColumns.email'.tr();
  static String get name => 'UserColumns.name'.tr();
  static String get surname => 'UserColumns.surname'.tr();
  static String get sex => 'UserColumns.sex'.tr();
  static String get accommodation => 'UserColumns.accommodation'.tr();
  static String get phone => 'UserColumns.phone'.tr();
  static String get birthday => 'UserColumns.birthday'.tr();
  static String get role => 'UserColumns.role'.tr();
  static String get text1 => 'UserColumns.text1'.tr();
  static String get text2 => 'UserColumns.text2'.tr();
  static String get text3 => 'UserColumns.text3'.tr();
  static String get note => 'UserColumns.note'.tr();
  static String get diet => 'UserColumns.diet'.tr();
  static String get form => 'UserColumns.form'.tr();
  static String get orderedAt => 'UserColumns.orderedAt'.tr();
  static String get createdAt => 'UserColumns.createdAt'.tr();
  static String get lastSignInAt => 'UserColumns.lastSignInAt'.tr();

  // Status/Right Column Titles
  static String get volunteer => 'UserColumns.volunteer'.tr();
  static String get administrator => 'UserColumns.administrator'.tr();
  static String get editor => 'UserColumns.editor'.tr();
  static String get readOnly => 'UserColumns.readOnly'.tr();
  static String get editOrders => 'UserColumns.editOrders'.tr();
  static String get readOrders => 'UserColumns.readOrders'.tr();
  static String get approver => 'UserColumns.approver'.tr();
  static String get approved => 'UserColumns.approved'.tr();
  static String get invited => 'UserColumns.invited'.tr();

  // FeatureUser
  static String get signIn => 'FeatureUser.signIn'.tr();
  static String get signOut => 'FeatureUser.signOut'.tr();
  static String get emailLabel => 'FeatureUser.email'.tr();
  static String get password => 'FeatureUser.password'.tr();
  static String get confirmPassword => 'FeatureUser.confirmPassword'.tr();
  static String get passwordsDoNotMatch =>
      'FeatureUser.passwordsDoNotMatch'.tr();
  static String get passwordMinLength => 'FeatureUser.passwordMinLength'.tr();
  static String get fillPassword => 'FeatureUser.fillPassword'.tr();
  static String get signInSuccess => 'FeatureUser.signInSuccess'.tr();
  static String get invalidCredentials => 'FeatureUser.invalidCredentials'.tr();
  static String get createAPassword => 'FeatureUser.createAPassword'.tr();
  static String get newPassword => 'FeatureUser.newPassword'.tr();
  static String get changePassword => 'FeatureUser.changePassword'.tr();
  static String get forgotPassword => 'FeatureUser.forgotPassword'.tr();
  static String get credentialsSent => 'FeatureUser.credentialsSent'.tr();
  static String get passwordResetSent => 'FeatureUser.passwordResetSent'.tr();
  static String get enterEmailReset => 'FeatureUser.enterEmailReset'.tr();
  static String get registrationFailed => 'FeatureUser.registrationFailed'.tr();
  static String Function(String email) get emailInUse =>
      (email) => 'FeatureUser.emailInUse'.tr(namedArgs: {"email": email});
  static String get passwordChanged => 'FeatureUser.passwordChanged'.tr();
  static String get tokenInvalid => 'FeatureUser.tokenInvalid'.tr();
  static String get firstTime => 'FeatureUser.firstTime'.tr();
  static String get signUp => 'FeatureUser.signUp'.tr();
  static String get registrationAlmostComplete =>
      'FeatureUser.registrationAlmostComplete'.tr();
  static String get passwordOrCode => 'FeatureUser.passwordOrCode'.tr();
  static String Function(String email) get credentialsSentLong => (email) =>
      'FeatureUser.credentialsSentLong'.tr(namedArgs: {"email": email});
  static String get clickToSignIn => 'FeatureUser.clickToSignIn'.tr();
  static String get accountRequiredToJoin =>
      'FeatureUser.accountRequiredToJoin'.tr();
  static String get resetPassword => 'FeatureUser.resetPassword'.tr();
  static String get forgotPasswordQuestion =>
      'FeatureUser.forgotPasswordQuestion'.tr();
  static String get forgotYourPassword => 'FeatureUser.forgotYourPassword'.tr();
  static String get sendResetEmail => 'FeatureUser.sendResetEmail'.tr();
  static String get changePasswordTitle =>
      'FeatureUser.changePasswordTitle'.tr();
  static String get createPasswordToContinue =>
      'FeatureUser.createPasswordToContinue'.tr();
  static String get iAm => 'FeatureUser.iAm'.tr();
}
