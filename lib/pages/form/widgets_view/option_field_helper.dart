import 'package:flutter/material.dart';
import 'package:fstapp/dataModels/FormOptionModel.dart';
import 'package:fstapp/pages/form/widgets_view/form_helper.dart';
import 'package:fstapp/services/HtmlHelper.dart';
import 'package:fstapp/services/Utilities.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/HtmlView.dart';

/// A helper class to centralize all duplicated UI logic for building
/// label styles, card layouts, etc. used by both Checkbox and Radio fields.
class OptionFieldHelper {
  // Adjust as needed; you can also make this configurable if it's dynamic.

  /// Builds the InputDecoration label (including the required asterisk if needed).
  static InputDecoration buildInputDecoration({
    required BuildContext context,
    required String label,
    required bool isRequired,
    String? errorText,
  }) {
    return InputDecoration(
      label: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            label,
            style: labelTextStyle(context),
          ),
          if (isRequired) Text(' *', style: labelTextStyle(context).copyWith(color: ThemeConfig.redColor(context))),
        ],
      ),
      errorText: errorText,
      border: InputBorder.none,
    );
  }

  /// Text style used for form-field labels.
  static TextStyle labelTextStyle(BuildContext context) {
    return TextStyle(
      fontWeight: FontWeight.bold,
      color: ThemeConfig.grey700(context),
      fontSize: 19 * FormHelper.fontSizeFactor,
    );
  }

  /// Text style used for option titles in checkboxes/radios.
  static TextStyle optionTitleTextStyle() {
    return TextStyle(fontSize: 14.0 * FormHelper.fontSizeFactor);
  }

  /// Text style used for option titles in checkboxes/radios.
  static TextStyle cardOptionTitleTextStyle() {
    return TextStyle(fontSize: 15.0 * FormHelper.fontSizeFactor, fontWeight: FontWeight.w400);
  }

  /// Builds the combined "title (+ price)" string for an option.
  static String buildOptionTitle(
      BuildContext context,
      FormOptionModel option,
      ) {
    if (option.price > 0) {
      return '${option.title} (${Utilities.formatPrice(context, option.price)})';
    }
    return option.title;
  }

  /// Builds a card with a leading widget (checkbox or radio), a title, and an optional HTML description.
  static Widget buildOptionCard({
    required BuildContext context,
    required bool isSelected,
    required Widget leading,
    required String title,
    required String? description,
    required VoidCallback onTap,
  }) {
    return InkWell(
      onTap: onTap,
      child: Card(
        elevation: 0,
        margin: const EdgeInsets.symmetric(vertical: 4),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(8),
          side: BorderSide(
            color: isSelected
                ? Theme.of(context).colorScheme.primary
                : Colors.grey.withOpacity(0.3),
            width: isSelected ? 2 : 0,
          ),
        ),
        child: Padding(
          padding: const EdgeInsets.all(12.0),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              leading,
              const SizedBox(width: 8),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      title,
                      style: cardOptionTitleTextStyle(),
                    ),
                    if (!HtmlHelper.isHtmlEmptyOrNull(description))
                      Padding(
                        padding: const EdgeInsets.only(top: 4.0),
                        child: Material(
                          type: MaterialType.transparency,
                          child: HtmlView(
                            color: ThemeConfig.grey600(context),
                            html: description!,
                            fontSize: optionDescriptionFontSize(),
                            isSelectable: false,
                          ),
                        ),
                      ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  /// Convenience to match the description style size.
  static double optionDescriptionFontSize() {
    return 13.0 * FormHelper.fontSizeFactor;
  }
}
