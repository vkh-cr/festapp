import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/information/information_model.dart';
import 'package:fstapp/components/search/search_result_model.dart';
import 'package:fstapp/data_services/offline_data_service.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

/// Data access for the GlobalSearch feature.
///
/// Online path delegates to the `search_occasion_content` Postgres RPC
/// (trigram-ranked, unaccented, feature-gated server-side). Offline path
/// searches an in-memory index rebuilt from the data already cached by
/// [OfflineDataService], using the same normalization as the server's
/// `f_unaccent` (lowercase + strip diacritics).
class DbSearch {
  static final _supabase = Supabase.instance.client;

  static const int _limit = 50;

  /// In-memory offline index. Rebuilt by [rebuildOfflineIndex].
  static List<_IndexedDoc> _offlineIndex = [];

  static Future<List<SearchResultModel>> search(String query) async {
    final q = query.trim();
    if (q.isEmpty) return [];
    if (!FeatureService.isFeatureEnabled(FeatureConstants.globalSearch)) {
      return [];
    }
    final occasionId = RightsService.currentOccasionId();
    if (occasionId == null) return [];

    try {
      final data = await _supabase.rpc(
        'search_occasion_content',
        params: {
          'p_occasion': occasionId,
          'p_query': q,
          'p_limit': _limit,
        },
      );
      final list = (data as List?) ?? const [];
      return list
          .map((e) => SearchResultModel.fromRpc(
              (e as Map).cast<String, dynamic>()))
          .toList();
    } catch (_) {
      // Offline / network failure → fall back to the local index.
      return _searchOffline(q);
    }
  }

  /// Rebuilds the offline search index from cached events / places / news.
  /// Called after an offline sync completes.
  static Future<void> rebuildOfflineIndex() async {
    try {
      final docs = <_IndexedDoc>[];

      for (final e in await OfflineDataService.getAllEvents()) {
        if (e.isCounselingSlot) continue;
        docs.add(_IndexedDoc(
          entityType: 'event',
          entityId: e.id ?? 0,
          title: e.title,
          snippet: e.description,
          startTime: e.startTime,
          searchDoc: _normalize('${e.title ?? ''} ${e.description ?? ''}'),
        ));
      }
      for (final p in await OfflineDataService.getAllPlaces()) {
        docs.add(_IndexedDoc(
          entityType: 'place',
          entityId: p.id ?? 0,
          title: p.title,
          snippet: p.description,
          searchDoc: _normalize('${p.title ?? ''} ${p.description ?? ''}'),
        ));
      }
      for (final n in await OfflineDataService.getAllMessages()) {
        docs.add(_IndexedDoc(
          entityType: 'news',
          entityId: n.id,
          title: null,
          snippet: n.message,
          searchDoc: _normalize(n.message ?? ''),
        ));
      }

      // Information / songs / games — same entity-type mapping and feature
      // gating as the server-side search_occasion_content RPC.
      final songbookEnabled =
          FeatureService.isFeatureEnabled(FeatureConstants.songbook);
      final gameEnabled =
          FeatureService.isFeatureEnabled(FeatureConstants.game);
      for (final info in await OfflineDataService.getAllInfo()) {
        if (info.isHidden == true) continue;
        final String entityType;
        if (info.type == InformationModel.songType) {
          if (!songbookEnabled) continue;
          entityType = 'song';
        } else if (info.type == InformationModel.gameType) {
          if (!gameEnabled) continue;
          entityType = 'game';
        } else {
          entityType = 'info';
        }
        docs.add(_IndexedDoc(
          entityType: entityType,
          entityId: info.id ?? 0,
          title: info.title,
          snippet: info.description,
          searchDoc: _normalize('${info.title ?? ''} ${info.description ?? ''}'),
        ));
      }

      _offlineIndex = docs;
    } catch (e) {
      // Keep any previously built index on failure.
      // ignore: avoid_print
      print('SearchService.rebuildOfflineIndex failed: $e');
    }
  }

  static List<SearchResultModel> _searchOffline(String query) {
    final nq = _normalize(query);
    if (nq.isEmpty) return [];
    // Tokenized match (AND semantics), mirroring the deployed offline index:
    // every whitespace-separated query token must be present in the doc.
    final tokens = nq.split(RegExp(r'\s+')).where((t) => t.isNotEmpty).toList();
    if (tokens.isEmpty) return [];
    final matches = _offlineIndex
        .where((d) => tokens.every((t) => d.searchDoc.contains(t)))
        .map((d) => SearchResultModel(
              entityType: d.entityType,
              entityId: d.entityId,
              title: d.title,
              snippet: d.snippet == null
                  ? null
                  : (d.snippet!.length > 120
                      ? d.snippet!.substring(0, 120)
                      : d.snippet),
              startTime: d.startTime,
              rank: 1,
            ))
        .take(_limit)
        .toList();
    return matches;
  }

  /// Mirrors the server `f_unaccent`: lowercase + strip common diacritics.
  static String _normalize(String input) {
    final lower = input.toLowerCase();
    final sb = StringBuffer();
    for (final ch in lower.runes) {
      sb.write(_diacritics[ch] ?? String.fromCharCode(ch));
    }
    return sb.toString();
  }

  static const Map<int, String> _diacritics = {
    0x00E1: 'a', 0x010D: 'c', 0x010F: 'd', 0x00E9: 'e', 0x011B: 'e',
    0x00ED: 'i', 0x0148: 'n', 0x00F3: 'o', 0x0159: 'r', 0x0161: 's',
    0x0165: 't', 0x00FA: 'u', 0x016F: 'u', 0x00FD: 'y', 0x017E: 'z',
    0x00E4: 'a', 0x00F6: 'o', 0x00FC: 'u', 0x00DF: 'ss', 0x0142: 'l',
    0x0144: 'n', 0x015B: 's', 0x017A: 'z', 0x017C: 'z', 0x0107: 'c',
    0x00E0: 'a', 0x00E8: 'e', 0x00EA: 'e', 0x00F4: 'o', 0x00E2: 'a',
  };
}

class _IndexedDoc {
  final String entityType;
  final int entityId;
  final String? title;
  final String? snippet;
  final DateTime? startTime;
  final String searchDoc;

  _IndexedDoc({
    required this.entityType,
    required this.entityId,
    this.title,
    this.snippet,
    this.startTime,
    required this.searchDoc,
  });
}
