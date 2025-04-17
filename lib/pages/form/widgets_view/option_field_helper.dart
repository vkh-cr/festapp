import 'package:flutter/material.dart';
import 'package:fstapp/data_models/form_option_model.dart';
import 'package:fstapp/data_models/form_option_product_model.dart';
import 'package:fstapp/pages/form/widgets_view/form_helper.dart';
import 'package:fstapp/services/html_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/html_view.dart';

/// A helper class to centralize all duplicated UI logic for building
/// label styles, card layouts, etc. used by both Checkbox and Radio fields.
class OptionFieldHelper {
  // Adjust as needed; you can also make this configurable if it's dynamic.

  /// Text style used for option titles in checkboxes/radios.
  static TextStyle optionTitleTextStyle() {
    return TextStyle(fontSize: 14.0 * FormHelper.fontSizeFactor);
  }

  /// Builds the combined "title (+ price)" string for an option.
  static String buildOptionTitle(
      BuildContext context,
      FormOptionModel option,
      ) {
    if (option is FormOptionProductModel && option.price > 0) {
      return '${option.title} (${Utilities.formatPrice(context, option.price, currencyCode: option.currencyCode)})';
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
    required VoidCallback? onTap,
  }) {
    final bool hasDescription = !HtmlHelper.isHtmlEmptyOrNull(description);

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
                : ThemeConfig.grey500(context),
            width: isSelected ? 2 : 1,
          ),
        ),
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Row(
            crossAxisAlignment:
            hasDescription ? CrossAxisAlignment.start : CrossAxisAlignment.center,
            children: [
              leading,
              const SizedBox(width: 8),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      title,
                      style: FormHelper.cardOptionTitleTextStyle(),
                    ),
                    if (hasDescription)
                      Padding(
                        padding: const EdgeInsets.only(top: 4.0),
                        child: HtmlView(
                          color: ThemeConfig.grey600(context),
                          html: description!,
                          fontSize: FormHelper.optionDescriptionFontSize(),
                          isSelectable: false,
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
}
