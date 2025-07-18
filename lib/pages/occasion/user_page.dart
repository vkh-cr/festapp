import 'package:auto_route/auto_route.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:file_saver/file_saver.dart';
import 'package:flutter/foundation.dart' show Uint8List, kIsWeb;
import 'package:flutter/material.dart';
import 'package:fstapp/components/inventory/views/inventory_strings.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/data_models/tb.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/data_services/db_companions.dart';
import 'package:fstapp/data_services/db_users.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_models/user_info_model.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/pages/occasion/event_page.dart';
import 'package:fstapp/pages/occasion/settings_page.dart';
import 'package:fstapp/pages/occasionAdmin/admin_page.dart';
import 'package:fstapp/pages/user/login_page.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/components/timeline/schedule_helper.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/buttons_helper.dart';
import 'package:fstapp/components/timeline/schedule_timeline.dart';
import 'package:qr_flutter/qr_flutter.dart';
import 'package:screenshot/screenshot.dart';

import 'user_stay_page.dart';

@RoutePage()
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
              icon: Icon(
                Icons.arrow_back,
                color: Colors.black,
              ),
              onPressed: () {
                RouterService.goBack(context);
              },
            ),
            actions: [
              Padding(
                padding: const EdgeInsets.all(6.0),
                child: IconButton(
                  onPressed: () async {
                    final Uint8List? captured = await screenshotController.capture();
                    if (captured == null) return;
                    await FileSaver.instance.saveFile(
                      name: name,
                      bytes: captured,
                      fileExtension: 'png',
                      mimeType: MimeType.png,
                    );
                  },
                  icon: Icon(
                    Icons.download,
                    color: Colors.black,
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
                          color: Colors.black,
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
                        color: Colors.black,
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
        icon: Icon(Icons.settings, color: ThemeConfig.appBarColorNegative(),),
        onPressed: () => RouterService.navigate(context, SettingsPage.ROUTE),
      ),
    ];

    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Text("Profile", style: TextStyle(color: ThemeConfig.appBarColorNegative())).tr(),
        leading: BackButton(
          color: ThemeConfig.appBarColorNegative(),
          onPressed: () => RouterService.popOrHome(context),
        ),
        actions: actions,
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
          child: SingleChildScrollView(
            child: Column(
              children: <Widget>[
                const SizedBox(height: 15),

                if (FeatureService.isFeatureEnabled(FeatureConstants.entryCode))
                  Container(
                    padding: const EdgeInsets.symmetric(vertical: 10),
                    child: ButtonsHelper.buildReferenceButton(
                      context: context,
                      onPressed: () => _showFullScreenDialog(
                        context,
                        userData?.occasionUser!.data![Tb.occasion_users.data_name],
                        AppConfig.appName,
                        userData?.occasionUser!.user ?? "",
                      ),
                      icon: Icons.qr_code,
                      label: "Show my code".tr(),
                    ),
                  ),

                if (FeatureService.isFeatureEnabled(FeatureConstants.companions) &&
                    (userData?.companions?.isNotEmpty ?? false))
                  Container(
                    padding: const EdgeInsets.symmetric(vertical: 10),
                    decoration: BoxDecoration(
                      border: Border(
                        bottom: BorderSide(color: Theme.of(context).dividerColor),
                      ),
                    ),
                    child: ListView.builder(
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      itemCount: (userData?.companions?.length ?? 0) + 1,
                      itemBuilder: (context, index) {
                        if (index == 0) {
                          return ListTile(
                            title: Text(
                              "Companions",
                              style: TextStyle(
                                color: ThemeConfig.blackColor(context),
                                fontWeight: FontWeight.bold,
                              ),
                            ).tr(),
                          );
                        }
                        final companion = userData?.companions![index - 1];
                        return Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 10),
                          child: Column(
                            children: [
                              const SizedBox(height: 10),
                              Container(
                                decoration: BoxDecoration(
                                  color: ThemeConfig.qrButtonColor(context),
                                  borderRadius: BorderRadius.circular(12),
                                ),
                                child: ExpansionTile(
                                  shape: const Border(),
                                  title: Text(
                                    companion!.name,
                                    style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                      color: Theme.of(context).colorScheme.onSurface,
                                    ),
                                  ),
                                  subtitle: Text(
                                    "Signed in events: {count}"
                                        .tr(namedArgs: {
                                      "count": companion.schedule?.length.toString() ?? "0"
                                    }),
                                    style: TextStyle(
                                      color: Theme.of(context).colorScheme.onSurface,
                                      fontSize: 13,
                                    ),
                                  ),
                                  trailing: ButtonsHelper.buildReferenceButton(
                                    context: context,
                                    onPressed: () => _showFullScreenDialog(
                                      context,
                                      companion.name,
                                      AppConfig.appName,
                                      companion.id,
                                    ),
                                    icon: Icons.qr_code,
                                    label: "Show Code".tr(),
                                  ),
                                  expandedCrossAxisAlignment: CrossAxisAlignment.center,
                                  children: [
                                    const SizedBox(height: 36),
                                    ConstrainedBox(
                                      constraints: const BoxConstraints(
                                        maxWidth: 600,
                                      ),
                                      child: ScheduleTimeline(
                                        eventGroups: TimeBlockHelper.splitTimeBlocksByDay(
                                          companion.timeBlocks,
                                          context,
                                        ),
                                        onEventPressed: (eventId) async {
                                          await RouterService.navigateOccasion(
                                            context,
                                            "${EventPage.ROUTE}/$eventId",
                                          ).then((value) => loadData());
                                          await loadData();
                                        },
                                        nodePosition: 0.3,
                                        emptyContent: Center(
                                          child: Text(
                                            "Companion's events will appear here.",
                                            style: TextStyle(
                                              color: ThemeConfig.grey600(context),
                                            ),
                                          ).tr(),
                                        ),
                                      ),
                                    ),
                                    const SizedBox(height: 48),
                                    Column(
                                      mainAxisAlignment: MainAxisAlignment.center,
                                      children: [
                                        TextButton(
                                          onPressed: () async {
                                            var answer =
                                            await DialogHelper.showConfirmationDialog(
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
                                          child: Text("Delete companion").tr(),
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

                const SizedBox(height: 15),
                buildTextField("Name".tr(),
                    userData?.occasionUser?.data![Tb.occasion_users.data_name] ?? ""),
                buildTextField("Surname".tr(),
                    userData?.occasionUser?.data![Tb.occasion_users.data_surname] ?? ""),
                buildTextField("E-mail".tr(),
                    userData?.occasionUser?.data![Tb.occasion_users.data_email] ?? ""),
                buildTextField("I am".tr(),
                    UserInfoModel.sexToLocale(userData?.occasionUser?.data![Tb.occasion_users.data_sex])),
                if(FeatureService.isFeatureEnabled(FeatureConstants.services))
                  Padding(
                    padding: const EdgeInsets.all(12),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        // const Text("Accommodation").tr(),
                        // const SizedBox(height: 4),
                        // Container(
                        //   alignment: Alignment.topLeft,
                        //   child: TextButton(
                        //     onPressed: userData?.accommodationPlace == null
                        //         ? null
                        //         : () => RouterService.navigateOccasion(
                        //       context,
                        //       "${MapPage.ROUTE}/${userData?.accommodationPlace!.id!}",
                        //     ),
                        //     child: userData?.accommodationPlace == null
                        //         ? Text(
                        //       userData?.accommodationPlace?.title ?? "Without accommodation".tr(),
                        //       style: const TextStyle(fontSize: 20),
                        //     )
                        //         : IntrinsicWidth(
                        //       child: Row(
                        //         children: [
                        //           const Icon(Icons.place),
                        //           const SizedBox(width: 4),
                        //           Text(
                        //             userData!.accommodationPlace!.title!,
                        //             style: const TextStyle(fontSize: 20),
                        //           ),
                        //           const SizedBox(width: 4),
                        //         ],
                        //       ),
                        //     ),
                        //   ),
                        // ),
                        // const SizedBox(height: 16),
                        ListTile(
                          tileColor: ThemeConfig.qrButtonColor(context), // Added this line
                          leading: Icon(Icons.hotel, color: Theme.of(context).colorScheme.primary),
                          title: Text(InventoryStrings.userStayLinkTitle, style: const TextStyle(fontWeight: FontWeight.bold)),
                          subtitle: Text(InventoryStrings.userStayLinkSubtitle),
                          trailing: const Icon(Icons.arrow_forward_ios, size: 16),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(12),
                            // The side border has been removed to allow the background color to fill the shape fully without a separate outline.
                            // If you still want a border, you can keep the 'side' property.
                          ),
                          onTap: () => RouterService.navigateOccasion(context, UserStayPage.ROUTE),
                        ),
                      ],
                    ),
                  ),
                const SizedBox(height: 16),
                Visibility(
                  visible: RightsService.canSeeAdmin(),
                  child: ButtonsHelper.bigButton(
                    context: context,
                    onPressed: () async => _redirectToAdminPage(),
                    label: "Event management".tr(),
                  ),
                ),
                const SizedBox(height: 16),
                ButtonsHelper.bigButton(
                  context: context,
                  onPressed: () async => _logout(),
                  label: "Sign out".tr(),
                  color: ThemeConfig.seed1,
                  textColor: Colors.white,
                ),
                const SizedBox(height: 24),
                Container(
                  alignment: Alignment.topCenter,
                  child: TextButton(
                    onPressed: () async {
                      var answer = await DialogHelper.showConfirmationDialog(
                        context,
                        "Change Password Instructions".tr(),
                        "You'll receive an email with a link to reset your password. Do you want to proceed?"
                            .tr(),
                        confirmButtonMessage: "Proceed".tr(),
                      );
                      if (answer) {
                        await AuthService
                            .resetPasswordForEmail(userData!.occasionUser!.data![Tb.occasion_users.data_email])
                            .then((value) {
                          ToastHelper.Show(context, "Password reset email has been sent.".tr());
                          DialogHelper.showInformationDialog(
                            context,
                            "Change Password Instructions".tr(),
                            "A password reset link has been sent to {email}. Please check your inbox and follow the instructions to reset your password."
                                .tr(namedArgs: {
                              "email": userData!.occasionUser!.data![Tb.occasion_users.data_email]
                            }),
                          );
                        });
                      }
                    },
                    child: Text(
                      "Change password".tr(),
                      style: TextStyle(fontSize: StylesConfig.normalClickableFontSize),
                    ).tr(),
                  ),
                ),
                const SizedBox(height: 8),
                Container(
                  alignment: Alignment.topCenter,
                  child: TextButton(
                    onPressed: () => DialogHelper.showInformationDialog(
                      context,
                      "Delete account".tr(),
                      "Request account deletion by sending email with your credentials to info@festapp.net."
                          .tr(),
                    ),
                    child: Text(
                      "Delete account".tr(),
                      style: TextStyle(fontSize: StylesConfig.normalClickableFontSize),
                    ).tr(),
                  ),
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
            )),
      ),
    );
  }

  Future<void> _logout() async {
    var trPrefix = (await DbUsers.getCurrentUserInfo()).getGenderPrefix();
    await AuthService.logout();
    ToastHelper.Show(context, "${trPrefix}You have been signed out.".tr());
    RouterService.popOrHome(context);
  }

  void _redirectToAdminPage() {
    RouterService.navigateOccasion(context, AdminPage.ROUTE).then((value) => loadData());
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