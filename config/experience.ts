import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "layer5",
    position: "Open Source Contributor",
    company: "Layer5",
    location: "Remote",
    startDate: new Date("2025-12-01"),
    endDate: "Present",
    description: [
      "Contributing to the Meshery ecosystem by transforming static documentation into interactive learning assets.",
      "Collaborating with the community to integrate cloud-native designs into the Exoscale Academy curriculum.",
    ],
    achievements: [
      "Converted static architecture images into interactive Meshery Designs, embedding them into Exoscale Academy course content to improve hands-on learning.",
      "Designed and integrated a Kubernetes architecture Meshery Design, transforming conceptual diagrams into executable, interactive assets.",
      "Actively engaging with the community to drive feature implementation and bug fixes for upcoming releases.",
    ],
    skills: ["GO","Kubernetes", "Git", "Javascript", "Node.js"],
    companyUrl: "https://layer5.io",
    logo: "/experience/layer5-logo.png", // Placeholder
  }
];