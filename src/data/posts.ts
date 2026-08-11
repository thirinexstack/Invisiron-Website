import { assetPath } from "../config/assets";
import type { Post } from "../types/content";

const posts: Post[] = [
  {
    type: "NEWS",
    title: "Invisiron Pre-Approved Digital Solution Grant",
    date: "SINGAPORE, 21 September 2022",
    image: assetPath("picture1-1.png"),
    text: "Invisiron Cyber Defence solutions help organisations adopt stronger protection with practical deployment paths.",
  },
  {
    type: "EVENTS",
    title: "Cyber Security Asia 2022",
    date: "16 August 2022",
    image: assetPath("image-6.png"),
    text: "Insights into the modern cyber-attack landscape and practical ways to fortify cyber defence.",
  },
  {
    type: "ARTICLES",
    title: "5 CyberSecurity Trends In 2022",
    date: "2022",
    image: assetPath("invisiron-features-background.jpg-scaledblur-1024x576-1.jpg"),
    text: "Current trends show why proactive, invisible defence matters for connected organisations.",
  },
];

export { posts };
