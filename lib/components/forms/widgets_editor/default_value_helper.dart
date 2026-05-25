import 'package:fstapp/components/forms/models/form_field_model.dart';
import 'package:fstapp/components/forms/widgets_view/form_helper.dart';

/// Read/write helpers for `form_fields.data.default_value`.
///
/// Storage shapes by field type:
///   - select_one          → String (option title)
///   - select_many         → List<String> (option titles)
///   - product_type single → String (product id)
///   - product_type multi  → List<String> (product ids)
///
/// `rename` / `remove` / `toggleInList` work polymorphically over both shapes
/// so call sites that may switch modes (product_type) don't need to branch.
class DefaultValueHelper {
  static dynamic read(FormFieldModel field) {
    if (field.data is! Map) return null;
    return (field.data as Map)[FormHelper.metaDefaultValue];
  }

  static String? readString(FormFieldModel field) {
    final v = read(field);
    return v is String ? v : null;
  }

  static List<String> readList(FormFieldModel field) {
    final v = read(field);
    if (v is List) return v.whereType<String>().toList();
    return const [];
  }

  static void write(FormFieldModel field, dynamic value) {
    field.data ??= <String, dynamic>{};
    final data = Map<String, dynamic>.from(field.data as Map);
    if (value == null || (value is List && value.isEmpty)) {
      data.remove(FormHelper.metaDefaultValue);
    } else {
      data[FormHelper.metaDefaultValue] = value;
    }
    field.data = data;
  }

  static void rename(
      FormFieldModel field, String oldValue, String newValue) {
    final current = read(field);
    if (current is String) {
      if (current == oldValue) write(field, newValue);
    } else if (current is List) {
      var changed = false;
      final next = current.map((v) {
        if (v == oldValue) {
          changed = true;
          return newValue;
        }
        return v;
      }).toList();
      if (changed) write(field, next);
    }
  }

  static void remove(FormFieldModel field, String value) {
    final current = read(field);
    if (current is String) {
      if (current == value) write(field, null);
    } else if (current is List) {
      final filtered =
          current.where((v) => v?.toString() != value).toList();
      if (filtered.length != current.length) write(field, filtered);
    }
  }

  /// Toggle membership of [value] in a list-shaped default.
  /// Converts non-list current values to an empty list before toggling.
  static void toggleInList(
      FormFieldModel field, String value, bool selected) {
    final next = List<String>.from(readList(field));
    if (selected) {
      if (!next.contains(value)) next.add(value);
    } else {
      next.remove(value);
    }
    write(field, next);
  }
}
