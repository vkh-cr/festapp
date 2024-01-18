import 'package:flutter/cupertino.dart';
import 'package:go_router/go_router.dart';

class NavigationHelper{
  static void goBackOrHome(BuildContext context){
    if(!context.canPop())
    {
      context.go("/");
    }
    context.pop();
  }
}