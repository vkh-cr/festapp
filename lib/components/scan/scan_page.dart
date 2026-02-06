import 'package:auto_route/auto_route.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:fstapp/components/_shared/common_strings.dart';
import 'package:fstapp/components/eshop/orders_strings.dart';
import 'package:fstapp/app_config.dart';
import 'package:fstapp/components/eshop/models/order_model.dart';
import 'package:fstapp/components/eshop/models/ticket_model.dart';

import 'package:fstapp/components/users/user_info_model.dart';
import 'package:fstapp/components/users/db_users.dart';
import 'package:fstapp/components/eshop/db_tickets.dart';
import 'package:fstapp/services/dialog_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:fstapp/services/vibrate_service.dart';
import 'package:fstapp/theme_config.dart';
import 'package:mobile_scanner/mobile_scanner.dart';
import 'package:fstapp/components/features/feature_constants.dart';
import 'package:fstapp/components/features/feature_service.dart';
import 'package:fstapp/components/features/ticket_feature.dart';
import 'package:fstapp/components/features/feature.dart';
import 'package:fstapp/components/features/features_strings.dart';

import '../html/html_view.dart';
import 'ticket_search_dialog.dart';
import 'user_search_dialog.dart';

enum ScanState { valid, invalid, used, nothing, ordered, notFound }

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
  static const bool _showResetPasswordButton = AppConfig.isAppSupported;

  TicketModel? _scannedObject;
  ScanState _scanState = ScanState.nothing;

  // To prevent multiple scans
  String? rightNowScanned;
  bool _showHelpText = true;
  String? _occasionTitle;
  List<Feature> _features = [];
  bool _canScanTicketsManually = false;

  // Track if we just successfully used the ticket
  bool _justConfirmed = false;

  @override
  void initState() {
    super.initState();
    final ticketFeature =
        FeatureService.getFeatureDetails(FeatureConstants.ticket)
            as TicketFeature?;
    if (ticketFeature?.canScanManually == true) {
      _canScanTicketsManually = true;
    }
    Future.delayed(const Duration(seconds: 10), () {
      if (mounted) {
        setState(() {
          _showHelpText = false;
        });
      }
    });
  }

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
        dialogTitle: OrdersStrings.enterScanCode,
        labelText: OrdersStrings.scanCodeLabel,
      );
      if (inputScanCode != null && inputScanCode.isNotEmpty) {
        widget.scanCode = inputScanCode;
      }
    }
    if (widget.scanCode != null) {
      _loadOccasionTitle();
    }
  }

  Future<void> _loadOccasionTitle() async {
    if (widget.scanCode == null) return;
    try {
      final occasionData =
          await DbTickets.getOccasionByScanCode(widget.scanCode!);
      if (occasionData != null && mounted) {
        setState(() {
          _occasionTitle = occasionData['title'];
          if (occasionData['features'] != null) {
            _features = (occasionData['features'] as List)
                .map((f) => Feature.fromJson(f))
                .toList();
            final ticketFeature = FeatureService.getFeatureDetails(
                FeatureConstants.ticket,
                features: _features) as TicketFeature?;
            _canScanTicketsManually = ticketFeature?.canScanManually ?? false;
          }
        });
      }
    } catch (e) {
      debugPrint("Error loading occasion title: $e");
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
      final ticketData = ticketsList
          .firstWhereOrNull((t) => t is Map && t['id'] == _scannedObject!.id);

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

  Widget buildScannedUserDetails(Color backgroundColor) {
    // Determine text color based on background luminance
    Color foregroundColor = ThemeConfig.textColorForBackground(backgroundColor);

    if (_scannedObject == null) {
      if (_scanState == ScanState.notFound) {
        return Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Padding(
                padding: const EdgeInsets.all(24.0),
                child:
                    Icon(Icons.error_outline, size: 60, color: foregroundColor),
              ),
              Text(
                OrdersStrings.scanNotFound,
                style: TextStyle(
                  fontSize: 22,
                  fontWeight: FontWeight.bold,
                  color: foregroundColor,
                ),
              ),
              const SizedBox(height: 32),
            ],
          ),
        );
      }
      return Center(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(0, 24, 0, 12),
              child: Text(OrdersStrings.scanCameraInstruction),
            ),
            if (AppConfig.isAppSupported)
              AnimatedOpacity(
                duration: const Duration(milliseconds: 500),
                opacity: _showHelpText ? 1.0 : 0.0,
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 32.0),
                  child: InkWell(
                    onTap: () {
                      setState(() {
                        _showHelpText = false;
                      });
                    },
                    child: Padding(
                      padding: const EdgeInsets.only(bottom: 12),
                      child: Text(
                        OrdersStrings.scanInstructionsAppUser,
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          fontSize: 13,
                          color:
                              ThemeConfig.blackColor(context).withOpacity(0.7),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
          ],
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
    } else if (_scanState == ScanState.notFound) {
      icon = Icons.error_outline;
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
      // Status color matches foreground for visibility
      Color statusColor = foregroundColor;

      if (_scanState == ScanState.valid) {
        statusText = OrderModel.stateToLocale(OrderModel.paidState);
      } else if (_scanState == ScanState.used) {
        // Use exact translation from OrderModel
        statusText = OrderModel.stateToLocale(OrderModel.usedState);
      } else if (_scanState == ScanState.ordered) {
        statusText = OrderModel.stateToLocale(OrderModel.orderedState);
      } else if (_scanState == ScanState.invalid) {
        // Use exact translation from OrderModel (likely Storno)
        statusText = OrderModel.stateToLocale(OrderModel.stornoState);
      }

      if (statusText.isNotEmpty) {
        priceWidget = Padding(
          padding: const EdgeInsets.only(top: 8.0, bottom: 4.0),
          child: RichText(
            textAlign: TextAlign.center,
            text: TextSpan(
              style: TextStyle(fontSize: 20, color: foregroundColor),
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
                              style: TextStyle(
                                fontSize: 18,
                                fontWeight: FontWeight.bold,
                                color: foregroundColor,
                              ),
                              textAlign: TextAlign.center,
                            ),
                            if (product.description != null &&
                                product.description!.trim().isNotEmpty)
                              HtmlView(
                                html: product.description!,
                                fontSize: 14,
                                color: foregroundColor.withOpacity(0.9),
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
                  style: TextStyle(
                    color: foregroundColor,
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
                        style: TextStyle(color: foregroundColor, fontSize: 16),
                        children: [
                          TextSpan(
                            text: OrdersStrings.bigGameLabel,
                            style: const TextStyle(fontWeight: FontWeight.w600),
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
                      style: TextStyle(
                        color: foregroundColor,
                        fontSize: 18,
                        fontWeight: FontWeight.w600,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  ),

                // 4. Price and Payment Status
                priceWidget,

                // DISPLAY NOTES
                if (_scannedObject!.note != null &&
                    _scannedObject!.note!.isNotEmpty)
                  Padding(
                    padding: const EdgeInsets.only(top: 8.0),
                    child: Text(
                      _scannedObject!.note!,
                      style: TextStyle(
                        color: foregroundColor,
                        fontSize: 16,
                        fontStyle: FontStyle.italic,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  ),

                if (_features.isNotEmpty) ...[
                  Builder(builder: (context) {
                    final ticketFeature = FeatureService.getFeatureDetails(
                        FeatureConstants.ticket,
                        features: _features) as TicketFeature?;
                    if (ticketFeature?.showHiddenNote == true &&
                        _scannedObject!.noteHidden != null &&
                        _scannedObject!.noteHidden!.isNotEmpty) {
                      return Padding(
                        padding: const EdgeInsets.only(top: 8.0),
                        child: Column(
                          children: [
                            Text(
                              FeaturesStrings.labelShowHiddenNote,
                              style: TextStyle(
                                color: foregroundColor.withOpacity(0.7),
                                fontSize: 12,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            Text(
                              _scannedObject!.noteHidden!,
                              style: TextStyle(
                                color: foregroundColor,
                                fontSize: 16,
                              ),
                              textAlign: TextAlign.center,
                            ),
                          ],
                        ),
                      );
                    }
                    return const SizedBox.shrink();
                  }),
                ],

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
                          style:
                              TextStyle(color: foregroundColor, fontSize: 15),
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
          Icon(icon, color: foregroundColor, size: 40),
          const SizedBox(height: 16),

          // --- ACTION BUTTONS SECTION ---

          if (_scanState == ScanState.valid || _scanState == ScanState.ordered)
            Padding(
              padding: const EdgeInsets.only(bottom: 16.0),
              child: ElevatedButton(
                onPressed: _confirmTicket,
                child: Text(OrdersStrings.confirmTicketAction),
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
              child: Text(OrdersStrings.resetPasswordTo(_defaultResetPassword)),
            ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    bool canSearch = AppConfig.isAppSupported || _canScanTicketsManually;

    Color backgroundColor =
        (_scannedObject == null && _scanState == ScanState.nothing)
            ? ThemeConfig.grey200(context)
            : getResultColor(_scanState);

    return Scaffold(
      backgroundColor: backgroundColor,
      floatingActionButton: canSearch
          ? FloatingActionButton(
              onPressed: _openSearchDialog,
              tooltip: CommonStrings.search,
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
                if (_occasionTitle != null)
                  Container(
                    width: double.infinity,
                    color: ThemeConfig.whiteColor(context),
                    padding:
                        const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
                    child: Text(
                      "${OrdersStrings.scanningForOccasion} $_occasionTitle",
                      style: TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.bold,
                        color: ThemeConfig.blackColor(context),
                      ),
                      textAlign: TextAlign.center,
                    ),
                  ),
                // Header

                // Display scanned user details
                buildScannedUserDetails(backgroundColor),
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

  Future<void> _openSearchDialog() async {
    // If both are enabled, asking user what to search?
    // Or just search both?
    // For simplicity, if App is Supported, we assume User Search (as per existing behavior).
    // If NOT App Enabled but Ticket Scan Enabled, we use Ticket Search.
    // If BOTH? Maybe a dialog with tabs?
    // Given the prompt "similar to picking users", maybe just one flow.
    // If I search for "John", I might find a User "John" or a Ticket holder "John".
    // I can merge them? Or separate dialogs.

    if (AppConfig.isAppSupported) {
      await _openUserSearchDialog();
    } else if (_canScanTicketsManually) {
      await _openTicketSearchDialog();
    }
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

  Future<void> _openTicketSearchDialog() async {
    List<TicketModel> allTickets =
        await DbTickets.getAllTicketsForScan(widget.scanCode!);

    if (!mounted) return;

    final TicketModel? selectedTicket = await showDialog(
      context: context,
      builder: (ctx) => TicketSearchDialog(allTickets: allTickets),
    );

    if (selectedTicket != null) {
      // Use ticket symbol for identification
      if (selectedTicket.ticketSymbol != null) {
        await setupNewId(selectedTicket.ticketSymbol!);
      }
    }
  }

  Future<void> setupNewId(String scannedId) async {
    if (scannedId == rightNowScanned) {
      return;
    }
    rightNowScanned = scannedId;
    _justConfirmed = false;

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

    // Not found in DB or null return
    _scannedObject = null;
    _scanState = ScanState.notFound;
    VibrateService.vibrateNotOk();
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
        _justConfirmed = true;
      });
      VibrateService.vibrateOk();
    } else {
      VibrateService.vibrateNotOk();
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(OrdersStrings.confirmTicketFailed)),
      );
    }
  }

  Future<void> _resetPassword() async {
    if (_scannedObject == null) return;

    bool? confirmed = await showDialog<bool>(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: Text(OrdersStrings.resetPasswordTitle),
          content: Text(OrdersStrings.resetPasswordConfirmationContent(
              _defaultResetPassword)),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(context).pop(false),
              child: Text(CommonStrings.cancel), // Use CommonStrings
            ),
            TextButton(
              style: TextButton.styleFrom(
                foregroundColor: Colors.red,
              ),
              onPressed: () => Navigator.of(context).pop(true),
              child: Text(CommonStrings.reset), // Use CommonStrings
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
            title: Text(OrdersStrings.newLoginCredentials),
            content: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(OrdersStrings.gridEmail,
                    style: const TextStyle(
                        fontSize: 12, fontWeight: FontWeight.bold)),
                const SizedBox(height: 4),
                SelectableText(email, style: const TextStyle(fontSize: 18)),
                const SizedBox(height: 24),
                Text(CommonStrings.password, // Use CommonStrings
                    style: const TextStyle(
                        fontSize: 12, fontWeight: FontWeight.bold)),
                const SizedBox(height: 4),
                const SelectableText(_defaultResetPassword,
                    style:
                        TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
              ],
            ),
            actions: [
              TextButton(
                onPressed: () => Navigator.of(context).pop(),
                child: Text(CommonStrings.ok), // Use CommonStrings
              ),
            ],
          ),
        );
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text(OrdersStrings.errorEmailNotReturned)),
        );
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
              content: Text(OrdersStrings.errorResetPassword(e.toString()))),
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
        if (_justConfirmed) return Colors.blueAccent;
        return Colors.redAccent;
      case ScanState.invalid:
        return Colors.redAccent;
      case ScanState.notFound:
        return Colors.redAccent;
      case ScanState.nothing:
        return ThemeConfig.backgroundColor(context);
    }
  }
}
