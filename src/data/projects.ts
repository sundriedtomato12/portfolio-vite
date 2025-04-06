import SnippetsThumbnail from "../assets/images/snippets-thumbnail.png";
import CombatChicksThumbnail from "../assets/images/combat-chicks-thumbnail.png";
import PorkyPrintsThumbnail from "../assets/images/porky-prints-thumbnail.png";
import KevinTheInternThumbnail from "../assets/images/kevin-the-intern-thumbnail.png";
import KtaThumbnail from "../assets/images/kta-thumbnail.png";
import PixelpalsThumbnail from "../assets/images/pixelpals-thumbnail.png";
import SnippetsDemo from "../assets/videos/snippets-demo.mp4";
import CombatChicksDemo from "../assets/videos/combat-chicks-demo.mp4";
import PorkyPrintsDemo from "../assets/videos/porky-prints-demo.mp4";
import KevinDemo from "../assets/videos/kevin-demo.mp4";
import KtaDemo from "../assets/videos/kta-demo.mp4";
import PixelpalsDemo from "../assets/videos/pixelpals-demo.mp4";

export interface ProjectType {
  name: string;
  short: string;
  description: string;
  video: string;
  technologies: string[];
  thumbnail?: string;
  url?: string;
  githubUrl?: string;
}

export const projects: ProjectType[] = [
  {
    name: "PixelPals",
    short: "Pet and habitat management casual game",
    description:
      "A pet and habitat management PWA game that integrates Web3 wallet connection, a leaderboard, level rewards, in-game purchases using USDT, and more.",
    technologies: [
      "Typescript",
      "NestJs",
      "React",
      "Unity",
      "Ethers",
      "Solidity",
    ],
    thumbnail: PixelpalsThumbnail,
    video: PixelpalsDemo,
    url: "https://pixelpals.ai",
  },
  {
    name: "Kevin The Adventurer",
    short: "Side-scrolling casual game",
    description:
      "A side-scrolling casual browser-based game that integrates Web3 wallet connection, a leaderboard, daily rewards, and in-game purchases using ETH.",
    technologies: ["Typescript", "Unity", "React", "NextJs", "WalletConnect"],
    thumbnail: KtaThumbnail,
    video: KtaDemo,
    url: "https://kevin.pixelmon.ai",
  },
  {
    name: "Kevin The Intern",
    short: "'AI' FAQ Chatbot for Pixelmon",
    description:
      "'AI' FAQ Chatbot for Pixelmon, featuring their latest intern, Kevin.",
    technologies: ["Typescript", "React", "Ant Design"],
    thumbnail: KevinTheInternThumbnail,
    video: KevinDemo,
    url: "https://kevin-chatbot.onrender.com",
  },
  {
    name: "Porky Prints",
    short: "E-commerce site for 3D printed toys",
    description: "E-commerce website for customisable 3D printed toys.",
    technologies: [
      "Javascript",
      "React",
      "Chakra UI",
      "NodeJs",
      "Ant Design",
      "Sequelize",
    ],
    thumbnail: PorkyPrintsThumbnail,
    video: PorkyPrintsDemo,
    githubUrl:
      "https://github.com/sundriedtomato12/3D-Model-Ecommerce-Frontend",
  },
  {
    name: "Combat Chicks",
    short: "Chicken-themed combat game",
    description:
      "Chicken-themed turn-based web combat game with a vintage, pixelated art style.",
    technologies: ["Javascript", "EJS", "CSS", "Sequelize"],
    thumbnail: CombatChicksThumbnail,
    video: CombatChicksDemo,
    githubUrl: "https://github.com/sundriedtomato12/project3-combatchicks",
  },
  {
    name: "Snippets",
    short: "Micro-blogging website",
    description: "Bite-sized micro-blogging website with a simple UI layout.",
    technologies: ["Javascript", "EJS", "CSS", "Sequelize"],
    thumbnail: SnippetsThumbnail,
    video: SnippetsDemo,
    githubUrl: "https://github.com/sundriedtomato12/project2-snippets",
  },
];
