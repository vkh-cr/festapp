import 'package:easy_localization/easy_localization.dart';

class UserStrings {
  // Column Titles
  static String get id => 'UserColumns.id'.tr();
  static String get unit => 'UserColumns.unit'.tr();
  static String get email => 'UserColumns.email'.tr();
  static String get name => 'UserColumns.name'.tr();
  static String get surname => 'UserColumns.surname'.tr();
  static String get group => 'UserColumns.group'.tr();
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
  static String get cleaningCrew => 'UserColumns.cleaningCrew'.tr();
  static String get cleaningBlocked => 'UserColumns.cleaningBlocked'.tr();
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
  static String get admin => 'FeatureUser.admin'.tr(); // "Admin"
  static String get profile => 'FeatureUser.profile'.tr(); // "Profile"
  static String get invite => 'FeatureUser.invite'.tr(); // "Invite"
  static String get inviteInfo => 'FeatureUser.inviteInfo'
      .tr(); // "Users will get a sign-in code via e-mail."
  static String get reinviteConfirm => 'FeatureUser.reinviteConfirm'
      .tr(); // "Some users have already been invited. Do you want to invite them again and send a new sign-in code?"
  static String invitedUser({required String user}) => 'FeatureUser.invitedUser'
      .tr(namedArgs: {'user': user}); // "Invited: {user}."
  static String inviteFailed({required String user, required String retries}) =>
      'FeatureUser.inviteFailed'.tr(namedArgs: {
        'user': user,
        'retries': retries
      }); // "Failed to invite {user}. Number of retries: ({retries})."
  static String passwordChangeFailed(
          {required String user, required String error}) =>
      'FeatureUser.passwordChangeFailed'.tr(namedArgs: {
        'user': user,
        'error': error
      }); // "Failed for user {user}: {error}"
  static String get changePasswordInstructions =>
      'FeatureUser.changePasswordInstructions'
          .tr(); // "Change Password Instructions"
  static String get resetPasswordProceedConfirm =>
      'FeatureUser.resetPasswordProceedConfirm'
          .tr(); // "You'll receive an email with a link to reset your password. Do you want to proceed?"
  static String passwordResetLinkSent({required String email}) =>
      'FeatureUser.passwordResetLinkSent'.tr(namedArgs: {
        'email': email
      }); // "A password reset link has been sent to {email}. Please check your inbox and follow the instructions to reset your password."
  static String get insertHere => 'FeatureUser.insertHere'.tr(); // "Input here"
  static String get deleteAccount =>
      'FeatureUser.deleteAccount'.tr(); // "Delete account"
  static String get deleteAccountScope => 'FeatureUser.deleteAccountScope'.tr();
  static String get deleteAccountConfirm =>
      'FeatureUser.deleteAccountConfirm'.tr();
  static String accountDeletionEmailSent(String email) =>
      'FeatureUser.accountDeletionEmailSent'.tr(namedArgs: {'email': email});
  static String get accountDeletionFailed =>
      'FeatureUser.accountDeletionFailed'.tr();
  static String get privacy => 'FeatureUser.privacy'.tr();
  static String get privacyChoices => 'FeatureUser.privacyChoices'.tr();
  static String get terms => 'FeatureUser.terms'.tr();
  static String get support => 'FeatureUser.support'.tr();
  static String get signupPrivacyNotice =>
      'FeatureUser.signupPrivacyNotice'.tr();
  static String get showMyCode =>
      'FeatureUser.showMyCode'.tr(); // "Show my code"
  static String get showCode => 'FeatureUser.showCode'.tr(); // "Show Code"
  static String signedInEvents({required String count}) =>
      'FeatureUser.signedInEvents'
          .tr(namedArgs: {'count': count}); // "Signed in events: {count}"
  static String welcomeIn({required String name}) => 'FeatureUser.welcomeIn'
      .tr(namedArgs: {'name': name}); // "Welcome in {name}!"

  // Companions
  static String get companionName =>
      'FeatureUser.companionName'.tr(); // "Companion Name"
  static String get companionOf =>
      'FeatureUser.companionOf'.tr(); // "Companion of"
  static String get createCompanion =>
      'FeatureUser.createCompanion'.tr(); // "Create Companion"
  static String companionInfo({required String maxCompanions}) =>
      'FeatureUser.companionInfo'.tr(namedArgs: {
        'max_companions': maxCompanions
      }); // "If you have a child, partner or friend without a phone, you can sign them in as a companion. They will need a festival band to enter the event. Maximal number of companions is {max_companions}."
  static String get companionEventsEmpty => 'FeatureUser.companionEventsEmpty'
      .tr(); // "Companion's events will appear here."
  static String get deleteCompanion =>
      'FeatureUser.deleteCompanion'.tr(); // "Delete companion"
  static String get deleteCompanionConfirm => 'FeatureUser.deleteCompanionConfirm'
      .tr(); // "By deleting your companion you will also sign him/her out of all signed in sessions."
}
