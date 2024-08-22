import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataServices/DataService.dart';
import 'package:fstapp/pages/ForgotPasswordPage.dart';
import 'package:fstapp/pages/SignupPage.dart';
import 'package:fstapp/pages/SettingsPage.dart';
import 'package:fstapp/services/NotificationHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/styles/Styles.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';
import 'package:fstapp/widgets/FormFields.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/widgets/PasswordField.dart';

class LoginPage extends StatefulWidget {
  static const ROUTE = "login";
  const LoginPage({Key? key}) : super(key: key);

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  bool _isLoading = false;

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
    List<Widget> actions = [
      IconButton(
        icon: Icon(Icons.settings),
        onPressed: () => RouterService.navigate(context, SettingsPage.ROUTE),
      ),
    ];

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
                    Container(
                      padding: const EdgeInsets.all(12.0),
                      child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Text("First time?".tr(), style: TextStyle(fontSize: 18)),
                            const SizedBox(
                              width: 16,
                            ),
                            TextButton(
                                onPressed: () => RouterService.navigate(context, SignupPage.ROUTE),
                                child: Text("Sign up", style: normalTextStyle).tr())
                          ]
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 15),
                      child: FormFields.email(_emailController),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(
                          left: 15.0, right: 15.0, top: 15, bottom: 0),
                      child: PasswordField(label: "Password".tr(), controller:  _passwordController, passwordType: AutofillHints.password),
                    ),
                    const SizedBox(
                      height: 16,
                    ),
                    ButtonsHelper.bigButton(
                      label: "Sign in".tr(),
                      onPressed: () async {
                        if (_formKey.currentState!.validate()) {
                          TextInput.finishAutofillContext();
                          setState(() {
                            _isLoading = true;
                          });
                          await DataService.login(_emailController.text, _passwordController.text)
                              .then(_showToast)
                              .then(_refreshSignedInStatus)
                              .catchError(_onError);
                          setState(() {
                            _isLoading = false;
                          });
                        }
                      },
                      color: AppConfig.color1,
                      textColor: Colors.white,
                      isEnabled: !_isLoading,
                    ),
                    const SizedBox(
                      height: 8,
                    ),
                    Container(
                        padding: const EdgeInsets.all(8.0),
                        alignment: Alignment.topRight,
                        child: TextButton(
                            onPressed: () => RouterService.navigate(context, ForgotPasswordPage.ROUTE),
                            child: Text("Forgot your password?", style: normalTextStyle).tr())
                    ),
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
    if (loggedIn) {
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
