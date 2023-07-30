import 'package:av_app/services/ToastHelper.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../services/DataService.dart';
import '../styles/Styles.dart';

class LoginPage extends StatefulWidget {
  static const ROUTE = "/login";
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
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        centerTitle: true,
        title: const Text("Přihlášení"),
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: appMaxWidth),
          child: SingleChildScrollView(
            child: Form(
              key: _formKey,
              child: Column(
                children: <Widget>[
                  const SizedBox(
                    height: 200,
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 15),
                    child: TextFormField(
                      autofillHints: [AutofillHints.username],
                      controller: _emailController,
                      decoration: const InputDecoration(
                          border: OutlineInputBorder(),
                          labelText: 'E-mail'),
                      validator: (String? value) {
                        if (value!.isEmpty || !value.contains('@')) {
                          return 'E-mail není validní';
                        }
                      },
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(
                        left: 15.0, right: 15.0, top: 15, bottom: 0),
                    //padding: EdgeInsets.symmetric(horizontal: 15),
                    child: TextFormField(
                      controller: _passwordController,
                      autofillHints: [AutofillHints.password],
                      obscureText: true,
                      decoration: const InputDecoration(
                          border: OutlineInputBorder(),
                          labelText: 'Heslo'),
                      validator: (String? value) {
                        if (value!.isEmpty) {
                          return 'Špatné heslo';
                        }
                      },
                    ),
                  ),
                  const SizedBox(
                    height: 16,
                  ),
                  Container(
                    height: 50,
                    width: 250,
                    decoration: BoxDecoration(
                        color: primaryBlue1,
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
                        'Přihlásit se',
                        style: TextStyle(color: Colors.white, fontSize: 25),
                      ),
                    ),
                  ),
                ],
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
      Navigator.pop(context);
    }
  }

  void _showToast(value) {
    ToastHelper.Show("Úspěšné přihlášení!");
  }

  void _onError(err) {
    ToastHelper.Show("Špatné přihlašovací údaje!", severity: ToastSeverity.NotOk);
  }
}
