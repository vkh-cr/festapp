/// One counseling/competence area (catalog entry per occasion).
/// Backed by public.speaker_topics via the speakers RPCs.
class SpeakerTopicModel {
  final int? id;
  String? code;
  String? title;
  int order;
  bool isHidden;

  SpeakerTopicModel({
    this.id,
    this.code,
    this.title,
    this.order = 0,
    this.isHidden = false,
  });

  factory SpeakerTopicModel.fromJson(Map<String, dynamic> json) {
    return SpeakerTopicModel(
      id: (json['id'] as num?)?.toInt(),
      code: json['code'] as String?,
      title: json['title'] as String?,
      order: (json['order'] as num?)?.toInt() ?? 0,
      isHidden: json['is_hidden'] as bool? ?? false,
    );
  }

  /// Payload for update_speaker_topic (id omitted on insert).
  Map<String, dynamic> toJson() => {
        if (id != null) 'id': id,
        'code': code,
        'title': title,
        'order': order,
        'is_hidden': isHidden,
      };
}
