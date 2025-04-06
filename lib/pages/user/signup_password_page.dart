import 'package:auto_route/auto_route.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/password_field.dart';

@RoutePage()
class ResetPasswordPage extends StatefulWidget {
  static const ROUTE = "signupPassword";

  const ResetPasswordPage({Key? key}) : super(key: key);

  @override
  _ResetPasswordPageState createState() => _ResetPasswordPageState();
}

class _ResetPasswordPageState extends State<ResetPasswordPage> {
  final _formKey = GlobalKey<FormState>();
  final _passwordController = TextEditingController();

  String? token;
  @override
  void dispose() {
    super.dispose();
  }

  @override
  Future<void> didChangeDependencies() async {
    super.didChangeDependencies();

    var currentUri = RouterService.getCurrentUri();
    var tokenExp = RegExp("token=(?<token>[^&]+)");
    var regExpMatch = tokenExp.firstMatch(currentUri.toString());

    if (regExpMatch != null) {
      try {
        token = regExpMatch.namedGroup("token")!;
      } on Exception catch (e) {
        ToastHelper.Show(context, e.toString());
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text("New Password").tr(),
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
                      Text("Welcome in {name}!".tr(namedArgs: {"name":AppConfig.appName}), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),),
                      const SizedBox(
                        height: 16,
                      ),
                      Text("Create a new password to continue.".tr(), style: const TextStyle(fontSize: 18),),
                      const SizedBox(
                        height: 64,
                      ),
                      Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 15),
                          child: PasswordField(label: "New Password".tr(), controller:  _passwordController, passwordType: AutofillHints.password)),
                      const SizedBox(
                        height: 16,
                      ),
                      Container(
                        height: 50,
                        width: 250,
                        decoration: BoxDecoration(
                            color: ThemeConfig.seed1,
                            borderRadius: BorderRadius.circular(20)),
                        child: TextButton(
                          onPressed: () async {
                            if (_formKey.currentState!.validate()) {
                              TextInput.finishAutofillContext();
                              await AuthService.changePassword(token!, _passwordController.text)
                                  .then((value) async {
                                if(value["code"] == 403 || value["code"] == 404) {
                                  ToastHelper.Show(context, "Token is not valid.".tr(), severity: ToastSeverity.NotOk);
                                }
                                else if(value["code"] == 200) {
                                  await AuthService.login(value["email"], _passwordController.text);
                                  ToastHelper.Show(context, "Password has been changed.".tr());
                                  RouterService.goBackOrInitial(context);
                                }
                              }).onError((error, stackTrace) {
                                ToastHelper.Show(context, error.toString());
                              });
                            }
                          },
                          child: const Text(
                            "Change Password",
                            style: TextStyle(color: Colors.white, fontSize: 25),
                          ).tr(),
                        ),
                      ),
                    ],
                  ),
                ),
              )),
        ),
      ),
    );
  }
}
