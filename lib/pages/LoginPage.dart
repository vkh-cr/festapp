import 'package:festapp/RouterService.dart';
import 'package:festapp/pages/ForgotPassword.dart';
import 'package:festapp/services/ToastHelper.dart';
import 'package:festapp/widgets/ButtonsHelper.dart';
import 'package:festapp/widgets/FormFields.dart';
import 'package:festapp/widgets/LanguageButton.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:festapp/appConfig.dart';
import 'package:pwa_install/pwa_install.dart';
import '../data/DataService.dart';
import '../styles/Styles.dart';


class LoginPage extends StatefulWidget {
  static const ROUTE = "login";
  const LoginPage({Key? key}) : super(key: key);

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final _formKey = GlobalKey<FormState>();

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    List<Widget> actions = [const LanguageButton()];
    if(PWAInstall().installPromptEnabled){
      actions.add(ButtonsHelper.pwaInstallButton());
    }

    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text("Sign in").tr(),
        leading: BackButton(
          onPressed: () => RouterService.goBackOrHome(context),
        ),
        actions: actions,
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: appMaxWidth),
          child: SingleChildScrollView(
            child: Form(
              key: _formKey,
              child: AutofillGroup(
                child: Column(
                  children: <Widget>[
                    const SizedBox(
                      height: 200,
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 15),
                      child: FormFields.email(_emailController),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(
                          left: 15.0, right: 15.0, top: 15, bottom: 0),
                      child: FormFields.password(_passwordController),
                    ),
                    const SizedBox(
                      height: 16,
                    ),
                    Container(
                      height: 50,
                      width: 250,
                      decoration: BoxDecoration(
                          color: AppConfig.color1,
                          borderRadius: BorderRadius.circular(20)),
                      child: TextButton(
                        onPressed: () async {
                          if (_formKey.currentState!.validate()) {
                            TextInput.finishAutofillContext();
                            await DataService.login(
                                    _emailController.text, _passwordController.text)
                                .then(_showToast)
                                .then(_refreshSignedInStatus)
                                .catchError(_onError);
                          }
                        },
                        child: const Text(
                          "Sign in",
                          style: TextStyle(color: Colors.white, fontSize: 25),
                        ).tr(),
                      ),
                    ),
                    const SizedBox(
                      height: 8,
                    ),
                    Container(
                        padding: const EdgeInsets.all(8.0),
                        alignment: Alignment.topRight,
                        child: TextButton(
                            onPressed: () => RouterService.navigate(context, ForgotPasswordPage.ROUTE),
                            child: Text("Forgot your password?", style: normalTextStyle,).tr())
                    )
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  Future<void> _refreshSignedInStatus(value) async {
    var loggedIn = await DataService.tryAuthUser();
    if(loggedIn)
    {
      RouterService.checkOccasionLinkAndRedirect(context);
      RouterService.goBackOrHome(context);
    }
  }

  void _showToast(value) {
    ToastHelper.Show("Successful sign in!".tr());
  }

  void _onError(err) {
    ToastHelper.Show("Invalid credentials!".tr(), severity: ToastSeverity.NotOk);
  }
}
