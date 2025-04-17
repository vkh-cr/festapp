import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/buttons_helper.dart';
import 'package:fstapp/widgets/internal_form_fields.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

@RoutePage()
class ForgotPasswordPage extends StatefulWidget {
  static const ROUTE = "forgotPassword";

  const ForgotPasswordPage({Key? key}) : super(key: key);

  @override
  _ForgotPasswordPageState createState() => _ForgotPasswordPageState();
}

class _ForgotPasswordPageState extends State<ForgotPasswordPage> {
  final _formKey = GlobalKey<FormState>();
  final _emailController = TextEditingController();
  bool _isSent = false;
  @override
  void dispose() {
    super.dispose();
  }

  @override
  Future<void> didChangeDependencies() async {
    super.didChangeDependencies();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text("Forgot Password?").tr(),
        leading: BackButton(
          onPressed: () => RouterService.goBackOrInitial(context),
        ),
      ),
        body: Align(
          alignment: Alignment.center,
          child: ConstrainedBox(
            constraints: BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
            child: SingleChildScrollView(
              child: Form(
                key: _formKey,
                child: AutofillGroup(
                  child: Column(
                    children: <Widget>[
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 15),
                        child: InternalFormFields.email(_emailController),
                      ),
                      const SizedBox(
                        height: 16,
                      ),
                      ButtonsHelper.bigButton(
                        context: context,
                        onPressed: _isSent == true ? null : () async {
                          if (_formKey.currentState!.validate()) {
                            TextInput.finishAutofillContext();
                            setState(() {
                              _isSent = true;
                            });
                            await AuthService.resetPasswordForEmail(_emailController.text)
                                .then((value) {
                              ToastHelper.Show(context, "Password reset email has been sent.".tr());
                            })
                                .onError((error, stackTrace) {
                              ToastHelper.Show(context, error.toString());
                            });
                          }
                        },
                        label: "Send Reset Email".tr(),
                        color: ThemeConfig.seed1,
                        textColor: Colors.white,
                        isEnabled: !_isSent,
                        height: 50.0,
                        width: 380.0,
                      )
                    ],
                  ),
                ),
              )
            ),
          ),
        ),
    );
  }
}
