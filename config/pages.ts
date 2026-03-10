import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description:
      "Welcome to my digital workspace. I build scalable web applications and seamless user experiences.",
    metadata: {
      title: "Mohd Sohail Ansari | Full-Stack Developer",
      description:
        "Portfolio of Mohd Sohail Ansari, a Full-Stack Developer specializing in React, Next.js, Node.js, Go and Google Cloud Platform",
    },
  },
  skills: {
    title: "Skills & Technologies",
    description:
      "A comprehensive look at the tools, languages, and frameworks I use to bring ideas to life.",
    metadata: {
      title: "Technical Skills",
      description:
        "Explore the technical skill set of Mohd Sohail Ansari, featuring expertise in Next.js, React, Node.js, Go, PostgreSQL, and modern web development.",
    },
  },
  projects: {
    title: "Projects",
    description:
      "Showcasing impactful full-stack applications, from system architectures to polished user interfaces.",
    metadata: {
      title: "Projects",
      description:
        "View the development portfolio of Mohd Sohail Ansari. Showcasing full-stack web applications, AI integrations, and scalable platforms.",
    },
  },
  contact: {
    title: "Contact",
    description:
      "Let's connect. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    metadata: {
      title: "Contact",
      description:
        "Get in touch with Mohd Sohail Ansari for software development roles, freelance web projects, or technical collaborations. Let's build something great.",
    },
  },
  contributions: {
    title: "Open Source Contributions",
    description:
      "Giving back to the community through code, documentation, and collaborative development.",
    metadata: {
      title: "Open Source Contributions",
      description:
        "Discover Mohd Sohail Ansari's open-source contributions, GitHub repositories, and collaborative software development efforts within the tech community.",
    },
  },
  resume: {
    title: "Resume",
    description:
      "A detailed overview of my professional experience, education, and technical background.",
    metadata: {
      title: "Resume",
      description:
        "Download and view the resume of Mohd Sohail Ansari. A detailed look at my experience, technical skills, and education as a full-stack developer.",
    },
  },
  experience: {
    title: "Experience",
    description:
      "My journey through software development, roles, and technical achievements over the years.",
    metadata: {
      title: "Experience",
      description:
        "Explore the professional journey of Mohd Sohail Ansari. View my timeline of software engineering roles, freelance projects, and technical achievements.",
    },
  },
  blogs: {
    title: "Blogs",
    description:
      "Beginner-friendly deep dives, tutorials, and thoughts on modern web development.",
    metadata: {
      title: "Blogs",
      description:
        "Read Blogs by Mohd Sohail Ansari. Beginner-friendly tutorials, architectural deep dives, and guides on React, Next.js, Go, and full-stack development.",
    },
  },
};
