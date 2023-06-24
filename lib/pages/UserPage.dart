import 'package:av_app/styles/Styles.dart';
import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';

import '../services/DataService.dart';
import '../models/UserData.dart';
import '../main.dart';
import '../utils/constants.dart';

class UserPage extends StatefulWidget {
  const UserPage({Key? key}) : super(key: key);

  @override
  _UserPageState createState() => _UserPageState();
}

class _UserPageState extends State<UserPage> {
  UserData? userData;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        centerTitle: true,
        title: const Text("Profil"),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            const SizedBox(
              height: 15,
            ),
            buildTextField('Jméno', userData?.name ?? ''),
            buildTextField('Příjmení', userData?.surname ?? ''),
            buildTextField('E-mail', userData?.email ?? ''),
            buildTextField('Pohlaví', userData?.sex ?? ''),
            buildTextField('Role', userData?.role ?? ''),
            Visibility(
              visible: userData?.role == 'Organizer',
              child: buildTextField('Dobrovolnická oblast', ''),
            ),
            buildTextField('Ubytování', userData?.accommodationType ?? ''),
            const SizedBox(
              height: 16,
            ),
            Visibility(
              visible: userData?.role == 'Organizer',
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
                  color: primaryBlue1, borderRadius: BorderRadius.circular(20)),
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
    );
  }

  @override
  void initState() {
    super.initState();
    loadData();
  }

  Widget buildTextField(String labelText, String placeholder) {
    return Padding(
      padding: const EdgeInsets.all(15.0),
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

  void _showToast(value) {
    Fluttertoast.showToast(msg: ("Úspěšné odhlášení!"), timeInSecForIosWeb: 3);
  }

  void _navigateToHomePage() {
    Navigator.of(context).pushReplacement(MaterialPageRoute(
        builder: (context) => const MyHomePage(title: PageNames.HOME_PAGE)));
  }

  void _logout() {
    DataService.logout().then(_showToast);
    _navigateToHomePage();
  }

  void _redirectToAdminPage() {
    Fluttertoast.showToast(
        msg: ("Not implemented redirection"), timeInSecForIosWeb: 3);
    // TODO: Redirect to admin page
  }

  Future<void> loadData() async {
    var ud = await DataService.getCurrentUserData();
    setState(() {
      userData = ud;
    });
  }
}

class AlwaysDisabledFocusNode extends FocusNode {
  @override
  bool get hasFocus => false;
}
