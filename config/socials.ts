import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@thecodephilic_guy",
    icon: Icons.gitHub,
    link: "https://github.com/thecodephilic-guy",
  },
  {
    name: "LinkedIn",
    username: "Sohail Ansari",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/sohail-ansari-19435b269/",
  },
  {
    name: "Twitter",
    username: "@codephilic_guy",
    icon: Icons.twitter,
    link: "https://twitter.com/codephilic_guy",
  },
  {
    name: "Gmail",
    username: "sohailansari483",
    icon: Icons.gmail,
    link: "mailto:sohailansari483@gmail.com",
  },
];
