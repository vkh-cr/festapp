import 'package:auto_route/auto_route.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/eshop/models/order_model.dart';
import 'package:fstapp/components/eshop/models/ticket_model.dart';
import 'package:fstapp/data_models/event_model.dart';
import 'package:fstapp/data_models/user_info_model.dart';
import 'package:fstapp/data_services/db_users.dart';
import 'package:fstapp/data_services_eshop/db_tickets.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:fstapp/services/vibrate_service.dart';
import 'package:fstapp/theme_config.dart';
import 'package:mobile_scanner/mobile_scanner.dart';

import '../../widgets/html_view.dart';

enum ScanState { valid, invalid, used, nothing, ordered }

@RoutePage()
class ScanPage extends StatefulWidget {
  static const ROUTE = "scan";

  String? scanCode;
  ScanPage({@pathParam this.scanCode, super.key});

  @override
  _ScanPageState createState() => _ScanPageState();
}

class _ScanPageState extends State<ScanPage> {
  static const String _defaultResetPassword = "1";
  static const bool _showResetPasswordButton = true;

  EventModel? _event;
  TicketModel? _scannedObject;
  ScanState _scanState = ScanState.nothing;

  // To prevent multiple scans
  String? rightNowScanned;

  // DEFINITION: Mapping array for specific fields to show
  final Map<String, String> _specificFieldMappings = {
    "735": "Typ účastníka",
    "725": "Člen Anima Iuventutis, z. s.",
    "739": "Stravovací omezení",
    "615": "Typ účastníka",
    "616": "Přípravný tým",
    "629": "Člen Anima Iuventutis, z. s.",
    "620": "Stravovací omezení",
  };

  final MobileScannerController _mobileScannerController =
  MobileScannerController(
    formats: [BarcodeFormat.qrCode],
    detectionSpeed: DetectionSpeed.noDuplicates,
  );

  @override
  void dispose() {
    _mobileScannerController.dispose();
    super.dispose();
  }

  @override
  Future<void> didChangeDependencies() async {
    super.didChangeDependencies();
    if (widget.scanCode == null && context.routeData.hasPendingChildren) {
      widget.scanCode =
          context.routeData.pendingChildren[0].params.getString("scanCode");
    }

    if (kIsWeb) {
      MobileScannerPlatform.instance.setBarcodeLibraryScriptUrl(
          "https://unpkg.com/@zxing/library@0.21.3");
    }
    print(widget.scanCode);

    checkForCode();
  }

  Future<void> checkForCode() async {
    await Future.delayed(const Duration(milliseconds: 500));
    if (widget.scanCode == null) {
      String? inputScanCode = await DialogHelper.showInputDialog(
        context: context,
        dialogTitle: "Enter Scan Code".tr(),
        labelText: "Scan Code".tr(),
      );
      if (inputScanCode != null && inputScanCode.isNotEmpty) {
        widget.scanCode = inputScanCode;
      }
    }
  }

  /// Helper to extract value from dynamic fields
  String? _getFieldValue(OrderModel order, String targetFieldId) {
    if (order.data == null || order.data!['fields'] == null) {
      return null;
    }
    var fieldsList = order.data!['fields'];
    if (fieldsList is! List) return null;

    for (var fieldEntry in fieldsList) {
      if (fieldEntry is Map) {
        for (var key in fieldEntry.keys) {
          if (key.toString() == targetFieldId) {
            var value = fieldEntry[key];
            return (value != null && value.toString().isNotEmpty)
                ? value.toString()
                : null;
          }
        }
      }
    }
    return null;
  }

  /// Helper to get specific ticket price from order.data['tickets']
  double? _getTicketPrice() {
    if (_scannedObject == null ||
        _scannedObject!.relatedOrder == null ||
        _scannedObject!.relatedOrder!.data == null) {
      return null;
    }

    final data = _scannedObject!.relatedOrder!.data!;

    // 1. Access the 'tickets' list in the order JSON
    if (data.containsKey('tickets') && data['tickets'] is List) {
      final ticketsList = data['tickets'] as List;

      // 2. Find the specific ticket in the JSON that matches the scanned object's ID
      final ticketData = ticketsList.firstWhereOrNull(
              (t) => t is Map && t['id'] == _scannedObject!.id);

      if (ticketData != null && ticketData is Map) {
        double totalTicketPrice = 0.0;
        bool productsFound = false;

        // 3. Iterate through the 'products' list inside this specific ticket
        if (ticketData.containsKey('products') &&
            ticketData['products'] is List) {
          final productsList = ticketData['products'] as List;

          for (var product in productsList) {
            if (product is Map && product.containsKey('price')) {
              productsFound = true;
              totalTicketPrice +=
                  double.tryParse(product['price'].toString()) ?? 0.0;
            }
          }
        }

        if (productsFound ||
            (ticketData.containsKey('products') &&
                (ticketData['products'] as List).isEmpty)) {
          return totalTicketPrice;
        }
      }
    }
    return null;
  }

  Widget buildScannedUserDetails() {
    if (_scannedObject == null) {
      return Center(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(0, 24, 0, 12),
          child: const Text(
              "Point the camera at the attendee's code for an entry verification.")
              .tr(),
        ),
      );
    }

    // --- ICONS ---
    IconData icon;
    if (_scanState == ScanState.valid) {
      icon = Icons.verified;
    } else if (_scanState == ScanState.ordered) {
      icon = Icons.pending_actions;
    } else if (_scanState == ScanState.invalid) {
      icon = Icons.block;
    } else if (_scanState == ScanState.used) {
      icon = Icons.beenhere;
    } else {
      return const SizedBox.shrink();
    }

    // Prepare Price and Status Text
    Widget priceWidget = const SizedBox.shrink();
    double? price = _getTicketPrice();

    if (price != null) {
      String formattedPrice = Utilities.formatPrice(
        context,
        price,
        currencyCode: _scannedObject!.relatedOrder!.currencyCode,
      );

      String statusText = "";
      Color statusColor = Colors.black;

      if (_scanState == ScanState.valid || _scanState == ScanState.used) {
        statusText = "Zaplaceno";
      } else if (_scanState == ScanState.ordered) {
        statusText = "Nezaplaceno";
      }

      if (statusText.isNotEmpty) {
        priceWidget = Padding(
          padding: const EdgeInsets.only(top: 8.0, bottom: 4.0),
          child: RichText(
            textAlign: TextAlign.center,
            text: TextSpan(
              style: const TextStyle(fontSize: 20, color: Colors.black),
              children: [
                TextSpan(
                  text: "$formattedPrice  ",
                  style: const TextStyle(fontWeight: FontWeight.bold),
                ),
                TextSpan(
                  text: statusText,
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    color: statusColor,
                  ),
                ),
              ],
            ),
          ),
        );
      }
    }

    // Prepare State String with Date if Used
    String stateString = OrderModel.stateToLocale(_scannedObject!.state);
    if (_scannedObject!.state == OrderModel.usedState &&
        _scannedObject!.updatedAt != null) {
      String formattedDate =
      DateFormat('dd.MM.yyyy HH:mm').format(_scannedObject!.updatedAt!);
      stateString += " ($formattedDate)";
    }

    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        children: [
          // --- USER DETAILS SECTION ---
          Center(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                // 1. Display related products
                if (_scannedObject!.relatedProducts != null &&
                    _scannedObject!.relatedProducts!.isNotEmpty)
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: _scannedObject!.relatedProducts!.map((product) {
                      return Padding(
                        padding: const EdgeInsets.symmetric(vertical: 4.0),
                        child: Column(
                          children: [
                            Text(
                              product.title ?? "",
                              style: const TextStyle(
                                fontSize: 18,
                                fontWeight: FontWeight.bold,
                                color: Colors.black,
                              ),
                              textAlign: TextAlign.center,
                            ),
                            if (product.description != null &&
                                product.description!.trim().isNotEmpty)
                              HtmlView(
                                html: product.description!,
                                fontSize: 14,
                                color: Colors.black87,
                              ),
                          ],
                        ),
                      );
                    }).toList(),
                  ),

                const SizedBox(height: 8),

                // 2. Customer data, symbol, state
                Text(
                  "${_scannedObject!.relatedOrder!.toCustomerData()}   ${_scannedObject!.ticketSymbol}   $stateString",
                  style: const TextStyle(
                    color: Colors.black,
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                  textAlign: TextAlign.center,
                ),

                // ---------------------------------------------------
                // 2b. NEW: Display User Groups if available
                // ---------------------------------------------------
                if (_scannedObject!.relatedGroups != null &&
                    _scannedObject!.relatedGroups!.isNotEmpty)
                  Padding(
                    padding: const EdgeInsets.only(top: 8.0),
                    child: RichText(
                      textAlign: TextAlign.center,
                      text: TextSpan(
                        style: const TextStyle(color: Colors.black, fontSize: 16),
                        children: [
                          const TextSpan(
                            text: "Velká hra: ",
                            style: TextStyle(fontWeight: FontWeight.w600),
                          ),
                          TextSpan(
                            text: _scannedObject!.relatedGroups!
                                .map((g) => g.title)
                                .join(", "),
                          ),
                        ],
                      ),
                    ),
                  ),

                // 3. Display Related Spot
                if (_scannedObject!.relatedSpot != null)
                  Padding(
                    padding: const EdgeInsets.only(top: 8.0),
                    child: Text(
                      _scannedObject!.relatedSpot!.toSpotString(),
                      style: const TextStyle(
                        color: Colors.black,
                        fontSize: 18,
                        fontWeight: FontWeight.w600,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  ),

                // 4. Price and Payment Status
                priceWidget,

                // 5. Extra fields
                if (_scannedObject!.relatedOrder != null)
                  ..._specificFieldMappings.entries.map((entry) {
                    String fieldId = entry.key;
                    String label = entry.value;
                    String? value =
                    _getFieldValue(_scannedObject!.relatedOrder!, fieldId);

                    if (value == null) return const SizedBox.shrink();

                    return Padding(
                      padding: const EdgeInsets.only(top: 8.0),
                      child: RichText(
                        textAlign: TextAlign.center,
                        text: TextSpan(
                          style: const TextStyle(
                              color: Colors.black, fontSize: 15),
                          children: [
                            TextSpan(
                              text: "$label: ",
                              style:
                              const TextStyle(fontWeight: FontWeight.w600),
                            ),
                            TextSpan(text: value),
                          ],
                        ),
                      ),
                    );
                  }),
              ],
            ),
          ),
          const SizedBox(height: 8),

          // --- ICON SECTION ---
          Icon(icon, color: Colors.black, size: 40),
          const SizedBox(height: 16),

          // --- ACTION BUTTONS SECTION ---

          if (_scanState == ScanState.valid || _scanState == ScanState.ordered)
            Padding(
              padding: const EdgeInsets.only(bottom: 16.0),
              child: ElevatedButton(
                onPressed: _confirmTicket,
                child: const Text("Confirm Ticket").tr(),
              ),
            ),

          if (_showResetPasswordButton)
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor:
                Theme.of(context).colorScheme.secondaryContainer,
                foregroundColor:
                Theme.of(context).colorScheme.onSecondaryContainer,
              ),
              onPressed: _resetPassword,
              child: Text("Resetovat heslo na '$_defaultResetPassword'"),
            ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _scannedObject == null
          ? ThemeConfig.grey200(context)
          : getResultColor(_scanState),
      floatingActionButton: AppConfig.isAppSupported
          ? FloatingActionButton(
        onPressed: _openUserSearchDialog,
        tooltip: "Hledat účastníka",
        backgroundColor: ThemeConfig.appBarColor(),
        foregroundColor: ThemeConfig.appBarColorNegative(),
        child: const Icon(Icons.search),
      )
          : null,
      body: SafeArea(
        child: Stack(
          children: [
            Column(
              children: [
                // Header
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Row(
                    children: [
                      IconButton(
                        icon: Icon(
                          Icons.arrow_back,
                          color: ThemeConfig.appBarColorNegative(),
                        ),
                        onPressed: () {
                          RouterService.goBack(context);
                        },
                      ),
                      Expanded(
                        child: Text(
                          _event?.toString() ?? "",
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                            color: ThemeConfig.appBarColorNegative(),
                          ),
                          textAlign: TextAlign.center,
                        ),
                      ),
                    ],
                  ),
                ),
                // Display scanned user details
                buildScannedUserDetails(),
                // Scanner view
                Expanded(
                  child: MobileScanner(
                    fit: BoxFit.fitWidth,
                    controller: _mobileScannerController,
                    onDetect: (capture) async {
                      final List<Barcode> barcodes = capture.barcodes;
                      var id = barcodes.firstOrNull;
                      if (id == null) {
                        return;
                      }
                      debugPrint(id.rawValue);
                      await setupNewId(id.rawValue.toString());
                    },
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Future<void> _openUserSearchDialog() async {
    List<UserInfoModel> allUsers =
    await DbUsers.getAllUsersBasicsForScan(widget.scanCode!);

    if (!mounted) return;

    final UserInfoModel? selectedUser = await showDialog(
      context: context,
      builder: (ctx) => UserSearchDialog(allUsers: allUsers),
    );

    if (selectedUser != null) {
      await setupNewId(selectedUser.id.toString());
    }
  }

  Future<void> setupNewId(String scannedId) async {
    if (scannedId == rightNowScanned) {
      return;
    }
    rightNowScanned = scannedId;

    _scannedObject = await DbTickets.scanTicket(scannedId, widget.scanCode!);

    if (_scannedObject != null) {
      // 1. Valid (Paid/Sent)
      if (_scannedObject!.state == OrderModel.sentState ||
          _scannedObject!.state == OrderModel.paidState) {
        _scanState = ScanState.valid;
        VibrateService.vibrateOk();
        setState(() {});
        return;
      }
      // 2. Ordered (Valid but Unpaid)
      else if (_scannedObject!.state == OrderModel.orderedState) {
        _scanState = ScanState.ordered;
        VibrateService.vibrateOk();
        setState(() {});
        return;
      }
      // 3. Invalid (Storno)
      else if (_scannedObject!.state == OrderModel.stornoState) {
        _scanState = ScanState.invalid;
        VibrateService.vibrateNotOk();
        setState(() {});
        return;
      }
      // 4. Used
      else if (_scannedObject!.state == OrderModel.usedState) {
        _scanState = ScanState.used;
        VibrateService.vibrateNotOk();
        setState(() {});
        return;
      }
    }

    _scanState = ScanState.nothing;
    setState(() {});
  }

  Future<void> _confirmTicket() async {
    if (_scannedObject == null) return;

    bool success = await DbTickets.updateTicketToUsed(
        _scannedObject!.id!, widget.scanCode!);

    if (success) {
      setState(() {
        _scannedObject!.state = OrderModel.usedState;
        _scannedObject!.updatedAt = DateTime.now();
        _scanState = ScanState.used;
      });
      VibrateService.vibrateOk();
    } else {
      VibrateService.vibrateNotOk();
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text("Failed to confirm ticket").tr()),
      );
    }
  }

  Future<void> _resetPassword() async {
    if (_scannedObject == null) return;

    bool? confirmed = await showDialog<bool>(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text("Opravdu resetovat heslo?"),
          content: Text(
              "Opravdu chcete změnit heslo tohoto uživatele na '$_defaultResetPassword'?"),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(context).pop(false),
              child: const Text("Zrušit"),
            ),
            TextButton(
              style: TextButton.styleFrom(
                foregroundColor: Colors.red,
              ),
              onPressed: () => Navigator.of(context).pop(true),
              child: const Text("Resetovat"),
            ),
          ],
        );
      },
    );

    if (confirmed != true) return;

    try {
      String? email = await DbTickets.resetPassword(
          _scannedObject!.id!, _defaultResetPassword, widget.scanCode!);

      if (!mounted) return;

      if (email != null && email.isNotEmpty) {
        showDialog(
          context: context,
          builder: (context) => AlertDialog(
            title: const Text("Nové údaje pro přihlášení"),
            content: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text("E-mail:",
                    style:
                    TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                const SizedBox(height: 4),
                SelectableText(email, style: const TextStyle(fontSize: 18)),
                const SizedBox(height: 24),
                const Text("Heslo:",
                    style:
                    TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                const SizedBox(height: 4),
                const SelectableText(_defaultResetPassword,
                    style:
                    TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
              ],
            ),
            actions: [
              TextButton(
                onPressed: () => Navigator.of(context).pop(),
                child: const Text("OK"),
              ),
            ],
          ),
        );
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text("Chyba: Email nebyl vrácen.")),
        );
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text("Chyba při resetu hesla: $e")),
        );
      }
    }
  }

  Color getResultColor(ScanState scannedState) {
    switch (scannedState) {
      case ScanState.valid:
        return Colors.greenAccent;
      case ScanState.ordered:
        return Colors.orangeAccent;
      case ScanState.used:
        return Colors.blueAccent;
      case ScanState.invalid:
        return Colors.redAccent;
      case ScanState.nothing:
        return ThemeConfig.backgroundColor(context);
    }
    return Colors.redAccent;
  }
}

class UserSearchDialog extends StatefulWidget {
  final List<UserInfoModel> allUsers;
  const UserSearchDialog({super.key, required this.allUsers});

  @override
  State<UserSearchDialog> createState() => _UserSearchDialogState();
}

class _UserSearchDialogState extends State<UserSearchDialog> {
  late List<UserInfoModel> _filteredUsers;
  final _searchController = TextEditingController();

  @override
  void initState() {
    super.initState();
    _filteredUsers = List.from(widget.allUsers);
    _searchController.addListener(_filterUsers);
  }

  @override
  void dispose() {
    _searchController.removeListener(_filterUsers);
    _searchController.dispose();
    super.dispose();
  }

  void _filterUsers() {
    final query = _searchController.text;
    if (query.isEmpty) {
      setState(() {
        _filteredUsers = List.from(widget.allUsers);
      });
    } else {
      final normalizedQuery = Utilities.removeDiacritics(query.toLowerCase());
      setState(() {
        _filteredUsers = widget.allUsers.where((user) {
          final normalizedName =
          Utilities.removeDiacritics(user.toFullNameString().toLowerCase());
          final normalizedEmail =
          Utilities.removeDiacritics((user.email ?? "").toLowerCase());

          return normalizedName.contains(normalizedQuery) ||
              normalizedEmail.contains(normalizedQuery);
        }).toList();
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text("Vybrat účastníka"),
      content: SizedBox(
        width: 300,
        height: 400,
        child: Column(
          children: [
            TextField(
              controller: _searchController,
              autofocus: true,
              decoration: const InputDecoration(
                hintText: "Hledat (jméno, email)...",
                prefixIcon: Icon(Icons.search),
                border: OutlineInputBorder(),
                isDense: true,
              ),
            ),
            const SizedBox(height: 10),
            Expanded(
              child: ListView.builder(
                itemCount: _filteredUsers.length,
                itemBuilder: (context, index) {
                  final user = _filteredUsers[index];
                  return ListTile(
                    visualDensity: VisualDensity.compact,
                    title: Text(
                      user.toFullNameString(),
                      style: const TextStyle(fontWeight: FontWeight.bold),
                    ),
                    subtitle: user.email != null && user.email!.isNotEmpty
                        ? Text(user.email!)
                        : null,
                    onTap: () => Navigator.of(context).pop(user),
                  );
                },
              ),
            ),
          ],
        ),
      ),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(),
          child: const Text("Zrušit"),
        ),
      ],
    );
  }
}