import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/data/DataService.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/styles/Styles.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';
import 'package:fstapp/widgets/FormFields.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

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
            constraints: BoxConstraints(maxWidth: appMaxWidth),
            child: SingleChildScrollView(
              child: Form(
                key: _formKey,
                child: AutofillGroup(
                  child: Column(
                    children: <Widget>[
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 15),
                        child: FormFields.email(_emailController),
                      ),
                      const SizedBox(
                        height: 16,
                      ),
                      ButtonsHelper.bigButton(
                        onPressed: _isSent == true ? null : () async {
                          if (_formKey.currentState!.validate()) {
                            TextInput.finishAutofillContext();
                            await DataService.resetPasswordForEmail(_emailController.text)
                                .then((value) {
                              setState(() {
                                _isSent = true;
                              });
                              ToastHelper.Show("Password reset email has been sent.".tr());
                            })
                                .onError((error, stackTrace) {
                              ToastHelper.Show(error.toString());
                            });
                          }
                        },
                        label: "Send Reset Email".tr(),
                        color: AppConfig.color1,
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
