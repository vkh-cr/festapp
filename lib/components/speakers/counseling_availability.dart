/// Result of get_counseling_availability: the counselors competent in the
/// chosen topic and their future free/occupied slots.
class CounselingAvailability {
  final List<CounselorModel> counselors;

  CounselingAvailability({required this.counselors});

  factory CounselingAvailability.fromJson(Map<String, dynamic> json) {
    return CounselingAvailability(
      counselors: ((json['counselors'] as List?) ?? const [])
          .map((e) =>
              CounselorModel.fromJson((e as Map).cast<String, dynamic>()))
          .toList(),
    );
  }
}

class CounselorModel {
  final int id;
  final String? title;
  final String? subtitle;
  final String? image;
  final List<CounselingSlot> slots;

  CounselorModel({
    required this.id,
    this.title,
    this.subtitle,
    this.image,
    this.slots = const [],
  });

  factory CounselorModel.fromJson(Map<String, dynamic> json) {
    return CounselorModel(
      id: (json['id'] as num).toInt(),
      title: json['title'] as String?,
      subtitle: json['subtitle'] as String?,
      image: json['image'] as String?,
      slots: ((json['slots'] as List?) ?? const [])
          .map((e) =>
              CounselingSlot.fromJson((e as Map).cast<String, dynamic>()))
          .toList(),
    );
  }
}

class CounselingSlot {
  final int id;
  final DateTime? startTime;
  final DateTime? endTime;
  final int? place;
  final int maxParticipants;
  final int occupied;
  final bool isSignedIn;

  CounselingSlot({
    required this.id,
    this.startTime,
    this.endTime,
    this.place,
    this.maxParticipants = 1,
    this.occupied = 0,
    this.isSignedIn = false,
  });

  bool get isFull => maxParticipants > 0 && occupied >= maxParticipants;

  factory CounselingSlot.fromJson(Map<String, dynamic> json) {
    return CounselingSlot(
      id: (json['id'] as num).toInt(),
      startTime: json['start_time'] != null
          ? DateTime.tryParse(json['start_time'].toString())?.toLocal()
          : null,
      endTime: json['end_time'] != null
          ? DateTime.tryParse(json['end_time'].toString())?.toLocal()
          : null,
      place: (json['place'] as num?)?.toInt(),
      maxParticipants: (json['max_participants'] as num?)?.toInt() ?? 1,
      occupied: (json['occupied'] as num?)?.toInt() ?? 0,
      isSignedIn: json['isSignedIn'] as bool? ?? false,
    );
  }
}
