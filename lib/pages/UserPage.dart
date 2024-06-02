import 'package:fstapp/data/OfflineDataHelper.dart';
import 'package:fstapp/data/RightsHelper.dart';
import 'package:fstapp/models/UserInfoModel.dart';
import 'package:fstapp/pages/AdministrationPage.dart';
import 'package:fstapp/pages/LoginPage.dart';
import 'package:fstapp/pages/MapPage.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/styles/Styles.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';
import 'package:fstapp/widgets/LanguageButton.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/appConfig.dart';
import 'package:pwa_install/pwa_install.dart';

import '../data/DataService.dart';

class UserPage extends StatefulWidget {
  static const ROUTE = "user";
  const UserPage({super.key});

  @override
  _UserPageState createState() => _UserPageState();
}

class _UserPageState extends State<UserPage> {
  UserInfoModel? userData;

  @override
  Widget build(BuildContext context) {
    List<Widget> actions = [const LanguageButton()];
    if(AppConfig.showPWAInstallOption && PWAInstall().installPromptEnabled){
      actions.add(ButtonsHelper.pwaInstallButton());
    }

    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text("Profile").tr(),
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
            child: Column(
              children: <Widget>[
                const SizedBox(
                  height: 15,
                ),
                buildTextField("Name".tr(), userData?.name ?? ''),
                buildTextField("Surname".tr(), userData?.surname ?? ''),
                buildTextField("E-mail".tr(), userData?.email ?? ''),
                buildTextField("Sex".tr(), UserInfoModel.sexToLocale(userData?.sex)),
                buildTextField("Role".tr(), userData?.roleString??""),
                Padding(
                  padding: const EdgeInsets.all(12),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                    const Text("Accommodation").tr(),
                    Container(
                      alignment: Alignment.topLeft,
                      child: TextButton(
                          onPressed: userData?.accommodationPlace == null ? null : () => RouterService.navigate(context, "${MapPage.ROUTE}/${userData!.accommodationPlace!.id!}"),
                          child: Text(userData?.accommodationPlace?.title??"Without accommodation".tr(), style: const TextStyle(fontSize: 17))),
                    )
                  ],),
                ),
                const SizedBox(
                  height: 16,
                ),
                Visibility(
                  visible: RightsHelper.canSeeAdmin(),
                  child: ButtonsHelper.bigButton(
                    onPressed: () async => _redirectToAdminPage(),
                    label: "Administration".tr(),
                  ),
                ),
                const SizedBox(
                  height: 16,
                ),
                ButtonsHelper.bigButton(
                    onPressed: () async => _logout(),
                    label: "Sign out".tr(),
                    color: AppConfig.color1,
                    textColor: Colors.white),
                Container(
                    padding: const EdgeInsets.all(8.0),
                    alignment: Alignment.topCenter,
                    child: TextButton(
                        onPressed: () => DialogHelper.showInformationDialogAsync(context, "Delete account".tr(), "Request account deletion by sending email with your credentials to info@festapp.net."),
                        child: Text("Delete account".tr(), style: normalTextStyle,).tr())
                )
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
      RouterService.navigateOccasion(context, LoginPage.ROUTE);
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
    RouterService.goBackOrHome(context);
  }

  void _redirectToAdminPage() {
    RouterService.navigateOccasion(context, AdministrationPage.ROUTE);
  }

  Future<void> loadData() async {
    loadDataOffline();
    var userInfo = await DataService.getUserInfoWithRole();
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
