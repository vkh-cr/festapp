
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/eshop/models/product_model.dart';
import 'package:fstapp/components/eshop/eshop_columns.dart';
import 'package:fstapp/components/eshop/models/tb_eshop.dart';

void main() {
  group('ProductModel Surcharge Logic', () {
    test('surchargeAmount setter removes field when value is 0', () {
      final product = ProductModel();
      // Set a value first
      product.surchargeAmount = 100.0;
      expect(product.data?[TbEshop.products.data_surcharge], isNotNull);
      expect((product.data?[TbEshop.products.data_surcharge] as Map)['amount'], 100.0);

      // Set to 0
      product.surchargeAmount = 0;
      expect(product.data?[TbEshop.products.data_surcharge], isNull);
    });

    test('surchargeAmount setter removes field when value is null', () {
      final product = ProductModel();
      product.surchargeAmount = 100.0;
      expect(product.data?[TbEshop.products.data_surcharge], isNotNull);

      product.surchargeAmount = null;
      expect(product.data?[TbEshop.products.data_surcharge], isNull);
    });

    test('surchargeAmount setter keeps field if currency is present but clears amount if 0 (backend consistency)', () {
      final product = ProductModel();
      product.surchargeAmount = 100.0;
      product.surchargeCurrency = 'CZK';
      
      expect(product.data?[TbEshop.products.data_surcharge], isNotNull);
      
      product.surchargeAmount = 0;
      
      expect(product.data?[TbEshop.products.data_surcharge], isNull);
    });

    test('fromPlutoJson handles "0" string by removing surcharge', () {
      final json = {
        EshopColumns.PRODUCT_SURCHARGE: "0",
         EshopColumns.PRODUCT_ID: 1,
      };
      
      final product = ProductModel.fromPlutoJson(json);
      expect(product.data?[TbEshop.products.data_surcharge], isNull);
    });

    test('fromPlutoJson handles "0 CZK" string by removing surcharge', () {
      final json = {
        EshopColumns.PRODUCT_SURCHARGE: "0 CZK",
         EshopColumns.PRODUCT_ID: 1,
      };
      
      final product = ProductModel.fromPlutoJson(json);
      expect(product.data?[TbEshop.products.data_surcharge], isNull);
    });

    test('fromPlutoJson handles empty string by removing surcharge', () {
      final modelWithData = ProductModel(data: {
        TbEshop.products.data_surcharge: {'amount': 100.0, 'currency': 'CZK'}
      });
      
      final json = {
        EshopColumns.PRODUCT_SURCHARGE: "",
        EshopColumns.PRODUCT_ID: 1,
        EshopColumns.PRODUCT_MODEL_REFERENCE: modelWithData,
      };
      
      final product = ProductModel.fromPlutoJson(json);
      expect(product.data?[TbEshop.products.data_surcharge], isNull);
    });

    test('fromPlutoJson parses valid surcharge', () {
      final json = {
        EshopColumns.PRODUCT_SURCHARGE: "150.50 EUR",
         EshopColumns.PRODUCT_ID: 1,
      };
      
      final product = ProductModel.fromPlutoJson(json);
      final surcharge = product.data?[TbEshop.products.data_surcharge];
      expect(surcharge, isNotNull);
      expect(surcharge['amount'], 150.50);
      expect(surcharge['currency'], 'EUR');
    });

    test('getter surchargeAmount returns null if underlying data has 0 (legacy data safety)', () {
      final product = ProductModel(data: {
        TbEshop.products.data_surcharge: {'amount': 0.0, 'currency': 'CZK'}
      });
      
      expect(product.surchargeAmount, isNull);
    });

    test('fromJson strips surcharge if amount is 0 (legacy data cleanup)', () {
      final json = {
        TbEshop.products.id: 1,
        TbEshop.products.data: {
          TbEshop.products.data_surcharge: {'amount': 0, 'currency': 'CZK'}
        }
      };
      
      final product = ProductModel.fromJson(json);
      expect(product.data?[TbEshop.products.data_surcharge], isNull);
    });

    test('surchargeCurrency setter removes entry if amount is missing/null', () {
      final product = ProductModel();
      product.surchargeCurrency = 'CZK';
      expect(product.data?[TbEshop.products.data_surcharge], isNull);
      
      product.surchargeAmount = 100;
      product.surchargeCurrency = 'EUR';
      expect(product.data?[TbEshop.products.data_surcharge], isNotNull);
      expect((product.data?[TbEshop.products.data_surcharge] as Map)['currency'], 'EUR');
      
      product.surchargeAmount = 0;
      expect(product.data?[TbEshop.products.data_surcharge], isNull);
    });
  });
}
