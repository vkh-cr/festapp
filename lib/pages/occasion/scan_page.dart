import 'package:auto_route/auto_route.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/data_models_eshop/order_model.dart';
import 'package:fstapp/data_models_eshop/ticket_model.dart';
import 'package:fstapp/data_services_eshop/db_eshop.dart';
import 'package:fstapp/data_models/event_model.dart';
import 'package:fstapp/data_services_eshop/db_tickets.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/vibrate_service.dart';
import 'package:fstapp/theme_config.dart';
import 'package:mobile_scanner/mobile_scanner.dart';

enum ScanState { valid, invalid, used, nothing }

@RoutePage()
class ScanPage extends StatefulWidget {
  static const ROUTE = "scan";

  String? scanCode;
  ScanPage({@pathParam this.scanCode, super.key});

  @override
  _ScanPageState createState() => _ScanPageState();
}

class _ScanPageState extends State<ScanPage> {
  EventModel? _event;
  TicketModel? _scannedObject;
  ScanState _scanState = ScanState.nothing;
  final TextEditingController _searchController = TextEditingController();

  // To prevent multiple scans
  String? rightNowScanned;

  final MobileScannerController _mobileScannerController = MobileScannerController(
    formats: [BarcodeFormat.qrCode],
    detectionSpeed: DetectionSpeed.noDuplicates,
  );

  @override
  void dispose() {
    _mobileScannerController.dispose();
    _searchController.dispose();
    super.dispose();
  }

  @override
  Future<void> didChangeDependencies() async {
    super.didChangeDependencies();
    if (widget.scanCode == null && context.routeData.hasPendingChildren) {
      widget.scanCode = context.routeData.pendingChildren[0].params.getString("scanCode");
    }

    if (kIsWeb) {
      MobileScannerPlatform.instance.setBarcodeLibraryScriptUrl(
          "https://unpkg.com/@zxing/library@0.21.3");
    }
    print(widget.scanCode);

    checkForCode();
  }

  Future<void> checkForCode() async {
    await Future.delayed(Duration(milliseconds: 500));
    if(widget.scanCode == null) {
      String? inputScanCode = await DialogHelper.showInputDialog(
        context: context,
        dialogTitle: "Enter Scan Code".tr(),
        labelText: "Scan Code".tr(),
      );
      if (inputScanCode != null && inputScanCode.isNotEmpty) {
        widget.scanCode = inputScanCode;
      }
    }
  }

  Widget buildScannedUserDetails() {
    if (_scannedObject == null) {
      return Center(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(0, 24, 0, 12),
          child: const Text(
              "Point the camera at the attendee's code for an entry verification.")
              .tr(),
        ),
      );
    }

    IconData icon;
    if (_scanState == ScanState.valid) {
      icon = Icons.check_circle;
    } else if (_scanState == ScanState.invalid) {
      icon = Icons.cancel;
    } else if (_scanState == ScanState.used) {
      icon = Icons.info; // You can choose an appropriate icon for 'used'
    } else {
      return const SizedBox.shrink();
    }

    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        children: [
          // Center the customer info
          Center(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                // Display related products in separate rows
                if (_scannedObject!.relatedProducts != null &&
                    _scannedObject!.relatedProducts!.isNotEmpty)
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: _scannedObject!.relatedProducts!
                        .map((product) => Padding(
                      padding: const EdgeInsets.symmetric(vertical: 2.0),
                      child: Text(
                        product.toBasicString(),
                        style: const TextStyle(
                          fontSize: 16,
                          color: Colors.black,
                        ),
                      ),
                    ))
                        .toList(),
                  ),
                const SizedBox(height: 8),
                // Display customer data, ticket symbol, and state
                Text(
                  "${_scannedObject!.relatedOrder!.toCustomerData()}   ${_scannedObject!.ticketSymbol}   ${_scannedObject!.state!}",
                  style: const TextStyle(
                    color: Colors.black,
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                  textAlign: TextAlign.center,
                ),
              ],
            ),
          ),
          const SizedBox(height: 8),
          // Display the icon indicating scan state
          Icon(icon, color: Colors.black, size: 30),
          const SizedBox(height: 16),
          // If scan state is valid, show the "Confirm Ticket" button
          if (_scanState == ScanState.valid)
            ElevatedButton(
              onPressed: _confirmTicket,
              child: const Text("Confirm Ticket").tr(),
            ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _scannedObject == null
          ? ThemeConfig.grey200(context)
          : getResultColor(_scanState),
      body: SafeArea(
        child: Stack(
          children: [
            Column(
              children: [
                // Header with back button and event title
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
                // Display scanned user details
                buildScannedUserDetails(),
                // Scanner view
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
    if (scannedId == rightNowScanned) {
      return;
    }
    rightNowScanned = scannedId;

    _scannedObject = await DbTickets.scanTicket(scannedId, widget.scanCode!);
    if (_scannedObject != null &&
        (_scannedObject!.state == OrderModel.sentState ||
            _scannedObject!.state == OrderModel.paidState)) {
      _scanState = ScanState.valid;
      VibrateService.vibrateOk();
      setState(() {});
      return;
    } else if (_scannedObject != null &&
        (_scannedObject!.state == OrderModel.stornoState ||
            _scannedObject!.state == OrderModel.orderedState)) {
      _scanState = ScanState.invalid;
      VibrateService.vibrateNotOk();
      setState(() {});
      return;
    } else if (_scannedObject != null &&
        (_scannedObject!.state == OrderModel.usedState)) {
      _scanState = ScanState.used;
      VibrateService.vibrateNotOk();
      setState(() {});
      return;
    }
    _scanState = ScanState.nothing;
    setState(() {});
  }

  // Function to handle "Confirm Ticket" button press
  Future<void> _confirmTicket() async {
    if (_scannedObject == null) return;

    bool success = await DbTickets.updateTicketToUsed(
        _scannedObject!.id!, widget.scanCode!);

    if (success) {
      // Update the ticket state to 'used'
      setState(() {
        _scannedObject!.state = OrderModel.usedState;
        _scanState = ScanState.used;
      });
      VibrateService.vibrateOk();
    } else {
      // Handle failure, possibly show an error message
      VibrateService.vibrateNotOk();
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text("Failed to confirm ticket").tr()),
      );
    }
  }

  Color getResultColor(ScanState scannedState) {
    switch (scannedState) {
      case ScanState.valid:
        return Colors.greenAccent;
      case ScanState.used:
        return Colors.blueAccent;
      case ScanState.invalid:
        return Colors.redAccent; // Changed from break to return
      case ScanState.nothing:
        return ThemeConfig.backgroundColor(context);
    }
    return Colors.redAccent;
  }
}
