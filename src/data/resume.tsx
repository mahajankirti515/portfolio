import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
// k
export const DATA = {
  name: "Kirti Wankhede",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full-Stack Developer 🚀 I love building cool things that make life easier. Sharing my dev journey & ideas here.",
  summary:
    "In 2025, I started my journey as a Full-Stack Developer focused on building fast, responsive, and scalable web applications. After completing my MCA, I worked with Eulogik and TechSimPlus, where I built real-world React and Next.js projects that improved performance and usability. I’m passionate about creating modern web solutions, exploring new technologies, and helping businesses grow through clean, functional design.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "fastapi",
    "Postgres",
    "Express",
    "MongoDB",
    "JavaScript",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mahajankirti515@gmail.com",
    tel: "+917987311916",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mahajankirti515",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mahajankirti515/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/mahajankirti515",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "www.youtube.com/@mahajankirti515",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mahajankirti515@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Eulogik",
      href: "https://eulogik.com/",
      badges: [],
      location: "Bhopal",
      title: "Web Developer",
      logoUrl: "/eulogik-fav.ico",
      start: "May 2025",
      end: "Present",
      description:
        "At Eulogik, I worked as a Web Developer focusing on front-end performance and user experience. Built responsive UIs using React and Next.js, reducing page load time by 40%. Collaborated with designers and backend developers to create a testing dashboard that improved workflow efficiency.",
    },
    {
      company: "TechSimPlus",
      href: "https://www.techsimplus.com/",
      badges: [],
      location: "Bhopal",
      title: "Frontend Devloper",
      logoUrl: "/techsimplus.png",
      start: "Oct 2024",
      end: "Dec 2024",
      description:
        "Worked on React.js to develop and optimize responsive user interfaces. Built reusable components and improved form performance using React Hooks while learning best frontend development practices.",
    },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "LNCT (Bhopal)",
      href: "https://lnct.ac.in/",
      degree: "Master of Computer Application (MCA)",
      logoUrl: "/lnct.jpg",
      start: "2023",
      end: "2025",
    },
    {
      school: "Seva Sadan Mahavidyalaya Burhanpur",
      href: "https://sevasadancollege.com/",
      degree: "Bachelor of Computer Application (BCA)",
      logoUrl: "/sevasadan.jpg",
      start: "2020",
      end: "2023",
    },
    {
      school: "Govt.H.S.School Bambhada, Burhanpur",
      // href: "https://sevasadancollege.com/",
      degree: "12th (Math Science)",
      logoUrl: "/govt.jpg",
      start: "2019",
      end: "2020",
    },
    {
      school: "Govt.H.S.School Bambhada, Burhanpur",
      // href: "https://sevasadancollege.com/",
      degree: "10th",
      logoUrl: "/govt.jpg",
      start: "2017",
      end: "2018",
    },
  ],
projects: [
  {
    title: "Food-Delivery-App",
    href: "https://food-del-chi-snowy.vercel.app/",
    dates: "2023 - 2024",
    active: false,
    description: "A React-based food delivery app inspired by top platforms, built for learning and exploration purposes.",
    technologies: ["React.js", "CSS"],
    links: [
      { type: "Website", href: "https://food-del-chi-snowy.vercel.app/", icon: <Icons.globe className="size-3" /> },
      { type: "Source", href: "https://github.com/mahajankirti515/food-del", icon: <Icons.github className="size-3" /> }
    ],
    image: "",
    video: "/Food-Delivery-App.mp4"
  },
   {
    title: "Setkorp",
    href: "https://setkorp-three.vercel.app/",
    dates: "Sep 2025 - Present",
    active: true,
    description: "Designed, developed and sold animated UI components for developers.",
    technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI", "Magic UI"],
    links: [
      { type: "Website", href: "https://setkorp-three.vercel.app/", icon: <Icons.globe className="size-3" /> },
      { type: "Source", href: "https://github.com/mahajankirti515/setkorp", icon: <Icons.github className="size-3" /> }
    ],
    image: "",
    video: "/setkorp-video.mp4"
  },
  {
    title: "Food-Delivery-App-like Zomato",
    href: "https://vingo-8hz8.onrender.com/",
    dates: "Aug 2025 - Sep 2025",
    active: true,
    description: "A MERN stack-based food delivery application inspired by Swiggy and Zomato, featuring live order tracking, secure payments with Razorpay, and a responsive UI designed with React.js and TailwindCSS.",
    technologies: ["React.js", "TailwindCSS", "Nodejs", "Express", "Mongodb", "Razorpay"],
    links: [
      { type: "Website", href: "https://vingo-8hz8.onrender.com", icon: <Icons.globe className="size-3" /> },
      { type: "Source", href: "https://github.com/mahajankirti515/vingo_food_delivery", icon: <Icons.github className="size-3" /> }
    ],
    image: "",
    video: "/Zomato.mp4"
  },
  {
    title: "E-Commerce Website",
    href: "https://ecommerse-website-hazel.vercel.app/",
    dates: "2022",
    active: false,
    description: "A full-featured e-commerce website with product catalog, shopping cart, and user authentication built with React.js.",
    technologies: ["React.js", "CSS"],
    links: [
      { type: "Website", href: "https://ecommerse-website-hazel.vercel.app/", icon: <Icons.globe className="size-3" /> },
      { type: "Source", href: "https://github.com/mahajankirti515/e_commerse_website", icon: <Icons.github className="size-3" /> }
    ],
    image: "",
    video: "/Ecommerce.mp4"
  },
  {
    title: "Car-Rental-Website",
    href: "https://llm.report",
    dates: "Sep 2025",
    active: true,
    description: "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    technologies: ["React.js", "Nodejs", "Express", "TailwindCSS", "Shadcn UI", "Magic UI", "MongoDB"],
    links: [
      { type: "Website", href: "https://llm.report", icon: <Icons.globe className="size-3" /> },
      { type: "Source", href: "https://github.com/mahajankirti515/Car-Rental-Website", icon: <Icons.github className="size-3" /> }
    ],
    image: "",
    video: "https://cdn.llm.report/openai-demo.mp4"
  },
  {
    title: "Music-App",
    href: "https://music-app-zeta-two.vercel.app/",
    dates: "March 2025",
    active: true,
    description: "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    technologies: ["React.js", "TailwindCSS", "Redux", "React Router Dom"],
    links: [
      { type: "Website", href: "https://music-app-zeta-two.vercel.app/", icon: <Icons.globe className="size-3" /> },
      { type: "Source", href: "https://github.com/mahajankirti515/music-app", icon: <Icons.github className="size-3" /> }
    ],
    image: "",
    video: "/Music-app.mp4"
  },
  {
    title: "Dice-Game",
    href: "https://dice-game-xi-nine.vercel.app/",
    dates: "2022",
    active: false,
    description: "A browser dice game that includes user interaction and random number generation, built with vanilla JavaScript and HTML5.",
    technologies: ["JavaScript", "HTML5", "CSS"],
    links: [
      { type: "Website", href: "https://dice-game-xi-nine.vercel.app/", icon: <Icons.globe className="size-3" /> },
      { type: "Source", href: "https://github.com/mahajankirti515/dice-game", icon: <Icons.github className="size-3" /> }
    ],
    image: "",
    video: "/Dice-Game.mp4"
  },
 
  
  {
    title: "Youtube-clone",
    href: "https://youtub-clone-one.vercel.app/",
    dates: "2023",
    active: false,
    description: "A minimal YouTube UI clone with video thumbnails and interactive video playing experience.",
    technologies: ["React.js", "CSS"],
    links: [
      { type: "Website", href: "https://youtub-clone-one.vercel.app/", icon: <Icons.globe className="size-3" /> },
      { type: "Source", href: "https://github.com/mahajankirti515/youtub-clone", icon: <Icons.github className="size-3" /> }
    ],
    image: "",
    video: "/youtube-clone.mp4"
  },
 
  
  {
    title: "Netflix-clone",
    href: "https://netflix-azure.vercel.app/",
    dates: "2023",
    active: false,
    description: "A Netflix UI clone built with React.js and integrated with movie data APIs for dynamic content display.",
    technologies: ["React.js", "CSS", "API Integration"],
    links: [
      { type: "Website", href: "https://netflix-azure.vercel.app/", icon: <Icons.globe className="size-3" /> },
      { type: "Source", href: "https://github.com/mahajankirti515/Netflix", icon: <Icons.github className="size-3" /> }
    ],
    image: "",
    video: "/Netflix.mp4"
  },
   {
    title: "Blinkit-Clone-MERN-App",
    href: "https://github.com/mahajankirti515/Blinkit-Clone-MERN-App",
    dates: "2024 - 2025",
    active: false,
    description: "An e-commerce grocery store clone built with the MERN stack featuring user authentication and cart management.",
    technologies: ["MongoDB", "Express", "React.js", "Node.js", "JWT", "CSS"],
    links: [
       { type: "Website", href: "https://setkorp-three.vercel.app/", icon: <Icons.globe className="size-3" /> },
      { type: "Source", href: "https://github.com/mahajankirti515/Blinkit-Clone-MERN-App", icon: <Icons.github className="size-3" /> }
    ],
    image: "",
    video: ""
  },
]

,
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
