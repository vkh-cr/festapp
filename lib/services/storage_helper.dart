import 'package:flutter/foundation.dart';
import 'package:sembast/sembast_io.dart';
import 'package:sembast_web/sembast_web.dart';
import 'package:path/path.dart';
import 'package:path_provider/path_provider.dart';

class StorageHelper {
  static final Map<String, Database> _databases = {};

  static DatabaseFactory get _databaseFactory {
    return kIsWeb ? databaseFactoryWeb : databaseFactoryIo;
  }

  static Future<String> _constructDbPath(String dbPath) async {
    if (kIsWeb) {
      return dbPath;
    } else {
      final dir = await getApplicationDocumentsDirectory();
      await dir.create(recursive: true);
      return join(dir.path, dbPath);
    }
  }

  static Future<Database> _getDatabase([String? dbPath]) async {
    final path = dbPath ?? 'default.db';
    if (!_databases.containsKey(path)) {
      final fullPath = await _constructDbPath(path);
      _databases[path] = await _databaseFactory.openDatabase(fullPath);
    }
    return _databases[path]!;
  }

  static Future<String?> get(String key, [String? dbPath]) async {
    final store = StoreRef.main();
    final db = await _getDatabase(dbPath);
    return await store.record(key).get(db) as String?;
  }

  static Future<void> set(String key, String value, [String? dbPath]) async {
    final store = StoreRef.main();
    final db = await _getDatabase(dbPath);
    await store.record(key).put(db, value);
  }

  static Future<void> remove(String key, [String? dbPath]) async {
    final store = StoreRef.main();
    final db = await _getDatabase(dbPath);
    await store.record(key).delete(db);
  }
}
