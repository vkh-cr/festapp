import 'package:sembast/sembast.dart';
import 'package:sembast/sembast_io.dart';
import 'package:sembast_web/sembast_web.dart';

const bool kIsWeb = bool.fromEnvironment('dart.library.js_util');

class StorageHelper {
  static final Map<String, Database> _databases = {};
  static Database? _defaultDb;
  static Future<Database> get _database async => _defaultDb ??= await _databaseFactory.openDatabase('default');

  static DatabaseFactory get _databaseFactory {
    return kIsWeb ? databaseFactoryWeb : databaseFactoryIo;
  }

  static Future<Database> _getDatabase([String? dbPath]) async {
    if (dbPath == null) {
      return await _database;
    }
    if (!_databases.containsKey(dbPath)) {
      _databases[dbPath] = await _databaseFactory.openDatabase(dbPath);
    }
    return _databases[dbPath]!;
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
