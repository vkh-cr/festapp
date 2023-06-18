import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import '../models/NewsMessage.dart';
import '../services/DataService.dart';

class NewsPage extends StatefulWidget {
  @override
  _NewsPageState createState() => _NewsPageState();
}

class _NewsPageState extends State<NewsPage> {
  final List<NewsMessage> newsMessages = [];
  final TextEditingController _messageController = TextEditingController();

  void _showMessageDialog(BuildContext context) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text('Zadejte zprávu'),
          content: SingleChildScrollView(
            child: Column(
              children: [
                TextField(
                  controller: _messageController,
                  maxLines: null,
                  keyboardType: TextInputType.multiline,
                  decoration: const InputDecoration(hintText: 'Zpráva'),
                )
              ],
            ),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: const Text('Storno'),
            ),
            TextButton(
              onPressed: () async {
                String message = _messageController.text;
                await sendMessage(message);
                _messageController.clear();
                Navigator.pop(context);
              },
              child: const Text('Odeslat'),
            ),
          ],
        );
      },
    );
  }

  Future<void> sendMessage(String message) async {
    await DataService.insertNewsMessage(message);
    await loadNewsMessages();
  }

  Future<void> loadNewsMessages() async {
    var loadedMessages = await DataService.loadNewsMessages();
    setState(() {
      newsMessages.clear();
      newsMessages.addAll(loadedMessages);
    });
  }

  @override
  void initState() {
    super.initState();
    loadNewsMessages();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Ohlášky'),
      ),
      body: ListView.builder(
        itemCount: newsMessages.length,
        itemBuilder: (BuildContext context, int index) {
          final message = newsMessages[index];
          final previousMessage = index > 0 ? newsMessages[index - 1] : null;

          final isSameDay = previousMessage != null &&
              message.createdAt.year == previousMessage.createdAt.year &&
              message.createdAt.month == previousMessage.createdAt.month &&
              message.createdAt.day == previousMessage.createdAt.day;

          return Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              if (index == 0 || !isSameDay)
                Padding(
                  padding: const EdgeInsets.only(top: 8.0, right: 16.0, left: 16.0),
                  child: Text(
                    DateFormat("EEEE d.M.y", "cs").format(message.createdAt),
                    style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                  ),
                ),
              ListTile(
                title: Text(message.message),
                subtitle: Text('Odeslal: ${message.createdBy}'), // Zobrazení jména odesílatele
              ),
              const Divider(),
            ],
          );
        },
      ),
      floatingActionButton: Visibility(
        visible: DataService.isLoggedIn(),
        child: FloatingActionButton(
          onPressed: () => _showMessageDialog(context),
          child: const Icon(Icons.add),
        ),
      ),
    );
  }
}