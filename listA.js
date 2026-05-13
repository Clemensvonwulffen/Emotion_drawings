const BASE_URL = 'https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/';
const listA = [
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_411345_order_4_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_411345_order_4_emotion_afraid"
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
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_179905_order_3_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_179905_order_3_emotion_afraid"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_204723_order_3_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_204723_order_3_emotion_angry"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_788358_order_4_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_788358_order_4_emotion_angry"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_928095_order_4_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_928095_order_4_emotion_angry"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_136928_order_9_emotion_ashamed.png",
    emotion:      "ashamed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_136928_order_9_emotion_ashamed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_90545_order_10_emotion_ashamed.png",
    emotion:      "ashamed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_90545_order_10_emotion_ashamed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_378519_order_3_emotion_ashamed.png",
    emotion:      "ashamed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_378519_order_3_emotion_ashamed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_88052_order_10_emotion_disgusted.png",
    emotion:      "disgusted",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_88052_order_10_emotion_disgusted"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_907090_order_9_emotion_disgusted.png",
    emotion:      "disgusted",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_907090_order_9_emotion_disgusted"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_916814_order_3_emotion_disgusted.png",
    emotion:      "disgusted",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_916814_order_3_emotion_disgusted"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_179905_order_8_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_179905_order_8_emotion_embarrassed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_979295_order_2_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_979295_order_2_emotion_embarrassed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_508806_order_6_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_508806_order_6_emotion_embarrassed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_378519_order_2_emotion_guilty.png",
    emotion:      "guilty",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_378519_order_2_emotion_guilty"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_411345_order_3_emotion_guilty.png",
    emotion:      "guilty",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_411345_order_3_emotion_guilty"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_907090_order_1_emotion_guilty.png",
    emotion:      "guilty",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_907090_order_1_emotion_guilty"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_968720_order_4_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_968720_order_4_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_928095_order_2_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_928095_order_2_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_88052_order_2_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_88052_order_2_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_409480_order_4_emotion_jealous.png",
    emotion:      "jealous",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_409480_order_4_emotion_jealous"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_136928_order_10_emotion_jealous.png",
    emotion:      "jealous",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_136928_order_10_emotion_jealous"
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
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_145020_order_8_emotion_proud.png",
    emotion:      "proud",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_145020_order_8_emotion_proud"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_90545_order_7_emotion_proud.png",
    emotion:      "proud",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_90545_order_7_emotion_proud"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_204723_order_1_emotion_proud.png",
    emotion:      "proud",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_204723_order_1_emotion_proud"
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
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_968720_order_2_emotion_sad.png",
    emotion:      "sad",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_968720_order_2_emotion_sad"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_411345_order_9_emotion_sad.png",
    emotion:      "sad",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "face",
    drawing_id:   "participant_411345_order_9_emotion_sad"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_968720_order_7_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_968720_order_7_emotion_afraid"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_491266_order_3_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_491266_order_3_emotion_afraid"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_282376_order_4_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_282376_order_4_emotion_afraid"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_964133_order_2_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_964133_order_2_emotion_angry"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_799644_order_5_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_799644_order_5_emotion_angry"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_545356_order_7_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_545356_order_7_emotion_angry"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_545356_order_1_emotion_ashamed.png",
    emotion:      "ashamed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_545356_order_1_emotion_ashamed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_964133_order_7_emotion_ashamed.png",
    emotion:      "ashamed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_964133_order_7_emotion_ashamed"
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
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_447252_order_7_emotion_disgusted.png",
    emotion:      "disgusted",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_447252_order_7_emotion_disgusted"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_253551_order_3_emotion_disgusted.png",
    emotion:      "disgusted",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_253551_order_3_emotion_disgusted"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_928095_order_8_emotion_disgusted.png",
    emotion:      "disgusted",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_928095_order_8_emotion_disgusted"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_545356_order_9_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_545356_order_9_emotion_embarrassed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_799644_order_1_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_799644_order_1_emotion_embarrassed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_422994_order_6_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_422994_order_6_emotion_embarrassed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_142482_order_3_emotion_guilty.png",
    emotion:      "guilty",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_142482_order_3_emotion_guilty"
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
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_87795_order_3_emotion_guilty.png",
    emotion:      "guilty",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_87795_order_3_emotion_guilty"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_282376_order_5_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_282376_order_5_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_691760_order_6_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_691760_order_6_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_447252_order_10_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_447252_order_10_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_179905_order_9_emotion_jealous.png",
    emotion:      "jealous",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_179905_order_9_emotion_jealous"
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
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_398315_order_6_emotion_jealous.png",
    emotion:      "jealous",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_398315_order_6_emotion_jealous"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_964133_order_1_emotion_proud.png",
    emotion:      "proud",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_964133_order_1_emotion_proud"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_282376_order_1_emotion_proud.png",
    emotion:      "proud",
    emotion_type: "self-conscious",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_282376_order_1_emotion_proud"
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
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_378519_order_10_emotion_sad.png",
    emotion:      "sad",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_378519_order_10_emotion_sad"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_243778_order_1_emotion_sad.png",
    emotion:      "sad",
    emotion_type: "basic",
    producer_age: "children",
    cue_type:     "context",
    drawing_id:   "participant_243778_order_1_emotion_sad"
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
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_33213_order_5_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_33213_order_5_emotion_afraid"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_621488_order_9_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_621488_order_9_emotion_afraid"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_324114_order_6_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_324114_order_6_emotion_afraid"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_459238_order_5_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_459238_order_5_emotion_angry"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_460676_order_7_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_460676_order_7_emotion_angry"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_621488_order_3_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_621488_order_3_emotion_angry"
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
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_327973_order_7_emotion_ashamed.png",
    emotion:      "ashamed",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_327973_order_7_emotion_ashamed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_753553_order_6_emotion_ashamed.png",
    emotion:      "ashamed",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_753553_order_6_emotion_ashamed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_802696_order_3_emotion_disgusted.png",
    emotion:      "disgusted",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_802696_order_3_emotion_disgusted"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_237337_order_6_emotion_disgusted.png",
    emotion:      "disgusted",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_237337_order_6_emotion_disgusted"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_991906_order_9_emotion_disgusted.png",
    emotion:      "disgusted",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_991906_order_9_emotion_disgusted"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_400785_order_8_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_400785_order_8_emotion_embarrassed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_968409_order_6_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_968409_order_6_emotion_embarrassed"
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
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_992185_order_2_emotion_guilty.png",
    emotion:      "guilty",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_992185_order_2_emotion_guilty"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_825649_order_9_emotion_guilty.png",
    emotion:      "guilty",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_825649_order_9_emotion_guilty"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_444459_order_8_emotion_guilty.png",
    emotion:      "guilty",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_444459_order_8_emotion_guilty"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_33213_order_9_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_33213_order_9_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_696273_order_3_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_696273_order_3_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_588757_order_6_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_588757_order_6_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_971868_order_7_emotion_jealous.png",
    emotion:      "jealous",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_971868_order_7_emotion_jealous"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_400785_order_1_emotion_jealous.png",
    emotion:      "jealous",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_400785_order_1_emotion_jealous"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_911759_order_8_emotion_jealous.png",
    emotion:      "jealous",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_911759_order_8_emotion_jealous"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_911759_order_9_emotion_proud.png",
    emotion:      "proud",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_911759_order_9_emotion_proud"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_327973_order_2_emotion_proud.png",
    emotion:      "proud",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_327973_order_2_emotion_proud"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_763214_order_2_emotion_proud.png",
    emotion:      "proud",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_763214_order_2_emotion_proud"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_950485_order_8_emotion_sad.png",
    emotion:      "sad",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_950485_order_8_emotion_sad"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_492767_order_3_emotion_sad.png",
    emotion:      "sad",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_492767_order_3_emotion_sad"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_763214_order_5_emotion_sad.png",
    emotion:      "sad",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "face",
    drawing_id:   "participant_763214_order_5_emotion_sad"
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
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_182026_order_8_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_182026_order_8_emotion_afraid"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_444459_order_3_emotion_afraid.png",
    emotion:      "afraid",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_444459_order_3_emotion_afraid"
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
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_147077_order_2_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_147077_order_2_emotion_angry"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_161661_order_4_emotion_angry.png",
    emotion:      "angry",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_161661_order_4_emotion_angry"
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
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_147077_order_1_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_147077_order_1_emotion_embarrassed"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_172734_order_7_emotion_embarrassed.png",
    emotion:      "embarrassed",
    emotion_type: "self-conscious",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_172734_order_7_emotion_embarrassed"
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
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_553504_order_9_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_553504_order_9_emotion_happy"
  },
  {
    stimulus:     "https://raw.githubusercontent.com/Clemensvonwulffen/Emotion_drawings/main/participant_763214_order_9_emotion_happy.png",
    emotion:      "happy",
    emotion_type: "basic",
    producer_age: "adults",
    cue_type:     "context",
    drawing_id:   "participant_763214_order_9_emotion_happy"
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
  }
];
