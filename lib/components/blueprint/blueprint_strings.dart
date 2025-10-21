import 'package:easy_localization/easy_localization.dart';

class BlueprintStrings {
  // --- BlueprintTab (General) ---
  static String get edit => 'Edit'.tr(); // "Edit"
  static String get save => 'Save'.tr(); // "Save"
  static String get storno => 'Storno'.tr(); // "Storno"
  static String get saved => 'Saved'.tr(); // "Saved"
  static String get delete => 'Delete'.tr(); // "Delete"
  static String get rename => 'Rename'.tr(); // "Rename"
  static String get dialogOk => 'Ok'.tr(); // "Ok"

  // --- Left Panel (Legend) ---
  static String get legendInstruction => 'FeatureBlueprint.legendInstruction'.tr(); // "Click an option in the legend to add seats."
  static String get legendBlackArea => 'FeatureBlueprint.legendBlackArea'.tr(); // "Black area"
  static String get legendAvailable => 'FeatureBlueprint.legendAvailable'.tr(); // "Available"
  static String get legendEmpty => 'FeatureBlueprint.legendEmpty'.tr(); // "Empty"
  static String get legendUsed => 'FeatureBlueprint.legendUsed'.tr(); // "Used"
  static String get legendOccupied => 'FeatureBlueprint.legendOccupied'.tr(); // "Occupied"
  static String get legendSelected => 'FeatureBlueprint.legendSelected'.tr(); // "Selected"

  // --- Main Content (Dimension & Background Controls) ---
  static String get width => 'FeatureBlueprint.width'.tr(); // "Width"
  static String get height => 'FeatureBlueprint.height'.tr(); // "Height"
  static String get background => 'FeatureBlueprint.background'.tr(); // "Background"
  static String get changeBackground => 'FeatureBlueprint.changeBackground'.tr(); // "Change background"
  static String get uploadSVG => 'FeatureBlueprint.uploadSVG'.tr(); // "Upload SVG"
  static String get uploadImage => 'FeatureBlueprint.uploadImage'.tr(); // "Upload Image (PNG recommended)"
  static String get removeBackground => 'FeatureBlueprint.removeBackground'.tr(); // "Remove background"

  // --- Right Panel (Groups) ---
  static String get groupsTitle => 'FeatureBlueprint.groupsTitle'.tr(); // "Groups (Tables):"
  static String get addNew => 'FeatureBlueprint.addNew'.tr(); // "Add new"

  // --- Dialogs ---
  static String get changeTitle => 'FeatureBlueprint.changeTitle'.tr(); // "Change title"
  static String get dialogGroupNumber => 'FeatureBlueprint.dialogGroupNumber'.tr(); // "Group number"
  static String get dialogTitle => 'FeatureBlueprint.dialogTitle'.tr(); // "Title"
  static String get dialogImportSvgTitle => 'FeatureBlueprint.dialogImportSvgTitle'.tr(); // "Import SVG background"
  static String get dialogImportImageTitle => 'FeatureBlueprint.dialogImportImageTitle'.tr(); // "Import image background"
  static String get dialogConfirmRemoveBackgroundTitle => 'FeatureBlueprint.dialogConfirmRemoveBackgroundTitle'.tr(); // "Remove background"
  static String get dialogConfirmRemoveBackgroundContent => 'FeatureBlueprint.dialogConfirmRemoveBackgroundContent'.tr(); // "Are you sure you want to remove the background?"

  // --- Toasts & Messages ---
  static String get toastOccupiedCannotBeChanged => 'FeatureBlueprint.toastOccupiedCannotBeChanged'.tr(); // "Places that are occupied cannot be changed."
  static String get toastSelectGroupFirst => 'FeatureBlueprint.toastSelectGroupFirst'.tr(); // "First, select or create a group to add a spot (on the right)."
  static String get toastSpotAdded => 'FeatureBlueprint.toastSpotAdded'.tr(); // "Spot added:"
  static String get toastAreaRemoved => 'FeatureBlueprint.toastAreaRemoved'.tr(); // "Area removed."
  static String get toastSpotRemoved => 'FeatureBlueprint.toastSpotRemoved'.tr(); // "Spot removed."
  static String get toastInvalidSvg => 'FeatureBlueprint.toastInvalidSvg'.tr(); // "The selected file is not a valid SVG."
  static String get toastSvgUploadSuccess => 'FeatureBlueprint.toastSvgUploadSuccess'.tr(); // "SVG background uploaded successfully."
  static String get toastSvgReadFail => 'FeatureBlueprint.toastSvgReadFail'.tr(); // "Failed to read SVG file."
  static String get toastImageUploadSuccess => 'FeatureBlueprint.toastImageUploadSuccess'.tr(); // "Image background uploaded successfully."
  static String get toastImageUploadFail => 'FeatureBlueprint.toastImageUploadFail'.tr(); // "Failed to upload image."
  static String get toastBackgroundRemoved => 'FeatureBlueprint.toastBackgroundRemoved'.tr(); // "Background removed."
}