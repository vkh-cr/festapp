import 'package:flutter/material.dart';
import 'package:fstapp/components/speakers/speaker_topic_model.dart';

/// A single-select radio list of counseling areas. Exactly one topic can be
/// selected at a time — picking another deselects the previous one (the shared
/// [selectedTopicId] group value guarantees this). Extracted so it can be
/// pumped and asserted directly in widget tests.
class TopicPicker extends StatelessWidget {
  final List<SpeakerTopicModel> topics;
  final int? selectedTopicId;
  final ValueChanged<int> onSelected;

  const TopicPicker({
    super.key,
    required this.topics,
    required this.selectedTopicId,
    required this.onSelected,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        for (final topic in topics)
          if (topic.id != null)
            RadioListTile<int>(
              value: topic.id!,
              groupValue: selectedTopicId,
              onChanged: (value) {
                if (value != null) onSelected(value);
              },
              title: Text(topic.title ?? ""),
              controlAffinity: ListTileControlAffinity.leading,
              dense: true,
            ),
      ],
    );
  }
}
