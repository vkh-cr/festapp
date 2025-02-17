import 'dart:convert';
import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

@RoutePage()
class InstanceInstallPage extends StatefulWidget {
  static const ROUTE = "instanceInstall";
  @override
  _InstanceInstallPageState createState() => _InstanceInstallPageState();
}

class _InstanceInstallPageState extends State<InstanceInstallPage> {
  // Common fields for all operations.
  final TextEditingController _dbController = TextEditingController(
    text:
    'postgresql://postgres.kjdpmixlnhntmxjedpxh:somepassword@aws-0-eu-central-1.pooler.supabase.com:6543/postgres',
  );
  final TextEditingController _repoController =
  TextEditingController(text: 'vkh-cr/festapp');

  // Define the list of operations for the Initial section.
  final List<OperationSectionData> _initialOperations = [
    OperationSectionData(title: "1. Tables", fixedDirectory: "scripts/tables"),
    OperationSectionData(title: "2. Policies", fixedDirectory: "scripts/policies"),
    OperationSectionData(title: "3. Functions", fixedDirectory: "scripts/functions"),
    OperationSectionData(title: "4. Seed", fixedDirectory: "scripts/seed"),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Instance Installation')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Common fields for all sections.
            TextField(
              controller: _dbController,
              decoration: const InputDecoration(
                labelText: 'Database Connection String',
              ),
            ),
            TextField(
              controller: _repoController,
              decoration: const InputDecoration(
                labelText: 'GitHub Repository with scripts',
              ),
            ),
            const SizedBox(height: 20),
            // Initial Section
            const Text("Initial"),
            const Divider(),
            Column(
              children: _initialOperations.map((op) {
                return Padding(
                  padding: const EdgeInsets.only(bottom: 16.0),
                  child: OperationSectionWidget(
                    title: op.title,
                    fixedDirectory: op.fixedDirectory,
                    dbController: _dbController,
                    repoController: _repoController,
                  ),
                );
              }).toList(),
            ),
            const SizedBox(height: 20),
            // Migrations Section
            const Text("Migrations"),
            const Divider(),
            OperationSectionWidget(
              title: "Migrations",
              // For migrations, let the user type the directory.
              customDirectory: true,
              // Optionally, you can provide an initial value for the custom directory.
              initialDirectory: "migrations",
              dbController: _dbController,
              repoController: _repoController,
            ),
          ],
        ),
      ),
    );
  }
}

class OperationSectionData {
  final String title;
  final String fixedDirectory;

  OperationSectionData({required this.title, required this.fixedDirectory});
}

class OperationSectionWidget extends StatefulWidget {
  final String title;
  final String? fixedDirectory;
  final bool customDirectory;
  final String? initialDirectory;
  final TextEditingController dbController;
  final TextEditingController repoController;

  const OperationSectionWidget({
    Key? key,
    required this.title,
    required this.dbController,
    required this.repoController,
    this.fixedDirectory,
    this.customDirectory = false,
    this.initialDirectory,
  }) : super(key: key);

  @override
  _OperationSectionWidgetState createState() => _OperationSectionWidgetState();
}

class _OperationSectionWidgetState extends State<OperationSectionWidget> {
  final _supabase = Supabase.instance.client;
  final TextEditingController _customDirController = TextEditingController();
  bool _isLoading = false;
  String _statusMessage = '';
  bool? _wasSuccess; // null: not run, true: success, false: error

  // Only used when running the seed scripts.
  TextEditingController? _adminEmailController;
  TextEditingController? _adminPasswordController;
  TextEditingController? _supabaseInstanceIdController;

  bool get _isSeed => widget.fixedDirectory == "scripts/seed";

  @override
  void initState() {
    super.initState();
    if (widget.customDirectory) {
      _customDirController.text = widget.initialDirectory ?? '';
    }
    // Initialize seed-specific controllers if needed.
    if (_isSeed) {
      _adminEmailController = TextEditingController();
      _adminPasswordController = TextEditingController();
      _supabaseInstanceIdController =
          TextEditingController(text: "kjdpmixlnhntmxjedpxh");
    }
  }

  @override
  void dispose() {
    _customDirController.dispose();
    _adminEmailController?.dispose();
    _adminPasswordController?.dispose();
    _supabaseInstanceIdController?.dispose();
    super.dispose();
  }

  Future<void> _triggerOperation() async {
    // Get common values from parent controllers.
    final dbConnectionString = widget.dbController.text;
    final repo = widget.repoController.text;
    // Get directory: either a fixed value or the text entered by the user.
    final directory = widget.customDirectory
        ? _customDirController.text
        : widget.fixedDirectory ?? '';

    // For seed, validate extra parameters.
    if (_isSeed) {
      if ((_adminEmailController?.text.trim().isEmpty ?? true) ||
          (_adminPasswordController?.text.trim().isEmpty ?? true) ||
          (_supabaseInstanceIdController?.text.trim().isEmpty ?? true)) {
        setState(() {
          _statusMessage =
          "Please fill out Admin Email, Admin Password, and Supabase Instance ID.";
          _wasSuccess = false;
        });
        return;
      }
    }

    // Build the JSON payload.
    final Map<String, dynamic> bodyMap = {
      "dbConnectionString": dbConnectionString,
      "repo": repo,
      "directory": directory,
    };

    // Add extra parameters if this is the seed script.
    if (_isSeed) {
      bodyMap.addAll({
        "admin_email": _adminEmailController!.text.trim(),
        "admin_password": _adminPasswordController!.text.trim(),
        "supabase_instance_id": _supabaseInstanceIdController!.text.trim(),
      });
    }

    final body = jsonEncode(bodyMap);

    setState(() {
      _isLoading = true;
      _statusMessage = "${widget.title} operation is running...";
      _wasSuccess = null;
    });

    try {
      final response = await _supabase.functions.invoke(
        "instance-install",
        body: body,
      );

      if (response.status != 200) {
        setState(() {
          _statusMessage = "Error: ${response.data}";
          _wasSuccess = false;
          _isLoading = false;
        });
      } else {
        setState(() {
          _statusMessage = "${widget.title} operation completed successfully.";
          _wasSuccess = true;
          _isLoading = false;
        });
      }
    } catch (e) {
      setState(() {
        _statusMessage = "Unexpected error: $e";
        _wasSuccess = false;
        _isLoading = false;
      });
    }
  }

  Widget _buildStatusIndicator() {
    if (_wasSuccess == null) return const SizedBox();
    return _wasSuccess == true
        ? Icon(Icons.check_circle, color: ThemeConfig.greenColor())
        : Icon(Icons.error, color: ThemeConfig.redColor(context));
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 3,
      child: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Title row with a status icon if already run.
            Row(
              children: [
                Text(
                  widget.title,
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(width: 8),
                _buildStatusIndicator(),
              ],
            ),
            const SizedBox(height: 10),
            // If this section uses a custom directory, show a TextField.
            // Otherwise, show the fixed directory text (which is not editable).
            widget.customDirectory
                ? TextField(
              controller: _customDirController,
              decoration: const InputDecoration(labelText: 'Directory'),
            )
                : Padding(
              padding: const EdgeInsets.symmetric(vertical: 8.0),
              child: Text("Directory: ${widget.fixedDirectory}"),
            ),
            // If this is the seed section, add extra fields.
            if (_isSeed) ...[
              const Divider(),
              TextField(
                controller: _adminEmailController,
                decoration: const InputDecoration(labelText: 'Admin Email'),
              ),
              TextField(
                controller: _adminPasswordController,
                decoration: const InputDecoration(labelText: 'Admin Password'),
                obscureText: true,
              ),
              TextField(
                controller: _supabaseInstanceIdController,
                decoration:
                const InputDecoration(labelText: 'Supabase Instance ID'),
              ),
            ],
            const SizedBox(height: 8),
            ElevatedButton(
              onPressed: _isLoading ? null : _triggerOperation,
              child: const Text('Run Scripts'),
            ),
            const SizedBox(height: 8),
            // Show a progress indicator if running, or display the status message.
            _isLoading
                ? const Center(child: CircularProgressIndicator())
                : _statusMessage.isNotEmpty
                ? SelectableText(
              _statusMessage,
              style: const TextStyle(fontSize: 16),
            )
                : const SizedBox(),
          ],
        ),
      ),
    );
  }
}
