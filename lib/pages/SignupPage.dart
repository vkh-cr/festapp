import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/data/DataService.dart';
import 'package:fstapp/models/FormModel.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/services/FormHelper.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/services/ToastHelper.dart';
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
  final dynamic fields =
  {"fields":
  [
    {"type":"name",
    "value":"Michael"},
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
              child: FormBuilder(
                key: _formKey,
                child: AutofillGroup(
                  child: Column(
                    children: [
                    ...FormHelper.getFormFields(fields),
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
                          onPressed: _isLoading ? null : () async {
                            TextInput.finishAutofillContext();
                            if (_formKey.currentState?.saveAndValidate() ?? false) {
                              if (true) {
                                setState(() {
                                  _isLoading = true;
                                });
                                var data = FormHelper.getDataFromForm(_formKey, fields["fields"]);
                                var resp = await DataService.register(data);
                                if(resp["code"]==200){
                                  ToastHelper.Show("Almost done! Confirm registration in your email.".tr());
                                }
                              }
                            }
                          },
                          child: const Text(
                            "Sign up",
                            style: TextStyle(color: Colors.white, fontSize: 25),
                          ).tr(),
                        ),
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
