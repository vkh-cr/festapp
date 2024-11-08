import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/cupertino.dart';
import 'package:fstapp/appConfig.dart';
import 'package:fstapp/dataModels/NewsModel.dart';
import 'package:fstapp/dataModels/Tb.dart';
import 'package:fstapp/dataServices/AuthService.dart';
import 'package:fstapp/dataServices/RightsService.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:html/parser.dart';

class DbNews {
  static final _supabase = Supabase.instance.client;
  static Future<void> deleteNewsMessage(NewsModel message) async {
    var lastMes = await _supabase
        .from(Tb.news.table)
        .select(Tb.news.id)
        .lt(Tb.news.created_at, message.createdAt!)
// from some reason lower than is behaving like lower and equal than on web platform
// therefore additional check
        .neq(Tb.news.id, message.id)
        .eq(Tb.news.occasion, RightsService.currentOccasion!)
        .order(Tb.news.created_at)
        .limit(1)
        .maybeSingle();

    if(lastMes!=null) {
      var currentUsers = await _supabase
          .from(Tb.user_news.table)
          .select(Tb.user_news.user)
          .eq(Tb.user_news.news_id, message.id);

      List<Map<String, dynamic>> toBeUpdated = [];
      for(var u in currentUsers) {
        toBeUpdated.add({
          Tb.user_news.user: u[Tb.user_news.user],
          Tb.user_news.news_id: lastMes[Tb.news.id]
        });
      }

      await _supabase
          .from(Tb.user_news.table)
          .upsert(toBeUpdated).select();
    }
    else {
      await _supabase
          .from(Tb.user_news.table)
          .delete()
          .eq(Tb.user_news.news_id, message.id);
    }

    await _supabase
        .from(Tb.news.table)
        .delete()
        .eq(Tb.news.id, message.id);
  }

  static Future<void> updateNewsMessage(NewsModel message) async {
    await _supabase
        .from(Tb.news.table)
        .update({Tb.news.message:message.message})
        .eq(Tb.news.id, message.id);
  }

  static insertNewsMessage(BuildContext context, String? heading, String headingDefault, String message, bool addToNews, bool withNotification, List<String>? to) async {
    if (addToNews) {
      var messageForNews = heading != null ? "<strong>$heading</strong><br>$message" : message;
      await _supabase.from(Tb.news.table).insert(
          {
            Tb.news.occasion: RightsService.currentOccasion!,
            Tb.news.message: messageForNews,
            Tb.news.created_by: AuthService.currentUserId()
          }
      ).select();
    }

    if (withNotification) {
      String basicMessage = "";
      var document = parse(message);
      for (var child in document.getElementsByTagName("p")) {
        var innerText = "${child.text}\n";
        if (innerText.trim().isEmpty) {
          continue;
        }
        basicMessage += innerText;
      }
      basicMessage = basicMessage.trim();
      await _supabase.from(Tb.log_notifications.table)
          .insert(
          {
            Tb.log_notifications.occasion: RightsService.currentOccasion!,
            Tb.log_notifications.to: to,
            Tb.log_notifications.content: basicMessage,
            Tb.log_notifications.heading: heading ?? headingDefault,
            Tb.log_notifications.organization: AppConfig.organization,
          }
      );

      ToastHelper.Show(context, "Message has been sent.".tr());
      return;
    }

    if (addToNews) {
      ToastHelper.Show(context, "Message has been created.".tr());
    }
  }

  static Future<int> countNewMessages() async {
    AuthService.ensureUserIsLoggedIn();
    int lastMessageId = await getLastReadMessage();
    var result = await _supabase
        .from(Tb.news.table)
        .select()
        .eq(Tb.news.occasion, RightsService.currentOccasion!)
        .gt(Tb.news.id, lastMessageId)
        .count();
    return result.count;
  }

  static Future<int> getLastReadMessage() async {
    AuthService.ensureUserIsLoggedIn();
    int lastMessageId = 0;
    var lastMessage = await _supabase
        .from(Tb.news.table)
        .select(
        "${Tb.news.id},"
        "${Tb.user_news.table}!inner(${Tb.user_news.news_id})"
        )
        .eq(Tb.news.occasion, RightsService.currentOccasion!)
        .eq("${Tb.user_news.table}.${Tb.user_news.user}", AuthService.currentUserId())
        .maybeSingle();
    if (lastMessage != null) {
      lastMessageId = lastMessage[Tb.news.id];
    }
    return lastMessageId;
  }

  static void setMessagesAsRead(int newId, int oldId) async {
    AuthService.ensureUserIsLoggedIn();
    await _supabase
        .from(Tb.user_news.table)
        .delete()
        .eq(Tb.user_news.user, AuthService.currentUserId())
        .eq(Tb.user_news.news_id, oldId);

    await _supabase
        .from(Tb.user_news.table)
        .insert(
        {Tb.user_news.user: AuthService.currentUserId(), Tb.user_news.news_id: newId, Tb.user_news.occasion: RightsService.currentOccasion}
    ).select();
  }

  static Future<List<NewsModel>> getAllNewsMessages() async {
    int lastReadMessageId = 0;
    if (AuthService.isLoggedIn()) {
      lastReadMessageId = await getLastReadMessage();
    }
    var data = await _supabase
        .from(Tb.news.table)
        .select(
            "${Tb.news.id},"
            "${Tb.news.created_at},"
            "${Tb.news.message},"
            "${Tb.user_info_public.table}(${Tb.user_info_public.name},${Tb.user_info_public.surname}),"
            "${Tb.user_news_views.table}(count)")
        .eq(Tb.news.occasion, RightsService.currentOccasion!)
        .order(Tb.news.created_at);

    List<NewsModel> loadedMessages = List<NewsModel>.from(data.map((x) => NewsModel.fromJson(x)));

    int viewsAggregate = 0;
    for (var message in loadedMessages) {
      viewsAggregate += message.views;
      message.views = viewsAggregate;
      if (AuthService.isLoggedIn()) {
        message.isRead = lastReadMessageId >= message.id;
      }
    }

    if (AuthService.isLoggedIn() && loadedMessages.isNotEmpty) {
      DbNews.setMessagesAsRead(loadedMessages.first.id, lastReadMessageId);
    }

    return loadedMessages;
  }

}

