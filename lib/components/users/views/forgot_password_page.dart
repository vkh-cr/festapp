import 'package:auto_route/auto_route.dart';
import 'package:fstapp/components/users/user_strings.dart';
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

  const ForgotPasswordPage({super.key});

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
        title: Text(UserStrings.forgotPassword),
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
                    onPressed: _isSent == true
                        ? null
                        : () async {
                            if (_formKey.currentState!.validate()) {
                              TextInput.finishAutofillContext();
                              setState(() {
                                _isSent = true;
                              });
                              AuthService.resetPasswordForEmail(
                                      _emailController.text)
                                  .then((value) {
                                ToastHelper.Show(
                                    context, UserStrings.passwordResetSent);
                              }).onError((error, stackTrace) {
                                setState(() {
                                  _isSent = false;
                                });
                                ToastHelper.Show(context, error.toString());
                              });
                            }
                          },
                    label: UserStrings.sendResetEmail,
                    color: ThemeConfig.seed1,
                    textColor: Colors.white,
                    isEnabled: !_isSent,
                    height: 50.0,
                    width: 380.0,
                  )
                ],
              ),
            ),
          )),
        ),
      ),
    );
  }
}
