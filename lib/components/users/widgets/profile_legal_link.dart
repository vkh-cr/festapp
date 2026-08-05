import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/users/user_strings.dart';
import 'package:url_launcher/link.dart';

Uri resolveProfileLegalUri(
  Uri configuredUri, {
  Uri? appUri,
  bool? useLocalStaticDocument,
  bool? includeReturnTo,
}) {
  final currentAppUri = appUri ?? Uri.base;
  final isLoopback = currentAppUri.host == 'localhost' ||
      currentAppUri.host == '127.0.0.1' ||
      currentAppUri.host == '::1';
  final shouldUseLocalDocument =
      useLocalStaticDocument ?? (kIsWeb && kDebugMode && isLoopback);
  final targetUri = shouldUseLocalDocument
      ? currentAppUri.replace(
          path:
              '${configuredUri.path.endsWith('/') ? configuredUri.path : '${configuredUri.path}/'}index.html',
          query: null,
          fragment: null,
        )
      : configuredUri;

  if (!(includeReturnTo ?? kIsWeb)) return targetUri;

  final returnTo = StringBuffer(
    currentAppUri.path.isEmpty ? '/' : currentAppUri.path,
  )
    ..write(currentAppUri.hasQuery ? '?${currentAppUri.query}' : '')
    ..write(currentAppUri.hasFragment ? '#${currentAppUri.fragment}' : '');
  return targetUri.replace(
    queryParameters: {
      ...targetUri.queryParameters,
      'returnTo': returnTo.toString(),
    },
  );
}

class ProfileLegalLink extends StatelessWidget {
  const ProfileLegalLink({
    super.key,
    required this.label,
    required this.uri,
  });

  final String label;
  final Uri uri;

  @override
  Widget build(BuildContext context) {
    final targetUri = resolveProfileLegalUri(uri);
    return Link(
      uri: targetUri,
      target: LinkTarget.self,
      builder: (context, followLink) => TextButton(
        onPressed: followLink,
        child: Text(label),
      ),
    );
  }
}

/// One canonical, public set of legal and support links for signed-in and
/// signed-out surfaces.
class AppLegalLinks extends StatelessWidget {
  const AppLegalLinks({
    super.key,
    this.baseUri,
  });

  final Uri? baseUri;

  @override
  Widget build(BuildContext context) {
    final rootUri = baseUri ?? Uri.parse(AppConfig.webLink);
    final links = <({String label, String path})>[
      (
        label: UserStrings.privacy,
        path: 'privacy/',
      ),
      (
        label: UserStrings.privacyChoices,
        path: 'privacy/choices/',
      ),
      (
        label: UserStrings.terms,
        path: 'terms/',
      ),
      (
        label: UserStrings.support,
        path: 'support/',
      ),
    ];

    return Wrap(
      alignment: WrapAlignment.center,
      spacing: 4,
      children: [
        for (final link in links)
          ProfileLegalLink(
            label: link.label,
            uri: rootUri.resolve(link.path),
          ),
      ],
    );
  }
}
