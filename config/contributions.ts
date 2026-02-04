export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "NxtLAP_web",
    contibutionDescription:
      "Motorsport-focused platform for tracking races. Implemented advanced SEO, schema markup, and dynamic blog sections using Next.js.",
    repoOwner: "One Corp",
    link: "https://github.com/one-corp/NxtLAP_web",
  },
  {
    repo: "ai-career-counselor",
    contibutionDescription:
      "Full-stack AI counseling platform using Next.js and Google Gemini. Handles 100+ chat interactions with context-aware responses.",
    repoOwner: "thecodephilic-guy",
    link: "https://github.com/thecodephilic-guy/ai-career-counselor",
  },
  {
    repo: "exoscale-academy",
    contibutionDescription:
      "Converted static architecture images into interactive Meshery Designs and embedded them into Exoscale Academy course content.",
    repoOwner: "Layer5",
    link: "https://github.com/layer5io/exoscale-academy/issues/173",
  },
  {
    repo: "exoscale-academy",
    contibutionDescription:
      "Designed and integrated a Kubernetes architecture Meshery Design, transforming conceptual diagrams into executable, interactive learning assets.",
    repoOwner: "Layer5",
    link: "https://github.com/layer5io/exoscale-academy/issues/175",
  },
  {
    repo: "landing",
    contibutionDescription:
      "Fixed Community Fly-out Menu which hid itself unless you move your cursor through the desired path.",
    repoOwner: "Open Healthcare Network",
    link: "https://github.com/ohcnetwork/landing/issues/10",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(2);
