import 'package:easy_localization/easy_localization.dart';

class InventoryStrings {
  // General / Shared
  static String get edit => 'Inventory.edit'.tr(); // "Edit"
  static String get remove => 'Inventory.remove'.tr(); // "Remove"
  static String get restore => 'Inventory.restore'.tr(); // "Restore"
  static String get validationTitleEmpty => 'Inventory.validationTitleEmpty'.tr(); // "Title cannot be empty"
  static String get poolTitleLabel => 'Inventory.poolTitleLabel'.tr(); // "Capacity Group Title"

  // --- Models ---
  static String resourceDefaultTitle(String id) => 'Inventory.resourceDefaultTitle'.tr(namedArgs: {'id': id}); // "Room {id}"
  static String get contextDefaultTitle => 'Inventory.contextDefaultTitle'.tr(); // "Slot"
  static String get poolDefaultTitle => 'Inventory.poolDefaultTitle'.tr(); // "Capacity Group"

  // InventoryPoolsTab (Main List View)
  static String get tabTitle => 'Inventory.tabTitle'.tr(); // "Capacity Groups"
  static String get tabCreateNewGroup => 'Inventory.tabCreateNewGroup'.tr(); // "Create New Capacity Group"
  static String get tabErrorRefresh => 'Inventory.tabErrorRefresh'.tr(); // "Error refreshing data. Please try again."
  static String get tabUnnamedGroup => 'Inventory.tabUnnamedGroup'.tr(); // "Unnamed Group"
  static String get tabNoData => 'Inventory.tabNoData'.tr(); // "No data found for this occasion."

  // InventoryPoolCard
  static String get cardUnnamedPool => 'Inventory.cardUnnamedPool'.tr(); // "Unnamed Capacity Group"
  static String get cardStatSellable => 'Inventory.cardStatSellable'.tr(); // "Sellable"
  static String get cardStatDynamic => 'Inventory.cardStatDynamic'.tr(); // "Dynamic"
  static String get cardStatSlotSize => 'Inventory.cardStatSlotSize'.tr(); // "Slot Size"

  // InventoryPoolDetailView (Tabs)
  static String get detailTabOccupancy => 'Inventory.detailTabMatrix'.tr(); // "Occupancy"
  static String get detailTabRooms => 'Inventory.detailTabResources'.tr(); // "Rooms"
  static String get detailTabSettings => 'Inventory.detailTabSettings'.tr(); // "Settings"

  // InventoryPoolCreationHelper (Dialog)
  static String get creationDialogNewPoolTitle => 'Inventory.creationDialogNewPoolTitle'.tr(); // "New Capacity Group"
  static String get creationDialogTitle => 'Inventory.creationDialogTitle'.tr(); // "Create New Capacity Group"
  static String get creationDialogErrorDefault => 'Inventory.creationDialogErrorDefault'.tr(); // "Failed to create capacity group."
  static String get creationDialogSuccess => 'Inventory.creationDialogSuccess'.tr(); // "Capacity group created successfully."

  // ResourceEditorView
  static String get gridId => 'Inventory.gridId'.tr(); // "ID"
  static String get resourceEditorTitle => 'Inventory.resourceEditorTitle'.tr(); // "Title"
  static String get resourceEditorCapacity => 'Inventory.resourceEditorCapacity'.tr(); // "Capacity"

  // InventoryPoolSettingsView
  static String get settingsErrorLoad => 'Inventory.settingsErrorLoad'.tr(); // "Error loading capacity group settings."
  static String get settingsConfirmDeletionTitle => 'Inventory.settingsConfirmDeletionTitle'.tr(); // "Confirm Deletion"
  static String settingsConfirmContextDeletionContent(int count) => 'Inventory.settingsConfirmContextDeletionContent'.tr(namedArgs: {'count': count.toString()}); // "You are about to delete {count} slot(s). This will also remove any associated unreserved spots. This action cannot be undone. Are you sure you want to proceed?"
  static String get settingsErrorSave => 'Inventory.settingsErrorSave'.tr(); // "Error saving settings."
  static String get settingsSuccessSave => 'Inventory.settingsSuccessSave'.tr(); // "Settings saved successfully."
  static String get settingsDeletePoolButton => 'Inventory.settingsDeletePoolButton'.tr(); // "Delete Capacity Group"
  static String get settingsConfirmPoolDeletionContent => 'Inventory.settingsConfirmPoolDeletionContent'.tr(); // "Are you sure you want to delete this capacity group and all its related data? This action cannot be undone."
  static String get settingsErrorDelete => 'Inventory.settingsErrorDelete'.tr(); // "Error deleting capacity group."
  static String get settingsSuccessDelete => 'Inventory.settingsSuccessDelete'.tr(); // "Capacity group deleted successfully."
  static String get settingsErrorCouldNotLoad => 'Inventory.settingsErrorCouldNotLoad'.tr(); // "Could not load capacity group settings."
  static String settingsConfigureTitle(String poolTitle) => 'Inventory.settingsConfigureTitle'.tr(namedArgs: {'poolTitle': poolTitle}); // "Configure '{poolTitle}'"
  static String get settingsPoolSettingsSectionTitle => 'Inventory.settingsPoolSettingsSectionTitle'.tr(); // "Capacity Group Settings"
  static String get settingsSellableCapacityLabel => 'Inventory.settingsSellableCapacityLabel'.tr(); // "Sellable Capacity (optional)"
  static String get settingsSellableCapacityHint => 'Inventory.settingsSellableCapacityHint'.tr(); // "Leave empty for dynamic capacity"
  static String get settingsAutoAssignmentLabel => 'Inventory.settingsAutoAssignmentLabel'.tr(); // "Automatic room assignment"
  static String get settingsAutoAssignmentSubtitle => 'Inventory.settingsAutoAssignmentSubtitle'.tr(); // "When enabled, new orders are automatically assigned to rooms. Disable this if you need to manually assign orders to rooms."
  static String get settingsContextsSectionTitle => 'Inventory.settingsContextsSectionTitle'.tr(); // "Slots"
  static String get settingsAddContextTooltip => 'Inventory.settingsAddContextTooltip'.tr(); // "Add Slot"
  static String get settingsNoContexts => 'Inventory.settingsNoContexts'.tr(); // "No active slots defined. Add one to manage rooms by date."
  static String get settingsMarkedForDeletion => 'Inventory.settingsMarkedForDeletion'.tr(); // "Marked for Deletion"
  static String get settingsSaveChanges => 'Inventory.settingsSaveChanges'.tr(); // "Save Changes"

  // Context Edit Dialog (within Settings View)
  static String get contextDialogAddTitle => 'Inventory.contextDialogAddTitle'.tr(); // "Add Slot"
  static String get contextDialogEditTitle => 'Inventory.contextDialogEditTitle'.tr(); // "Edit Slot"
  static String get contextDialogTitleLabel => 'Inventory.contextDialogTitleLabel'.tr(); // "Slot Title"
  static String get contextDialogTitleHint => 'Inventory.contextDialogTitleHint'.tr(); // "E.g., 'Main Event'"
  static String get contextDialogDateLabel => 'Inventory.contextDialogDateLabel'.tr(); // "Date"
  static String get contextDialogValidationError => 'Inventory.contextDialogValidationError'.tr(); // "Either a title or a date must be set."

  // SpotManagementView (Matrix)
  static String get spotManagementNoData => 'Inventory.spotManagementNoData'.tr(); // "No data available for this capacity group."

  // SpotManagementColumns
  static String get spotManagementAssign => 'Inventory.spotManagementAssign'.tr(); // "Assign"
  static String get spotManagementResource => 'Inventory.spotManagementResource'.tr(); // "Room"

  // SpotSearchDialog
  static String searchDialogTitle(String columnTitle) => 'Inventory.searchDialogTitle'.tr(namedArgs: {'columnTitle': columnTitle}); // "Assign to: {columnTitle}"
  static String get searchDialogHint => 'Inventory.searchDialogHint'.tr(); // "Search..."
  static String get searchDialogUnassign => 'Inventory.searchDialogUnassign'.tr(); // "-- Unassign --"

  // InventoryInclusionRenderer
  static String inclusionManageTitle(String productTitle) => 'Inventory.inclusionManageTitle'.tr(namedArgs: {'productTitle': productTitle}); // "Manage Inventory: {productTitle}"
  static String get inclusionManageTooltip => 'Inventory.inclusionManageTooltip'.tr(); // "Manage Inventory"
  static String get inclusionSearchHint => 'Inventory.inclusionSearchHint'.tr(); // "Search slot..."
  static String get included => 'Inventory.included'.tr(); // "Included"
}
