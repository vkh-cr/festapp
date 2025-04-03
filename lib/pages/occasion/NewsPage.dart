import 'package:auto_route/auto_route.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/dataModels/NewsModel.dart';
import 'package:fstapp/dataServices/AuthService.dart';
import 'package:fstapp/dataServices/DbNews.dart';
import 'package:fstapp/dataServices/OfflineDataService.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/pages/occasion/NewsFormPage.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/HtmlView.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/widgets/PopButton.dart';
import '../utility/HtmlEditorPage.dart';

@RoutePage()
class NewsPage extends StatefulWidget {
  static const ROUTE = "news";
  final VoidCallback? onSetAsRead;

  const NewsPage({super.key, this.onSetAsRead});

  @override
  _NewsPageState createState() => _NewsPageState();
}

class _NewsPageState extends State<NewsPage> {
  List<NewsModel> newsMessages = [];
  bool _isSetAsReadCalled = false;

  @override
  void initState() {
    super.initState();
    loadData();
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    // Check visibility when dependencies change
    _checkAsRead();
  }

  Future<void> _checkAsRead() async {
    if (ModalRoute.of(context)?.isCurrent == true && !_isSetAsReadCalled) {
      if (AuthService.isLoggedIn() && newsMessages.isNotEmpty && newsMessages.first.isRead == false) {
        await DbNews.setMessagesAsRead(newsMessages.first.id);
        widget.onSetAsRead?.call();
        _isSetAsReadCalled = true;
      }
    }
  }

  void _showMessageDialog(BuildContext context) {
    RouterService.navigateOccasion(context, NewsFormPage.ROUTE).then((value) async {
      if (value != null) {
        var data = value as Map<String, dynamic>;
        bool addToNews = data["add_to_news"] ?? true;
        bool withNotification = data["with_notification"]!;
        List<String>? to = data["to"];
        String message = data["content"]!;
        var heading = data["heading"];
        String headingDefault = data["heading_default"]!;

        await DbNews.insertNewsMessage(context, heading, headingDefault, message, addToNews, withNotification, to);

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
        title: const Text("News").tr(),
        leading: PopButton(),
      ),
      body: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
          child: ListView.builder(
            itemCount: newsMessages.length,
            itemBuilder: (BuildContext context, int index) {
              final message = newsMessages[index];
              final previousMessage = index > 0 ? newsMessages[index - 1] : null;

              final isSameDay = previousMessage != null &&
                  message.createdAt!.year == previousMessage.createdAt!.year &&
                  message.createdAt!.month == previousMessage.createdAt!.month &&
                  message.createdAt!.day == previousMessage.createdAt!.day;

              return Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: <Widget>[
                  if (index != 0 && !isSameDay) const Divider(),
                  if (index == 0 || !isSameDay)
                    Container(
                      padding: const EdgeInsets.only(top: 8.0, right: 16.0, left: 16.0),
                      alignment: Alignment.topRight,
                      child: Text(
                        DateFormat("EEEE d.M.y", context.locale.languageCode).format(message.createdAt!),
                        style: message.isRead ? readTextStyle() : unReadTextStyle(),
                      ),
                    ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 12),
                    child: Text(
                      message.createdBy ?? "",
                      style: message.isRead ? readTextStyle() : unReadTextStyle(),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 6, horizontal: 12),
                    child: Container(
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(10),
                        color: Theme.of(context).colorScheme.surface,
                      ),
                      child: Column(
                        children: [
                          Padding(
                            padding: const EdgeInsets.all(16),
                            child: HtmlView(html: message.message!, isSelectable: true),
                          ),
                          Visibility(
                            visible: AuthService.isLoggedIn(),
                            child: Padding(
                              padding: const EdgeInsets.all(8),
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.end,
                                children: [
                                  Icon(Icons.remove_red_eye, size: 16, color: Theme.of(context).disabledColor),
                                  const SizedBox(width: 6),
                                  Text(message.views.toString(), style: TextStyle(color: Theme.of(context).disabledColor, fontWeight: FontWeight.bold)),
                                  const SizedBox(width: 10),
                                ],
                              ),
                            ),
                          )
                        ],
                      ),
                    ),
                  ),
                  Visibility(
                    visible: RightsService.isEditor(),
                    child: PopupMenuButton<ContextMenuChoice>(
                      onSelected: (choice) async {
                        if (choice == ContextMenuChoice.delete) {
                          await DbNews.deleteNewsMessage(message);
                          ToastHelper.Show(context, "Message has been removed.".tr());
                        } else {
                          await RouterService.navigatePageInfo(context, HtmlEditorRoute(
                              content: {HtmlEditorPage.parContent: message.message},
                              occasionId: RightsService.currentOccasionId
                          )).then((value) async {
                            if (value != null) {
                              var newMessage = value as String;
                              message.message = newMessage;
                              await DbNews.updateNewsMessage(message);
                              ToastHelper.Show(context, "Message has been changed.".tr());
                            }
                          });
                        }
                        await loadData();
                      },
                      icon: const Icon(Icons.more_horiz),
                      itemBuilder: (BuildContext context) => <PopupMenuEntry<ContextMenuChoice>>[
                        PopupMenuItem<ContextMenuChoice>(
                          value: ContextMenuChoice.edit,
                          child: const Text("Edit").tr(),
                        ),
                        PopupMenuItem<ContextMenuChoice>(
                          value: ContextMenuChoice.delete,
                          child: const Text("Delete").tr(),
                        )
                      ],
                    ),
                  ),
                ],
              );
            },
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
  TextStyle readTextStyle() => TextStyle(fontWeight: FontWeight.bold, color: Theme.of(context).hintColor);
}

enum ContextMenuChoice { delete, edit }
