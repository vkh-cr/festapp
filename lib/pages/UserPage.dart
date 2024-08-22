import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataServices/AuthService.dart';
import 'package:fstapp/dataServices/DbCompanions.dart';
import 'package:fstapp/dataServices/DataService.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/dataModels/UserInfoModel.dart';
import 'package:fstapp/pages/AdministrationPage.dart';
import 'package:fstapp/pages/EventPage.dart';
import 'package:fstapp/pages/LoginPage.dart';
import 'package:fstapp/pages/MapPage.dart';
import 'package:fstapp/pages/SettingsPage.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/components/timeline/ScheduleTimelineHelper.dart';
import 'package:fstapp/services/StylesHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/styles/Styles.dart';
import 'package:fstapp/widgets/ButtonsHelper.dart';
import 'package:fstapp/components/timeline/ScheduleTimeline.dart';
import 'package:image_downloader_web/image_downloader_web.dart';
import 'package:qr_flutter/qr_flutter.dart';
import 'package:screenshot/screenshot.dart';


class UserPage extends StatefulWidget {
  static const ROUTE = "user";

  const UserPage({super.key});

  @override
  _UserPageState createState() => _UserPageState();
}

class _UserPageState extends State<UserPage> {
  void _showFullScreenDialog(
    BuildContext context,
    String name,
    String eventName,
    String id,
  ) {
    final ScreenshotController screenshotController = ScreenshotController();

    showDialog(
      useSafeArea: false,
      context: context,
      builder: (BuildContext context) {
        return Scaffold(
          appBar: AppBar(
            leading: IconButton(
              icon: const Icon(
                Icons.arrow_back,
                color: AppConfig.color1,
              ),
              onPressed: () {
                RouterService.goBack(context);
              },
            ),
            actions: [
              if (kIsWeb)
                Padding(
                  padding: const EdgeInsets.all(6.0),
                  child: IconButton(
                    onPressed: () async {
                      var captured = await screenshotController.capture();
                      if (captured == null) {
                        return;
                      }
                      await WebImageDownloader.downloadImageFromUInt8List(
                        uInt8List: captured,
                        name: name,
                      );
                    },
                    icon: const Icon(
                      Icons.download,
                      color: AppConfig.color1,
                    ),
                  ),
                ),
            ],
            backgroundColor: Colors.transparent,
            elevation: 0,
          ),
          backgroundColor: Colors.white,
          body: Center(
            child: Screenshot(
              controller: screenshotController,
              child: Container(
                color: Colors.white,
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const SizedBox(height: 20),
                    Text(
                      "[$eventName]",
                      style: const TextStyle(
                          fontSize: 18, fontWeight: FontWeight.bold),
                    ),
                    const SizedBox(height: 20),
                    QrImageView(
                      data: id,
                      version: QrVersions.auto,
                      size: 250.0,
                    ),
                    const SizedBox(height: 20),
                    Text(
                      "[$name]",
                      style: const TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 20),
                  ],
                ),
              ),
            ),
          ),
        );
      },
    );
  }

  UserInfoModel? userData;

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
                Visibility(
                  visible:
                      DataService.globalSettingsModel!.isEnabledEntryCode ??
                          false,
                  child: Column(
                    children: [
                      Container(
                        padding: const EdgeInsets.symmetric(vertical: 10),
                        child: ButtonsHelper.buildQRCodeButton(
                          onPressed: () => _showFullScreenDialog(
                              context,
                              userData!.name!,
                              AppConfig.appName,
                              userData!.id!),
                          label: "Show my code".tr(),
                        ),
                      ),
                      Visibility(
                        visible: userData?.companions?.isNotEmpty ?? false,
                        child: Container(
                          padding: const EdgeInsets.symmetric(vertical: 10),
                          decoration: BoxDecoration(
                            border: Border(
                                bottom: BorderSide(color: Colors.grey[300]!)),
                          ),
                          child: ListView.builder(
                            shrinkWrap: true,
                            physics: const NeverScrollableScrollPhysics(),
                            itemCount: (userData?.companions?.length ?? 0) + 1,
                            itemBuilder: (context, index) {
                              if (index == 0) {
                                return ListTile(
                                  title: const Text(
                                    "Companions",
                                    style: TextStyle(fontWeight: FontWeight.bold),
                                  ).tr(),
                                );
                              }

                              final companion =
                                  userData!.companions![index - 1];

                              return Padding(
                                padding:
                                    const EdgeInsets.symmetric(horizontal: 10),
                                child: Column(
                                  children: [
                                    const SizedBox(height: 10),
                                    Container(
                                      decoration: BoxDecoration(
                                        color: bigButtonColor,
                                        // Match the background color
                                        borderRadius: BorderRadius.circular(
                                            12), // Optional: Rounded corners
                                      ),
                                      child: ExpansionTile(
                                        //collapsedShape: Border.fromBorderSide(BorderSide(width: 2)),
                                        shape: const Border(),
                                        title: Text(companion.name, style: const TextStyle(
                                            fontWeight: FontWeight.bold),),
                                        subtitle: Text("Signed in events: {count}".tr(namedArgs: {"count":companion.schedule?.length.toString()??0.toString()}),
                                            style: TextStyle(
                                                color: Colors.grey[800]!,
                                            fontSize: 13)),
                                        trailing:
                                            ButtonsHelper.buildQRCodeButton(
                                          onPressed: () =>
                                              _showFullScreenDialog(
                                            context,
                                            companion.name,
                                            AppConfig.appName,
                                            companion.id,
                                          ),
                                          label: "Show Code".tr(),
                                        ),
                                        expandedCrossAxisAlignment:
                                            CrossAxisAlignment.center,
                                        children: [
                                          SizedBox.fromSize(size: const Size.fromHeight(36)),
                                          ConstrainedBox(
                                            constraints: const BoxConstraints(
                                              maxWidth: 600,
                                            ),
                                              child: ScheduleTimeline(
                                                  eventGroups: TimeBlockHelper.splitTimeBlocksByDay(companion.timeBlocks, context),
                                                  onEventPressed: (eventId) async {
                                                    await RouterService.navigateOccasion(
                                                        context,
                                                        "${EventPage.ROUTE}/$eventId",
                                                        extra:
                                                        eventId);
                                                    await loadData();
                                                  },
                                                  nodePosition: 0.3,
                                                  emptyContent: Center(child: Text(
                                                    "Companion's events will appear here.",
                                                      style: TextStyle(
                                                          color: Colors.grey[600]!)
                                                  ).tr(),),)),
                                          SizedBox.fromSize(size: const Size.fromHeight(48)),
                                          Column(
                                            mainAxisAlignment:
                                                MainAxisAlignment.center,
                                            children: [
                                              TextButton(
                                                onPressed: () async {
                                                  var answer = await DialogHelper.showConfirmationDialogAsync(
                                                      context,
                                                      "Delete companion".tr(),
                                                      "By deleting your companion you will also sign him/her out of all signed in sessions."
                                                          .tr());
                                                  if (!answer) {
                                                    return;
                                                  }
                                                  await DbCompanions.delete(companion);
                                                  await loadData();
                                                },
                                                child: const Text(
                                                  "Delete companion",
                                                  style: TextStyle(
                                                      color: Colors.black), // Set the text color to black
                                                ).tr(),
                                              ),
                                            ],
                                          ),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                              );
                            },
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                // Companions section
                const SizedBox(
                  height: 15,
                ),
                buildTextField("Name".tr(), userData?.name ?? ""),
                buildTextField("Surname".tr(), userData?.surname ?? ""),
                buildTextField("E-mail".tr(), userData?.email ?? ""),
                buildTextField("Sex".tr(), UserInfoModel.sexToLocale(userData?.sex)),
                buildTextField("Role".tr(), userData?.roleString ?? ""),
                Padding(
                  padding: const EdgeInsets.all(12),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      const Text("Accommodation").tr(),
                      Container(
                        alignment: Alignment.topLeft,
                        child: TextButton(
                            onPressed: userData?.accommodationPlace == null
                                ? null
                                : () => RouterService.navigate(context,
                                    "${MapPage.ROUTE}/${userData!.accommodationPlace!.id!}"),
                            child: Text(
                                userData?.accommodationPlace?.title ??
                                    "Without accommodation".tr(),
                                style: const TextStyle(fontSize: 17))),
                      )
                    ],
                  ),
                ),
                const SizedBox(
                  height: 16,
                ),
                Visibility(
                  visible: RightsService.canSeeAdmin(),
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
                const SizedBox(
                  height: 16,
                ),
                Container(
                    alignment: Alignment.topCenter,
                    child: TextButton(
                      onPressed: () async {
                        var answer = await DialogHelper.showConfirmationDialogAsync(
                            context,
                            "Change Password Instructions".tr(),
                            "You'll receive an email with a link to reset your password. Do you want to proceed?"
                                .tr(),
                            confirmButtonMessage: "Proceed".tr());
                        if (answer) {
                          await AuthService.resetPasswordForEmail(
                                  userData!.email!)
                              .then((value) {
                            ToastHelper.Show(
                                "Password reset email has been sent.".tr());
                            DialogHelper.showInformationDialogAsync(
                                context,
                                "Change Password Instructions".tr(),
                                "A password reset link has been sent to {email}. Please check your inbox and follow the instructions to reset your password."
                                    .tr(namedArgs: {
                                  "email": userData!.email!
                                }));
                          });
                        }
                      },
                      child: Text(
                        "Change password".tr(),
                        style: normalTextStyle,
                      ).tr(),
                    )),
                const SizedBox(
                  height: 8,
                ),
                Container(
                    alignment: Alignment.topCenter,
                    child: TextButton(
                        onPressed: () => DialogHelper.showInformationDialogAsync(
                            context,
                            "Delete account".tr(),
                            "Request account deletion by sending email with your credentials to info@festapp.net."
                                .tr()),
                        child: Text(
                          "Delete account".tr(),
                          style: normalTextStyle,
                        ).tr()))
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
    if (!AuthService.isLoggedIn()) {
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
    await AuthService.logout();
    ToastHelper.Show("${trPrefix}You have been signed out.".tr());
    RouterService.goBackOrHome(context);
  }

  void _redirectToAdminPage() {
    RouterService.navigateOccasion(context, AdministrationPage.ROUTE);
  }

  Future<void> loadData() async {
    loadDataOffline();
    var userInfo = await AuthService.getFullUserInfo();
    await OfflineDataService.saveUserInfo(userInfo);
    await addOfflineEventsToCompanions(userInfo);
    setState(() {
      userData = userInfo;
    });
  }

  Future<void> loadDataOffline() async {
    var userInfo = await OfflineDataService.getUserInfo();
    addOfflineEventsToCompanions(userInfo);
    setState(() {
      userData = userInfo;
    });
  }

  Future<void> addOfflineEventsToCompanions(UserInfoModel? userInfo) async {
    var events = await OfflineDataService.getAllEvents();
    userInfo?.companions?.forEach(
            (c) {
                for (var ei in c.eventIds) {
                  var match = events.firstWhereOrNull((e) => e.id == ei);
                  if (match != null) {c.schedule!.add(match);}
                }
                c.timeBlocks.addAll(c.schedule!.map((e) => TimeBlockItem.forCompanion(e)));
            });
  }
}

class AlwaysDisabledFocusNode extends FocusNode {
  @override
  bool get hasFocus => false;
}
