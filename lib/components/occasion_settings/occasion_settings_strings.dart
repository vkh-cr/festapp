import 'package:easy_localization/easy_localization.dart';

class OccasionSettingsStrings {
  // Form Fields
  static String get title => 'OccasionSettings.title'.tr(); // "Title"
  static String get titleIsRequired => 'OccasionSettings.titleIsRequired'.tr(); // "Title is required"
  static String get introImage => 'OccasionSettings.introImage'.tr(); // "Intro Image"
  static String imageRatioHint(String width, String height) => 'OccasionSettings.imageRatioHint'.tr(
    namedArgs: {
      "width": width,
      "height": height,
    },
  ); // "Image with ratio {width} : {height}"
  static String get description => 'OccasionSettings.description'.tr(); // "Description"
  static String get editContent => 'OccasionSettings.editContent'.tr(); // "Edit content"

  // Toggles & Help
  static String get public => 'OccasionSettings.public'.tr(); // "Public"
  static String get publicHelp => 'OccasionSettings.publicHelp'.tr(); // "Determines whether event details (schedule, info, etc.) are available to the public."
  static String get hide => 'OccasionSettings.hide'.tr(); // "Hide"
  static String get hideHelp => 'OccasionSettings.hideHelp'.tr(); // "This determines whether this event is hidden from list views."

  static String get promoted => 'OccasionSettings.promoted'.tr(); // "Promoted"
  static String get promotedHelp => 'OccasionSettings.promotedHelp'.tr(); // "Promote this event to make it stand out in lists or on the homepage."

  // Advanced Settings
  static String get advancedSettings => 'OccasionSettings.advancedSettings'.tr(); // "Advanced Settings"
  static String get link => 'OccasionSettings.link'.tr(); // "Link"
  static String get linkIsRequired => 'OccasionSettings.linkIsRequired'.tr(); // "Link is required"
  static String get timezone => 'OccasionSettings.timezone'.tr(); // "Timezone"
  static String get timezoneIsRequired => 'OccasionSettings.timezoneIsRequired'.tr(); // "Timezone is required"
  static String get invalidTimezone => 'OccasionSettings.invalidTimezone'.tr(); // "Please select or type a valid timezone"
  static String get timezonesLoading => 'OccasionSettings.timezonesLoading'.tr(); // "Timezones loading or unavailable..."

  // Email Settings
  static String get labelReplyToEmail => 'OccasionSettings.labelReplyToEmail'.tr(); // "Reply-To Email"
  static String get helperReplyToEmail => 'OccasionSettings.helperReplyToEmail'.tr(); // "Replies from customers to automated emails (confirmations, reminders) will be sent to this address."
  static String get validationEmailInvalid => 'OccasionSettings.validationEmailInvalid'.tr(); // "Please enter a valid email address."

  // Features Section
  static String get features => 'OccasionSettings.features'.tr(); // "Features"
  static String get searchFeatures => 'OccasionSettings.searchFeatures'.tr(); // "Search features"
  static String get enabledFeatures => 'OccasionSettings.enabledFeatures'.tr(); // "Enabled Features"
  static String get otherFeatures => 'OccasionSettings.otherFeatures'.tr(); // "Other Features"
  static String get noFeaturesFound => 'OccasionSettings.noFeaturesFound'.tr(); // "No features match your search."

  // Dialogs & Toasts
  static String get deleteEvent => 'OccasionSettings.deleteEvent'.tr(); // "Delete Event"
  static String get deleteEventConfirmation => 'OccasionSettings.deleteEventConfirmation'.tr(); // "Are you sure you want to delete this event? All the event data will be lost."

  static String get cannotDeleteWithOrders => 'OccasionSettings.cannotDeleteWithOrders'.tr(); // "Cannot delete event because it contains orders (including storno)."

  static String get confirmRemoval => 'OccasionSettings.confirmRemoval'.tr(); // "Confirm removal"
  static String get deleteImageConfirmation => 'OccasionSettings.deleteImageConfirmation'.tr(); // "Are you sure you want to delete this image?"
  static String get imageRemovedSuccess => 'OccasionSettings.imageRemovedSuccess'.tr(); // "Image removed successfully."
  static String get imageRemovedFail => 'OccasionSettings.imageRemovedFail'.tr(); // "Failed to remove image."
  static String get fileUploadedSuccess => 'OccasionSettings.fileUploadedSuccess'.tr(); // "File uploaded successfully."
  static String get failedToUploadImage => 'OccasionSettings.failedToUploadImage'.tr(); // "Failed to upload image."
}