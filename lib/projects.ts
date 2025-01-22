import logos from "./logos";

type ProjectName =
  | "devGram"
  | "dogmash"
  | "covid19"
  | "connect4"
  | "getItDone"
  | "urlShortener"
  | "thisWebsite"
  | "theMealHub"
  | "pokemon"
  | "jokes";

export type StackType = { label: string; logo: string; invert?: boolean };

export type ProjectType = {
  title: string;
  description: string[];
  images: {
    webm?: string;
    mp4?: string;
    main?: { link: string; height: number; width: number };
    poster?: string;
    vidHeight?: number;
    vidWidth?: number;
  };
  links: { github?: string; live: string };
  stack: StackType[];
  special?: { text: string; link: string };
};

type Projects = {
  [K in ProjectName]: ProjectType;
};

const projects: Projects = {
  devGram: {
    title: "MeTube",
    description: [
      "Stream anywhere, anytime: Play videos online or offline with ease.",
      "Picture-in-Picture Mode: Pop up videos while multitasking with other apps.",
      "Background Play: Continue playing your favorite content even when your screen is locked.",
      "Save for Later: Download videos to watch at your convenience.",
      "Shorts and More: Enjoy an endless stream of shorts.",
      "Smart Search: Use text or voice commands to find videos instantly.",
    ],
    images: {
      main: {
        link: "/project/mobile/1/mobile1 (1).png",
        width: 1182,
        height: 732,
      },
    },
    stack: [
      logos.flutter,
      logos.firebase,
      // logos.graphql,
      logos.restapi,
      logos.materialui,
    ],
    links: {
      live: "https://play.google.com/store/apps/details?id=com.flytube.app",
      // github: "https://github.com",
    },
  },

  dogmash: {
    title: "HearMe",
    description: [
      "Feeling overwhelmed or lonely? Just need to talk?",
      " The HearMe app makes it safe and easy to text with a real person who has been where you are and is trained to offer emotional support the moment you need it.",
    ],
    images: {
      main: {
        link: "/project/mobile/2/mobile2 (1).png",
        width: 1182,
        height: 732,
      },
    },
    stack: [
      logos.flutter,
      logos.firebase,
      logos.uiux,
    ],
    links: {
      live: "https://play.google.com/store/apps/details?id=app.hearme.enterprise&hl=en",
    },
  },
  covid19: {
    title: "Zuzu",
    description: [
      "Welcome to Zuzu, the ultimate FREE learning app for kids! Zuzu offers an enriching environment where children can learn Phonics, Art, Finance,",
      "and various life skills through engaging courses and fun activities. All for Free! With Zuzu, education becomes a fun and exciting adventure! ",
    ],
    images: {
      main: {
        link: "/project/mobile/3/mobile3 (2).png",
        width: 1182,
        height: 732,
      },
    },
    stack: [logos.react, logos.typescript, logos.mobx],
    links: {
      // github: "https://github.com",
      live: "https://play.google.com/store/apps/details?id=in.zuzu&hl=en",
    },
  },
  connect4: {
    title: "m-FIT",
    description: [
      "M-fit is a user-friendly fitness tracking app designed to help you achieve your health and fitness goals. It offers personalized workout plans, real-time activity tracking, and easy nutrition logging. You can monitor your progress with detailed charts, track your heart rate with wearable devices, and improve your sleep quality. The app also enables social sharing, participation in challenges, and integration with other health and fitness apps. M-fit is your ultimate companion for staying motivated and reaching your fitness milestones.",
    ],
    stack: [logos.flutter, logos.typescript, logos.firebase, ],
    links: {
      // github: "https://github.com",
      live: "https://play.google.com/store/apps/details?id=com.membr.mfit&hl=en",
    },
    images: {
      main: {
        link: "/project/mobile/3/image_original.jpg",
        width: 1182,
        height: 732,
      },
    },
  },
  getItDone: {
    title: "Cocbases Web and Mobile App Development",
    description: [
      "Main functionalities:",
      "- View a feed of the Clash of Clans layouts with Copy link + Downloads count + Relevant tags",
      "- Upload Clash of Clans layouts",
      "- Download Clan layouts through the URL",
      "- Sort & Filter feeds",
      "- Multi-Level Commenting on posts",
      "- View other user's profiles",
      "- In-App Advertisement",
      "- Purchase Merchandise",
    ],
    links: {
      // github: "https://github.com",
      live: "https://get-it-done-git-master-juggernaut9.vercel.app",
    },
    stack: [logos.react, logos.nodejs, logos.materialui,  logos.firebase, logos.sass],
    images: {
      main: {
        link: "/project/mobile/3/cocbase.png",
        width: 1173,
        height: 847,
      },
    },
    special: {
      text: "",
      link: "https://cocbases.com",
    },
  },
  urlShortener: {
    title: "Events Based Mobile App For Android and iOS",
    description: [
      "In this project, we created a mobile app for both Android and iOS.",
      " Event organizers have the ability to add their events along with details, ",
      "and users can easily search for these events and purchase tickets.",
    ],
    images: {
      main: {
        link: "/project/mobile/3/events.png",
        width: 964,
        height: 751,
      },
    },
    links: {
      // github: "https://github.com/",
      live: "apps.apple.com/mt/app/fomo-discover-maltas-events/id6450041310",
    },
    stack: [
      logos.kotlin,
      logos.swift,
      logos.nodejs,
      logos.javascript,
    ],
  },
  thisWebsite: {
    title: "e360 Mart App",
    description: [
      "The e360 Mart Marketplace is a revolutionary platform that enables individuals and businesses to buy or sell goods locally within Tanzania.",
      "With an extensive range of products available including furniture, electronics, clothing and vehicles; this marketplace has become the go-to destination for all your shopping needs!",
      "The e360 Mart Marketplace is a revolutionary platform that enables individuals and businesses to buy or sell goods locally within Tanzania.", 
      "With an extensive range of products available including furniture, electronics, clothing and vehicles; this marketplace has become the go-to destination for all your shopping needs!",
      "Key Features:",
      "e360 Mart Marketplace is a platform that connects businesses and users within their local communities, making transactions more convenient and reducing shipping costs.",
      " With this feature, you can easily find products or services from trusted sellers in your area without worrying about high delivery fees.",
      " It's an excellent way to support small businesses while enjoying the benefits of online shopping!",
      "Creating and browsing through listings is a breeze with our user-friendly interface. We've made it easy for users as listings come already filtered by distance.",
      " Users can also filter by category or subcategory so they can find exactly what they need quickly and efficiently.",
      " Our platform ensures that all users have an enjoyable experience when using our services.",
      "Individuals and businesses alike can list products on the platform providing buyers with a diverse range of options. ",
      "The communication process is facilitated through chats ensuring an efficient transaction experience for all parties involved. ",
      "E360 Mart has made it easier for users to buy and businesses or vendors to sell goods by making the platform user-friendly."
    ],
    links: {
      live: "https://play.google.com/store/apps/details?id=com.app.e360mart&hl=en",
      
    },
    stack: [ 
      logos.react,
      logos.typescript,
      logos. reactQuery,
    ],
    images: {
      main: {
        link: "/project/mobile/3/e360.jpg",
        width: 320,
        height: 480,
      },
    },
  },
  theMealHub: {
    title: "Calories Counter - Android App | iOS App | Admin Panel | Landing Page",
    description: [
      "Calorys is a comprehensive fitness tracking application designed to help users achieve their health and fitness goals by monitoring their diet,",
      " exercise, and overall activity. Built using Flutter with a clean architecture approach for the frontend and Node.js for the backend,",
      " the app offers a seamless and intuitive platform for users to track their workouts, log meals, set goals, and track progress towards a healthier lifestyle.",
    ],
    links: {
      live: "",
     
    },
    stack: [logos.react, logos.materialui],
    images: {
      main: {
        link: "/project/mobile/3/nutrition.png",
        height: 841,
        width: 1195,
      },
    },
  },
  pokemon: {
    special: {
      text: "hacktoberfest - 55 pull requests",
      link: "https://",
    },
    title: "Taxi Booking & Ride-Sharing App",
    description: [
      "The concern was to create an effective cab booking app where people could hire the cabs quickly and reach their destination without any wait.",
      " Also, our client wanted to reach out to a larger number of audiences which was not possible without digitalization.",
    ],
    links: {
      live: "https://",
      // github: "https://github.com",
    },
    stack: [logos.react, logos.git,  logos.bootstrap],
    images: {
      main: {
        link: "/project/mobile/3/taxi.png",
        height: 936,
        width: 1020,
      },
    },
  },
  jokes: {
    title: "Stirr - Social Media Android - iOS App | Android App | Admin Panel",
    description: [
      "First, our app provides seamless user management with easy registration, login, and customizable profiles. ",
      "Users can create posts that include text, images, and videos, all housed within a vibrant news feed.",  
      "We’ve also integrated a robust social interaction system, allowing users to like, comment, and share content, as well as connect through a friend and follow feature.",
      " Direct messaging enables personal communication, while story and status updates keep everyone connected in real time.",  
      "Our search functionality allows users to discover people, tags, and locations effortlessly, complemented by push notifications and live streaming. ",
      "Security is a priority; users can adjust privacy settings and utilize reporting and blocking features if needed.",  
      "To enhance engagement, we use algorithmic feed personalization to present relevant content.",
      " Lastly, our community features, including events and groups, foster meaningful connections among users. ",
    ],
    links: {
      live: "https://",
      // github: "https://github.com",
    },
    stack: [logos.react, logos.materialui],
    images: {
      main: {
        link: "/project/mobile/3/stirr.png",
        width: 1273,
        height: 873,
      },
    },
  },
};

export default projects;
