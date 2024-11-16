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
  TimeOfDay? startTime, endTime;
  int? maxParticipants, placeId;
  bool? splitForMenWomen, isGroupEvent;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (widget.id == null && context.routeData.hasPendingChildren) {
      widget.id =
          context.routeData.pendingChildren[0].pathParams.getInt("id");
    }
    loadEventData();
  }

  DateTime? minDate;
  DateTime? maxDate;

  Future<void> loadEventData() async {
    minDate = SynchroService.globalSettingsModel!.eventStartTime!.add(Duration(days: -eventDayRangeTolerance));
    maxDate = SynchroService.globalSettingsModel!.eventEndTime!.add(Duration(days: eventDayRangeTolerance));

    if (widget.id != null) {
      originalEvent = await DbEvents.getEvent(widget.id!);
    }

    places = await DbPlaces.getAllPlaces();

    if (originalEvent != null) {
      isHidden = originalEvent!.isHidden;
      title = originalEvent!.title;
      startDate = originalEvent!.startTime;
      startTime = TimeOfDay.fromDateTime(originalEvent!.startTime);
      endDate = originalEvent!.endTime;
      endTime = TimeOfDay.fromDateTime(originalEvent!.endTime);
      maxParticipants = originalEvent!.maxParticipants;
      splitForMenWomen = originalEvent!.splitForMenWomen;
      isGroupEvent = originalEvent!.isGroupEvent;
      placeId = originalEvent!.place?.id;
      type = originalEvent!.type;
      content = originalEvent!.description;
      showInsideEvent = originalEvent!.parentEventIds?.map((e) => e.toString()).join(",")??"";
    }
    setState(() {});
  }

  Future<void> deleteEvent() async {
    final confirmation = await DialogHelper.showConfirmationDialogAsync(
      context,
      "Confirm removal".tr(),
      "Are you sure you want to delete this event?".tr(),
    );
    if (confirmation) {
      await DbEvents.deleteEvent(originalEvent!);
      ToastHelper.Show(context, "${"Deleted".tr()}: ${originalEvent!.title!}");
      RouterService.popTwo(context);
    }
  }

  Future<void> saveChanges() async {
    if (_formKey.currentState!.validate()) {
      _formKey.currentState!.save();

      if (originalEvent != null) {
        // Ensure startTime and endTime are constructed directly
        originalEvent!
          ..isHidden = isHidden!
          ..title = title!
          ..startTime = DateTime(
            startDate!.year,
            startDate!.month,
            startDate!.day,
            startTime!.hour,
            startTime!.minute,
          )
          ..endTime = DateTime(
            endDate!.year,
            endDate!.month,
            endDate!.day,
            endTime!.hour,
            endTime!.minute,
          )
          ..maxParticipants = maxParticipants == 0 ? null : maxParticipants
          ..splitForMenWomen = splitForMenWomen!
          ..isGroupEvent = isGroupEvent!
          ..place = places!.firstWhereOrNull((p)=>p.id! == placeId!)
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
        final timePickerMode = mouseIsConnected
            ? TimePickerEntryMode.input
            : TimePickerEntryMode.dial;
        final datePickerMode = mouseIsConnected
            ? DatePickerEntryMode.input
            : DatePickerEntryMode.calendar;

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
                        onChanged: (value) =>
                            setState(() => isHidden = value),
                      ),
                      TextFormField(
                        initialValue: title,
                        decoration:
                        InputDecoration(labelText: "Title".tr()),
                        validator: FormBuilderValidators.required(
                          errorText: FormBuilderLocalizations.of(context)
                              .requiredErrorText,
                        ),
                        onSaved: (value) => title = value,
                      ),
                      Row(
                        children: [
                          Expanded(
                            child: TextFormField(
                              readOnly: true,
                              decoration: InputDecoration(
                                labelText: "Start".tr(),
                              ),
                              controller: TextEditingController(
                                text: startTime?.format(context),
                              ),
                              onTap: () async {
                                final pickedTime = await showTimePicker(
                                  context: context,
                                  initialTime: startTime ?? TimeOfDay.now(),
                                  initialEntryMode: timePickerMode,
                                );
                                if (pickedTime != null) {
                                  setState(() => startTime = pickedTime);
                                }
                              },
                            ),
                          ),
                          const SizedBox(width: 16),
                          Expanded(
                            child: TextFormField(
                              readOnly: true,
                              decoration: InputDecoration(
                                labelText: "Start date".tr(),
                              ),
                              controller: TextEditingController(
                                text: startDate != null ? DateFormat.yMd().format(startDate!) : "",
                              ),
                              onTap: () async {
                                final pickedDate = await showDatePicker(
                                  context: context,
                                  initialDate: startDate ?? DateTime.now(),
                                  firstDate: minDate!,
                                  lastDate: maxDate!,
                                  initialEntryMode: datePickerMode,
                                );
                                if (pickedDate != null) {
                                  setState(() => startDate = pickedDate);
                                }
                              },
                            ),
                          ),
                        ],
                      ),
                      Row(
                        children: [
                          Expanded(
                            child: TextFormField(
                              readOnly: true,
                              decoration: InputDecoration(
                                labelText: "End".tr(),
                              ),
                              controller: TextEditingController(
                                text: endTime?.format(context),
                              ),
                              onTap: () async {
                                final pickedTime = await showTimePicker(
                                  context: context,
                                  initialTime: endTime ?? TimeOfDay.now(),
                                  initialEntryMode: timePickerMode,
                                );
                                if (pickedTime != null) {
                                  setState(() => endTime = pickedTime);
                                }
                              },
                              validator: (value) {
                                if (startDate != null && endDate != null && startTime != null && endTime != null) {
                                  final startDateTime = DateTime(
                                    startDate!.year,
                                    startDate!.month,
                                    startDate!.day,
                                    startTime!.hour,
                                    startTime!.minute,
                                  );
                                  final endDateTime = DateTime(
                                    endDate!.year,
                                    endDate!.month,
                                    endDate!.day,
                                    endTime!.hour,
                                    endTime!.minute,
                                  );
                                  if (endDateTime.isBefore(startDateTime)) {
                                    return FormBuilderLocalizations.of(context).minErrorText(DateFormat.yMd(Localizations.localeOf(context).toString()).add_jm().format(startDateTime));
                                  }
                                }
                                return null;
                              },
                            ),
                          ),
                          const SizedBox(width: 16),
                          Expanded(
                            child: TextFormField(
                              readOnly: true,
                              decoration: InputDecoration(
                                labelText: "End date".tr(),
                              ),
                              controller: TextEditingController(
                                text: endDate != null ? DateFormat.yMd().format(endDate!) : "",
                              ),
                              onTap: () async {
                                final pickedDate = await showDatePicker(
                                  context: context,
                                  initialDate: endDate ?? DateTime.now(),
                                  firstDate: minDate!,
                                  lastDate: maxDate!,
                                  initialEntryMode: datePickerMode,
                                );
                                if (pickedDate != null) {
                                  setState(() => endDate = pickedDate);
                                }
                              },
                              validator: (value) {
                                if (startDate != null && endDate != null) {
                                  if (endDate!.isBefore(startDate!)) {
                                    return FormBuilderLocalizations.of(context).minErrorText(DateFormat.yMd(Localizations.localeOf(context).toString()).format(startDate!));
                                  }
                                }
                                return null;
                              },
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 16),
                      DropdownButtonFormField<PlaceModel?>(
                        value: places?.firstWhere((p) => p.id == placeId),
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
                        initialValue: maxParticipants != null && maxParticipants! > 0 ? maxParticipants.toString() : "",
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
                        style:
                        Theme.of(context).textTheme.labelMedium,
                      ),
                      Center(
                        child: ElevatedButton(
                          onPressed: () async {
                            RouterService.navigatePageInfo(
                                  context,
                                  HtmlEditorRoute(content: {HtmlEditorPage.parContent:
                                  content}))
                              .then((value) async {
                                if(value != null){
                                  setState(() {
                                    content = value as String;
                                  });
                                }
                            });
                          },
                          child: Text("Edit content".tr()),
                        ),
                      ),
                      const SizedBox(height: 16),
                      ClipRect(
                        child: ConstrainedBox(
                          constraints:
                          BoxConstraints(maxHeight: 400),
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
                          style: Theme.of(context)
                              .textTheme
                              .titleMedium
                              ?.copyWith(fontWeight: FontWeight.bold),
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
                  onPressed: saveChanges,
                  child: Text("Save".tr()),
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}
