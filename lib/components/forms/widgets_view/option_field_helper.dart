import 'package:flutter/material.dart';
import 'package:fstapp/components/forms/form_strings.dart';
import 'package:fstapp/components/forms/models/form_option_model.dart';
import 'package:fstapp/components/forms/models/form_option_product_model.dart';
import 'package:fstapp/components/forms/widgets_view/form_helper.dart';
import 'package:fstapp/components/html/html_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/components/html/html_view.dart';

/// A helper class to centralize all duplicated UI logic for building
/// label styles, card layouts, etc. used by both Checkbox and Radio fields.
class OptionFieldHelper {
  // Adjust as needed; you can also make this configurable if it's dynamic.

  /// Text style used for option titles in checkboxes/radios.
  static TextStyle optionTitleTextStyle() {
    return TextStyle(fontSize: 14.0 * FormHelper.fontSizeFactor);
  }

  /// Returns just the option title (without price).
  static String buildOptionTitle(
    BuildContext context,
    FormOptionModel option,
  ) {
    return option.title;
  }

  /// Returns formatted price string like "+ 1 000 CZK", or null if no price.
  static String? buildPriceText(BuildContext context, FormOptionModel option) {
    if (option is FormOptionProductModel && option.price > 0) {
      return '+ ${Utilities.formatPrice(context, option.price, currencyCode: option.currencyCode)}';
    }
    return null;
  }

  /// Formatted deposit label: "záloha: 500 CZK"
  static String buildDepositText(BuildContext context, FormOptionProductModel option) {
    final depositStr = Utilities.formatPrice(context, option.depositAmount!, currencyCode: option.currencyCode);
    return '${FormStrings.depositInfo}: $depositStr';
  }
  /// Builds a card with a leading widget (checkbox or radio), a title, and an optional HTML description.
  static Widget buildOptionCard({
    required BuildContext context,
    required bool isSelected,
    required Widget leading,
    required String title,
    String? priceText,
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
                ? Theme.of(context).primaryColor
                : ThemeConfig.grey500(context),
            width: isSelected ? 2 : 1,
          ),
        ),
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Row(
            crossAxisAlignment: hasDescription
                ? CrossAxisAlignment.start
                : CrossAxisAlignment.center,
            children: [
              leading,
              const SizedBox(width: 8),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Expanded(
                          child: Text(
                            title,
                            style: FormHelper.cardOptionTitleTextStyle(),
                          ),
                        ),
                        if (priceText != null) ...[
                          const SizedBox(width: 8),
                          Text(
                            priceText,
                            style: FormHelper.cardOptionTitleTextStyle().copyWith(
                              fontWeight: FontWeight.bold,
                              color: Theme.of(context).primaryColor,
                            ),
                          ),
                        ],
                      ],
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
