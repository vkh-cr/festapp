import 'package:auto_route/auto_route.dart';
import 'package:collection/collection.dart';
import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:fstapp/AppRouter.gr.dart';
import 'package:fstapp/RouterService.dart';
import 'package:fstapp/dataModels/EventModel.dart';
import 'package:fstapp/dataModels/PlaceModel.dart';
import 'package:fstapp/dataServices/DbEvents.dart';
import 'package:fstapp/dataServices/DbPlaces.dart';
import 'package:fstapp/dataServices/SynchroService.dart';
import 'package:fstapp/pages/HtmlEditorPage.dart';
import 'package:fstapp/services/DialogHelper.dart';
import 'package:fstapp/services/ToastHelper.dart';
import 'package:fstapp/styles/StylesConfig.dart';
import 'package:fstapp/themeConfig.dart';
import 'package:fstapp/widgets/HtmlView.dart';
import 'package:fstapp/widgets/MouseDetector.dart';
import 'package:fstapp/widgets/TimeDataRangePicker.dart';

@RoutePage()
class EventEditPage extends StatefulWidget {
  static const ROUTE = "eventEdit";
  int? id;

  EventEditPage({super.key, @pathParam this.id});

  @override
  _EventEditPageState createState() => _EventEditPageState();
}

class _EventEditPageState extends State<EventEditPage> {
  final eventDayRangeTolerance = 7;
  final _formKey = GlobalKey<FormState>();
  EventModel? originalEvent;
  List<PlaceModel>? places;

  // Editable fields
  bool? isHidden;
  String? title, type, content, showInsideEvent;
  DateTime? startDate, endDate;
  int? maxParticipants, placeId;
  bool? splitForMenWomen, isGroupEvent;
  bool isFormValid = true;

  DateTime? minDate;
  DateTime? maxDate;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (widget.id == null && context.routeData.hasPendingChildren) {
      widget.id = context.routeData.pendingChildren[0].pathParams.getInt("id");
    }
    loadEventData();
  }

  Future<void> loadEventData() async {
    minDate = SynchroService.globalSettingsModel!.eventStartTime!.add(Duration(days: -eventDayRangeTolerance));
    maxDate = SynchroService.globalSettingsModel!.eventEndTime!.add(Duration(days: eventDayRangeTolerance));

    if (widget.id != null) {
      originalEvent = await DbEvents.getEvent(widget.id!, true);
    }

    places = await DbPlaces.getAllPlaces();

    if (originalEvent != null) {
      isHidden = originalEvent!.isHidden;
      title = originalEvent!.title;
      startDate = originalEvent!.startTime;
      endDate = originalEvent!.endTime;
      maxParticipants = originalEvent!.maxParticipants;
      splitForMenWomen = originalEvent!.splitForMenWomen;
      isGroupEvent = originalEvent!.isGroupEvent;
      placeId = originalEvent!.place?.id;
      type = originalEvent!.type;
      content = originalEvent!.description;
      showInsideEvent = originalEvent!.parentEventIds?.map((e) => e.toString()).join(",") ?? "";
    }
    validateForm();
    setState(() {});
  }

  void validateForm() {
    setState(() {
      isFormValid = title != null &&
          title!.trim().isNotEmpty &&
          startDate != null &&
          endDate != null &&
          !endDate!.isBefore(startDate!);
    });
  }

  Future<void> deleteEvent() async {
    final confirmation = await DialogHelper.showConfirmationDialogAsync(
      context,
      "Confirm removal".tr(),
      "Are you sure you want to delete this event?".tr(),
    );
    if (confirmation) {
      await originalEvent!.deleteMethod();
      ToastHelper.Show(context, "${"Deleted".tr()}: ${originalEvent!.title!}");
      RouterService.popTwo(context);
    }
  }

  Future<void> saveChanges() async {
    if (isFormValid && _formKey.currentState!.validate()) {
      _formKey.currentState!.save();

      if (originalEvent != null) {
        originalEvent!
          ..isHidden = isHidden!
          ..title = title!
          ..startTime = startDate!
          ..endTime = endDate!
          ..maxParticipants = maxParticipants == 0 ? null : maxParticipants
          ..splitForMenWomen = splitForMenWomen!
          ..isGroupEvent = isGroupEvent!
          ..place = places!.firstWhereOrNull((p) => p.id == placeId)
          ..type = type
          ..description = content
          ..parentEventIds = showInsideEvent != null && showInsideEvent!.isNotEmpty
              ? showInsideEvent!.split(",").map((e) => int.parse(e.trim())).toList()
              : [];

        await DbEvents.updateEvent(originalEvent!);
        ToastHelper.Show(context, "${"Saved".tr()}: ${originalEvent!.title!}");
        Navigator.of(context).pop();
      }
    }
  }

  void cancelEdit() {
    Navigator.of(context).pop();
  }

  @override
  Widget build(BuildContext context) {
    return MouseDetector(
      builder: (context, mouseIsConnected) {
        return Scaffold(
          appBar: AppBar(
            title: Text("Edit").tr(),
            actions: [
              if (widget.id != null)
                IconButton(
                  icon: const Icon(Icons.delete),
                  tooltip: "Delete".tr(),
                  onPressed: deleteEvent,
                ),
            ],
          ),
          body: originalEvent == null
              ? const Center(child: CircularProgressIndicator())
              : Align(
            alignment: Alignment.topCenter,
            child: ConstrainedBox(
              constraints: BoxConstraints(maxWidth: StylesConfig.appMaxWidth),
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Form(
                  key: _formKey,
                  child: ListView(
                    children: [
                      SwitchListTile(
                        title: Text("Hide").tr(),
                        value: isHidden ?? false,
                        onChanged: (value) => setState(() => isHidden = value),
                      ),
                      TextFormField(
                        initialValue: title,
                        decoration: InputDecoration(
                          labelText: "Title".tr(),
                          labelStyle: TextStyle(
                            color: (title == null || title!.trim().isEmpty)
                                ? ThemeConfig.redColor(context)
                                : null,
                          ),
                        ),
                        validator: FormBuilderValidators.required(
                          errorText: FormBuilderLocalizations.of(context).requiredErrorText,
                        ),
                        onChanged: (value) {
                          title = value;
                          validateForm();
                        },
                        onSaved: (value) => title = value,
                      ),
                      const SizedBox(height: 16),
                      TimeDateRangePicker(
                        start: startDate,
                        end: endDate,
                        onStartChanged: (newStart) {
                          setState(() {
                            startDate = newStart;
                            if (newStart != null && endDate != null && newStart.isAfter(endDate!)) {
                              endDate = DateTime(
                                newStart.year,
                                newStart.month,
                                newStart.day,
                                endDate!.hour,
                                endDate!.minute,
                              );
                            }
                            validateForm();
                          });
                        },
                        onEndChanged: (newEnd) {
                          setState(() {
                            endDate = newEnd;
                            if (newEnd != null && startDate != null && newEnd.isBefore(startDate!)) {
                              startDate = DateTime(
                                newEnd.year,
                                newEnd.month,
                                newEnd.day,
                                startDate!.hour,
                                startDate!.minute,
                              );
                            }
                            validateForm();
                          });
                        },
                        minDate: minDate!,
                        maxDate: maxDate!,
                      ),
                      const SizedBox(height: 16),
                      DropdownButtonFormField<PlaceModel?>(
                        value: places?.firstWhereOrNull((p) => p.id == placeId),
                        items: [
                          DropdownMenuItem<PlaceModel?>(
                            value: null,
                            child: Text("---"),
                          ),
                          if (places != null)
                            ...places!.map((place) {
                              return DropdownMenuItem<PlaceModel?>(
                                value: place,
                                child: Text(place.title ?? "???"),
                              );
                            }),
                        ],
                        onChanged: (selectedPlace) {
                          setState(() {
                            placeId = selectedPlace?.id;
                          });
                        },
                        decoration: InputDecoration(
                          labelText: "Place".tr(),
                        ),
                      ),
                      const SizedBox(height: 16),
                      TextFormField(
                        initialValue: maxParticipants != null && maxParticipants! > 0
                            ? maxParticipants.toString()
                            : "",
                        decoration: InputDecoration(
                          labelText: "Maximum of participants".tr(),
                        ),
                        keyboardType: TextInputType.number,
                        validator: (value) {
                          if (value != null && value.trim().isNotEmpty) {
                            final parsedValue = int.tryParse(value.trim());
                            if (parsedValue == null || parsedValue < 0) {
                              return FormBuilderLocalizations.of(context).positiveNumberErrorText;
                            }
                          }
                          return null;
                        },
                        onSaved: (value) {
                          maxParticipants = (value == null || value.trim().isEmpty) ? 0 : int.tryParse(value.trim());
                        },
                      ),
                      const SizedBox(height: 16),
                      Text(
                        "Content".tr(),
                        style: Theme.of(context).textTheme.labelMedium,
                      ),
                      Center(
                        child: ElevatedButton(
                          onPressed: () async {
                            RouterService.navigatePageInfo(
                              context,
                              HtmlEditorRoute(content: {HtmlEditorPage.parContent: content}),
                            ).then((value) {
                              if (value != null) {
                                setState(() {
                                  content = value as String;
                                });
                              }
                            });
                          },
                          child: Text("Edit content").tr(),
                        ),
                      ),
                      const SizedBox(height: 16),
                      ClipRect(
                        child: ConstrainedBox(
                          constraints: BoxConstraints(maxHeight: 400),
                          child: ShaderMask(
                            shaderCallback: (bounds) {
                              return LinearGradient(
                                begin: Alignment.topCenter,
                                end: Alignment.bottomCenter,
                                colors: [
                                  Colors.white,
                                  Colors.transparent,
                                ],
                                stops: const [0.9, 1.0],
                              ).createShader(bounds);
                            },
                            blendMode: BlendMode.dstIn,
                            child: HtmlView(
                              html: content ?? "",
                              isSelectable: true,
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(height: 16),
                      ExpansionTile(
                        title: Text(
                          "Advanced Settings".tr(),
                          style: Theme.of(context).textTheme.titleMedium?.copyWith(fontWeight: FontWeight.bold),
                        ),
                        children: [
                          SwitchListTile(
                            title: Text("Group").tr(),
                            value: isGroupEvent ?? false,
                            onChanged: (value) => setState(() => isGroupEvent = value),
                          ),
                          SwitchListTile(
                            title: Text("M/F 50/50").tr(),
                            value: splitForMenWomen ?? false,
                            onChanged: (value) => setState(() => splitForMenWomen = value),
                          ),
                          TextFormField(
                            initialValue: type,
                            decoration: InputDecoration(labelText: "Type".tr()),
                            onSaved: (value) => type = value,
                          ),
                          TextFormField(
                            initialValue: showInsideEvent,
                            decoration: InputDecoration(labelText: "Show inside event".tr()),
                            onSaved: (value) => showInsideEvent = value,
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
          bottomNavigationBar: Container(
            color: ThemeConfig.appBarColor(),
            padding: const EdgeInsets.all(8.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                TextButton(
                  onPressed: cancelEdit,
                  style: TextButton.styleFrom(
                    foregroundColor: Colors.white,
                  ),
                  child: Text("Storno").tr(),
                ),
                const SizedBox(width: 16),
                ElevatedButton(
                  onPressed: isFormValid ? saveChanges : null,
                  style: ElevatedButton.styleFrom(
                    // Use the default colors for the enabled state
                    backgroundColor: isFormValid
                        ? null // Default background for enabled state
                        : ThemeConfig.appBarColor().withOpacity(0.5), // Semi-transparent appBarColor for disabled state
                    foregroundColor: isFormValid
                        ? null // Default text color for enabled state
                        : ThemeConfig.grey600(context), // Subtle gray text for disabled state
                    disabledBackgroundColor: ThemeConfig.appBarColor().withOpacity(0.5), // Ensure visible disabled background
                    disabledForegroundColor: ThemeConfig.grey600(context), // Ensure visible disabled text
                  ),
                  child: Text("Save").tr(),
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}
