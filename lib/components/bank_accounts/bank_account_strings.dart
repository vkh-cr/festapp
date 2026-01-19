import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/components/_shared/common_strings.dart';

class BankAccountStrings {
  static String get bankAccountSettingsTitle => 'BankAccount.settingsTitle'.tr();
  static String get generalTab => 'BankAccount.generalTab'.tr();
  static String get fioTokenTab => 'BankAccount.fioTokenTab'.tr();
  static String get usersTab => 'BankAccount.usersTab'.tr();
  
  static String get typeLabel => 'BankAccount.typeLabel'.tr();
  static String get typeFio => 'BankAccount.typeFio'.tr();
  static String get typeGeneral => 'BankAccount.typeGeneral'.tr();
  
  static String get titleLabel => CommonStrings.title;
  static String get accountNumberLabel => 'BankAccount.accountNumberLabel'.tr();
  static String get saveChanges => CommonStrings.save; // Or specialized "Save Changes"? CommonStrings has "Save". Let's stick to CommonStrings.save if appropriate or keep specialized if semantic difference. "Save Changes" vs "Save". 
  // User said "use DbEshop.dart consts" which usually means reuse.
  // Actually, let's keep specialized keys if they are distinct in meaning, but reuse CommonStrings for exact matches.
  // "Title" is exact match.
  
  static String get fioTokenInstruction => 'BankAccount.fioTokenInstruction'.tr();
  static String get fioTokenLabel => 'BankAccount.fioTokenLabel'.tr();
  static String get fioTokenHint => 'BankAccount.fioTokenHint'.tr();
  static String get updateToken => 'BankAccount.updateToken'.tr();
  static String get tokenUpdated => 'BankAccount.tokenUpdated'.tr();
  static String get tokenExpiryDateLabel => 'BankAccount.tokenValidUntilLabel'.tr();
  static String get tokenMaskedInfo => 'BankAccount.tokenMaskedInfo'.tr();
  static String get setDate => 'BankAccount.setDate'.tr();
  
  static String get addUser => 'BankAccount.addUser'.tr();
  static String get userEmailLabel => 'BankAccount.userEmailLabel'.tr();
  static String get isAdminLabel => 'BankAccount.isAdminLabel'.tr();
  static String get isSupportLabel => 'BankAccount.isSupportLabel'.tr();
  static String get checkAdminInfo => 'BankAccount.checkAdminInfo'.tr();
  
  // "Cancel" maps to "Stornovat" in global CS, but for this specific button user wants "Storno".
  // So we use a specific key BankAccount.cancel.
  static String get cancel => 'BankAccount.cancel'.tr();
  static String get add => CommonStrings.add;
  static String get save => CommonStrings.save;
  static String get editRole => 'BankAccount.editRole'.tr();
  
  static String get createNewAccount => 'BankAccount.createNewAccount'.tr();
  static String get linkExistingAccount => 'BankAccount.linkExistingAccount'.tr();
  static String get selectAccount => 'BankAccount.selectAccount'.tr();
  static String get addBankAccount => 'BankAccount.addBankAccount'.tr();
  static String get untitled => 'BankAccount.untitled'.tr(); // Might want to use CommonStrings.untitled if exists? It doesn't.
  
  static String get errorSaving => CommonStrings.error; // "Error"
  static String get errorSavingToken => 'BankAccount.errorSavingToken'.tr();
  static String get errorUpdatingUser => 'BankAccount.errorUpdatingUser'.tr();
  static String get accountNumberExists => 'BankAccount.accountNumberExists'.tr();
  static String get errorRemovingUser => 'BankAccount.errorRemovingUser'.tr();
  static String get priority => 'BankAccount.priority'.tr();
  static String get priorityTooltip => 'BankAccount.priorityTooltip'.tr();
  static String get priorityHelpTitle => 'BankAccount.priorityHelpTitle'.tr();
  static String get priorityHelpContent => 'BankAccount.priorityHelpContent'.tr();
  static String get bankAccount => 'BankAccount.bankAccount'.tr();
  static String get supportedCurrencies => 'BankAccount.supportedCurrencies'.tr();
  static String get addCurrency => 'BankAccount.addCurrency'.tr();
  static String get invalidCurrencyCode => 'BankAccount.invalidCurrencyCode'.tr();
  static String get description => 'BankAccount.description'.tr();
  static String get leaveEmptyToKeepToken => 'BankAccount.leaveEmptyToKeepToken'.tr();
  static String get currencyCodeLabel => 'BankAccount.currencyCodeLabel'.tr();
  static String get currencyHint => 'BankAccount.currencyHint'.tr();
  static String get adminInfoText => 'BankAccount.adminInfoText'.tr();
  static String get addUserExplanation => 'BankAccount.addUserExplanation'.tr();
  static String get humanReadableLabel => 'BankAccount.humanReadableLabel'.tr(); // "Human Readable Format"
  static String get humanReadableHelper => 'BankAccount.humanReadableHelper'.tr(); // "Auto-generated from IBAN"
  static String get usedIn => 'BankAccount.usedIn'.tr();
  static String get bankAccountsTitle => 'BankAccount.bankAccountsTitle'.tr();
  static String get manageInSettings => 'BankAccount.manageInSettings'.tr();
  static String get lastFetchTime => 'BankAccount.lastFetchTime'.tr();
  static String get noMoreUsersToAdd => 'BankAccount.noMoreUsersToAdd'.tr();
  static String get addInSettings => 'BankAccount.addInSettings'.tr();
  static String primaryAccountFor(String currency) => 'BankAccount.primaryAccountFor'.tr(args: [currency]);
  static String backupAccountFor(String currency) => 'BankAccount.backupAccountFor'.tr(args: [currency]);
  static String get removeAccountConfirmation => 'BankAccount.removeAccountConfirmation'.tr();
  static String get deleteAccountTitle => 'BankAccount.deleteAccountTitle'.tr();
  static String get manageInUnitSettings => 'BankAccount.manageInUnitSettings'.tr();
  
  static String get unlink => 'BankAccount.unlink'.tr();
  static String get unlinkConfirmationTitle => 'BankAccount.unlinkConfirmationTitle'.tr();
  static String get unlinkConfirmationMessage => 'BankAccount.unlinkConfirmationMessage'.tr();
  static String get unlinkDependencyWarningTitle => 'BankAccount.unlinkDependencyWarningTitle'.tr();
  static String get unlinkDependencyMessage => 'BankAccount.unlinkDependencyMessage'.tr();
  static String get unlinkDependencyConsequence => 'BankAccount.unlinkDependencyConsequence'.tr();
  static String get unlinkAnyway => 'BankAccount.unlinkAnyway'.tr();
}
