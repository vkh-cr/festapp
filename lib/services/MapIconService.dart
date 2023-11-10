class MapIconHelper {
  static Map<String, String> type2Icon = {
    "atm": "atm.svg",
    "church": "church.svg",
    "coffee": "coffee.svg",
    "wine": "wine.svg",
    "beer": "beer.svg",
    "reception": "card.svg",
    "food": "food.svg",
    "sport": "ball.svg",
    "lecture": "speaker.svg",
    "workshop": "tools.svg",
    "accommodation": "bed.svg",
    "group": "conversation.svg",
    "cross": "cross.svg",
  };

  static String? getIconAddress(String? type)
  {
    if (type2Icon.containsKey(type)) {
      return "assets/images/map/${type2Icon[type]!}";
    }
  }
}