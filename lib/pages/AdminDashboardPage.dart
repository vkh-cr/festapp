import 'package:flutter/material.dart';
import 'package:fstapp/dataModels/OrganizationModel.dart';
import 'package:fstapp/dataServices/DataService.dart';
import 'package:fstapp/pages/AdminDashboard/OccasionScreen.dart';
import 'package:fstapp/pages/AdminDashboard/UsersScreen.dart';
import 'package:fstapp/services/ResponsiveService.dart';
import 'package:package_info_plus/package_info_plus.dart';

class AdminDashboardPage extends StatefulWidget {
  static const ROUTE = "adminDashboard";
  const AdminDashboardPage({super.key});

  @override
  _AdminDashboardPageState createState() => _AdminDashboardPageState();
}

class _AdminDashboardPageState extends State<AdminDashboardPage> {
  OrganizationModel? _currentOrganization;
  Widget _currentScreen = Center(child: Text("Select an option from the menu"));
  String _currentMenu = "";  // Track the current menu

  void _setCurrentScreen(Widget screen, String menu) {
    setState(() {
      _currentScreen = screen;
      _currentMenu = menu;
    });
  }

  @override
  void initState() {
    super.initState();
    _loadOrganization();
  }

  Future<void> _loadOrganization() async {
    _currentOrganization = await DataService.getCurrentOrganization();
    if (_currentOrganization != null) {
      _setCurrentScreen(OccasionsScreen(organizationId: _currentOrganization!.id!), "Occasions");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: SideMenu(
        onMenuItemSelected: _setCurrentScreen,
        organization: _currentOrganization,
        currentMenu: _currentMenu,
      ),
      body: SafeArea(
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            if (ResponsiveService.isDesktop(context))
              Expanded(
                flex: 1,
                child: SideMenu(
                  onMenuItemSelected: _setCurrentScreen,
                  organization: _currentOrganization,
                  currentMenu: _currentMenu,
                ),
              )
            else
              SizedBox(
                width: 50,
                child: SideMenu(
                  onMenuItemSelected: _setCurrentScreen,
                  organization: _currentOrganization,
                  currentMenu: _currentMenu,
                ),
              ),
            Expanded(
              flex: 5,
              child: _currentScreen,
            ),
          ],
        ),
      ),
    );
  }
}

class SideMenu extends StatefulWidget {
  final Function(Widget, String) onMenuItemSelected;
  final OrganizationModel? organization;
  final String currentMenu;

  SideMenu({required this.onMenuItemSelected, required this.organization, required this.currentMenu});

  @override
  _SideMenuState createState() => _SideMenuState();
}

class _SideMenuState extends State<SideMenu> {
  String _versionInfo = "";

  @override
  void initState() {
    super.initState();
    _loadVersionInfo();
  }

  Future<void> _loadVersionInfo() async {
    PackageInfo packageInfo = await PackageInfo.fromPlatform();
    setState(() {
      _versionInfo = "${packageInfo.appName} ${packageInfo.version}+${packageInfo.buildNumber}";
    });
  }

  @override
  Widget build(BuildContext context) {
    bool isDesktop = ResponsiveService.isDesktop(context);

    return Drawer(
      child: Column(
        children: [
          if (isDesktop)
            DrawerHeader(
              padding: EdgeInsets.all(12),
              child: Text(widget.organization?.title ?? ""),
            ),
          Expanded(
            child: ListView(
              padding: EdgeInsets.zero,
              children: [
                _buildMenuItem(
                  icon: Icons.calendar_month,
                  label: "Occasions",
                  isSelected: widget.currentMenu == "Occasions",
                  onTap: () {
                    if (widget.organization != null) {
                      widget.onMenuItemSelected(
                          OccasionsScreen(organizationId: widget.organization!.id!), "Occasions");
                    }
                  },
                ),
                _buildMenuItem(
                  icon: Icons.people,
                  label: "Users",
                  isSelected: widget.currentMenu == "Users",
                  onTap: () {
                    widget.onMenuItemSelected(UsersScreen(), "Users");
                  },
                ),
              ],
            ),
          ),
          if (isDesktop)
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text(
                _versionInfo,
                style: TextStyle(fontSize: 12, color: Colors.grey),
              ),
            ),
        ],
      ),
    );
  }

  Widget _buildMenuItem({
    required IconData icon,
    required String label,
    required bool isSelected,
    required VoidCallback onTap,
  }) {
    return ListTile(
      contentPadding: EdgeInsets.only(left: 8.0, right: 4.0), // Maintain left padding, reduce right padding
      leading: Icon(icon, size: 24),
      title: ResponsiveService.isDesktop(context)
          ? Text(
        label,
        style: TextStyle(
          fontSize: 14,
          fontWeight: isSelected ? FontWeight.bold : FontWeight.normal, // Make text bold when selected
        ),
      )
          : null,
      selected: isSelected,
      selectedTileColor: Colors.grey.shade300, // Highlight selected item
      onTap: onTap,
    );
  }
}
