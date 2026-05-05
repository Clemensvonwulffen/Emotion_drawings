const BASE_URL = 'https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/';

const listA = [
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_916814_order_1_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_916814_order_1_emotion_afraid"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_90545_order_9_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_90545_order_9_emotion_afraid"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_788358_order_1_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_788358_order_1_emotion_afraid"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_691760_order_1_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_691760_order_1_emotion_angry"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_907090_order_5_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_907090_order_5_emotion_angry"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_519207_order_3_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_519207_order_3_emotion_angry"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_907090_order_3_emotion_ashamed.png",
    emotion:      "ashamed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_907090_order_3_emotion_ashamed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_691760_order_5_emotion_ashamed.png",
    emotion:      "ashamed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_691760_order_5_emotion_ashamed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_519207_order_6_emotion_ashamed.png",
    emotion:      "ashamed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_519207_order_6_emotion_ashamed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_409480_order_8_emotion_disgusted.png",
    emotion:      "disgusted",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_409480_order_8_emotion_disgusted"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_145020_order_5_emotion_disgusted.png",
    emotion:      "disgusted",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_145020_order_5_emotion_disgusted"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_378519_order_4_emotion_disgusted.png",
    emotion:      "disgusted",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_378519_order_4_emotion_disgusted"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_788358_order_8_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_788358_order_8_emotion_embarrassed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_398315_order_2_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_398315_order_2_emotion_embarrassed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_136928_order_7_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_136928_order_7_emotion_embarrassed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_90545_order_6_emotion_guilty.png",
    emotion:      "guilty",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_90545_order_6_emotion_guilty"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_136928_order_2_emotion_guilty.png",
    emotion:      "guilty",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_136928_order_2_emotion_guilty"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_409480_order_3_emotion_guilty.png",
    emotion:      "guilty",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_409480_order_3_emotion_guilty"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_173534_order_3_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_173534_order_3_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_519207_order_5_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_519207_order_5_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_90545_order_3_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_90545_order_3_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_145020_order_7_emotion_jealous.png",
    emotion:      "jealous",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_145020_order_7_emotion_jealous"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_378519_order_1_emotion_jealous.png",
    emotion:      "jealous",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_378519_order_1_emotion_jealous"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_204723_order_9_emotion_jealous.png",
    emotion:      "jealous",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_204723_order_9_emotion_jealous"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_136928_order_3_emotion_proud.png",
    emotion:      "proud",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_136928_order_3_emotion_proud"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_928095_order_3_emotion_proud.png",
    emotion:      "proud",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_928095_order_3_emotion_proud"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_968720_order_10_emotion_proud.png",
    emotion:      "proud",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_968720_order_10_emotion_proud"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_173534_order_1_emotion_sad.png",
    emotion:      "sad",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_173534_order_1_emotion_sad"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_204723_order_7_emotion_sad.png",
    emotion:      "sad",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_204723_order_7_emotion_sad"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_916814_order_9_emotion_sad.png",
    emotion:      "sad",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_916814_order_9_emotion_sad"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_204723_order_8_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_204723_order_8_emotion_afraid"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_398315_order_7_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_398315_order_7_emotion_afraid"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_988021_order_5_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_988021_order_5_emotion_afraid"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_491266_order_2_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_491266_order_2_emotion_angry"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_296038_order_6_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_296038_order_6_emotion_angry"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_90545_order_8_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_90545_order_8_emotion_angry"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_411345_order_2_emotion_ashamed.png",
    emotion:      "ashamed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_411345_order_2_emotion_ashamed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_253551_order_1_emotion_ashamed.png",
    emotion:      "ashamed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_253551_order_1_emotion_ashamed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_398315_order_5_emotion_ashamed.png",
    emotion:      "ashamed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_398315_order_5_emotion_ashamed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_799644_order_4_emotion_disgusted.png",
    emotion:      "disgusted",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_799644_order_4_emotion_disgusted"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_964133_order_9_emotion_disgusted.png",
    emotion:      "disgusted",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_964133_order_9_emotion_disgusted"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_748826_order_5_emotion_disgusted.png",
    emotion:      "disgusted",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_748826_order_5_emotion_disgusted"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_273674_order_6_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_273674_order_6_emotion_embarrassed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_87795_order_8_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_87795_order_8_emotion_embarrassed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_988021_order_10_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_988021_order_10_emotion_embarrassed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_916814_order_7_emotion_guilty.png",
    emotion:      "guilty",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_916814_order_7_emotion_guilty"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_87795_order_3_emotion_guilty.png",
    emotion:      "guilty",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_87795_order_3_emotion_guilty"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_253551_order_5_emotion_guilty.png",
    emotion:      "guilty",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_253551_order_5_emotion_guilty"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_411345_order_5_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_411345_order_5_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_748826_order_6_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_748826_order_6_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_935254_order_6_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_935254_order_6_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_996974_order_3_emotion_jealous.png",
    emotion:      "jealous",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_996974_order_3_emotion_jealous"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_935254_order_1_emotion_jealous.png",
    emotion:      "jealous",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_935254_order_1_emotion_jealous"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_243778_order_8_emotion_jealous.png",
    emotion:      "jealous",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_243778_order_8_emotion_jealous"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_707600_order_3_emotion_proud.png",
    emotion:      "proud",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_707600_order_3_emotion_proud"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_447252_order_4_emotion_proud.png",
    emotion:      "proud",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_447252_order_4_emotion_proud"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_799644_order_3_emotion_proud.png",
    emotion:      "proud",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_799644_order_3_emotion_proud"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_253551_order_10_emotion_sad.png",
    emotion:      "sad",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_253551_order_10_emotion_sad"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_282376_order_7_emotion_sad.png",
    emotion:      "sad",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_282376_order_7_emotion_sad"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_988021_order_8_emotion_sad.png",
    emotion:      "sad",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_988021_order_8_emotion_sad"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_696273_order_10_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_696273_order_10_emotion_afraid"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_678663_order_7_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_678663_order_7_emotion_afraid"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_553504_order_6_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_553504_order_6_emotion_afraid"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_696273_order_4_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_696273_order_4_emotion_angry"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_678663_order_1_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_678663_order_1_emotion_angry"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_400785_order_2_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_400785_order_2_emotion_angry"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_883348_order_4_emotion_ashamed.png",
    emotion:      "ashamed",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_883348_order_4_emotion_ashamed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_87325_order_3_emotion_ashamed.png",
    emotion:      "ashamed",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_87325_order_3_emotion_ashamed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_825649_order_1_emotion_ashamed.png",
    emotion:      "ashamed",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_825649_order_1_emotion_ashamed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_400785_order_3_emotion_disgusted.png",
    emotion:      "disgusted",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_400785_order_3_emotion_disgusted"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_985084_order_9_emotion_disgusted.png",
    emotion:      "disgusted",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_985084_order_9_emotion_disgusted"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_765998_order_10_emotion_disgusted.png",
    emotion:      "disgusted",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_765998_order_10_emotion_disgusted"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_678663_order_8_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_678663_order_8_emotion_embarrassed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_327973_order_1_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_327973_order_1_emotion_embarrassed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_985084_order_7_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_985084_order_7_emotion_embarrassed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_305314_order_10_emotion_guilty.png",
    emotion:      "guilty",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_305314_order_10_emotion_guilty"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_289142_order_8_emotion_guilty.png",
    emotion:      "guilty",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_289142_order_8_emotion_guilty"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_230817_order_8_emotion_guilty.png",
    emotion:      "guilty",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_230817_order_8_emotion_guilty"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_802696_order_2_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_802696_order_2_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_492767_order_5_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_492767_order_5_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_400785_order_10_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_400785_order_10_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_621488_order_10_emotion_jealous.png",
    emotion:      "jealous",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_621488_order_10_emotion_jealous"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_633527_order_9_emotion_jealous.png",
    emotion:      "jealous",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_633527_order_9_emotion_jealous"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_98720_order_1_emotion_jealous.png",
    emotion:      "jealous",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_98720_order_1_emotion_jealous"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_992185_order_1_emotion_proud.png",
    emotion:      "proud",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_992185_order_1_emotion_proud"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_802696_order_10_emotion_proud.png",
    emotion:      "proud",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_802696_order_10_emotion_proud"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_289473_order_4_emotion_proud.png",
    emotion:      "proud",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_289473_order_4_emotion_proud"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_553504_order_8_emotion_sad.png",
    emotion:      "sad",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_553504_order_8_emotion_sad"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_696273_order_5_emotion_sad.png",
    emotion:      "sad",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_696273_order_5_emotion_sad"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_961209_order_3_emotion_sad.png",
    emotion:      "sad",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_961209_order_3_emotion_sad"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_147077_order_6_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_147077_order_6_emotion_afraid"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_172734_order_4_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_172734_order_4_emotion_afraid"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_182026_order_8_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_182026_order_8_emotion_afraid"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_101283_order_9_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_101283_order_9_emotion_angry"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_127713_order_4_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_127713_order_4_emotion_angry"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_147077_order_2_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_147077_order_2_emotion_angry"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_182026_order_1_emotion_ashamed.png",
    emotion:      "ashamed",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_182026_order_1_emotion_ashamed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_237337_order_2_emotion_ashamed.png",
    emotion:      "ashamed",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_237337_order_2_emotion_ashamed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_237656_order_8_emotion_ashamed.png",
    emotion:      "ashamed",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_237656_order_8_emotion_ashamed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_182026_order_7_emotion_disgusted.png",
    emotion:      "disgusted",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_182026_order_7_emotion_disgusted"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_230817_order_9_emotion_disgusted.png",
    emotion:      "disgusted",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_230817_order_9_emotion_disgusted"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_237656_order_6_emotion_disgusted.png",
    emotion:      "disgusted",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_237656_order_6_emotion_disgusted"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_182026_order_10_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_182026_order_10_emotion_embarrassed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_237337_order_4_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_237337_order_4_emotion_embarrassed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_127713_order_5_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_127713_order_5_emotion_embarrassed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_147077_order_5_emotion_guilty.png",
    emotion:      "guilty",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_147077_order_5_emotion_guilty"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_237337_order_1_emotion_guilty.png",
    emotion:      "guilty",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_237337_order_1_emotion_guilty"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_101877_order_7_emotion_guilty.png",
    emotion:      "guilty",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_101877_order_7_emotion_guilty"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_237337_order_10_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_237337_order_10_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_476390_order_9_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_476390_order_9_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_553504_order_9_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_553504_order_9_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_237337_order_9_emotion_jealous.png",
    emotion:      "jealous",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_237337_order_9_emotion_jealous"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_237656_order_3_emotion_jealous.png",
    emotion:      "jealous",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_237656_order_3_emotion_jealous"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_403144_order_1_emotion_jealous.png",
    emotion:      "jealous",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_403144_order_1_emotion_jealous"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_161661_order_3_emotion_proud.png",
    emotion:      "proud",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_161661_order_3_emotion_proud"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_172734_order_9_emotion_proud.png",
    emotion:      "proud",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_172734_order_9_emotion_proud"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_182026_order_5_emotion_proud.png",
    emotion:      "proud",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_182026_order_5_emotion_proud"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_147077_order_4_emotion_sad.png",
    emotion:      "sad",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_147077_order_4_emotion_sad"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_172734_order_2_emotion_sad.png",
    emotion:      "sad",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_172734_order_2_emotion_sad"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_455380_order_5_emotion_sad.png",
    emotion:      "sad",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_455380_order_5_emotion_sad"
  },
];