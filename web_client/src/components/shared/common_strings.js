import { LocalizationService } from '../../services/localization_service.js';

export class CommonStrings {
    static get signIn() { return LocalizationService.tr("FeatureUser.signIn"); }
    static get signOut() { return LocalizationService.tr("FeatureUser.signOut"); }
    static get admin() { return LocalizationService.tr("Admin"); }
    static get email() { return LocalizationService.tr("FeatureUser.email"); }
    static get password() { return LocalizationService.tr("FeatureUser.password"); }
    static get login() { return LocalizationService.tr("FeatureUser.logIn"); }
    static get register() { return LocalizationService.tr("FeatureUser.register"); }
    static get signUp() { return LocalizationService.tr("FeatureUser.signUp"); }
    static get forgotPassword() { return LocalizationService.tr("FeatureUser.forgotPasswordQuestion"); }
    static get forgotYourPassword() { return LocalizationService.tr("FeatureUser.forgotYourPassword"); }
    static get sendResetEmail() { return LocalizationService.tr("FeatureUser.sendResetEmail"); }
    static get iAm() { return LocalizationService.tr("FeatureUser.iAm"); }
    static get language() { return LocalizationService.tr("Language Settings"); }
    static get resetPassword() { return LocalizationService.tr("FeatureUser.resetPassword"); }
    static get enterEmail() { return LocalizationService.tr("FeatureUser.enterEmailReset"); }
    static get firstName() { return LocalizationService.tr("Name"); }
    static get lastName() { return LocalizationService.tr("Surname"); }
    static get confirmPassword() { return LocalizationService.tr("FeatureUser.confirmPassword"); }
    static get back() { return LocalizationService.tr("Common.back"); }
    static get send() { return LocalizationService.tr("Send"); }
    static get emailRequired() { return LocalizationService.tr("FeatureUser.emailInvalid"); }
    static get passwordRequired() { return LocalizationService.tr("FeatureUser.fillPassword"); }
    static get passwordMismatch() { return LocalizationService.tr("FeatureUser.passwordsDoNotMatch"); }
    static get passwordLength() { return LocalizationService.tr("FeatureUser.passwordMinLength"); }
    static get invalidEmail() { return LocalizationService.tr("FeatureUser.emailInvalid"); }
    static get checkEmail() { return LocalizationService.tr("FeatureUser.credentialsSent"); }
    static get passwordResetSent() { return LocalizationService.tr("FeatureUser.passwordResetSent"); }
    static get loading() { return LocalizationService.tr("Common.loading"); }
    static get success() { return LocalizationService.tr("Common.success"); }
    static get error() { return LocalizationService.tr("Common.error"); }
    
    // New additions
    static get light() { return LocalizationService.tr("Light"); }
    static get dark() { return LocalizationService.tr("Dark"); }
    static get auto() { return LocalizationService.tr("Auto"); }
    static get newPassword() { return LocalizationService.tr("FeatureUser.newPassword"); }
    static get changePassword() { return LocalizationService.tr("FeatureUser.changePasswordTitle"); }
    static get passwordChanged() { return LocalizationService.tr("FeatureUser.passwordChanged"); }
    static get createAPassword() { return LocalizationService.tr("FeatureUser.createPasswordToContinue"); }
    static get tokenInvalid() { return LocalizationService.tr("FeatureUser.tokenInvalid"); }
    static get registrationFailed() { return LocalizationService.tr("FeatureUser.registrationFailed"); }
    static get emailInUse() { return LocalizationService.tr("FeatureUser.emailInUse"); }
    static get invalidCredentials() { return LocalizationService.tr("FeatureUser.invalidCredentials"); }
    static get fieldRequired() { return LocalizationService.tr("Common.fieldCannotBeEmpty"); }
    static get edit() { return LocalizationService.tr("Common.edit"); }
    static get delete() { return LocalizationService.tr("Common.delete"); }
    static get save() { return LocalizationService.tr("Common.save"); }
    static get reset() { return LocalizationService.tr("Common.reset"); }
    static get processing() { return LocalizationService.tr("Processing..."); }
}
