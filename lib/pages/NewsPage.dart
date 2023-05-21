import 'package:flutter/material.dart';

class NewsMessage {
  final DateTime date;
  final String message;

  NewsMessage({required this.date, required this.message});
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
            onPressed: () {
              String message = _messageController.text;
              _sendMessage(message);
              Navigator.pop(context);
            },
            child: Text('Odeslat'),
          ),
        ],
      );
    },
  );
}

  void _sendMessage(String message) {
    DateTime currentDate = DateTime.now();
    NewsMessage newMessage = NewsMessage(date: currentDate, message: message);
    setState(() {
      newsMessages.insert(0, newMessage);
    });
    _messageController.clear();
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
              message.date.year == previousMessage.date.year &&
              message.date.month == previousMessage.date.month &&
              message.date.day == previousMessage.date.day;

          return Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              if (index == 0 || !isSameDay)
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 8.0, horizontal: 16.0),
                  child: Text(
                    formatDate(message.date),
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
