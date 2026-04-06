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
  pagesInfoArr?: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "doc-assistant",
    companyName: "Doc Assistant",
    type: "Personal",
    category: ["Full Stack", "RAG", "AI Engineering", "Web Dev", "UI/UX"],
    shortDescription:
      "It is an application built with the focus on allowing you to extract exactly what you are looking for in your pdf. You can litterally chat with your pdf documents",
    websiteLink: "https://docassistant.sohail.world",
    githubLink: "https://github.com/thecodephilic-guy/doc-assistant",
    techStack: [
      "Express.js",
      "Next.js",
      "RAG",
      "LangChain",
      "BullMQ",
      "Redis",
      "Pgvector",
      "PostgreSQL",
      "Google GenAI SDK",
      "Drizzle ORM",
      "Clerk",
      "Google Cloud Platform (GCP)",
      "Caddy (Reverse Proxy)",
      "rsync",
      "Linux",
      "CI/CD",
    ],
    startDate: new Date("2026-02-09"),
    endDate: new Date("2026-03-20"),
    companyLogoImg: "/projects/doc-assistant/logo.png",
    pagesInfoArr: [
      {
        title: "Secured by Clerk",
        description:
          "Clerk is a comprehensive, developer-focused authentication and user management platform designed to help teams quickly add secure sign-up, sign-in, and profile management to their applications without building a custom backend.",
        imgArr: ["/projects/doc-assistant/home.png"],
      },
      {
        title: "Interactive PDF Chat",
        description:
          "Natural language conversational interface that allows users to seamlessly interact with and extract insights from complex PDF documents.",
        imgArr: ["/projects/doc-assistant/chat.png"],
      },
      {
        title: "Skeleton UI for better UX",
        description:
          "Skeleton UI provides significant user experience (UX) benefits by acting as a temporary wireframe placeholder that indicates content is loading, rather than displaying a blank screen or loading spinner. Key advantages include enhanced perceived performance, reduced user frustration, lower bounce rates, and improved visual continuity by preventing jarring layout shifts.",
        imgArr: ["/projects/doc-assistant/skeleton.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Doc Assistant is a full-stack Retrieval-Augmented Generation (RAG) application that allows users to naturally converse with and extract insights from complex PDF documents , utilizing a version-locked LangChain PDFLoader to handle edge cases during text extraction and chunking.",
        "The backend is structured with strict OOP principles and dual-layer rate limiting to prevent memory crashes from bulk uploads , while an asynchronous worker queue using BullMQ and Redis manages heavy vector storage tasks and triggers real-time UI updates via a database state machine.",
      ],
      bullets: [
        "Built a full-stack Retrieval-Augmented Generation (RAG) app allowing users to chat naturally with complex PDF documents and extract insights.",
        "Migrated legacy parsing logic to LangChain’s PDFLoader (version-locked to ^1.1.4 for API stability) to handle edge cases in text extraction and chunking.",
        "Designed an async worker queue using BullMQ and Upstash Redis to offload heavy vector storage tasks, tied to a database state machine (Pending → Processing → Success/Failed) for real-time UI updates.",
        "Structured the backend with strict OOP principles and added dual-layer rate limiting: 50 req/min for standard API traffic and a strict 5 req/min limit on Multer routes to prevent memory crashes from bulk uploads.",
      ],
    },
  },
    {
    id: "greenlight",
    companyName: "Greenlight",
    type: "Personal",
    category: ["Backend", "API", "Golang", "Web Dev"],
    shortDescription:
      "A production-grade, high-performance RESTful API server built specifically for movies. It is designed to handle real-world backend complexities rather than just serving as a basic CRUD application.",
    websiteLink: "https://api.greenlight.sohail.world/v1/healthcheck",
    githubLink: "https://github.com/thecodephilic-guy/greenlight",
    techStack: [
      "Go (Golang)",
      "PostgreSQL",
      "Makefiles",      
      "Google Cloud Platform (GCP)",
      "Caddy (Reverse Proxy)",
      "rsync",
      "Linux",
      "CI/CD",
    ],
    startDate: new Date("2026-01-03"),
    endDate: new Date("2026-03-17"),
    companyLogoImg: "/projects/greenlight/logo.png",
    pagesInfoArr: [
    ],
    descriptionDetails: {
      paragraphs: [
        "Greenlight is a high-performance RESTful API server built in Go that handles movie data management, featuring full-text search, advanced pagination, and dynamic sorting backed by a PostgreSQL database. I built this project to move beyond basic CRUD applications and tackle the kind of real-world backend complexities found in production environments. To ensure maximum efficiency and low latency, I offloaded heavy operations, like sending transactional emails, into background goroutines so they never block client responses. Instead of relying on a heavy ORM to handle database interactions, I wrote custom raw SQL up and down migrations using the migrate CLI. This gave me complete control over the data model expansion, which I paired with custom Go validators to strictly enforce data integrity before a single byte reaches the database.",
        "Beyond just writing the application logic, I engineered Greenlight to survive actual internet traffic by implementing a robust security and deployment pipeline. I built stateful token-based authentication and a strict global IP-based rate limiter set at two requests per second, which effectively mitigates automated traffic spikes and protects the endpoints. For the infrastructure, I provisioned a bare-metal Linux server behind a Caddy reverse proxy rather than settling for a simple platform-as-a-service provider. To manage updates, I authored an idempotent, CI/CD-style deployment pipeline using Makefiles. This setup allows me to push code and execute zero-downtime systemd daemon reloads over SSH and rsync. The result is a fully live, secure, and highly scalable API server that demonstrates exactly how I structure, protect, and deploy production-grade software.",
      ],
      bullets: [
        "Engineered a high-performance RESTful API in Go (Golang) for movies, featuring full-text search, advanced pagination, and dynamic sorting backed by a Neon serverless PostgreSQL database.",
        "Architected alternative SMTP routing via the Resend REST API to overcome cloud provider port restrictions, ensuring reliable email delivery; offloaded all transactional email tasks to background goroutines to guarantee non-blocking, low-latency client responses.",
        "Built a robust security pipeline, implementing stateful token-based authentication and a global IP-based rate limiter (2 req/sec), successfully mitigating automated traffic spikes and securing the endpoints.",
        "Authored custom raw SQL up/down migrations using the migrate CLI to dynamically expand the data model without ORM overhead, writing custom Go validators (net/url) to strictly enforce data integrity before database insertion.",
        "Provisioned a bare-metal Linux server with a Caddy reverse proxy. Authored an idempotent CI/CD-style deployment pipeline using Makefiles, executing zero-downtime systemd daemon reloads via SSH and rsync.",
      ],
    },
  },
  {
    id: "nxtlap",
    companyName: "NxtLAP",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "A comprehensive motorsport platform designed to track upcoming races and events across major leagues like F1 and MotoGP.",
    websiteLink: "https://nxtlap.com",
    githubLink: "https://github.com/one-corp/NxtLAP_web",
    techStack: ["Next.js", "React", "Typescript", "Tailwind CSS", "Vercel"],
    startDate: new Date("2025-08-05"),
    endDate: "Present",
    companyLogoImg: "/projects/nxtlap/logo.png",
    pagesInfoArr: [
      {
        title: "Avaible on App Store",
        description: "The app is also available on Apple's App Store",
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
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Typescript",
      "tRPC",
      "TanStack Query",
      "Drizzle ORM",
      "PostgreSQL",
      "Google GenAI SDK",
      "Zod",
    ],
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
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "This project bridges the gap between static career advice and personalized guidance. Using the Google GenAI SDK, I built a counselor that maintains context over long conversations to provide tailored advice.",
        "A key technical challenge was ensuring session continuity. I designed a scalable PostgreSQL schema using Drizzle ORM that achieves 99% accurate session retrieval, allowing users to pause and resume conversations seamlessly.",
      ],
      bullets: [
        "Built a smooth, responsive chat interface using Next.js and Tailwind CSS. Implemented live message streaming to reduce perceived latency and significantly improve the user interface responsiveness.",
        "Engineered a human-like chat interface with live typing indicators and streamed responses, reducing perceived latency by 40%.",
        "Connected the app to the Google Gemini API using tRPC and Zod to keep the data flow strict and bug-free. Engineered persistent user sessions by integrating a PostgreSQL database with Drizzle ORM ensuring reliable storage and retrieval of chat histories.",
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
    techStack: [
      "Express.js",
      "Next.js",
      "Tailwind CSS",
      "bcryptjs",
      "Socket.IO",
      "Drizzle ORM",
      "PostgreSQL",
      "axios",
      "date-fsn",
      "Zustand",
    ],
    startDate: new Date("2025-05-06"),
    endDate: new Date("2025-05-02"),
    companyLogoImg: "/projects/chatterbox/logo.png",
    pagesInfoArr: [
      {
        title: "Messaging UI",
        description: "Clean messaging interface with real-time status updates.",
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
        "Security and data integrity were priorities; the app implements strict JWT authentication and uses bcrypt for securely hashing passwords, ensuring user data remains secure while syncing in real-time via PostgreSQL.",
      ],
      bullets: [
        "Built a real-time messaging app supporting 1,000+ concurrent users using Socket.IO.",
        "Integrated PostgreSQL and Drizzle ORM for reliable real-time data synchronization.",
        "Implemented secure user authentication with JWT and bcrypt for hashing passwords.",
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
