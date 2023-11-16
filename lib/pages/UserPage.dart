import 'package:avapp/models/UserInfoModel.dart';
import 'package:avapp/pages/AdministrationPage.dart';
import 'package:avapp/pages/LoginPage.dart';
import 'package:avapp/services/ToastHelper.dart';
import 'package:avapp/styles/Styles.dart';
import 'package:flutter/material.dart';
import 'package:avapp/config.dart';

import '../services/DataService.dart';
import '../main.dart';
import 'MapPage.dart';

class UserPage extends StatefulWidget {
  static const ROUTE = "/user";
  const UserPage({Key? key}) : super(key: key);

  @override
  _UserPageState createState() => _UserPageState();
}

class _UserPageState extends State<UserPage> {
  UserInfoModel? userData;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        centerTitle: true,
        title: const Text("Profil"),
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: appMaxWidth),
          child: SingleChildScrollView(
            child: Column(
              children: <Widget>[
                const SizedBox(
                  height: 15,
                ),
                buildTextField('Jméno', userData?.name ?? ''),
                buildTextField('Příjmení', userData?.surname ?? ''),
                buildTextField('E-mail', userData?.email ?? ''),
                buildTextField('Pohlaví', userData?.sexToCzech() ?? ''),
                buildTextField('Role', userData?.role ?? ''),
                Padding(
                  padding: EdgeInsets.all(12),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                    const Text("Ubytování"),
                    Container(
                      alignment: Alignment.topLeft,
                      child: TextButton(
                          onPressed: userData?.place == null ? null : () => Navigator.pushNamed(context, MapPage.ROUTE, arguments: userData?.place),
                          child: Text(userData?.place?.title??"bez ubytování", style: const TextStyle(fontSize: 17))),
                    )
                  ],),
                ),
                const SizedBox(
                  height: 16,
                ),
                Visibility(
                  visible: DataService.isEditor(),
                  child: Container(
                    height: 50,
                    width: 250,
                    decoration: BoxDecoration(
                        color: const Color.fromARGB(255, 220, 226, 237),
                        borderRadius: BorderRadius.circular(20)),
                    child: TextButton(
                      onPressed: () async => _redirectToAdminPage(),
                      child: const Text(
                        'Administrace',
                        style: TextStyle(color: Colors.black, fontSize: 25),
                      ),
                    ),
                  ),
                ),
                const SizedBox(
                  height: 16,
                ),
                Container(
                  height: 50,
                  width: 250,
                  decoration: BoxDecoration(
                      color: config.color1, borderRadius: BorderRadius.circular(20)),
                  child: TextButton(
                    onPressed: () async => _logout(),
                    child: const Text(
                      'Odhlásit se',
                      style: TextStyle(color: Colors.white, fontSize: 25),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  void didChangeDependencies() {
    super.didChangeDependencies();
    if(!DataService.isLoggedIn())
    {
      Navigator.pushNamed(
          context, LoginPage.ROUTE);
    }
    loadData();
  }

  Widget buildTextField(String labelText, String placeholder) {
    return Padding(
      padding: const EdgeInsets.all(12.0),
      child: TextField(
        readOnly: true,
        focusNode: AlwaysDisabledFocusNode(),
        decoration: InputDecoration(
            suffixIcon: null,
            contentPadding: const EdgeInsets.only(bottom: 3),
            labelText: labelText,
            floatingLabelBehavior: FloatingLabelBehavior.always,
            hintText: placeholder,
            hintStyle: const TextStyle(
              fontSize: 17,
              color: Colors.black,
            )),
      ),
    );
  }

  void _navigateToHomePage() {
    Navigator.of(context).pushReplacement(MaterialPageRoute(
        builder: (context) => const MyHomePage(title: MyHomePage.HOME_PAGE)));
  }

  void _logout() {
    DataService.logout().then((v)=>ToastHelper.Show("Úspěšné odhlášení!"));
    _navigateToHomePage();
  }

  void _redirectToAdminPage() {
    Navigator.pushNamed(context, AdministrationPage.ROUTE);
  }

  Future<void> loadData() async {
    userData = await DataService.getCurrentUserInfo();
    setState(() {});
    if(userData!.accommodation != null)
    {
      userData!.place = await DataService.getUserAccommodation(userData!.accommodation!);
      setState(() {});
    }

  }
}

class AlwaysDisabledFocusNode extends FocusNode {
  @override
  bool get hasFocus => false;
}
