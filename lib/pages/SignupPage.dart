import 'package:auto_route/auto_route.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataModels/FormFields.dart';
import 'package:fstapp/dataServices/AuthService.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/services/FormHelper.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';

@RoutePage()
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
  FormHolder? formHolder;

  Map<String, dynamic> entryJson = {FormHelper.metaFields:
  [
    { FormHelper.metaType : FormHelper.fieldTypeName, FormHelper.IS_REQUIRED: true},
    { FormHelper.metaType : FormHelper.fieldTypeSurname, FormHelper.IS_REQUIRED: true},
    { FormHelper.metaType : FormHelper.fieldTypeSex},
    { FormHelper.metaType : FormHelper.fieldTypeEmail, FormHelper.IS_REQUIRED: true},
    { FormHelper.metaType : FormHelper.fieldTypeCity, FormHelper.IS_REQUIRED: true},
    { FormHelper.metaType : FormHelper.fieldTypeBirthYear},
  ]};

  final _formKey = GlobalKey<FormBuilderState>();

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    formHolder = FormHolder.fromJson(entryJson);
    formHolder!.controller = FormHolderController(globalKey: _formKey);
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text("Sign up").tr(),
        leading: BackButton(
          onPressed: () => RouterService.popOrHome(context),
        ),
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
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
                          style: TextStyle(fontSize: 18, color: ThemeConfig.blackColor(context)),
                          text: "Almost done! Your credentials for signing in to the app have been sent to your email {email}. Please check your inbox to complete the registration.".tr(namedArgs: {"email": fieldsData?["email"]}),
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
                    ...FormHelper.getAllFormFields(context, formHolder!.controller!.globalKey!, formHolder!),
                      const SizedBox(
                        height: 16,
                      ),
                      ButtonsHelper.bigButton(
                        context: context,
                        onPressed: _isLoading ? null : () async {
                          TextInput.finishAutofillContext();
                          if (_formKey.currentState?.saveAndValidate() ?? false) {
                            setState(() {
                              _isLoading = true;
                            });
                            var data = FormHelper.getDataFromForm(formHolder!);
                            fieldsData = data;
                            var resp = await AuthService.register(data);
                            if (resp["code"] == 200) {
                              ToastHelper.Show(context, "Registration is almost complete!".tr());
                              setState(() {
                                _isRegistrationSuccess = true;
                              });
                            } else if (resp["code"] == 409) {
                              ToastHelper.Show(
                                  context,
                                  "Registration failed: Email {email} is already in use.".tr(namedArgs: {"email": resp["email"]}),
                                  severity: ToastSeverity.NotOk
                              );
                            } else {
                              ToastHelper.Show(context, "Registration has failed.".tr(), severity: ToastSeverity.NotOk);
                            }
                            setState(() {
                              _isLoading = false;
                            });
                          }
                        },
                        label: "Sign up".tr(),
                        color: ThemeConfig.seed1,
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
