import { Dimensions, Platform, PixelRatio } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export const normalizeSize = (size, lgSize = 0, smSize = 0) => {
  if (SCREEN_WIDTH >= 600) size = (lgSize != 0 ? lgSize : size) - 2;
  else if (SCREEN_WIDTH <= 330) size = (smSize != 0 ? smSize : size) - 1;

  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};


export const KP = [
  {
    title: "List1",
    content: [
      {
        value: "Topic1",
        isChecked: false
      },
      {
        value: "Topic2",
        isChecked: false
      },
      {
        value: "Topic3",
        isChecked: false
      },
      {
        value: "Topic4",
        isChecked: false
      },
      {
        value: "Topic5",
        isChecked: false
      },
      {
        value: "Topic6",
        isChecked: false
      },
      {
        value: "Topic7",
        isChecked: false
      },
      {
        value: "Topic8",
        isChecked: false
      },
      {
        value: "Topic9",
        isChecked: false
      },
      {
        value: "Topic10",
        isChecked: false
      }
    ]
  },
  {
    title: "List2",
    content: [
      {
        value: "Topic1",
        isChecked: false
      },
      {
        value: "Topic2",
        isChecked: false
      },
      {
        value: "Topic3",
        isChecked: false
      },
      {
        value: "Topic4",
        isChecked: false
      },
      {
        value: "Topic5",
        isChecked: false
      },
      {
        value: "Topic6",
        isChecked: false
      },
      {
        value: "Topic7",
        isChecked: false
      },
      {
        value: "Topic8",
        isChecked: false
      },
      {
        value: "Topic9",
        isChecked: false
      },
      {
        value: "Topic10",
        isChecked: false
      }
    ]
  },
  {
    title: "List3",
    content: [
      {
        value: "Topic1",
        isChecked: false
      },
      {
        value: "Topic2",
        isChecked: false
      },
      {
        value: "Topic3",
        isChecked: false
      },
      {
        value: "Topic4",
        isChecked: false
      },
      {
        value: "Topic5",
        isChecked: false
      },
      {
        value: "Topic6",
        isChecked: false
      },
      {
        value: "Topic7",
        isChecked: false
      },
      {
        value: "Topic8",
        isChecked: false
      },
      {
        value: "Topic9",
        isChecked: false
      },
      {
        value: "Topic10",
        isChecked: false
      }
    ]
  },
  {
    title: "List4",
    content: [
      {
        value: "Topic1",
        isChecked: false
      },
      {
        value: "Topic2",
        isChecked: false
      },
      {
        value: "Topic3",
        isChecked: false
      },
      {
        value: "Topic4",
        isChecked: false
      },
      {
        value: "Topic5",
        isChecked: false
      },
      {
        value: "Topic6",
        isChecked: false
      },
      {
        value: "Topic7",
        isChecked: false
      },
      {
        value: "Topic8",
        isChecked: false
      },
      {
        value: "Topic9",
        isChecked: false
      },
      {
        value: "Topic10",
        isChecked: false
      }
    ]
  }
]

export const InfluencerData = [
  {
    title: "Top in Entertainment",
    content: [
      {
        name: "Gloria",
        followers: "2,450 Followers",
        image: require("../assets/images/avatar1.png"),
        isChecked: false
      },
      {
        name: "Gloria",
        followers: "2,450 Followers",
        image: require("../assets/images/avatar1.png"),
        isChecked: false
      },
      {
        name: "Gloria",
        followers: "2,450 Followers",
        image: require("../assets/images/avatar1.png"),
        isChecked: false
      }
    ]
  },
  {
    title: "Top in Entertainment",
    content: [
      {
        name: "Gloria",
        followers: "2,450 Followers",
        image: require("../assets/images/avatar1.png"),
        isChecked: false
      },
      {
        name: "Gloria",
        followers: "2,450 Followers",
        image: require("../assets/images/avatar1.png"),
        isChecked: false
      },
      {
        name: "Gloria",
        followers: "2,450 Followers",
        image: require("../assets/images/avatar1.png"),
        isChecked: false
      }
    ]
  },
  {
    title: "Top in Entertainment",
    content: [
      {
        name: "Gloria",
        followers: "2,450 Followers",
        image: require("../assets/images/avatar1.png"),
        isChecked: false
      },
      {
        name: "Gloria",
        followers: "2,450 Followers",
        image: require("../assets/images/avatar1.png"),
        isChecked: false
      },
      {
        name: "Gloria",
        followers: "2,450 Followers",
        image: require("../assets/images/avatar1.png"),
        isChecked: false
      }
    ]
  }
]
