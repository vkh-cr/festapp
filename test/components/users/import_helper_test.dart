import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fstapp/components/import/csv_import_helper.dart';
import 'package:fstapp/components/users/import_helper.dart';
import 'package:fstapp/components/users/occasion_user_model.dart';
import 'package:fstapp/components/users/db_users.dart';
import 'package:fstapp/components/users/user_columns.dart';
import 'package:fstapp/database_tables/tb.dart';

void main() {
  test('CSV import reads the optional group column', () {
    final users = ImportHelper.getUsersFromCsv(
      'E-mailová adresa,Jméno:,Příjmení:,Skupina\r\n'
      'JAN@example.com,Jan,Novák, Modří ',
    );

    expect(users, hasLength(1));
    expect(users.single[Tb.occasion_users.data_email], 'jan@example.com');
    expect(users.single[ImportHelper.groupColumn], 'Modří');
  });

  test('CSV import keeps working without the optional group column', () {
    final users = ImportHelper.getUsersFromCsv(
      'E-mailová adresa,Jméno:,Příjmení:\n'
      'jan@example.com,Jan,Novák',
    );

    expect(users, hasLength(1));
    expect(users.single, isNot(contains(ImportHelper.groupColumn)));
  });

  test('prepared files update the same user on the second import', () {
    final first = ImportHelper.getUsersFromCsv(
      File('test/fixtures/bujnmi_group_import_01.csv').readAsStringSync(),
    ).single;
    final updated = ImportHelper.getUsersFromCsv(
      File('test/fixtures/bujnmi_group_import_02_update.csv')
          .readAsStringSync(),
    ).single;
    final withoutGroup = ImportHelper.getUsersFromCsv(
      File('test/fixtures/bujnmi_group_import_03_remove.csv')
          .readAsStringSync(),
    ).single;

    expect(first[Tb.occasion_users.data_email], 'bujnmi@gmail.com');
    expect(updated[Tb.occasion_users.data_email], 'bujnmi@gmail.com');
    expect(first[ImportHelper.groupColumn], 'Testovací skupina CSV');
    expect(
        updated[ImportHelper.groupColumn], 'Přesunutá testovací skupina CSV');
    expect(withoutGroup[ImportHelper.groupColumn], isEmpty);
    expect(OccasionUserModel(data: first).importedEquals(first), isTrue);
    expect(OccasionUserModel(data: first).importedEquals(updated), isFalse);

    final existing = OccasionUserModel(user: 'existing-user', data: first);
    expect(CsvImportHelper.getUsersToBeCreated([updated], [existing]), isEmpty);
    expect(
        CsvImportHelper.getUsersToBeUpdated([updated], [existing]), [updated]);
  });

  testWidgets('user table exposes the imported group as read only',
      (tester) async {
    late BuildContext context;
    await tester.pumpWidget(MaterialApp(
      home: Builder(builder: (builderContext) {
        context = builderContext;
        return const SizedBox();
      }),
    ));

    final user = OccasionUserModel.fromJson({
      DbUsers.groupTitleKey: 'Testovací skupina CSV',
      Tb.occasion_users.data: <String, dynamic>{},
    });
    final groupColumn = UserColumns.generateColumns([UserColumns.GROUP]).single;

    expect(user.toTrinaRow(context).cells[UserColumns.GROUP]?.value,
        'Testovací skupina CSV');
    expect(groupColumn.readOnly, isTrue);
  });
}
