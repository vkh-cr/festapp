import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/_shared/occasion_settings_tab.dart';
import 'package:fstapp/components/activities/activities_content.dart';
import 'package:fstapp/components/features/features_strings.dart';
import 'package:fstapp/components/eshop/orders_strings.dart';
import 'package:fstapp/components/inventory/views/inventory_pools_tab.dart';
import 'package:fstapp/components/inventory/views/inventory_strings.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/eshop/blueprint_editor_tab.dart';
import 'package:fstapp/components/email_templates/views/email_templates_tab.dart';
import 'package:fstapp/pages/form/pages/forms_tab.dart';
import 'package:fstapp/components/eshop/orders_tab.dart';
import 'package:fstapp/components/eshop/report_tab.dart';
import 'package:fstapp/components/eshop/tickets_tab.dart';
import 'package:fstapp/pages/occasionAdmin/game_tab.dart';
import 'package:fstapp/pages/occasionAdmin/information_tab.dart';
import 'package:fstapp/pages/occasionAdmin/places_tab.dart';
import 'package:fstapp/pages/occasionAdmin/schedule_tab.dart';
import 'package:fstapp/pages/occasionAdmin/service_tab.dart';
import 'package:fstapp/pages/occasionAdmin/user_groups_tab.dart';
import 'package:fstapp/pages/occasionAdmin/users_tab.dart';

import '../eshop/products_tab.dart';

class AdminTabDefinition {
  final String label;
  final IconData icon;
  final Widget widget;
  final bool isEnabled;

  AdminTabDefinition({
    required this.label,
    required this.icon,
    required this.widget,
    this.isEnabled = true, // Defaults to true, so all tabs are enabled unless specified otherwise
  });

  // Tab labels as static const strings.
  static const String info = "Info";
  static const String events = "Events";
  static const String places = "Places";
  static const String groups = "Groups";
  static const String service = "Service";
  static const String users = "Users";
  static const String game = "Game";
  static const String inventoryPools = "Inventory pools";

  static const String form = "Form";
  static const String blueprint = "Blueprint";
  static const String tickets = "Tickets";
  static const String orders = "Orders";
  static const String products = "Products";
  static const String report = "Report";
  static const String emailTemplates = "Email Templates";
  static const String settings = "Settings";
  static const String volunteers = "volunteers";

  // Available tabs defined in a dictionary.
  // No changes are needed here because isEnabled defaults to true.
  // You can now conditionally set isEnabled: false for any tab.
  // For example: isEnabled: RightsService.canSeeGameTab()
  static Map<String, AdminTabDefinition> get availableTabs => {
    info: AdminTabDefinition(
        label: "Info".tr(), icon: Icons.info, widget: InformationTab()),
    events: AdminTabDefinition(
        label: "Schedule".tr(),
        icon: Icons.calendar_month,
        widget: ScheduleTab()),
    places: AdminTabDefinition(
        label: "Places".tr(),
        icon: Icons.pin_drop,
        widget: PlacesTab()),
    groups: AdminTabDefinition(
        label: "Groups".tr(),
        icon: Icons.groups,
        widget: UserGroupsTab()),
    service: AdminTabDefinition(
        label: "Service".tr(),
        icon: Icons.food_bank,
        widget: ServiceTab()),
    // Added new tab for Inclusion Types
    inventoryPools: AdminTabDefinition(
        label: InventoryStrings.tabTitle,
        icon: Icons.view_module_outlined,
        widget: InventoryPoolsTab()),
    volunteers: AdminTabDefinition(
        label: "Volunteers".tr(),
        icon: Icons.view_timeline,
        widget: ActivitiesContent(occasionId: RightsService.currentOccasionId()!)),
    users: AdminTabDefinition(
        label: "Users".tr(),
        icon: Icons.people,
        widget: UsersTab()),
    game: AdminTabDefinition(
        label: "Game".tr(),
        icon: Icons.gamepad,
        widget: GameTab()),
    form: AdminTabDefinition(
        label: FeaturesStrings.formsTitle, icon: Icons.list, widget: FormsTab()),
    blueprint: AdminTabDefinition(
        label: "Blueprint".tr(),
        icon: Icons.grid_on,
        widget: BlueprintTab()),
    tickets: AdminTabDefinition(
        label: OrdersStrings.itemsPlural,
        icon: Icons.local_activity,
        widget: TicketsTab()),
    orders: AdminTabDefinition(
        label: "Orders".tr(),
        icon: Icons.shopping_cart,
        widget: OrdersTab()),
    products: AdminTabDefinition(
        label: "Products".tr(),
        icon: Icons.category,
        widget: ProductsTab()),
    report: AdminTabDefinition(
        label: "Report".tr(),
        icon: Icons.stacked_bar_chart,
        widget: ReportTab()),
    emailTemplates: AdminTabDefinition(
        label: "Email Templates".tr(),
        icon: Icons.email,
        widget: EmailTemplatesTab()),
    settings: AdminTabDefinition(
        isEnabled: RightsService.isUnitEditor(),
        label: "Settings".tr(),
        icon: Icons.settings,
        widget: OccasionSettingsTab()),
  };
}