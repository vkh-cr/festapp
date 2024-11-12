import 'package:auto_route/auto_route.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataModels/InformationModel.dart';
import 'package:fstapp/dataModels/GameSettingsModel.dart';
import 'package:fstapp/dataServices/DbInformation.dart';
import 'package:fstapp/dataServices/DbOccasions.dart';
import 'package:fstapp/styles/Styles.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/themeConfig.dart' show ThemeConfig;
import 'dart:async';

@RoutePage()
class GamePage extends StatefulWidget {
  final String? type = InformationModel.gameType;

  static const ROUTE = "game";

  GamePage({super.key});

  @override
  _GamePageState createState() => _GamePageState();
}

class _GamePageState extends State<GamePage> {
  List<InformationModel> _gameList = [];
  Set<int> _correctGuesses = {};
  String title = "Game".tr();
  GameSettingsModel? _gameSettings;
  Timer? _countdownTimer;
  Duration? _remainingTime;

  @override
  void initState() {
    super.initState();
    loadGameData();
  }

  @override
  void dispose() {
    _countdownTimer?.cancel();
    super.dispose();
  }

  Future<void> loadGameData() async {
    // Load game settings and information
    _gameSettings = await DbOccasions.loadGameSettings();
    var allInfo = await DbInformation.getAllInformationForDataGrid(InformationModel.gameType);

    setState(() {
      _gameList = allInfo.toList();
    });

    // Check if the game is ongoing and start countdown if necessary
    if (_gameSettings != null && DateTime.now().isBefore(_gameSettings!.end!)) {
      if (DateTime.now().isAfter(_gameSettings!.start!)) {
        startCountdown(_gameSettings!.end!);
      }
    }
  }

  void startCountdown(DateTime endTime) {
    _remainingTime = endTime.difference(DateTime.now());
    _countdownTimer = Timer.periodic(Duration(seconds: 1), (timer) {
      setState(() {
        _remainingTime = endTime.difference(DateTime.now());
        if (_remainingTime!.isNegative) {
          _countdownTimer?.cancel();
          _remainingTime = null;
          // Close any open dialogs if the game has ended
          Navigator.of(context, rootNavigator: true).popUntil((route) => route.isFirst);
        }
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    final now = DateTime.now();
    final hasNotStarted = _gameSettings != null && now.isBefore(_gameSettings!.start!);
    final hasEnded = _gameSettings != null && now.isAfter(_gameSettings!.end!);

    return Scaffold(
      appBar: AppBar(
        title: Text(title),
        leading: BackButton(
          onPressed: () => RouterService.popOrHome(context),
        ),
      ),
      body: Stack(
        children: [
          // Game content
          Align(
            alignment: Alignment.topCenter,
            child: ConstrainedBox(
              constraints: BoxConstraints(maxWidth: appMaxWidth),
              child: GridView.builder(
                padding: const EdgeInsets.all(8),
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 4, // Smaller rectangles with 4 items per row
                  childAspectRatio: 0.75, // Adjusted for a smaller appearance
                  crossAxisSpacing: 8,
                  mainAxisSpacing: 8,
                ),
                itemCount: _gameList.length,
                itemBuilder: (BuildContext context, int index) {
                  return GestureDetector(
                    onTap: () => _showGuessDialog(context, index),
                    child: Container(
                      decoration: BoxDecoration(
                        color: _correctGuesses.contains(index)
                            ? ThemeConfig.correctGuessColor(context) : Colors.grey,
                        borderRadius: BorderRadius.circular(8),
                      ),
                      alignment: Alignment.center,
                      child: Text(
                        _gameList[index].title ?? "-",
                        textAlign: TextAlign.center,
                        style: const TextStyle(
                          fontSize: 16,
                          color: Colors.white,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                  );
                },
              ),
            ),
          ),

          // Overlay for "Game not started yet"
          if (hasNotStarted)
            _buildOverlay("Game has not started yet"),

          // Countdown overlay
          if (!hasNotStarted && !hasEnded && _remainingTime != null)
            Positioned(
              top: 16,
              right: 16,
              child: Container(
                padding: const EdgeInsets.all(8),
                decoration: BoxDecoration(
                  color: Colors.black54,
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Text(
                  "Time left: ${_remainingTime!.inHours}:${(_remainingTime!.inMinutes % 60).toString().padLeft(2, '0')}:${(_remainingTime!.inSeconds % 60).toString().padLeft(2, '0')}",
                  style: const TextStyle(color: Colors.white, fontSize: 16),
                ),
              ),
            ),

          // Overlay for "Game has ended"
          if (hasEnded)
            _buildOverlay("Game has ended"),
        ],
      ),
    );
  }

  Widget _buildOverlay(String message) {
    return Container(
      color: Colors.black54,
      alignment: Alignment.center,
      child: Text(
        message.tr(),
        style: const TextStyle(
          color: Colors.white,
          fontSize: 24,
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }

  Future<void> _showGuessDialog(BuildContext context, int index) async {
    String? userGuess;
    String gameTitle = _gameList[index].title ?? "Game";

    await showDialog(
      context: context,
      builder: (BuildContext dialogContext) {
        return AlertDialog(
          title: Text("Check point {title}".tr(namedArgs: {"title": gameTitle})),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextField(
                onChanged: (value) => userGuess = value,
                decoration: InputDecoration(
                  hintText: "Take a guess".tr(),
                ),
              ),
            ],
          ),
          actions: [
            TextButton(
              onPressed: () async {
                var isCorrect = await DbInformation.makeGameGuess(context, _gameList[index].id!, userGuess ?? "");
                if (isCorrect) {
                  setState(() {
                    _correctGuesses.add(index);
                  });
                  Navigator.pop(dialogContext);
                }
              },
              child: const Text("Guess!").tr(),
            ),
          ],
        );
      },
    );
  }
}
