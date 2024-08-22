import 'package:flutter/material.dart';
import 'package:fstapp/dataModels/OccasionModel.dart';
import 'package:fstapp/RouterService.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/pages/AdministrationPage.dart';
import 'package:fstapp/services/EventCreationHelper.dart';
import 'package:fstapp/services/ResponsiveService.dart';

class OccasionsScreen extends StatefulWidget {
  final int organizationId;

  OccasionsScreen({required this.organizationId});

  @override
  _OccasionsScreenState createState() => _OccasionsScreenState();
}

class _OccasionsScreenState extends State<OccasionsScreen> {
  List<OccasionModel> _occasions = [];

  @override
  void initState() {
    super.initState();
    _loadOccasions();
  }

  Future<void> _loadOccasions() async {
    var occasions = await DbUsers.getAllOccasions(widget.organizationId);
    setState(() {
      _occasions = occasions;
    });
  }

  void _addNewEvent() {
    EventCreationHelper.createNewEvent(context, widget.organizationId, _occasions, _loadOccasions);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  'Events',
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                ElevatedButton.icon(
                  onPressed: _addNewEvent,
                  icon: Icon(Icons.add),
                  label: Text('Add New Event').tr(),
                ),
              ],
            ),
            SizedBox(height: 16), // Add some space between the header and the grid
            Expanded(
              child: GridView.builder(
                shrinkWrap: true,
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: ResponsiveService.isDesktop(context) ? 3 : ResponsiveService.isTablet(context) ? 2 : 1, // Number of columns
                  crossAxisSpacing: 10,
                  mainAxisSpacing: 10,
                  childAspectRatio: 2, // Aspect ratio to maintain the general layout
                ),
                itemCount: _occasions.length,
                itemBuilder: (context, index) {
                  final occasion = _occasions[index];
                  return OccasionCard(
                    occasion: occasion,
                    onView: () {
                      RouterService.navigate(context, occasion.link!);
                    },
                    onEdit: () {
                      // Define what happens when the "Edit" button is pressed
                    },
                    onAdmin: () {
                      RouterService.navigate(context, "${occasion.link!}/${AdministrationPage.ROUTE}");
                    },
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class OccasionCard extends StatelessWidget {
  final OccasionModel occasion;
  final VoidCallback onView;
  final VoidCallback onEdit;
  final VoidCallback onAdmin;

  OccasionCard({
    required this.occasion,
    required this.onView,
    required this.onEdit,
    required this.onAdmin,
  });

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        return ConstrainedBox(
          constraints: BoxConstraints(
            minWidth: 300,
            minHeight: 150,
          ),
          child: Container(
            decoration: BoxDecoration(
              color: Colors.grey.shade300, // Slightly gray background color
              borderRadius: BorderRadius.circular(15.0), // Rounded corners
            ),
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Stack(
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      GestureDetector(
                        onTap: onView,
                        child: Text(
                          occasion.title ?? 'No Title',
                          style: TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                            color: Colors.black, // Black text color for contrast
                            decoration: TextDecoration.underline, // Underline the title to show it's a link
                          ),
                        ),
                      ),
                      SizedBox(height: 8),
                      Text(
                        '${DateFormat.yMMMd().format(occasion.startTime!)} - ${DateFormat.yMMMd().format(occasion.endTime!)}',
                        style: TextStyle(fontSize: 14, color: Colors.grey[700]), // Darker gray for the dates
                      ),
                      Spacer(),
                      Row(
                        children: [
                          TextButton.icon(
                            onPressed: onAdmin,
                            icon: Icon(Icons.admin_panel_settings, color: Colors.black), // Black icon for contrast
                            label: Text('Admin', style: TextStyle(color: Colors.black)).tr(),
                          ),
                          TextButton.icon(
                            onPressed: onEdit,
                            icon: Icon(Icons.settings, color: Colors.black), // Black icon for contrast
                            label: Text('Settings', style: TextStyle(color: Colors.black)).tr(),
                          ),
                        ],
                      ),
                    ],
                  ),
                  if (occasion.isOpen)
                    Positioned(
                      right: 0,
                      top: 0,
                      child: Container(
                        padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                        decoration: BoxDecoration(
                          color: Colors.green, // Green background for "Open"
                          borderRadius: BorderRadius.circular(12), // Rounded corners
                        ),
                        child: const Text(
                          'Open',
                          style: TextStyle(
                            color: Colors.white, // White text color for contrast
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                    ),
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}
