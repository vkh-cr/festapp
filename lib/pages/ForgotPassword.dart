import 'package:easy_localization/easy_localization.dart';
import 'package:festapp/RouterService.dart';
import 'package:festapp/appConfig.dart';
import 'package:festapp/data/DataService.dart';
import 'package:festapp/services/ToastHelper.dart';
import 'package:festapp/styles/Styles.dart';
import 'package:festapp/widgets/FormFields.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:supabase_auth_ui/supabase_auth_ui.dart';

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
                      Container(
                        height: 50,
                        width: 380,
                        decoration: BoxDecoration(
                            color: _isSent == true ? Colors.black38 : AppConfig.color1,
                            borderRadius: BorderRadius.circular(20)),
                        child: TextButton(
                          onPressed: _isSent == true ? null : () async {
                            if (_formKey.currentState!.validate()) {
                              TextInput.finishAutofillContext();
                              await DataService
                                  .sendResetRequest(_emailController.text)
                                  .then((value)  {
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
                          child: const Text(
                            "Send Reset Email",
                            style: TextStyle(color: Colors.white, fontSize: 25),
                          ).tr(),
                        ),
                      ),
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
