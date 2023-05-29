import 'package:flutter/material.dart';
import '../services/DataService.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

class NewsMessage {
  final DateTime created_at;
  final String message;

  NewsMessage({required this.created_at, required this.message});
}

class NewsPage extends StatefulWidget {
  @override
  _NewsPageState createState() => _NewsPageState();
}

class _NewsPageState extends State<NewsPage> {
  final List<NewsMessage> newsMessages = [];

  TextEditingController _messageController = TextEditingController();

  void _showMessageDialog(BuildContext context) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Zadejte zprávu'),
          content: SingleChildScrollView(
            child: TextField(
              controller: _messageController,
              maxLines: null,
              keyboardType: TextInputType.multiline,
              decoration: InputDecoration(hintText: 'Zpráva'),
            ),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: Text('Storno'),
            ),
            TextButton(
              onPressed: () async {
                String message = _messageController.text;
                await _sendMessage(message);
                Navigator.pop(context);
              },
              child: Text('Odeslat'),
            ),
          ],
        );
      },
    );
  }

  Future<void> _sendMessage(String message) async {
  DateTime currentDate = DateTime.now();
  NewsMessage newMessage = NewsMessage (created_at: currentDate, message: message);

  final client = Supabase.instance.client;
  final response = await client.from('news').insert([
    {'created_at': currentDate.toIso8601String(), 'message': message}
  ]).execute();

  if (response.status != 201) {
    print('Chyba při vkládání zprávy');
    return;
  }

  setState(() {
    newsMessages.insert(0, newMessage);
  });
  _messageController.clear();
}


  Future<void> _loadNewsMessages() async {
  final client = Supabase.instance.client;
  final response = await client.from('news').select().order('created_at', ascending: false).execute();

  if (response.status != 200) {
    print('Chyba při načítání zpráv');
    return;
  }

  List<NewsMessage> loadedMessages = [];

  for (var row in response.data as List<dynamic>) {
    DateTime createdAt = DateTime.parse(row['created_at']);
    String message = row['message'];
    NewsMessage newsMessage = NewsMessage(created_at: createdAt, message: message);
    loadedMessages.add(newsMessage);
  }

  setState(() {
    newsMessages.clear();
    newsMessages.addAll(loadedMessages);
  });
}


  @override
  void initState() {
    super.initState();
    _loadNewsMessages();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Stránka s Ohláškami'),
      ),
      body: ListView.builder(
        itemCount: newsMessages.length,
        itemBuilder: (BuildContext context, int index) {
          final message = newsMessages[index];
          final previousMessage = index > 0 ? newsMessages[index - 1] : null;

          final isSameDay = previousMessage != null &&
              message.created_at.year == previousMessage.created_at.year &&
              message.created_at.month == previousMessage.created_at.month &&
              message.created_at.day == previousMessage.created_at.day;

          return Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
                            if (index == 0 || !isSameDay)
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 8.0, horizontal: 16.0),
                  child: Text(
                    formatDate(message.created_at),
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                  ),
                ),
              ListTile(
                title: Text(message.message),
              ),
              Divider(),
            ],
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => _showMessageDialog(context),
        child: Icon(Icons.add),
      ),
    );
  }
}

String formatDate(DateTime date) {
  final weekdayNames = [
    'pondělí',
    'úterý',
    'středa',
    'čtvrtek',
    'pátek',
    'sobota',
    'neděle',
  ];

  final weekday = weekdayNames[date.weekday - 1];

  return "$weekday ${date.day}.${date.month}.${date.year}";
}





