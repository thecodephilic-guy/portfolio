import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mohd Sohail Ansari - Software Engineer (Next.js, Go, TypeScript)",
    short_name: "Sohail",
    description:
      "Mohd Sohail Ansari - Software Engineer and Open Source Contributor. Specializing in full-stack development with Next.js, TypeScript, and Go. Building scalable AI platforms and real-time applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "ai",
      "software engineering",
      "machine learning",
      "developer",
      "web development",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
