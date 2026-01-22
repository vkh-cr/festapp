import 'package:auto_route/auto_route.dart';
import 'package:fstapp/app_router.gr.dart';
import 'package:fstapp/components/news/news_model.dart';
import 'package:fstapp/data_services/auth_service.dart';
import 'package:fstapp/components/news/db_news.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/components/news/news_form_page.dart';
import 'package:fstapp/services/toast_helper.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/components/html/html_view.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/widgets/pop_button.dart';
import 'package:fstapp/components/images/zoomable_image/zoomable_image.dart';
import '../html/html_editor_page.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import '../occasion/occasion_home_page.dart';

@RoutePage()
class NewsPage extends StatefulWidget {
  static const ROUTE = "news";
  VoidCallback? onSetAsRead;

  NewsPage({super.key, this.onSetAsRead});

  @override
  _NewsPageState createState() => _NewsPageState();
}

class _NewsPageState extends State<NewsPage> {
  List<NewsModel> newsMessages = [];
  bool _isSetAsReadCalled = false;

  @override
  void initState() {
    super.initState();
    context.tabsRouter.addListener(() async {
      if (context.tabsRouter.activeIndex ==
          OccasionHomePage.visibleTabKeys.indexOf(OccasionTab.news)) {
        _checkAsRead();
        loadData();
      }
    });
    loadData();
  }

  @override
  void dispose() {
    super.dispose();
  }

  Future<void> _checkAsRead() async {
    if (ModalRoute.of(context)?.isCurrent == true && !_isSetAsReadCalled) {
      if (AuthService.isLoggedIn() &&
          newsMessages.isNotEmpty &&
          newsMessages.first.isRead == false) {
        await DbNews.setMessagesAsRead(newsMessages.first.id);
        widget.onSetAsRead?.call();
        _isSetAsReadCalled = true;
      }
    }
  }

  void _showMessageDialog(BuildContext context) {
    RouterService.navigateOccasion(context, NewsFormPage.ROUTE)
        .then((value) async {
      if (value != null) {
        var data = value as Map<String, dynamic>;
        bool addToNews = data["add_to_news"] ?? true;
        bool withNotification = data["with_notification"]!;
        List<String>? to = data["to"];
        String message = data["content"]!;
        var heading = data["heading"];
        String headingDefault = data["heading_default"]!;

        await DbNews.insertNewsMessage(context, heading, headingDefault,
            message, addToNews, withNotification, to);

        if (addToNews) {
          await loadData();
        }
      }
    });
  }

  Future<void> loadNewsMessages() async {
    var loadedMessages = await DbNews.getAllNewsMessages();
    setState(() {
      newsMessages = loadedMessages;
    });
  }

  Future<void> loadOfflineData() async {
    var loadedMessages = await OfflineDataService.getAllMessages();
    setState(() {
      newsMessages = loadedMessages;
    });
  }

  Future<void> loadData() async {
    await loadOfflineData();
    await loadNewsMessages();
    await OfflineDataService.saveAllMessages(newsMessages);
    _checkAsRead();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ThemeConfig.newsPageColor(context),
      appBar: AppBar(
        title: Text("News",
                style: TextStyle(color: ThemeConfig.appBarColorNegative()))
            .tr(),
        leading: PopButton(),
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
          child: newsMessages.isEmpty
              ? Padding(
                  padding: const EdgeInsets.all(32.0),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        Icons.article_outlined,
                        size: 64,
                        color: Theme.of(context).disabledColor,
                      ),
                      const SizedBox(height: 16),
                      Text(
                        tr('No news messages yet'),
                        textAlign: TextAlign.center,
                      ),
                    ],
                  ),
                )
              : PinchScrollView(
                  builder: (onPinchStart, onPinchEnd) => Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      for (var i = 0; i < newsMessages.length; i++) ...[
                        if (i != 0) const Divider(),
                        Builder(builder: (context) {
                          final message = newsMessages[i];
                          final previous = i > 0 ? newsMessages[i - 1] : null;
                          final isSameDay = previous != null &&
                              message.createdAt!.year ==
                                  previous.createdAt!.year &&
                              message.createdAt!.month ==
                                  previous.createdAt!.month &&
                              message.createdAt!.day == previous.createdAt!.day;
                          return Column(
                            crossAxisAlignment: CrossAxisAlignment.stretch,
                            children: [
                              if (i == 0 || !isSameDay)
                                Container(
                                  padding: const EdgeInsets.only(
                                      top: 8.0, right: 16.0, left: 16.0),
                                  alignment: Alignment.topRight,
                                  child: Text(
                                    DateFormat("EEEE d.M.y",
                                            context.locale.languageCode)
                                        .format(message.createdAt!),
                                    style: message.isRead
                                        ? readTextStyle()
                                        : unReadTextStyle(),
                                  ),
                                ),
                              Padding(
                                padding:
                                    const EdgeInsets.symmetric(horizontal: 12),
                                child: Text(
                                  message.createdBy ?? "",
                                  style: message.isRead
                                      ? readTextStyle()
                                      : unReadTextStyle(),
                                ),
                              ),
                              Padding(
                                padding: const EdgeInsets.symmetric(
                                    vertical: 6, horizontal: 12),
                                child: Container(
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(
                                        StylesConfig.newsItemRoundness),
                                    color:
                                        Theme.of(context).colorScheme.surface,
                                  ),
                                  child: Column(
                                    children: [
                                      Padding(
                                        padding: const EdgeInsets.all(16),
                                        child: HtmlView(
                                          html: message.message!,
                                          isSelectable: true,
                                          twoFingersOn: onPinchStart,
                                          twoFingersOff: onPinchEnd,
                                        ),
                                      ),
                                      Visibility(
                                        visible: AuthService.isLoggedIn(),
                                        child: Padding(
                                          padding: const EdgeInsets.all(8),
                                          child: Row(
                                            mainAxisAlignment:
                                                MainAxisAlignment.end,
                                            children: [
                                              Icon(Icons.remove_red_eye,
                                                  size: 16,
                                                  color: Theme.of(context)
                                                      .disabledColor),
                                              const SizedBox(width: 6),
                                              Text(
                                                message.views.toString(),
                                                style: TextStyle(
                                                  color: Theme.of(context)
                                                      .disabledColor,
                                                  fontWeight: FontWeight.bold,
                                                ),
                                              ),
                                              const SizedBox(width: 10),
                                            ],
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                              if (RightsService.isEditor())
                                PopupMenuButton<ContextMenuChoice>(
                                  onSelected: (choice) async {
                                    if (choice == ContextMenuChoice.delete) {
                                      await DbNews.deleteNewsMessage(message);
                                      ToastHelper.Show(context,
                                          "Message has been removed.".tr());
                                    } else {
                                      await RouterService.navigatePageInfo(
                                        context,
                                        HtmlEditorRoute(
                                          content: {
                                            HtmlEditorPage.parContent:
                                                message.message
                                          },
                                          occasionId:
                                              RightsService.currentOccasionId(),
                                        ),
                                      ).then((value) async {
                                        if (value != null) {
                                          var newMessage = value as String;
                                          message.message = newMessage;
                                          await DbNews.updateNewsMessage(
                                              message);
                                          ToastHelper.Show(context,
                                              "Message has been changed.".tr());
                                        }
                                      });
                                    }
                                    await loadData();
                                  },
                                  icon: const Icon(Icons.more_horiz),
                                  itemBuilder: (BuildContext context) =>
                                      <PopupMenuEntry<ContextMenuChoice>>[
                                    PopupMenuItem<ContextMenuChoice>(
                                      value: ContextMenuChoice.edit,
                                      child: Text(CommonStrings.edit).tr(),
                                    ),
                                    PopupMenuItem<ContextMenuChoice>(
                                      value: ContextMenuChoice.delete,
                                      child: const Text("Delete").tr(),
                                    )
                                  ],
                                ),
                            ],
                          );
                        }),
                      ],
                    ],
                  ),
                ),
        ),
      ),
      floatingActionButton: Visibility(
        visible: RightsService.isEditor(),
        child: FloatingActionButton(
          onPressed: () => _showMessageDialog(context),
          child: const Icon(Icons.add),
        ),
      ),
    );
  }

  TextStyle unReadTextStyle() => TextStyle(fontWeight: FontWeight.bold);
  TextStyle readTextStyle() => TextStyle(
      fontWeight: FontWeight.bold, color: Theme.of(context).hintColor);
}

enum ContextMenuChoice { delete, edit }
