import 'package:auto_route/auto_route.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/pages/user/forgot_password_page.dart';
import 'package:fstapp/pages/occasion/settings_page.dart';
import 'package:fstapp/pages/user/signup_page.dart';
import 'package:fstapp/services/link_model.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/buttons_helper.dart';
import 'package:fstapp/widgets/internal_form_fields.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/widgets/password_field.dart';

@RoutePage()
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
          onPressed: () => RouterService.popOrHome(context),
        ),
        actions: actions,
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
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
                                child: Text("Sign up", style: StylesConfig.normalTextStyle).tr())
                          ]
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 15),
                      child: InternalFormFields.email(_emailController),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(
                          left: 15.0, right: 15.0, top: 15, bottom: 0),
                      child: PasswordField(label: "Password or code".tr(), controller:  _passwordController, passwordType: AutofillHints.password),
                    ),
                    const SizedBox(
                      height: 16,
                    ),
                    ButtonsHelper.bigButton(
                      context: context,
                      label: "Sign in".tr(),
                      onPressed: () async {
                        if (_formKey.currentState!.validate()) {
                          TextInput.finishAutofillContext();
                          setState(() {
                            _isLoading = true;
                          });
                          await AuthService.login(AppConfig.getUserPrefix(_emailController.text), _passwordController.text)
                              .then(_showToast)
                              .then(_refreshSignedInStatus)
                              .catchError(_onError);
                          setState(() {
                            _isLoading = false;
                          });
                        }
                      },
                      color: ThemeConfig.seed1,
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
                            child: Text("Forgot your password?", style: StylesConfig.normalTextStyle).tr())
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
    var loggedIn = await AuthService.tryAuthUser();
    if (loggedIn) {
      await RouterService.updateOccasionFromLink(LinkModel(occasionLink: RouterService.currentOccasionLink));
      RouterService.popOrHome(context);
    }
  }

  void _showToast(value) {
    ToastHelper.Show(context, "Successful sign in!".tr());
  }

  void _onError(err) {
    ToastHelper.Show(context, "Invalid credentials!".tr(), severity: ToastSeverity.NotOk);
  }
}
