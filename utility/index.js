import { Dimensions, Platform, PixelRatio } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const ANIMATION_TIME = 2000;

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

export const PostStories = [
  {
    title: "Top in Entertainment",
    content: [
      {
        name: "Gloria",
        followers: "2,450 Followers",
        image: require("../assets/images/story1.png"),
        isChecked: false
      },
      {
        name: "Gloria",
        followers: "2,450 Followers",
        image: require("../assets/images/story2.png"),
        isChecked: false
      },
      {
        name: "Gloria",
        followers: "2,450 Followers",
        image: require("../assets/images/story3.png"),
        isChecked: false
      },
      {
        name: "Gloria",
        followers: "2,450 Followers",
        image: require("../assets/images/story1.png"),
        isChecked: false
      },
    ]
  },
  {
    title: "Top in Entertainment",
    content: [
      {
        name: "Gloria",
        followers: "2,450 Followers",
        image: require("../assets/images/story1.png"),
        isChecked: false
      },
      {
        name: "Gloria",
        followers: "2,450 Followers",
        image: require("../assets/images/story2.png"),
        isChecked: false
      },
      {
        name: "Gloria",
        followers: "2,450 Followers",
        image: require("../assets/images/story3.png"),
        isChecked: false
      },
      {
        name: "Gloria",
        followers: "2,450 Followers",
        image: require("../assets/images/story1.png"),
        isChecked: false
      },
    ]
  },
  {
    title: "Top in Entertainment",
    content: [
      {
        name: "Gloria",
        followers: "2,450 Followers",
        image: require("../assets/images/story1.png"),
        isChecked: false
      },
      {
        name: "Gloria",
        followers: "2,450 Followers",
        image: require("../assets/images/story2.png"),
        isChecked: false
      },
      {
        name: "Gloria",
        followers: "2,450 Followers",
        image: require("../assets/images/story3.png"),
        isChecked: false
      },
      {
        name: "Gloria",
        followers: "2,450 Followers",
        image: require("../assets/images/story1.png"),
        isChecked: false
      },
    ]
  }
]

export const Story = [require("../assets/images/avatar2.png"), require("../assets/images/avatar3.png"), require("../assets/images/avatar4.png"), require("../assets/images/avatar5.png"), require("../assets/images/avatar1.png"), require("../assets/images/avatar2.png"), require("../assets/images/avatar3.png"), require("../assets/images/avatar4.png"), require("../assets/images/avatar5.png"), require("../assets/images/avatar1.png"), require("../assets/images/avatar2.png"), require("../assets/images/avatar3.png"), require("../assets/images/avatar4.png"), require("../assets/images/avatar5.png"), require("../assets/images/avatar1.png")]

export const OnBoarding_1_Quote = "As a writer or reader, Amorist gives you the opportunity to post short stories, poetry, shayari, blogs, erotica, articles, and quotes with millions of people. If you love literature or want to express your feelings, Amorist supports you."

export const OnBoarding_2_Quote = "We believe that every artist deserves recognition for their work, and this platform gives you the chance to do just that. Engage in creative and entertaining short videos, reels, and memes with other participants, and get your work recognized."

export const OnBoarding_3_Quote = "Our platform is designed to help you build your own profile, make it unique, and connect with followers. The more you interact on our platform, the broader your audience will become. Participate actively on our platform to receive royalties & rewards."

// export const PostList = [
//   {
//     userId: 1,
//     userName: 'Jacob Washington',
//     userImage: require("../assets/images/avatar6.png"),
//     postTime: '20m ago',
//     postContentText: '“If you think you are too small to make a difference, try sleeping with a mosquito.”\n~ Dalai Lama',
//     postContentImages: [],
//     postLikes: '2,245',
//     postComments: '45',
//     postShares: '124'
//   },
//   {
//     userId: 2,
//     userName: 'Kat Williams',
//     userImage: require("../assets/images/avatar7.png"),
//     postTime: '1h ago',
//     postContentText: '',
//     postContentImages: [require("../assets/images/post1.png"), require("../assets/images/post2.png"), require("../assets/images/post3.png")],
//     postLikes: '8,998',
//     postComments: '145',
//     postShares: '12'
//   },
//   {
//     userId: 3,
//     userName: 'Tony Monta',
//     userImage: require("../assets/images/avatar8.png"),
//     postTime: '1h ago',
//     postContentText: 'Writing code is not so bad!',
//     postContentImages: [require("../assets/images/post1.png")],
//     postLikes: '14',
//     postComments: '',
//     postShares: ''
//   },
//   {
//     userId: 4,
//     userName: 'Jessica Thompson',
//     userImage: require("../assets/images/avatar9.png"),
//     postTime: '2h ago',
//     postContentText: '',
//     postContentImages: [require("../assets/images/post2.png")],
//     postLikes: '17',
//     postComments: '2',
//     postShares: ''
//   },
//   {
//     userId: 5,
//     userName: 'Dustin Grant',
//     userImage: require("../assets/images/avatar10.png"),
//     postTime: '3h ago',
//     postContentText: '',
//     postContentImages: [require("../assets/images/post3.png")],
//     postLikes: '20',
//     postComments: '3',
//     postShares: '6'
//   },
// ]

export const PostList = [
  {
    userId: 1,
    userName: 'Jacob Washington',
    userImage: require("../assets/images/avatar6.png"),
    postTime: '20m ago',
    postContentText: '“If you think you are too small to make a difference, try sleeping with a mosquito.”\n~ Dalai Lama',
    isImages: false,
    postContentImages: [],
    postLikes: '2,245',
    postComments: '45',
    postShares: '124'
  },
  {
    userId: 2,
    userName: 'Kat Williams',
    userImage: require("../assets/images/avatar7.png"),
    postTime: '1h ago',
    postContentText: '',
    isImages: true,
    postContentImages: [
      'require("../assets/images/post1.png")',
      'require("../assets/images/post2.png")',
      'require("../assets/images/post3.png")'
    ],
    postLikes: '8,998',
    postComments: '145',
    postShares: '12'
  },
  {
    userId: 3,
    userName: 'Tony Monta',
    userImage: require("../assets/images/avatar8.png"),
    postTime: '1h ago',
    isImages: false,
    postContentText: 'Writing code is not so bad!',
    postContentImages: [],
    postLikes: '14',
    postComments: '',
    postShares: ''
  },
  {
    userId: 4,
    userName: 'Jessica Thompson',
    userImage: require("../assets/images/avatar9.png"),
    postTime: '2h ago',
    postContentText: '',
    isImages: true,
    postContentImages: ['require("../assets/images/post2.png")'],
    postLikes: '17',
    postComments: '2',
    postShares: ''
  },
  {
    userId: 5,
    userName: 'Dustin Grant',
    userImage: require("../assets/images/avatar10.png"),
    postTime: '3h ago',
    postContentText: '',
    isImages: true,
    postContentImages: ['require("../assets/images/post3.png")'],
    postLikes: '20',
    postComments: '3',
    postShares: '6'
  }
]



export const PostListSearch = [
  {
    userId: 1,
    userName: 'Michelle Ogilvy',
    userImage: require("../assets/images/avatar11.png"),
    postTime: '1h ago',
    postContentText: '',
    isImages: false,
    postContentImages: require("../assets/images/post4.png"),
    postLikes: '18.6k',
    postComments: '4.7k',
    postShares: '12.4k'
  },
  {
    userId: 2,
    userName: 'Brandon Loia',
    userImage: require("../assets/images/avatar12.png"),
    postTime: '1h ago',
    postContentText: '',
    isImages: true,
    postContentImages: require("../assets/images/post5.png"),
    postLikes: '4,762',
    postComments: '186',
    postShares: '2,891'
  },
  {
    userId: 3,
    userName: 'Tony Monta',
    userImage: require("../assets/images/avatar11.png"),
    postTime: '1h ago',
    isImages: false,
    postContentText: '',
    postContentImages: require("../assets/images/post4.png"),
    postLikes: '14',
    postComments: '',
    postShares: ''
  }
]


export const MessagesList = [
  {
    userImage: require("../assets/images/avatar9.png"),
    userName: 'Jessica Thompson',
    message: 'Hey you! Are u there?',
    last_msg_time: '4h ago'
  },
  {
    userImage: require("../assets/images/avatar7.png"),
    userName: 'Kat Williams',
    message: 'OMG! OMG! OMG!',
    last_msg_time: '5h ago'
  },
  {
    userImage: require("../assets/images/avatar6.png"),
    userName: 'Jacob Washington',
    message: 'Sure. Sunday works for me!',
    last_msg_time: '20/9/21'
  },
  {
    userImage: require("../assets/images/avatar9.png"),
    userName: 'Leslie Alexander',
    message: 'Sent you an invite for next monday.',
    last_msg_time: '19/9/21'
  },
  {
    userImage: require("../assets/images/avatar8.png"),
    userName: 'Tony Monta',
    message: 'How’s Alicia doing? Ask her to give m...',
    last_msg_time: '19/9/21'
  },
  {
    userImage: require("../assets/images/avatar9.png"),
    userName: 'Tony Monta',
    message: 'Hey you! Are u there?',
    last_msg_time: '4h ago'
  },
  {
    userImage: require("../assets/images/avatar9.png"),
    userName: 'Tony Monta',
    message: 'Hey you! Are u there?',
    last_msg_time: '4h ago'
  },
  {
    userImage: require("../assets/images/avatar9.png"),
    userName: 'Jessica Thompson',
    message: 'Hey you! Are u there?',
    last_msg_time: '4h ago'
  },
  {
    userImage: require("../assets/images/avatar9.png"),
    userName: 'Jessica Thompson',
    message: 'Hey you! Are u there?',
    last_msg_time: '4h ago'
  },
  {
    userImage: require("../assets/images/avatar9.png"),
    userName: 'Jonathon Starc',
    message: 'Hey you! Are u there?',
    last_msg_time: '4h ago'
  }
]


export const ProfilePostList = [
  {
    userId: 1,
    userName: 'Alex Tsimikas',
    userImage: require("../assets/images/avatar13.png"),
    postTime: '3d ago',
    postContentText: 'Going on vacation! Catch you all in 10 days. No call!!!!!',
    isImages: false,
    postContentImages: [],
    postLikes: '261',
    postComments: '12',
    postShares: ''
  },
  {
    userId: 2,
    userName: 'Alex Tsimikas',
    userImage: require("../assets/images/avatar13.png"),
    postTime: '4d ago',
    postContentText: '',
    isImages: true,
    postContentImages: ['require("../assets/images/post6.png")'],
    postLikes: '5,391',
    postComments: '12',
    postShares: ''
  }
]

export const ProfileAppreciationsList = [
  {
    userId: 1,
    userName: 'Alex Tsimikas',
    userImage: require("../assets/images/avatar13.png"),
    postTime: '3d ago',
    postLikes: '261',
    postContentText: 'Will show a certificate here.',
  },
  {
    userId: 2,
    userName: 'Alex Tsimikas',
    userImage: require("../assets/images/avatar13.png"),
    postTime: '3d ago',
    postLikes: '261',
    postContentText: 'Will show a certificate here.',
  },
  {
    userId: 3,
    userName: 'Alex Tsimikas',
    userImage: require("../assets/images/avatar13.png"),
    postTime: '3d ago',
    postLikes: '261',
    postContentText: 'Will show a certificate here.',
  },
  {
    userId: 4,
    userName: 'Alex Tsimikas',
    userImage: require("../assets/images/avatar13.png"),
    postTime: '3d ago',
    postLikes: '261',
    postContentText: 'Will show a certificate here.',
  },
  {
    userId: 5,
    userName: 'Alex Tsimikas',
    userImage: require("../assets/images/avatar13.png"),
    postTime: '3d ago',
    postLikes: '261',
    postContentText: 'Will show a certificate here.',
  },
  {
    userId: 6,
    userName: 'Alex Tsimikas',
    userImage: require("../assets/images/avatar13.png"),
    postTime: '3d ago',
    postLikes: '261',
    postContentText: 'Will show a certificate here.',
  }
]