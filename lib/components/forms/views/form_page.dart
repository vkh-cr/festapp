import 'dart:async';
import 'package:fstapp/components/forms/widgets_view/countdown_widget.dart';
import 'package:google_fonts/google_fonts.dart';

import 'package:auto_route/auto_route.dart';
import 'package:collection/collection.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:fstapp/components/blueprint/seat_reservation/model/seat_model.dart';
import 'package:fstapp/components/blueprint/seat_reservation/widgets/seat_reservation_widget.dart';
import 'package:fstapp/components/forms/views/reservation_page.dart';
import 'package:fstapp/router_service.dart';
import 'package:fstapp/data_models/form_model.dart';
import 'package:fstapp/data_models/form_option_model.dart';
import 'package:fstapp/data_models/form_option_product_model.dart';
import 'package:fstapp/components/eshop/models/product_type_model.dart';
import 'package:fstapp/data_services/rights_service.dart';
import 'package:fstapp/data_services_eshop/db_forms.dart';
import 'package:fstapp/data_services_eshop/db_orders.dart';
import 'package:fstapp/components/forms/views/order_preview_screen.dart';
import 'package:fstapp/components/forms/widgets_view/form_helper.dart';
import 'package:fstapp/services/utilities_all.dart';
import 'package:fstapp/styles/styles_config.dart';
import 'package:fstapp/theme_config.dart';
import 'package:fstapp/widgets/buttons_helper.dart';
import 'package:flutter/services.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:fstapp/widgets/html_view.dart';

import '../models/form_holder.dart';
import '../models/ticket_holder.dart';
import '../form_strings.dart';
import 'order_finish_screen.dart';

@RoutePage()
class FormPage extends StatefulWidget {
  static const ROUTE = "form";

  String? formLink;
  FormPage({super.key, @pathParam this.formLink});

  @override
  _FormPageState createState() => _FormPageState();
}

class _FormPageState extends State<FormPage> {
  bool _isLoading = false;
  bool _formNotAvailable = false;
  double _totalPrice = 0.0;

  int _totalTickets = 0;
  int _totalProducts = 0;

  Map<String, dynamic>? formResult;
  FormHolder? formHolder;
  FormModel? form;
  List<SeatModel> selectedSeats = [];

  final _formKey = GlobalKey<FormBuilderState>();
  final ScrollController _scrollController = ScrollController();

  bool _isSeatReservationVisible = false;
  Completer<List<SeatModel>?>? _seatReservationCompleter;
  StreamSubscription<dynamic>? _popStateSubscription;
  bool _isClosingProgrammatically = false;

  bool _dependenciesInitialized = false;

  @override
  void dispose() {
    _popStateSubscription?.cancel();
    _scrollController.dispose();
    super.dispose();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies(); // Call super FIRST

    // This ensures that if the widget rebuilds (e.g., from pop state),
    // we don't re-trigger the data load, but we do re-subscribe the listener.
    if (_dependenciesInitialized) {
      _popStateSubscription?.cancel();
      _popStateSubscription = RouterService.onPopState.listen(_handlePopState);
      return;
    }

    if (widget.formLink == null && context.routeData.hasPendingChildren) {
      widget.formLink =
          context.routeData.pendingChildren[0].params.getString("formLink");
    }

    // Call loadData, but DO NOT await it.
    // `loadData` correctly sets _isLoading, and the `build` method
    // will show a CircularProgressIndicator. This is the correct pattern.
    loadData();

    // Add the popstate listener from RouterService
    _popStateSubscription?.cancel(); // Cancel any old one
    _popStateSubscription = RouterService.onPopState.listen(_handlePopState);

    _dependenciesInitialized = true; // Mark as initialized
  }

  /// Handles browser back/forward events
  void _handlePopState(dynamic event) {
    if (_isClosingProgrammatically) {
      // This was a "Confirm" click from _hideSeatReservation.
      // The history is popped, and the overlay is already closing.
      // We just reset the flag and do nothing.
      _isClosingProgrammatically = false;
      return;
    }

    // This was a "Browser Back" click.
    if (_isSeatReservationVisible) {
      // The overlay is visible, so this pop event must close it.
      // This handles both the "Confirm" case (if user uses fwd/back)
      // and the "Cancel" case (where user hits back to clear the hash).
      setState(() {
        _isSeatReservationVisible = false;
      });

      if (_seatReservationCompleter != null &&
          !_seatReservationCompleter!.isCompleted) {
        // User wants browser back to function as a "Confirm"
        _seatReservationCompleter!.complete(selectedSeats);
      }
      _seatReservationCompleter = null;
    }
    // If the overlay is *not* visible, this pop event was
    // just cleaning up a dangling state from a "Cancel".
    // We don't need to do anything. The browser handles the URL.
  }

  Future<List<SeatModel>?> _showSeatReservation(List<SeatModel> seats) {
    if (_isSeatReservationVisible) return _seatReservationCompleter!.future;

    // Push a new history state via RouterService
    RouterService.pushOverlayState('seat-reservation');

    selectedSeats = seats;
    setState(() {
      _isSeatReservationVisible = true;
    });

    _seatReservationCompleter = Completer<List<SeatModel>?>();

    return _seatReservationCompleter!.future;
  }

  /// Hides the SeatReservationWidget and resolves the completer
  void _hideSeatReservation(List<SeatModel>? seats) {
    if (!_isSeatReservationVisible) return;

    if (seats != null) {
      _isClosingProgrammatically = true;
      RouterService.goBackProgrammatically();
    }

    setState(() {
      _isSeatReservationVisible = false;
    });

    // Complete the future with the result (null for cancel, list for confirm)
    if (_seatReservationCompleter != null &&
        !_seatReservationCompleter!.isCompleted) {
      _seatReservationCompleter!.complete(seats);
    }
    _seatReservationCompleter = null;
  }

  Widget _buildSeatReservationOverlay() {
    if (!_isSeatReservationVisible) return const SizedBox.shrink();

    return Positioned.fill(
      child: Container(
        color: ThemeConfig.dddBackground, // Dim background
        child: Center(
          child: SeatReservationWidget(
            secret: formHolder!.controller!.secret!,
            formDataKey: formHolder!.controller!.formKey!,
            blueprintId: formHolder!.controller!.blueprintId!,
            selectedSeats: selectedSeats,
            maxTickets: formHolder!.getTicket()?.maxTickets,
            onSelectionChanged: (sts) {
              selectedSeats = sts;
              _totalTickets = sts.length;
              _totalPrice = 0;
              for (var s in sts) {
                _totalPrice += s.objectModel?.product?.price ?? 0;
              }
              setState(() {});
            },
            onCloseSeatReservation:
            formHolder!.controller!.onCloseSeatReservation!,
          ),
        ),
      ),
    );
  }

  void _updateTotalPrice() {
    String? currencyC;
    _totalPrice = 0.0;
    _totalTickets = 0;
    _totalProducts = 0;

    for (var field in formHolder!.fields) {
      if (field.fieldType == FormHelper.fieldTypeProductType) {
        var selectedOption = field.getValue(formHolder!.controller!.globalKey);
        if (selectedOption is FormOptionProductModel) {
          _totalPrice += selectedOption.price;
          currencyC ??= selectedOption.currencyCode;
        }
      }

      if (field is TicketHolder) {
        if (_isSeatReservationVisible) {
          _totalTickets = selectedSeats.length;
        } else {
          _totalTickets = field.tickets.length;
        }

        if (_isSeatReservationVisible) {
          for (var s in selectedSeats) {
            _totalPrice += s.objectModel!.product!.price!;
          }
        } else {
          for (var s in field.tickets) {
            if (s.seat != null) {
              _totalProducts++;
              _totalPrice += s.seat!.objectModel!.product!.price!;
              currencyC ??= s.seat!.objectModel!.product!.currencyCode;
            }
          }
        }

        var tickets = FormHelper.getFieldData(_formKey, field) ?? [];

        for (var ticketData in tickets) {
          for (var ticketField in ticketData[FormHelper.metaFields]) {
            for (var fValue in ticketField.values) {
              if (fValue is FormOptionProductModel) {
                _totalProducts++;
                _totalPrice += fValue.price;
                currencyC ??= fValue.currencyCode;
              } else if (fValue is Iterable) {
                // Convert the JSArray (or any iterable) to a Dart list and sum the prices.
                var products = List<FormOptionProductModel>.from(fValue);
                _totalProducts += products.length;
                _totalPrice +=
                    products.fold(0, (sum, product) => sum + product.price);
                currencyC ??= products.firstOrNull?.currencyCode;
              }
            }
          }
        }
      }
    }

    formHolder!.controller!.currencyCode = currencyC;
    setState(() {});
  }

  Widget _buildPriceAndTicketInfo() {
    if (_totalPrice <= 0) return SizedBox(); // Do not display if total price is 0

    return Positioned(
      top: 16,
      right: 16,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 12.0),
        decoration: BoxDecoration(
          color: form?.primaryColor != null ? Color(form!.primaryColor!) : Theme.of(context).primaryColor,
          borderRadius: BorderRadius.circular(8.0),
          boxShadow: [BoxShadow(blurRadius: 5, color: Colors.black26)],
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              "${_totalTickets}x",
              style: const TextStyle(
                fontSize: 18, // Increased font size
                fontWeight: FontWeight.bold,
                color: Colors.white, // White bold text
              ),
            ),
            const SizedBox(width: 6), // Increased spacing
            Icon(
              Icons.local_activity, // Ticket icon
              color: Colors.white,
              size: 24, // Increased icon size
            ),
            const SizedBox(width: 10), // Increased spacing
            Text(
              Utilities.formatPrice(context, _totalPrice,
                  currencyCode: formHolder!.controller!.currencyCode),
              style: const TextStyle(
                fontSize: 18, // Increased font size
                fontWeight: FontWeight.bold,
                color: Colors.white, // White bold text
              ),
            ),
          ],
        ),
      ),
    );
  }

  Future<void> _showOrderPreview(BuildContext scrollContext) async {
    TextInput.finishAutofillContext();
    var valid = await FormHelper.saveValidateAndScroll(formHolder!);
    setState(() {});
    if (valid) {
      showModalBottomSheet(
        context: context,
        isScrollControlled: true,
        builder: (_) {
          // Inherit the theme from the current context (which has the form's custom theme)
          return Theme(
            data: _buildFormTheme(context),
            child: OrderPreviewScreen(
              formHolder: formHolder!,
              totalPrice: _totalPrice,
              onSendPressed: _sendOrder,
            ),
          );
        },
      );
    }
  }

  void _scrollToTop() {
    _scrollController.jumpTo(0.0);
  }

  Future<void> _sendOrder() async {
    if (formHolder == null || form == null) return;

    setState(() {
      _isLoading = true;
    });

    var data = FormHelper.getDataFromForm(formHolder!);
    data = FormHelper.replaceSpotWithId(data);
    data[FormHelper.metaSecret] = form!.secret;
    data[FormHelper.metaForm] = form!.key;
    formResult = data;

    showGeneralDialog(
      context: context,
      barrierDismissible: false, // Disable dismissing by tapping outside
      barrierLabel: "FinishOrderDialog",
      pageBuilder: (context, anim1, anim2) => FinishOrderScreen(
        orderFutureFunction: () async {
          return await DbOrders.sendTicketOrder(data);
        },
        onResetForm: () async {
          Navigator.of(context).pop(); // Close the FinishOrderScreen
          _scrollToTop();
          await loadData();
          _updateTotalPrice();
        },
      ),
      transitionBuilder: (context, anim1, anim2, child) {
        return Theme(
          data: _buildFormTheme(context),
          child: FadeTransition(
            opacity: anim1, // Fade animation
            child: child,
          ),
        );
      },
    );

    setState(() {
      _isLoading = false;
    });
  }



// ... (imports)

  ThemeData _buildFormTheme(BuildContext context) {
    var theme = Theme.of(context);
    var form = this.form; // Use class member
    
    if (form != null) {
      if (form!.fontFamily != null) {
        try {
          theme = theme.copyWith(
            textTheme: GoogleFonts.getTextTheme(form!.fontFamily!, theme.textTheme),
          );
        } catch (e) {
          print(e);
        }
      }

      int? primaryInt = form!.primaryColor;
      int? secondaryInt = form!.secondaryColor;

      Color? primary = primaryInt != null ? Color(primaryInt) : null;
      Color? secondary = secondaryInt != null ? Color(secondaryInt) : null;

      // Check brightness to respect system theme (dark/light) unless we want to force something.
      bool isDark = theme.brightness == Brightness.dark;

      if (primary != null) {
        // SMART COLOR LOGIC FOR DARK MODE
        // Ensure the primary color is bright enough to be visible against dark background.
        final hsl = HSLColor.fromColor(primary);
        // Boost lightness more aggressively for dark mode to ensure visibility
        if (isDark && hsl.lightness < 0.75) {
             primary = hsl.withLightness(0.75).toColor();
             // Also optionally boost saturation if it's very low, to make it pop
             if (hsl.saturation < 0.3) {
                primary = HSLColor.fromColor(primary!).withSaturation(0.4).toColor();
             }
        }
        
        // Auto-calculate secondary if not provided
        secondary ??= HSLColor.fromColor(primary!).withLightness((isDark ? 0.85 : 0.9).clamp(0.0, 1.0)).toColor();

        theme = theme.copyWith(
          primaryColor: primary,
          // Use a very subtle tint of the primary color for background in light mode
          // User requested "very slightly colored" and "solid opaque" background
          // Round 12: Increased opacity to 0.12 ("even darker") for light mode.
          scaffoldBackgroundColor: Color.alphaBlend(
              primary!.withOpacity(isDark ? 0.05 : 0.07), 
              isDark ? Colors.grey.shade900 : Colors.white
          ), 
          colorScheme: theme.colorScheme.copyWith(
            primary: primary,
            onPrimary: isDark ? Colors.black : Colors.white, // Ensure text on primary is readable
            secondary: secondary ?? theme.colorScheme.secondary,
            // Only force white surface if strictly desired, otherwise let theme decide or use a light tint
            surface: isDark ? null : Colors.white,
          ),
          checkboxTheme: CheckboxThemeData(
            fillColor: MaterialStateProperty.resolveWith<Color>((states) {
               if (states.contains(MaterialState.selected)) {
                 return primary!;
               }
               return isDark ? Colors.grey.shade400 : Colors.grey.shade600;
            }),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(4)),
            side: BorderSide(color: isDark ? Colors.grey.shade500 : Colors.grey.shade600, width: 2),
          ),
          radioTheme: RadioThemeData(
             fillColor: MaterialStateProperty.resolveWith<Color>((states) {
               if (states.contains(MaterialState.selected)) {
                 return primary!;
               }
               return isDark ? Colors.grey.shade400 : Colors.grey.shade600;
             }),
          ),
          switchTheme: SwitchThemeData(
             thumbColor: MaterialStateProperty.resolveWith<Color>((states) {
               if (states.contains(MaterialState.selected)) {
                 return primary!;
               }
               return isDark ? Colors.grey.shade400 : Colors.grey.shade200;
             }),
             trackColor: MaterialStateProperty.resolveWith<Color>((states) {
               if (states.contains(MaterialState.selected)) {
                 return primary!.withOpacity(0.5);
               }
               return isDark ? Colors.grey.shade700 : Colors.grey.shade400;
             }),
          ),
          inputDecorationTheme: theme.inputDecorationTheme.copyWith(
             filled: true,
             // In dark mode, white fill is bad. Use a dark surface color or transparent.
             fillColor: isDark ? Colors.grey.shade800 : Colors.white,
             labelStyle: TextStyle(color: isDark ? Colors.grey.shade400 : Colors.grey.shade700),
             
          ),
          elevatedButtonTheme: ElevatedButtonThemeData(
             style: ElevatedButton.styleFrom(
               backgroundColor: primary,
               foregroundColor: Colors.white, // Ensure text is white on primary
             )
          )
        );
      }
    }
    return theme;
  }

  @override
  Widget build(BuildContext context) {
    // Check time limits
    bool isClosed = false;
    bool isBeforeStart = false;
    bool isAfterEnd = false;
    
    if (form != null) {
      final now = DateTime.now();
      if (form!.startTime != null && now.isBefore(form!.startTime!)) {
        isClosed = true;
        isBeforeStart = true;
      } else if (form!.endTime != null && now.isAfter(form!.endTime!)) {
        isClosed = true;
        isAfterEnd = true;
      } else if (form!.isOpen == false) {
        isClosed = true;
      }
    }
    
    dynamic previewParam = context.routeData.queryParams.get('preview', false);
    bool isPreviewParam = previewParam.toString().toLowerCase() == 'true';
    bool canPreview = RightsService.isEditorOrderView();
    // Allow preview if specifically requested OR if user is editor and form is closed (automatic bypass)
    bool showPreview = (isClosed && canPreview) || (canPreview && isPreviewParam);
    bool showCountdown = isBeforeStart && (form?.enableCountdown ?? false) && !showPreview;

    if (_isLoading) {
       return const Scaffold(body: Center(child: CircularProgressIndicator()));
    }

    if (_formNotAvailable || (isClosed && !showPreview && !showCountdown)) {
      return Scaffold(body: _buildFormNotAvailableMessage());
    }

    ThemeData theme = _buildFormTheme(context);
    
    Widget bodyContent;
    
    if (showCountdown) {
      bodyContent = CountdownWidget(
        targetTime: form!.startTime!,
        title: form!.countdownTitle ?? FormStrings.registrationStart,
        onFinished: () {
          setState(() {
            // Re-evaluate state to show form
          });
        },
      );
    } else {
       // Main Form Content
       bodyContent = SafeArea(
        child: Stack(
          children: [
            Align(
              alignment: Alignment.topCenter,
              child: ConstrainedBox(
                constraints: BoxConstraints(maxWidth: StylesConfig.formMaxWidth),
                child: Builder(
                  builder: (scrollContext) {
                    return SingleChildScrollView(
                      controller: _scrollController,
                      child: Padding(
                        padding: const EdgeInsets.all(12.0),
                        child: Column(
                          children: [
                            if (showPreview)
                              Container(
                                width: double.infinity,
                                color: Colors.orangeAccent,
                                padding: const EdgeInsets.all(8.0),
                                margin: const EdgeInsets.only(bottom: 16.0),
                                child: Text(
                                  FormStrings.previewMode,
                                  textAlign: TextAlign.center,
                                  style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13, color: Colors.black),
                                ),
                              ),

                            if (formHolder == null)
                               const Center(child: CircularProgressIndicator())
                            else
                                FormBuilder(
                                  key: _formKey,
                                  child: Builder(
                                    builder: (context) {
                                      return AutofillGroup(
                                        child: Column(
                                          children: [
                                            if (form!.header != null)
                                              Column(
                                                children: [
                                                  HtmlView(
                                                      html: form!.header!,
                                                      isSelectable: true),
                                                  const SizedBox(height: 16),
                                                ],
                                              ),
                                            ...FormHelper.getAllFormFields(
                                                context, _formKey, formHolder!),
                                            const SizedBox(height: 32),
                                            ButtonsHelper.primaryButton(
                                              context: context,
                                              onPressed: (_isLoading ||
                                                  _totalProducts == 0)
                                                  ? null
                                              : () => _showOrderPreview(
                                                  scrollContext),
                                              label: FormStrings.buttonContinue,
                                              isLoading: _isLoading,
                                              height: 50.0,
                                              width: 250.0,
                                            ),
                                            const SizedBox(height: 32),
                                          ],
                                        ),
                                      );
                                    }
                                  ),
                                ),
                          ],
                        ),
                      ),
                    );
                  },
                ),
              ),
            ),
            _buildSeatReservationOverlay(),
            _buildPriceAndTicketInfo(),
          ],
        ),
      );
    }

    return Theme(
      data: theme,
      child: Scaffold(
        body: bodyContent,
        floatingActionButtonLocation: FloatingActionButtonLocation.endDocked,
        floatingActionButton: Padding(
          padding: EdgeInsets.only(bottom: 24),
          child: Visibility(
            visible: RightsService.isEditor(),
            child: FloatingActionButton(
              backgroundColor: theme.primaryColor,
              foregroundColor: theme.colorScheme.onPrimary,
              onPressed: () {
                RouterService.navigateOccasion(context, ReservationsPage.ROUTE)
                    .then((value) => loadData());
              },
              child: const Icon(Icons.edit),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildFormNotAvailableMessage() {
    String notAvailableText = (form?.headerOff?.isNotEmpty ?? false)
        ? form!.headerOff!
        : FormStrings.reservationUnavailableMessage;
    return Center(
      child: Container(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisSize: MainAxisSize.min,
          children: [
            const Icon(
              Icons.event_busy,
              size: 60,
            ),
            const SizedBox(height: 16),
            Text(
              FormStrings.reservationUnavailable,
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            IntrinsicWidth(
              child: HtmlView(
                html: notAvailableText,
                isSelectable: true,
              ),
            ),
            const SizedBox(height: 24),
          ],
        ),
      ),
    );
  }

  // Function to generate options for a specific item type and add them to the ticket fields
  Map<String, dynamic> generateOptionsForItemType(
      List<ProductTypeModel> allItems, String itemType) {
    var itemTypeModel =
    allItems.firstWhereOrNull((item) => item.type == itemType);

    if (itemTypeModel == null || itemTypeModel.products == null) {
      return {};
    }

    List<Map<String, dynamic>> options = [];

    for (var item in itemTypeModel.products!) {
      options.add({
        FormOptionModel.metaOptionsName: item.title.toString(),
        FormOptionModel.metaOptionsId: item.id.toString(),
        FormOptionModel.metaOptionsPrice: item.price ?? 0.0, // Include price in the options
      });
    }

    return {
      FormHelper.metaType: FormHelper.fieldTypeSelectOne,
      FormHelper.metaOptions: options,
      FormHelper.metaLabel: itemTypeModel.title,
      FormHelper.metaOptionsType: itemType,
    };
  }

  Future<void> loadData() async {
    setState(() {
      _isLoading = true;
      _formNotAvailable = false; // Reset the message flag
    });

    if (widget.formLink == null) {
      setState(() {
        _isLoading = false;
        _formNotAvailable = true; // Show message if formLink is null
      });
      return;
    }
    //var key = UuidConverter.base62ToUuid(widget.id!);

    try {
      form = await DbForms.getFormFromLink(widget.formLink!);
      if (form == null) {
        setState(() {
          _isLoading = false;
          _formNotAvailable = true; // Show message if form is not found
        });
        return;
      }

      await RightsService.updateAppData(
          formLink: widget.formLink);

      formHolder = FormHolder.fromFormFieldModel(form!);

      formHolder!.controller = FormHolderController(
          secret: form!.secret,
          blueprintId: form!.blueprint,
          globalKey: _formKey,
          formKey: form!.key!,
          updateTotalPrice: _updateTotalPrice,
          showSeatReservation: _showSeatReservation,
          onCloseSeatReservation: _hideSeatReservation);

      setState(() {
        _isLoading = false;
      });
    } catch (e) {
      // Handle any unexpected errors
      print("Error loading form: $e");
      setState(() {
        _isLoading = false;
        _formNotAvailable = true;
      });
    }
  }
}