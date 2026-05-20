import 'package:flutter/material.dart';
import 'package:fstapp/components/eshop/models/product_model.dart';
import 'package:fstapp/services/utilities_all.dart';

import '../orders_strings.dart';

class ProductChangesPreview extends StatelessWidget {
  final List<ProductModel> added;
  final List<ProductModel> removed;
  final List<Map<String, ProductModel>> changed;
  final double referenceTotal;
  final double currentTotal;

  const ProductChangesPreview({
    super.key,
    required this.added,
    required this.removed,
    required this.changed,
    required this.referenceTotal,
    required this.currentTotal,
  });

  @override
  Widget build(BuildContext context) {
    return _buildChangesListItem(context);
  }

  Widget _buildChangesListItem(BuildContext context) {
    final theme = Theme.of(context);
    final hasChanges =
        added.isNotEmpty || removed.isNotEmpty || changed.isNotEmpty;

    return Padding(
      padding: const EdgeInsets.only(bottom: 8.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.only(top: 2.0),
            child: Icon(Icons.list_alt_outlined,
                size: 18, color: theme.textTheme.bodySmall?.color),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(OrdersStrings.sendUpdateItemChanges),
                if (hasChanges) ...[
                  const SizedBox(height: 8),
                  Container(
                    width: double.infinity,
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: Colors.amber.withOpacity(0.1),
                      borderRadius: BorderRadius.circular(8),
                      border: Border.all(color: Colors.amber.shade200),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        if (added.isNotEmpty) ...[
                          Text(OrdersStrings.addedProductsTitle,
                              style:
                                  const TextStyle(fontWeight: FontWeight.bold)),
                          ...added.map((p) => Padding(
                                padding:
                                    const EdgeInsets.only(left: 8.0, top: 4.0),
                                child: Text(
                                    "+ ${p.title} (${Utilities.formatPrice(context, p.price!)})",
                                    style:
                                        const TextStyle(color: Colors.green)),
                              )),
                          const SizedBox(height: 12),
                        ],
                        if (removed.isNotEmpty) ...[
                          Text(OrdersStrings.removedProductsTitle,
                              style:
                                  const TextStyle(fontWeight: FontWeight.bold)),
                          ...removed.map((p) => Padding(
                                padding:
                                    const EdgeInsets.only(left: 8.0, top: 4.0),
                                child: Text(
                                    "- ${p.title} (${Utilities.formatPrice(context, p.price!)})",
                                    style: const TextStyle(color: Colors.red)),
                              )),
                          const SizedBox(height: 12),
                        ],
                        if (changed.isNotEmpty) ...[
                          Text(OrdersStrings.changedPricesTitle,
                              style:
                                  const TextStyle(fontWeight: FontWeight.bold)),
                          ...changed.map((c) {
                            final from = c['from']!;
                            final to = c['to']!;

                            final List<Widget> changesWidgets = [];

                            if (from.title != to.title) {
                              changesWidgets.add(Padding(
                                padding:
                                    const EdgeInsets.only(left: 8.0, top: 4.0),
                                child: Row(
                                  crossAxisAlignment: CrossAxisAlignment.center,
                                  children: [
                                    Expanded(child: Text("• ${to.title}: ")),
                                    Text.rich(
                                      TextSpan(
                                        style:
                                            DefaultTextStyle.of(context).style,
                                        children: [
                                          TextSpan(
                                            text: from.title!,
                                            style: TextStyle(
                                                decoration:
                                                    TextDecoration.lineThrough,
                                                color: theme.textTheme.bodySmall
                                                    ?.color),
                                          ),
                                          WidgetSpan(
                                            child: Padding(
                                              padding:
                                                  const EdgeInsets.symmetric(
                                                      horizontal: 6.0),
                                              child: Icon(Icons.arrow_forward,
                                                  size: 16,
                                                  color: theme
                                                      .colorScheme.primary),
                                            ),
                                            alignment:
                                                PlaceholderAlignment.middle,
                                          ),
                                          TextSpan(
                                            text: to.title!,
                                            style: const TextStyle(
                                                fontWeight: FontWeight.bold),
                                          ),
                                        ],
                                      ),
                                    )
                                  ],
                                ),
                              ));
                            }

                            if ((from.price ?? 0) != (to.price ?? 0)) {
                              changesWidgets.add(Padding(
                                padding:
                                    const EdgeInsets.only(left: 8.0, top: 4.0),
                                child: Row(
                                  crossAxisAlignment: CrossAxisAlignment.center,
                                  children: [
                                    Expanded(child: Text("• ${to.title}: ")),
                                    Text.rich(
                                      TextSpan(
                                        style:
                                            DefaultTextStyle.of(context).style,
                                        children: [
                                          TextSpan(
                                            text: Utilities.formatPrice(
                                                context, from.price!),
                                            style: TextStyle(
                                                decoration:
                                                    TextDecoration.lineThrough,
                                                color: theme.textTheme.bodySmall
                                                    ?.color),
                                          ),
                                          WidgetSpan(
                                            child: Padding(
                                              padding:
                                                  const EdgeInsets.symmetric(
                                                      horizontal: 6.0),
                                              child: Icon(Icons.arrow_forward,
                                                  size: 16,
                                                  color: theme
                                                      .colorScheme.primary),
                                            ),
                                            alignment:
                                                PlaceholderAlignment.middle,
                                          ),
                                          TextSpan(
                                            text: Utilities.formatPrice(
                                                context, to.price!),
                                            style: const TextStyle(
                                                fontWeight: FontWeight.bold),
                                          ),
                                        ],
                                      ),
                                    )
                                  ],
                                ),
                              ));
                            }

                            return Column(children: changesWidgets);
                          }),
                          const SizedBox(height: 12),
                        ],
                        if (referenceTotal != currentTotal) ...[
                          const Divider(height: 16),
                          Padding(
                            padding: const EdgeInsets.only(top: 4.0),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(OrdersStrings.totalPriceChange,
                                    style: const TextStyle(
                                        fontWeight: FontWeight.bold)),
                                Text.rich(
                                  TextSpan(
                                    style: DefaultTextStyle.of(context).style,
                                    children: [
                                      TextSpan(
                                        text: Utilities.formatPrice(
                                            context, referenceTotal),
                                        style: TextStyle(
                                            decoration:
                                                TextDecoration.lineThrough,
                                            color: theme
                                                .textTheme.bodySmall?.color),
                                      ),
                                      WidgetSpan(
                                        child: Padding(
                                          padding: const EdgeInsets.symmetric(
                                              horizontal: 6.0),
                                          child: Icon(Icons.arrow_forward,
                                              size: 16,
                                              color: theme.colorScheme.primary),
                                        ),
                                        alignment: PlaceholderAlignment.middle,
                                      ),
                                      TextSpan(
                                        text: Utilities.formatPrice(
                                            context, currentTotal),
                                        style: const TextStyle(
                                            fontWeight: FontWeight.bold),
                                      ),
                                    ],
                                  ),
                                )
                              ],
                            ),
                          )
                        ]
                      ],
                    ),
                  ),
                ] else
                  Padding(
                    padding: const EdgeInsets.only(left: 8.0, top: 4.0),
                    child: Text(OrdersStrings.noProductChangesDetected,
                        style: TextStyle(
                            fontStyle: FontStyle.italic,
                            color: theme.textTheme.bodySmall?.color)),
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  static Widget buildConfirmationListItem(
      BuildContext context, IconData icon, String text) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon,
              size: 18, color: Theme.of(context).textTheme.bodySmall?.color),
          const SizedBox(width: 12),
          Expanded(child: Text(text)),
        ],
      ),
    );
  }
}
