import { assetPath } from "../config/assets";
import { routes } from "../config/routes";
import type { Post } from "../types/content";

const posts: Post[] = [
  {
    type: "NEWS",
    title: "Invisiron Pre-Approved Digital Solution Grant",
    date: "25th Sep 2023",
    image: assetPath("blog/invisiron.png"),
    href: routes.blogGrant,
    text: "SINGAPORE, 21 September 2023 - Invisiron is a Pre-Approved Digital Solution ICM Vendor qualified for the IMDA Pre-Approved@SMEsGoDigital Grant. With the",
  },
  {
    type: "EVENTS",
    title: "Cyber Security Asia 2022",
    date: "16th Aug 2022",
    image: assetPath("blog/csa-banner-speaker.png"),
    href: routes.cyberSecurityAsia,
    text: "Invisiron team was excited to connect again in person with cyber experts, our Malaysia clients, partners and prospects at Cyber",
  },
  {
    type: "ARTICLES",
    title: "5 CyberSecurity Trends In 2022",
    date: "20th Jan 2022",
    image: assetPath("blog/blog-5-cybersecurity.png"),
    href: routes.cybersecurityTrends,
    text: "2021 has been a whirlwind in the cybersecurity space with record ransomware attacks during the year. It seems like last",
  },
  {
    type: "ARTICLES",
    title: "Cyber Defence - It's time to act now, Cyber Security and the Pandemic, Heightened Cyber Threats in the Legal Sector",
    date: "9th Jan 2022",
    image: assetPath("blog/blog-cyber-defence.jpg"),
    href: routes.cyberDefenceLegal,
    text: "Since the start of the COVID-19 pandemic, remote work and distancing measures has led law firms to accelerate digitalization in",
  },
  {
    type: "NEWS",
    title: "Breaking News: New Malware Threat Squirrelwaffle Discovered",
    date: "16th Dec 2021",
    image: assetPath("blog/blog-new-malware-threat.png"),
    href: routes.squirrelwaffle,
    text: "Malware threats are ever-evolving and that includes the recent SquirrelWaffle which utlises stolen reply-chain email campaigns to plant phishing emails",
  },
  {
    type: "NEWS",
    title: "Third-party software bug exploited by hackers",
    date: "2nd Dec 2021",
    image: assetPath("blog/third-party-software-1.png"),
    href: routes.thirdPartySoftware,
    text: "The new norm of employees working from home has created a huge demand for third-party software for work purposes. Hackers",
  },
  {
    type: "ARTICLES",
    title: "Surge in Complex Cyber Attacks Targeted at Small to Medium Enterprises",
    date: "11th Nov 2021",
    image: assetPath("blog/blog-surge-in-complex.png"),
    href: routes.surgeComplex,
    text: "SMEs are becoming more frequently targeted by hackers in cyber attacks, especially in sectors that deal with sensitive data or",
  },
  {
    type: "ARTICLES",
    title: "Upgrade Your Company's Cyber Security Networks Today",
    date: "21st Oct 2021",
    image: assetPath("blog/blog-upgrade-your-company.png"),
    href: routes.upgradeCompany,
    text: "The Asia-Pacific network security market is experiencing a huge growth, whereby the market is estimated to hit $7.32 BILLION by...",
  },
  {
    type: "NEWS",
    title: "7 Most Prominent Cyberattacks in ASEAN Countries",
    date: "14th Oct 2021",
    image: assetPath("blog/blog-7-most-prominent-cyber-attacks.png"),
    href: routes.aseanCyberattacks,
    text: "The acceleration of digital transformation caused by COVID-19, sparked a huge surge in the number of cyber attacks in the...",
  },
  {
    type: "ARTICLES",
    title: "Cybersecurity Tips to follow when working from home",
    date: "12th Oct 2021",
    image: assetPath("blog/blog-cybersecurity-tips.png"),
    href: routes.cybersecurityTips,
    text: "As COVID-19 drags on, remote work has been the default standard for most companies. To prevent employees from falling victim...",
  },
];

export { posts };
