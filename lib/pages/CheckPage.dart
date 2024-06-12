import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/data/DataExtensions.dart';
import 'package:fstapp/data/DataService.dart';
import 'package:fstapp/data/RightsHelper.dart';
import 'package:fstapp/models/CompanionModel.dart';
import 'package:fstapp/models/EventModel.dart';
import 'package:fstapp/models/UserInfoModel.dart';
import 'package:fstapp/services/VibrateService.dart';
import 'package:mobile_scanner/mobile_scanner.dart';

enum ScanState { signedIn, notSignedIn, nothing }

class CheckPage extends StatefulWidget {
  static const ROUTE = "check";
  final int id;

  const CheckPage({required this.id, Key? key}) : super(key: key);

  @override
  _CheckPageState createState() => _CheckPageState();
}

class _CheckPageState extends State<CheckPage> {
  EventModel? _event;
  List<UserInfoModel>? _participants;
  List<UserInfoModel>? _filteredParticipants;
  UserInfoModel? _scannedUser;
  ScanState _scanState = ScanState.nothing;
  final TextEditingController _searchController = TextEditingController();

  DraggableScrollableController? draggableController =
      DraggableScrollableController();

  @override
  void initState() {
    super.initState();
    _searchController.addListener(_filterParticipants);
  }

  @override
  void dispose() {
    _mobileScannerController.dispose();
    _searchController.removeListener(_filterParticipants);
    _searchController.dispose();
    super.dispose();
  }

  @override
  Future<void> didChangeDependencies() async {
    super.didChangeDependencies();
    await loadData(widget.id);
  }

  Future<void> loadData(int eventId) async {
    if (!RightsHelper.isApprover()) {
      RouterService.goBackOrHome(context);
      return;
    }
    _event = await DataService.getEvent(eventId);
    List<UserInfoModel> participants =
        await DataService.getParticipantsPerEvent(eventId);

    // Map participants to their companion parents
    for (int i = 0; i < participants.length; i++) {
      var participant = participants[i];
      if (participant.companionParent != null) {
        UserInfoModel? parent = participants
            .firstWhereOrNull((p) => p.id! == participant.companionParent!.id!);
        if (parent != null) {
          parent.companions ??= [];
          parent.companions!.add(CompanionModel(
              id: participant.id!, name: participant.name!, eventIds: []));
        }
      }
    }
    _event!.currentParticipants = participants.length;
    _participants = participants;
    _filteredParticipants = _participants;
    setState(() {});
  }

  void _filterParticipants() {
    final query = _searchController.text.toLowerCase().withoutDiacriticalMarks;
    setState(() {
      _filteredParticipants = _participants?.where((participant) {
        final fullName = participant.toFullNameString().toLowerCase().withoutDiacriticalMarks;
        return fullName.contains(query);
      }).toList();
    });
  }

  Widget buildScannedUserDetails() {
    if (_scannedUser == null) {
      return Center(
        child: Padding(
            padding: const EdgeInsets.fromLTRB(0, 24, 0, 12),
            child: const Text(
                "Point the camera at the attendee's code for a entry verification.").tr()),
      );
    }

    IconData icon;
    if (_scanState == ScanState.signedIn) {
      icon = Icons.check_circle;
    } else if (_scanState == ScanState.notSignedIn) {
      icon = Icons.cancel;
    } else {
      return const SizedBox.shrink();
    }

    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Text(
                _scannedUser!.toFullNameString(),
                style: const TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(width: 5),
              Icon(icon, color: Colors.black),
            ],
          ),
          if (_scannedUser!.companionParent == null) ...[
            Text(_scannedUser!.email!),
            Text(UserInfoModel.sexToLocale(_scannedUser!.sex)),
            if (_scannedUser!.companions != null) ...[
              const SizedBox(height: 16),
              Text("${'Signed in companions'.tr()}:"),
              ..._scannedUser!.companions!.map((companion) => Row(
                    children: [
                      Text(companion.name,
                          style: const TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.bold,
                          )),
                      const SizedBox(width: 5),
                      const Icon(Icons.check_circle, color: Colors.black),
                    ],
                  )),
            ],
          ],
        ],
      ),
    );
  }

  final MobileScannerController _mobileScannerController =
      MobileScannerController(
          formats: [BarcodeFormat.qrCode],
          detectionSpeed: DetectionSpeed.noDuplicates);

  @override
  @override
  Widget build(BuildContext context) {
    const minChildSize = 0.25;
    const maxChildSize = 0.88;
    return Scaffold(
      backgroundColor: _scannedUser == null ? Colors.grey[200] : getResultColor(_scanState),
      body: SafeArea(
        child: Stack(
          children: [
            Column(
              children: [
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Row(
                    children: [
                      IconButton(
                        icon: const Icon(
                          Icons.arrow_back,
                          color: AppConfig.color1,
                        ),
                        onPressed: () {
                          RouterService.goBack(context);
                        },
                      ),
                      Expanded(
                        child: Text(
                          _event?.toString() ?? "",
                          style: const TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                            color: AppConfig.color1,
                          ),
                          textAlign: TextAlign.center,
                        ),
                      ),
                    ],
                  ),
                ),
                buildScannedUserDetails(), // Add this line
                Expanded(
                  child: MobileScanner(
                    fit: BoxFit.fitWidth,
                    controller: _mobileScannerController,
                    onDetect: (capture) async {
                      final List<Barcode> barcodes = capture.barcodes;
                      var id = barcodes.firstOrNull;
                      if (id == null) {
                        return;
                      }
                      debugPrint(id.rawValue);
                      await setupNewId(id.rawValue.toString());
                    },
                  ),
                ),
              ],
            ),
            ScrollConfiguration(
              behavior: ScrollConfiguration.of(context).copyWith(
                dragDevices: {
                  PointerDeviceKind.touch,
                  PointerDeviceKind.mouse,
                },
              ),
              child: DraggableScrollableSheet(
                initialChildSize: minChildSize,
                minChildSize: minChildSize,
                maxChildSize: maxChildSize,
                controller: draggableController,
                builder: (context, scrollController) {
                  return GestureDetector(
                    onVerticalDragUpdate: (details) {
                      double newSize = draggableController!.size -
                          details.primaryDelta! / context.size!.height;
                      draggableController!.jumpTo(newSize.clamp(minChildSize, maxChildSize));
                    },
                    onVerticalDragEnd: (details) {
                      var velocityDirection = (-1 * details.primaryVelocity!);
                        double nearestSize =
                            draggableController!.size * velocityDirection;
                        draggableController!.animateTo(
                            nearestSize.clamp(minChildSize, maxChildSize),
                            duration: const Duration(milliseconds: 200),
                            curve: Curves.easeInOut);
                    },
                    child: Container(
                      decoration: const BoxDecoration(
                        color: Colors.white,
                        borderRadius:
                            BorderRadius.vertical(top: Radius.circular(16)),
                      ),
                      child: Column(
                        children: [
                          Container(
                            height: 40,
                            width: double.infinity,
                            alignment: Alignment.center,
                            child: Container(
                              height: 6,
                              width: 60,
                              margin: const EdgeInsets.symmetric(vertical: 10),
                              decoration: BoxDecoration(
                                color: Colors.grey[300],
                                borderRadius: BorderRadius.circular(3),
                              ),
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: TextField(
                              controller: _searchController,
                              decoration: InputDecoration(
                                labelText: "Search Attendees".tr(),
                                border: const OutlineInputBorder(),
                                prefixIcon: const Icon(Icons.search),
                              ),
                            ),
                          ),
                          Expanded(
                            child: _filteredParticipants != null
                                ? ListView.builder(
                                    controller: scrollController,
                                    itemCount: _filteredParticipants!.length,
                                    itemBuilder: (context, index) {
                                      final participant =
                                          _filteredParticipants![index];
                                      return Padding(
                                        padding: const EdgeInsets.symmetric(
                                            horizontal: 10, vertical: 5),
                                        child: Container(
                                          decoration: BoxDecoration(
                                            color: Colors.grey[200],
                                            borderRadius:
                                                BorderRadius.circular(12),
                                          ),
                                          child: ListTile(
                                            title: Text(
                                              participant.toFullNameString(),
                                              style: const TextStyle(
                                                fontSize: 14,
                                                fontWeight: FontWeight.bold,
                                              ),
                                            ),
                                          ),
                                        ),
                                      );
                                    },
                                  )
                                : const Center(
                                    child: CircularProgressIndicator()),
                          ),
                        ],
                      ),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }

  Future<void> setupNewId(String newUserId) async {
    if (newUserId == _scannedUser?.id) {
      return;
    }

    _scannedUser = _participants?.singleWhereOrNull((p) => p.id == newUserId);
    if (_scannedUser != null) {
      _scanState = ScanState.signedIn;
      setState(() {});
      VibrateService.vibrateOk();
      return;
    }

    _scannedUser ??= await DataService.getUserInfo(newUserId);
    if (_scannedUser != null) {
      _scanState = ScanState.notSignedIn;
      VibrateService.vibrateNotOk();
      setState(() {});
      return;
    }
    _scanState = ScanState.nothing;
  }

  Color getResultColor(ScanState scannedState) {
    switch (scannedState) {
      case ScanState.signedIn:
        return Colors.greenAccent;
      case ScanState.nothing:
        return Colors.blueAccent;
      case ScanState.notSignedIn:
        break;
    }
    return Colors.redAccent;
  }
}
