import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/eshop/logic/order_calc_helper.dart';
import 'package:fstapp/components/eshop/models/order_model.dart';
import 'package:fstapp/components/eshop/models/product_model.dart';

void main() {
  group('OrderCalcHelper', () {
    test('Calculates added products correctly across tickets', () {
      // Setup Reference Order: Ticket A (Prod 1)
      final refOrder = OrderModel.fromJson({
        'id': 1,
        'data': {
          'tickets': [
            {
              'id': 100,
              'products': [
                {'id': 1, 'price': 10.0, 'title': 'Prod 1'}
              ]
            },
            {
              'id': 101, // Ticket B exists but empty in reference
              'products': []
            }
          ]
        }
      });

      // Setup Current Order State (Saved in DB): Ticket A (Prod 1), Ticket B (Prod 2)
      // Note: Ticket B's Prod 2 is already saved in DB but not in Reference
      final currentOrder = OrderModel.fromJson({
        'id': 1,
        'data': {
          'tickets': [
            {
              'id': 100,
              'products': [
                {'id': 1, 'price': 10.0, 'title': 'Prod 1'}
              ]
            },
            {
              'id': 101,
              'products': [
                {'id': 2, 'price': 20.0, 'title': 'Prod 2'}
              ]
            }
          ]
        }
      });

      // Editing Ticket A: Adding Prod 3 (Unsaved)
      final currentTicketProducts = [
        ProductModel(id: 1, price: 10.0, title: 'Prod 1'),
        ProductModel(id: 3, price: 5.0, title: 'Prod 3'),
      ];

      final result = OrderCalcHelper.calculateGlobalOrderChanges(
        referenceOrder: refOrder,
        currentOrder: currentOrder,
        currentTicketId: 100,
        currentTicketProducts: currentTicketProducts,
      );

      // Expectation:
      // Prod 2 (from Ticket B) is ADDED (vs Reference)
      // Prod 3 (from Ticket A) is ADDED (vs Reference)
      expect(result.added.length, 2);
      expect(result.added.any((p) => p.id == 2), isTrue); // From Ticket B
      expect(result.added.any((p) => p.id == 3), isTrue); // From Ticket A active edit
      expect(result.removed.isEmpty, isTrue);
      expect(result.referenceTotal, 10.0);
      expect(result.currentTotal, 35.0); // 10 + 20 + 5
    });

    test('Calculates price changes correctly', () {
       // Reference: Prod 1 @ 10.0
      final refOrder = OrderModel.fromJson({
        'id': 1,
        'data': {
          'tickets': [
            {
              'id': 100,
              'products': [
                {'id': 1, 'price': 10.0, 'title': 'Prod 1'}
              ]
            }
          ]
        }
      });

      final currentOrder = OrderModel.fromJson({
        'id': 1,
        'data': {
          'tickets': [
            {
              'id': 100,
              'products': [
                {'id': 1, 'price': 10.0, 'title': 'Prod 1'}
              ]
            }
          ]
        }
      });

      // Active edit: Change Prod 1 to 15.0
      final currentTicketProducts = [
        ProductModel(id: 1, price: 15.0, title: 'Prod 1'),
      ];

      final result = OrderCalcHelper.calculateGlobalOrderChanges(
        referenceOrder: refOrder,
        currentOrder: currentOrder,
        currentTicketId: 100,
        currentTicketProducts: currentTicketProducts,
      );

      expect(result.changed.length, 1);
      expect(result.changed.first['from']!.price, 10.0);
      expect(result.changed.first['to']!.price, 15.0);
      expect(result.referenceTotal, 10.0);
      expect(result.currentTotal, 15.0);
    });
  });
}
