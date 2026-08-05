import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/users/user_strings.dart';
import 'package:url_launcher/link.dart';

Uri resolveProfileLegalUri(
  Uri configuredUri, {
  Uri? appUri,
  bool? useLocalStaticDocument,
}) {
  final currentAppUri = appUri ?? Uri.base;
  final isLoopback = currentAppUri.host == 'localhost' ||
      currentAppUri.host == '127.0.0.1' ||
      currentAppUri.host == '::1';
  final shouldUseLocalDocument =
      useLocalStaticDocument ?? (kIsWeb && kDebugMode && isLoopback);
  if (!shouldUseLocalDocument) return configuredUri;

  final directoryPath = configuredUri.path.endsWith('/')
      ? configuredUri.path
      : '${configuredUri.path}/';
  return currentAppUri.replace(
    path: '${directoryPath}index.html',
    query: null,
    fragment: null,
  );
}

class ProfileLegalLink extends StatelessWidget {
  const ProfileLegalLink({
    super.key,
    required this.label,
    required this.uri,
    this.icon,
    this.asListTile = false,
  });

  final String label;
  final Uri uri;
  final IconData? icon;
  final bool asListTile;

  @override
  Widget build(BuildContext context) {
    final targetUri = resolveProfileLegalUri(uri);
    return Link(
      uri: targetUri,
      target: LinkTarget.self,
      builder: (context, followLink) {
        if (asListTile) {
          return ListTile(
            leading: icon == null ? null : Icon(icon),
            title: Text(label),
            trailing: const Icon(Icons.chevron_right),
            onTap: followLink,
          );
        }
        return TextButton(
          onPressed: followLink,
          child: Text(label),
        );
      },
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
    final links = <({String label, String path, IconData icon})>[
      (
        label: UserStrings.privacy,
        path: 'privacy/',
        icon: Icons.privacy_tip_outlined,
      ),
      (
        label: UserStrings.privacyChoices,
        path: 'privacy/choices/',
        icon: Icons.tune,
      ),
      (
        label: UserStrings.terms,
        path: 'terms/',
        icon: Icons.description_outlined,
      ),
      (
        label: UserStrings.support,
        path: 'support/',
        icon: Icons.help_outline,
      ),
    ];

    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 12),
      clipBehavior: Clip.antiAlias,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          for (var index = 0; index < links.length; index++) ...[
            if (index > 0) const Divider(height: 1),
            ProfileLegalLink(
              label: links[index].label,
              uri: rootUri.resolve(links[index].path),
              icon: links[index].icon,
              asListTile: true,
            ),
          ],
        ],
      ),
    );
  }
}
