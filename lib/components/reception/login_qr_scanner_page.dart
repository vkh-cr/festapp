import 'package:auto_route/auto_route.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/reception/reception_strings.dart';
import 'package:fstapp/components/reception/login_qr_barcode.dart';
import 'package:mobile_scanner/mobile_scanner.dart';

@RoutePage()
class LoginQrScannerPage extends StatefulWidget {
  const LoginQrScannerPage({super.key});
  static const ROUTE = 'login-qr';
  @override
  State<LoginQrScannerPage> createState() => _LoginQrScannerPageState();
}

class _LoginQrScannerPageState extends State<LoginQrScannerPage> {
  final _controller = MobileScannerController(
      formats: [BarcodeFormat.qrCode],
      detectionSpeed: DetectionSpeed.noDuplicates);
  bool _handled = false;
  @override
  void initState() {
    super.initState();
    if (kIsWeb)
      MobileScannerPlatform.instance.setBarcodeLibraryScriptUrl(
          'https://unpkg.com/@zxing/library@0.21.3');
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  Future<void> _detect(BarcodeCapture capture) async {
    if (_handled) return;
    final payload = loginQrFromBarcodes(capture.barcodes);
    // Camera backends can emit an empty or partial detection before the QR is
    // decoded. Keep scanning instead of turning that transient frame into a
    // user-visible rejection of the code in front of the camera.
    if (payload == null) return;
    _handled = true;
    await _controller.stop();
    if (mounted) context.router.maybePop(payload.raw);
  }

  @override
  Widget build(BuildContext context) => Scaffold(
      appBar: AppBar(title: Text(ReceptionStrings.scan)),
      body: MobileScanner(
          controller: _controller,
          onDetect: _detect,
          errorBuilder: (context, error) =>
              Center(child: Text(ReceptionStrings.cameraUnavailable))));
}
