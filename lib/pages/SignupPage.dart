import 'package:flutter/cupertino.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/data/DataService.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/services/FormHelper.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';
import '../styles/Styles.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';


class SignupPage extends StatefulWidget {
  static const ROUTE = "signup";
  const SignupPage({super.key});

  @override
  _SignupPageState createState() => _SignupPageState();
}

class _SignupPageState extends State<SignupPage> {
  bool _isLoading = false;
  bool _isRegistrationSuccess = false;
  Map<String, dynamic>? fieldsData;

  final dynamic fields =
  {"fields":
  [
    {"type":"name"},
    {"type":"surname"},
    {"type":"sex"},
    {"type":"email"},
    {"type":"city"},
    {"type":"birthYear"},
  ]};
  final _formKey = GlobalKey<FormBuilderState>();

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text("Sign up").tr(),
        leading: BackButton(
          onPressed: () => RouterService.goBackOrHome(context),
        ),
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: appMaxWidth),
          child: SingleChildScrollView(
            child: Padding(
              padding: const EdgeInsets.all(12.0),
              child: _isRegistrationSuccess ?
              Padding(
                padding: const EdgeInsets.fromLTRB(12,88,12,12),
                  child: RichText(
                    textAlign: TextAlign.center,
                    text: TextSpan(
                      children: [
                        TextSpan(
                          style: const TextStyle(fontSize: 18),
                          text: "Almost done! Confirm registration in your email {email}.".tr(namedArgs: {"email": fieldsData?["email"]}),
                        ),
                        const WidgetSpan(
                          child: Padding(
                            padding: EdgeInsets.fromLTRB(6,0,0,0),
                              child: Icon(Icons.check_circle)),
                        )
                      ],
                    )))
                  :
              FormBuilder(
                key: _formKey,
                child: AutofillGroup(
                  child: Column(
                    children: [
                    ...FormHelper.getFormFields(fields),
                      const SizedBox(
                        height: 16,
                      ),
                      ButtonsHelper.bigButton(
                        onPressed: _isLoading ? null : () async {
                          TextInput.finishAutofillContext();
                          if (_formKey.currentState?.saveAndValidate() ?? false) {
                            setState(() {
                              _isLoading = true;
                            });
                            var data = FormHelper.getDataFromForm(_formKey, fields["fields"]);
                            fieldsData = data;
                            var resp = await DataService.register(data);
                            if (resp["code"] == 200) {
                              ToastHelper.Show("Registration is almost complete!".tr());
                              setState(() {
                                _isRegistrationSuccess = true;
                              });
                            } else if (resp["code"] == 409) {
                              ToastHelper.Show(
                                  "Registration failed: Email {email} is already in use.".tr(namedArgs: {"email": resp["email"]}),
                                  severity: ToastSeverity.NotOk
                              );
                            } else {
                              ToastHelper.Show("Registration has failed.".tr(), severity: ToastSeverity.NotOk);
                            }
                            setState(() {
                              _isLoading = false;
                            });
                          }
                        },
                        label: "Sign up".tr(),
                        color: AppConfig.color1,
                        textColor: Colors.white,
                        isEnabled: !_isLoading,
                        height: 50.0,
                        width: 250.0,
                      ),]
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
