import 'package:easy_localization/easy_localization.dart';

class CommonStrings {
  // --- Common Actions ---
  static String get save => 'Common.save'.tr(); // "Save"
  static String get storno => 'Storno'.tr(); // "Storno"
  static String get delete => 'Common.delete'.tr(); // "Delete"
  static String get edit => 'Common.edit'.tr(); // "Edit"
  static String get ok => 'Ok'.tr(); // "Ok"
  static String get close => 'Close'.tr(); // "Close"
  static String get confirm => 'Confirm'.tr(); // "Confirm"
  static String get rename => 'Rename'.tr(); // "Rename"
  static String get addNew => 'AddNew'.tr(); // "Add new"
  static String get cancel => 'Cancel'.tr(); // "Cancel"
  static String get reset => 'Common.reset'.tr(); // "Reset"
  static String get search => 'Search'.tr(); // "Search"
  static String get back => 'Common.back'.tr(); // "Back"

  // --- Common Nouns & Labels ---
  static String get title => 'Title'.tr(); // "Title"
  static String get price => 'Price'.tr(); // "Price"
  static String get amount => 'Amount'.tr(); // "Amount" -- NEW
  static String get currency => 'Currency'.tr(); // "Currency" -- NEW
  static String get password => 'FeatureUser.password'.tr(); // "Password" (Moved to FeatureUser, but widely used? UserStrings has it too?)

  // --- Common Statuses & Feedback ---
  static String get saved => 'Saved'.tr(); // "Saved"
  static String get deleted => 'Deleted'.tr(); // "Deleted"
  static String get success => 'Common.success'.tr(); // "Success"
  static String get error => 'Common.error'.tr(); // Map "Error" getter to "An error occurred" or keep separate? I'll map to Common.error for now as it's the generic error string I have.
  static String get loading => 'Common.loading'.tr(); // "Loading..."
  static String get settings => 'Settings'.tr(); // "Settings"

  // --- Forms & Validation ---
  static String get fieldCannotBeEmpty => 'Common.fieldCannotBeEmpty'.tr(); // "Field cannot be empty"
  static String get invalidFormat => 'Common.invalidFormat'.tr(); // "Invalid format"
  static String get name => 'Name'.tr(); // "Name"
  static String get description => 'Description'.tr(); // "Description"
  static String get content => 'Content'.tr(); // "Content"
  static String get add => 'Add'.tr(); // "Add"
  static String get type => 'Type'.tr(); // "Type"
  static String get hide => 'Hide'.tr(); // "Hide"
  static String get place => 'Place'.tr(); // "Place"
  static String get users => 'Users'.tr(); // "Users"
  static String get events => 'Events'.tr(); // "Events"
  static String get start => 'Start'.tr(); // "Start"
  static String get end => 'End'.tr(); // "End"
  static String get cancelled => 'Cancelled'.tr(); // "Cancelled"
  static String get import => 'Import'.tr(); // "Import"
  static String get proceed => 'Proceed'.tr(); // "Proceed"
}