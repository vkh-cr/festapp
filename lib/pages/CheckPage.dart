import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/data/DataService.dart';
import 'package:fstapp/data/RightsHelper.dart';
import 'package:fstapp/models/EventModel.dart';
import 'package:fstapp/models/UserInfoModel.dart';
import 'package:mobile_scanner/mobile_scanner.dart';

enum ScanState {
  signedIn, notSignedIn, nothing
}

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
  UserInfoModel? _scannedUser;
  ScanState _scanState = ScanState.nothing;

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
    _participants = await DataService.getParticipantsPerEvent(eventId);
    setState(() => {});
  }

  MobileScannerController mobileScannerController = MobileScannerController(
      formats: [BarcodeFormat.qrCode],
      detectionSpeed: DetectionSpeed.noDuplicates);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _scannedUser == null ? null : getResultColor(_scanState),
      body: Column(
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
                    _event?.title ?? "",
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
          Container(
            padding: const EdgeInsets.all(12.0),
            child: Stack(
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const SizedBox(height: 18),
                    Text("${"Name".tr()}: ${_scannedUser?.toFullNameString() ?? ""}"),
                    Text("${"Sex".tr()}: ${_scannedUser?.sex == null ? "" : UserInfoModel.sexToLocale(_scannedUser?.sex)}"),
                    Text("${"E-mail".tr()}: ${_scannedUser?.email ?? ""}"),
                    const SizedBox(height: 12),
                  ],
                )
              ],
            ),
          ),
          Expanded(
            child: MobileScanner(
              fit: BoxFit.fitWidth,
              controller: mobileScannerController,
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
      return;
    }

    _scannedUser ??= await DataService.getUserInfo(newUserId);
    if (_scannedUser != null) {
      _scanState = ScanState.notSignedIn;
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
