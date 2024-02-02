import 'package:avapp/data/OfflineDataHelper.dart';
import 'package:avapp/models/UserInfoModel.dart';
import 'package:avapp/pages/AdministrationPage.dart';
import 'package:avapp/pages/LoginPage.dart';
import 'package:avapp/pages/MapPage.dart';
import 'package:avapp/services/NavigationHelper.dart';
import 'package:avapp/services/ToastHelper.dart';
import 'package:avapp/styles/Styles.dart';
import 'package:avapp/widgets/LanguageButton.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:avapp/appConfig.dart';
import 'package:go_router/go_router.dart';

import '../data/DataService.dart';

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
      appBar: AppBar(
        centerTitle: true,
        title: const Text("Profile").tr(),
        leading: BackButton(
          onPressed: () => NavigationHelper.goBackOrHome(context),
        ),
        actions: [const LanguageButton()],
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
                buildTextField("Name".tr(), userData?.name ?? ''),
                buildTextField("Surname".tr(), userData?.surname ?? ''),
                buildTextField("E-mail".tr(), userData?.email ?? ''),
                buildTextField("Sex".tr(), UserInfoModel.sexToLocale(userData?.sex)),
                buildTextField("Role".tr(), userData?.role ?? ''),
                Padding(
                  padding: const EdgeInsets.all(12),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                    const Text("Accommodation").tr(),
                    Container(
                      alignment: Alignment.topLeft,
                      child: TextButton(
                          onPressed: userData?.place == null ? null : () => context.push("${MapPage.ROUTE}/${userData!.place!.id!}"),
                          child: Text(userData?.place?.title??"Without accommodation".tr(), style: const TextStyle(fontSize: 17))),
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
                        "Administration",
                        style: TextStyle(color: Colors.black, fontSize: 25),
                      ).tr(),
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
                      color: AppConfig.color1, borderRadius: BorderRadius.circular(20)),
                  child: TextButton(
                    onPressed: () async => _logout(),
                    child: const Text(
                      "Sign out",
                      style: TextStyle(color: Colors.white, fontSize: 25),
                    ).tr(),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if(!DataService.isLoggedIn())
    {
      context.push(LoginPage.ROUTE);
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

  Future<void> _logout() async {
    var trPrefix = (await DataService.getCurrentUserInfo()).getGenderPrefix();
    await DataService.logout();
    ToastHelper.Show("${trPrefix}You have been signed out.".tr());
    NavigationHelper.goBackOrHome(context);
  }

  void _redirectToAdminPage() {
    context.push(AdministrationPage.ROUTE);
  }

  Future<void> loadData() async {
    loadDataOffline();
    var userInfo = await DataService.getUserInfoWithAccommodation();
    OfflineDataHelper.saveUserInfo(userInfo);
    setState(() {
      userData = userInfo;
    });
  }

  void loadDataOffline() {
    var userInfo = OfflineDataHelper.getUserInfo();
    setState(() {
      userData = userInfo;
    });
  }
}

class AlwaysDisabledFocusNode extends FocusNode {
  @override
  bool get hasFocus => false;
}
