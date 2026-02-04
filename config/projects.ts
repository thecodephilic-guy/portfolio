import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date | string;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "nxtlap",
    companyName: "NxtLAP",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "A comprehensive motorsport platform designed to track upcoming races and events across major leagues like F1 and MotoGP.",
    websiteLink: "https://nxtlap.com",
    githubLink: "https://github.com/one-corp/NxtLAP_web",
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "SEO",
      "Open Graph",
    ],
    startDate: new Date("2025-08-05"),
    endDate: "Present",
    companyLogoImg: "/projects/nxtlap/logo.png",
    pagesInfoArr: [
      {
        title: "Avaible on App Store",
        description:
          "The app is also available on Apple's App Store",
        imgArr: ["/projects/nxtlap/appstore.png"],
      },
      {
        title: "Blog Section",
        description:
          "Dynamic blog section optimized for SEO to drive organic traffic.",
        imgArr: ["/projects/nxtlap/blog.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "NxtLAP is a dedicated platform for motorsport enthusiasts, solving the fragmentation of race schedules across different leagues. It serves as a central hub for tracking events in F1, MotoGP, V8 Supercars, and more.",
        "The project focuses heavily on technical SEO, implementing dynamic Open Graph data, structured schema markup, and server-side rendering (SSR) to ensure maximum visibility on search engines.",
      ],
      bullets: [
        "Designed and built a motorsport-focused platform to track races across major leagues.",
        "Implemented advanced SEO optimization including meta tags, structured schema markup, and sitemap generation.",
        "Built a dynamic blog section that publishes weekly articles, driving consistent organic traffic growth.",
        "Utilized Next.js Server-Side Rendering (SSR) for fast load times and improved search engine indexing.",
      ],
    },
  },
  {
    id: "ai-career-counselor",
    companyName: "AI Career Counselor",
    type: "Personal",
    category: ["AI Engineering", "Full Stack", "Web Dev"],
    shortDescription:
      "A full-stack AI counseling platform using Google Gemini and tRPC, capable of handling complex, context-aware career guidance conversations.",
    websiteLink: "https://ai-career-counselor-liard.vercel.app",
    githubLink: "https://github.com/thecodephilic-guy/ai-career-counselor",
    techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "Typescript", "tRPC", "TanStack Query", "Drizzle ORM", "PostgreSQL", "Google GenAI SDK", "Zod"],
    startDate: new Date("2025-09-03"),
    endDate: new Date("2025-09-10"),
    companyLogoImg: "/projects/ai-career-counselor/logo.png",
    pagesInfoArr: [
      {
        title: "Chat Interface",
        description:
          "Human-like chat interface with typing indicators and streamed AI responses.",
        imgArr: ["/projects/ai-career-counselor/chat.png"],
      },
      {
        title: "Instant Session Reset",
        description:
          "Effortlessly clear complete conversation history with a single action, ensuring user privacy and enabling fresh context starts.",
        imgArr: ["/projects/ai-career-counselor/delete-chats.png"],
      },
      {
        title: "Adaptive Dark Mode",
        description:
          "High-contrast dark theme optimized for visual comfort, reducing eye strain during extended counseling sessions.",
        imgArr: ["/projects/ai-career-counselor/dark.png"],
      }
    ],
    descriptionDetails: {
      paragraphs: [
        "This project bridges the gap between static career advice and personalized guidance. Using the Google GenAI SDK, I built a counselor that maintains context over long conversations to provide tailored advice.",
        "A key technical challenge was ensuring session continuity. I designed a scalable PostgreSQL schema using Drizzle ORM that achieves 99% accurate session retrieval, allowing users to pause and resume conversations seamlessly.",
      ],
      bullets: [
        "Developed a full-stack AI counseling platform handling 100+ chat interactions per session.",
        "Engineered a human-like chat interface with live typing indicators and streamed responses, reducing perceived latency by 40%.",
        "Designed a scalable PostgreSQL schema using Drizzle ORM for robust data persistence.",
        "Implemented context-aware responses using Google Gemini and tRPC for type-safe API calls.",
      ],
    },
  },
  {
    id: "chatterbox",
    companyName: "ChatterBox",
    type: "Personal",
    category: ["Full Stack", "Real-time Systems", "Backend"],
    shortDescription:
      "A real-time messaging application supporting 1,000+ concurrent users with JWT authentication and live typing indicators.",
    websiteLink: "https://chatterbox-neon-one.vercel.app/",
    githubLink: "https://github.com/thecodephilic-guy/chatterbox-server",
    techStack: ["Express.js", "Next.js", "Tailwind CSS", "bcryptjs", "Socket.IO", "Drizzle ORM", "PostgreSQL", "axios", "date-fsn", "Zustand"],
    startDate: new Date("2025-05-06"),
    endDate: new Date("2025-05-02"),
    companyLogoImg: "/projects/chatterbox/logo.png",
    pagesInfoArr: [
      {
        title: "Messaging UI",
        description:
          "Clean messaging interface with real-time status updates.",
        imgArr: ["/projects/chatterbox/chats.png"],
      },
      {
        title: "Authentication System",
        description:
          "End-to-end authentication system using PostgreSQL and bcryptjs ensuring platform security through protected routes and hierarchical access management.",
        imgArr: ["/projects/chatterbox/login.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "ChatterBox is a high-performance messaging application built to handle scale. It uses Socket.IO for low-latency communication and allows over 1,000 concurrent users to chat instantly.",
        "Security and data integrity were priorities; the app implements strict JWT authentication and uses bcrypt for encryption, ensuring user data remains secure while syncing in real-time via PostgreSQL.",
      ],
      bullets: [
        "Built a real-time messaging app supporting 1,000+ concurrent users using Socket.IO.",
        "Integrated PostgreSQL and Drizzle ORM for reliable real-time data synchronization.",
        "Implemented secure user authentication with JWT and bcrypt encryption.",
        "Added engagement features like user search, online status indicators, and real-time typing notifications.",
      ],
    },
  },
  // {
  //   id: "portfolio-card",
  //   companyName: "Portfolio Card",
  //   type: "Personal",
  //   category: ["Web Dev", "Frontend"],
  //   shortDescription:
  //     "Forged an immersive 3D Portfolio Card utilizing the prowess of Three.js and Blender, where art and technology converge in an interactive masterpiece.",
  //   websiteLink: "https://card.namanbarkiya.xyz/",
  //   githubLink: "https://github.com/namanbarkiya/3d-portfolio-card",
  //   techStack: ["React", "Javascript", "HTML 5", "CSS 3"],
  //   startDate: new Date("2022-03-01"),
  //   endDate: new Date("2022-07-01"),
  //   companyLogoImg: "/projects/card/logo.png",
  //   pagesInfoArr: [
  //     {
  //       title: "Card Views",
  //       description: "Front and back views of the interactive 3D card",
  //       imgArr: ["/projects/card/card_2.webp", "/projects/card/card_3.webp"],
  //     },
  //     {
  //       title: "Interactive Elements",
  //       description:
  //         "Custom links embedded in the 3D model with interactive animations",
  //       imgArr: ["/projects/card/card_1.webp"],
  //     },
  //     {
  //       title: "3D Model Development",
  //       description: "Blender project showcasing the model creation process",
  //       imgArr: ["/projects/card/card_4.webp"],
  //     },
  //   ],
  //   descriptionDetails: {
  //     paragraphs: [
  //       "In my personal, I've ventured into the world of creativity, fashioning a distinctive portfolio card through the utilization of Three.js.",
  //       "This portfolio card transcends convention; it emerges as a captivating 3D model, adorned with meticulous lighting arrangements that conjure a spellbinding visual journey.",
  //       "To materialize this concept, I've harnessed the combined potential of Three.js and Blender, orchestrating a meticulous crafting of the central 3D model that serves as the cornerstone of the card's allure.",
  //       "Yet, the allure extends beyond aesthetics. I've ingeniously interwoven custom links directly into the fabric of Three.js components. Through the creation and seamless integration of novel components, these additions elegantly rest upon the card's surface, mirroring its rotations and delivering an interactive dimension to my portfolio.",
  //       "The portfolio card itself is an opus of motion, perpetually swaying in an auto-rotational dance that unfurls its multifaceted essence. As an enhancement, I've introduced an instinctive user interaction element. A simple, intuitive drag of the card in specific directions grants viewers a comprehensive vantage, enabling exploration from every conceivable angle.",
  //       "At its core, my personal epitomizes technical finesse, artistic expression, and interactive design. The amalgamation of Three.js, Blender's prowess, and the innovation of component integration has birthed not only a portfolio card, but a dynamic encounter leaving an indelible imprint on all who partake.",
  //     ],
  //     bullets: [
  //       "Conceptualized and realized a distinct portfolio card using Three.js, highlighting creative exploration.",
  //       "Crafted a mesmerizing 3D model enhanced by thoughtful lighting arrangements, resulting in a captivating visual voyage.",
  //       "Leveraged the synergy of Three.js and Blender to meticulously sculpt and refine the central 3D model, embodying meticulous attention to detail.",
  //       "Innovatively integrated custom links within Three.js components, introducing an interactive layer via seamlessly incorporated new elements.",
  //       "Enabled an auto-rotating feature for the portfolio card, perpetually showcasing its various facets to observers.",
  //       "Introduced an instinctual user interaction mechanism, allowing viewers to comprehensively explore the card's dimensions through simple, intuitive dragging motions.",
  //       "Represented a fusion of technical prowess, artistic ingenuity, and interactive design in a project that reshapes the boundaries of conventional portfolio representation.",
  //     ],
  //   },
  // },
];

export const featuredProjects = Projects.slice(0, 3);
