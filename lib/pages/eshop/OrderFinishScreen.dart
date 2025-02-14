import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class FinishOrderScreen extends StatefulWidget {
  final Future<FunctionResponse> Function() orderFutureFunction; // Order future function
  final VoidCallback onResetForm; // Callback to reset the form

  const FinishOrderScreen({
    super.key,
    required this.orderFutureFunction,
    required this.onResetForm,
  });

  @override
  _FinishOrderScreenState createState() => _FinishOrderScreenState();
}

class _FinishOrderScreenState extends State<FinishOrderScreen>
    with TickerProviderStateMixin {
  late bool _isSuccess;
  bool _isLoading = true;

  late AnimationController _mainController;
  late AnimationController _loadingController;
  late Animation<double> _scaleAnimation;
  int? code;

  @override
  void initState() {
    super.initState();

    // Initialize animation controllers
    _mainController = AnimationController(
      duration: const Duration(milliseconds: 1500),
      vsync: this,
    );

    _loadingController = AnimationController(
      duration: const Duration(milliseconds: 1500),
      vsync: this,
    );

    // Scale animation for success/failure state
    _scaleAnimation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(parent: _mainController, curve: Curves.easeOutBack),
    );

    // Start the loading animation
    _loadingController.repeat(reverse: true);

    // Execute the order logic
    _executeOrder();
  }

  final int _minimalLoadingDurationMs = 1000;

  Future<void> _executeOrder() async {
    final startTime = DateTime.now();
    try {
      final resultFc = await widget.orderFutureFunction();
      final elapsedTime = DateTime.now().difference(startTime).inMilliseconds;
      final rawCode = resultFc.data["code"] ?? "0";
      code = int.tryParse(rawCode.toString().replaceAll(RegExp(r'\D'), '')) ?? 0;
      _isSuccess = code == 200;
      if (_isSuccess) {
        final remainingTime = _minimalLoadingDurationMs - elapsedTime;
        if (remainingTime > 0) {
          await Future.delayed(Duration(milliseconds: remainingTime));
        }
      }

      setState(() {
        _isLoading = false;
      });

      _loadingController.stop();
      _mainController.forward();
    } catch (e) {
      setState(() {
        _isSuccess = false;
        _isLoading = false;
      });

      _loadingController.stop();
      _mainController.forward();
    }
  }

  @override
  void dispose() {
    _mainController.dispose();
    _loadingController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).scaffoldBackgroundColor,
      body: PopScope(
        child: Center(
          child: AnimatedSwitcher(
            duration: const Duration(milliseconds: 500), // Smooth transition
            child: _isLoading
                ? _buildLoadingAnimation(context)
                : _buildResultContent(context),
          ),
        ),
      ),
    );
  }

  Widget _buildLoadingAnimation(BuildContext context) {
    return AnimatedBuilder(
      animation: _loadingController,
      builder: (context, child) {
        return Transform.scale(
          scale: 1.0 + _loadingController.value * 0.2, // Pulsating effect
          child: Container(
            width: 100,
            height: 100,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: Colors.grey[300],
            ),
            child: Center(
              child: CircularProgressIndicator(
                color: Theme.of(context).primaryColor,
                strokeWidth: 4.0,
              ),
            ),
          ),
        );
      },
    );
  }

  Widget _buildResultContent(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        // Animated Circle for success/failure
        ScaleTransition(
          scale: _scaleAnimation,
          child: Container(
            width: 150,
            height: 150,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: _isSuccess ? ThemeConfig.greenColor() : ThemeConfig.redColor(context),
            ),
            child: Icon(
              _isSuccess ? Icons.check_circle : Icons.error,
              size: 80,
              color: Colors.white,
            ),
          ),
        ),
        const SizedBox(height: 24),
        // Display result message
        Text(
          _isSuccess
              ? "Your order was accepted!".tr()
              : "Order Failed".tr(),
          style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.bold,
            color: _isSuccess ? ThemeConfig.greenColor() : ThemeConfig.redColor(context),
          ),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 8),
        Text(
          _isSuccess
              ? "Payment information has been sent to your email.".tr()
              : "${code??0}: ${"An error occurred while processing your order.".tr()}",
          style: TextStyle(
            fontSize: 14,
            color: ThemeConfig.blackColor(context).withOpacity(0.7),
          ),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 24),
        // Back to Form Button
        ElevatedButton(
          onPressed: () {
            widget.onResetForm();
            Navigator.of(context).pop();
          },
          style: ElevatedButton.styleFrom(
            padding: const EdgeInsets.symmetric(
              vertical: 12,
              horizontal: 32,
            ),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(8.0),
            ),
          ),
          child: Text(
            "Back to Form".tr(),
          ),
        ),
      ],
    );
  }
}
