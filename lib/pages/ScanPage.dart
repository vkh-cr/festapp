import 'package:auto_route/auto_route.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataModelsEshop/TicketModel.dart';
import 'package:fstapp/dataServices/DataExtensions.dart';
import 'package:fstapp/dataServices/DbEshop.dart';
import 'package:fstapp/dataServices/DbEvents.dart';
import 'package:fstapp/dataServices/DbUsers.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataModels/CompanionModel.dart';
import 'package:fstapp/dataModels/EventModel.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/services/VibrateService.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:mobile_scanner/mobile_scanner.dart';

enum ScanState { signedIn, notSignedIn, nothing }

@RoutePage()
class ScanPage extends StatefulWidget {
  static const ROUTE = "scan";
   int? id;

   ScanPage({@pathParam this.id, Key? key}) : super(key: key);

  @override
  _ScanPageState createState() => _ScanPageState();
}

class _ScanPageState extends State<ScanPage> {
  EventModel? _event;
  TicketModel? _scannedObject;
  ScanState _scanState = ScanState.nothing;
  final TextEditingController _searchController = TextEditingController();

  @override
  void dispose() {
    _mobileScannerController.dispose();
    _searchController.dispose();
    super.dispose();
  }

  @override
  Future<void> didChangeDependencies() async {
    super.didChangeDependencies();

    if (kIsWeb) {
      MobileScannerPlatform.instance.setBarcodeLibraryScriptUrl("https://unpkg.com/@zxing/library@0.21.3");
    }
    //await loadData(widget.id);
  }

  Future<void> loadData(int eventId) async {
    setState(() {});
  }


  Widget buildScannedUserDetails() {
    if (_scannedObject == null) {
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
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Row(
            children: [
              Text(
      ((_scannedObject!.relatedProducts != null ? _scannedObject!.relatedProducts!.map((p)=>p.toBasicString()).join(" | ") : "") + "\n" +
      _scannedObject!.relatedOrder!.toCustomerData() + "   " + _scannedObject!.ticketSymbol.toString() + "   "+ _scannedObject!.state!),
                style: const TextStyle(
                  color: Colors.black,
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
                maxLines: 2,
              ),
              SizedBox.fromSize(size: Size(30,5)),
              const SizedBox(width: 5),
              Icon(icon, color: Colors.black),
            ],
          ),
        ],
      ),
    );
  }

  final MobileScannerController _mobileScannerController =
  MobileScannerController(
      formats: [BarcodeFormat.qrCode],
      detectionSpeed: DetectionSpeed.noDuplicates);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _scannedObject == null ? ThemeConfig.grey200(context) : getResultColor(_scanState),
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
                        icon: Icon(
                          Icons.arrow_back,
                          color: ThemeConfig.seed1,
                        ),
                        onPressed: () {
                          RouterService.goBack(context);
                        },
                      ),
                      Expanded(
                        child: Text(
                          _event?.toString() ?? "",
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                            color: ThemeConfig.seed1,
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
          ],
        ),
      ),
    );
  }

  Future<void> setupNewId(String scannedId) async {
    // if (scannedId == _scannedObject?.id) {
    //   return;
    // }

    // _scannedUser = _participants?.singleWhereOrNull((p) => p.id == newUserId);
    // if (_scannedUser != null) {
    //   _scanState = ScanState.signedIn;
    //   setState(() {});
    //   VibrateService.vibrateOk();
    //   return;
    // }

    _scannedObject ??= await DbEshop.getTicket(scannedId);
    if (_scannedObject != null && (_scannedObject!.state == "sent" || _scannedObject!.state == "paid")) {
      _scanState = ScanState.signedIn;
      setState(() {});
      VibrateService.vibrateOk();
      return;
    }
    else if (_scannedObject != null) {
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
