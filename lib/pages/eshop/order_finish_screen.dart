import 'package:flutter/material.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/theme_config.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class FinishOrderScreen extends StatefulWidget {
  final Future<FunctionResponse> Function() orderFutureFunction;
  final VoidCallback onResetForm;

  const FinishOrderScreen({
    Key? key,
    required this.orderFutureFunction,
    required this.onResetForm,
  }) : super(key: key);

  @override
  _FinishOrderScreenState createState() => _FinishOrderScreenState();
}

class _FinishOrderScreenState extends State<FinishOrderScreen>
    with TickerProviderStateMixin {
  bool _isSuccess = false;
  bool _isLoading = true;
  int? code;
  Map<String, dynamic>? _errorProduct;

  late AnimationController _mainController;
  late AnimationController _loadingController;
  late Animation<double> _scaleAnimation;

  @override
  void initState() {
    super.initState();
    _mainController = AnimationController(
      duration: const Duration(milliseconds: 1500),
      vsync: this,
    );
    _loadingController = AnimationController(
      duration: const Duration(milliseconds: 1500),
      vsync: this,
    )..repeat(reverse: true);
    _scaleAnimation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(parent: _mainController, curve: Curves.easeOutBack),
    );
    _executeOrder();
  }

  Future<void> _executeOrder() async {
    final start = DateTime.now();
    try {
      final result = await widget.orderFutureFunction();
      final elapsed = DateTime.now().difference(start).inMilliseconds;
      code = int.tryParse(
          result.data["code"].toString().replaceAll(RegExp(r'\D'), '')) ??
          0;
      _isSuccess = code == 200;
      if (code == 1017) _errorProduct = result.data["product"];
      if (_isSuccess && elapsed < 1000) {
        await Future.delayed(Duration(milliseconds: 1000 - elapsed));
      }
    } catch (_) {
      _isSuccess = false;
    }
    setState(() => _isLoading = false);
    _loadingController.stop();
    _mainController.forward();
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
            duration: const Duration(milliseconds: 500),
            child: _isLoading ? _buildLoading() : _buildResult(),
          ),
        ),
      ),
    );
  }

  Widget _buildLoading() {
    return AnimatedBuilder(
      animation: _loadingController,
      builder: (context, child) => Transform.scale(
        scale: 1.0 + _loadingController.value * 0.2,
        child: Container(
          width: 100,
          height: 100,
          decoration:
          BoxDecoration(shape: BoxShape.circle, color: Colors.grey[300]),
          child: Center(
            child: CircularProgressIndicator(
              color: Theme.of(context).primaryColor,
              strokeWidth: 4.0,
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildResult() {
    String title, subtitle;
    if (_isSuccess) {
      title = "Your order was accepted!".tr();
      subtitle = "Payment information has been sent to your email.".tr();
    } else if (code == 1017) {
      final prodTitle = _errorProduct?["title"] ?? "";
      title = "The {product_title} is no longer available for order."
          .tr(namedArgs: {"product_title": prodTitle});
      subtitle = "Please choose a different variant.".tr();
    } else {
      title = "Order Failed".tr();
      subtitle = "{code}: An error occurred while processing your order."
          .tr(namedArgs: {"code": (code ?? 0).toString()});
    }
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        ScaleTransition(
          scale: _scaleAnimation,
          child: Container(
            width: 150,
            height: 150,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: _isSuccess
                  ? ThemeConfig.greenColor()
                  : ThemeConfig.redColor(context),
            ),
            child: Icon(
              _isSuccess ? Icons.check_circle : Icons.error,
              size: 80,
              color: Colors.white,
            ),
          ),
        ),
        const SizedBox(height: 24),
        Text(
          title,
          style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.bold,
            color: _isSuccess
                ? ThemeConfig.greenColor()
                : ThemeConfig.redColor(context),
          ),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 8),
        Text(
          subtitle,
          style: TextStyle(
            fontSize: 14,
            color: ThemeConfig.blackColor(context).withOpacity(0.7),
          ),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 24),
        OutlinedButton(
          onPressed: () {
            if (_isSuccess) widget.onResetForm();
            Navigator.of(context).pop();
          },
          style: OutlinedButton.styleFrom(
            padding:
            const EdgeInsets.symmetric(vertical: 12, horizontal: 32),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(8.0),
            ),
          ),
          child: Text("Back to Form".tr()),
        ),
      ],
    );
  }
}
