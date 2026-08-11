import { routes } from "../config/routes";

type CaseStudySection = {
  heading: string;
  paragraphs: string[];
};

type CaseStudy = {
  title: string;
  excerpt: string;
  image: string;
  href: string;
  pdf?: string;
  sections: CaseStudySection[];
};

const caseStudies: CaseStudy[] = [
  {
    title: "A Malaysian Debt Recovery Operations Company Protected From Pitou Ransomware",
    excerpt: "Queby Recovery Management handles and processes large volume of highly...",
    image: "case-studies/case-study-queby-recovery.jpg",
    href: routes.quebyCaseStudy,
    pdf: "case-studies/invisiron-case-study-queby-s-1000.pdf",
    sections: [
      {
        heading: "Company Profile",
        paragraphs: [
          "Queby Recovery Management handles and processes large volume of highly confidential data for both corporates and consumers. Hence, it is imperative to incorporate a robust cyber security platform within their networks, capable of safeguarding against any potential data exfiltration that may lead to significant reputation and monetary loss.",
        ],
      },
      {
        heading: "The Challenge",
        paragraphs: [
          "Strict cybersecurity compliance to the Banking and Financial Institutions Act 1989 and the Personal Data Protection Act 2010 is a mandate in Malaysia. Hence, it is imperative for financial institutions to incorporate a robust cyber security platform, capable of safeguarding against any potential data exfiltration that may lead to significant reputation and monetary loss.",
          "Being a medium sized enterprise, the cost to have an in-house cybersecurity team is not justifiable. Furthermore, there is a huge shortage of cyber security talent in the country. Queby required a modern, automated cyber defense technology that can proactively detect and mitigate threats automatically round the clock.",
        ],
      },
      {
        heading: "The Solution",
        paragraphs: [
          "Taking Cyber Defense to the next level at affordable costs",
          "After an extensive search in finding the right solution, the management chose to deploy the Invisiron solution at its main office to protect it's main network. Upon deployment, Invisiron proactively monitored Queby's network 24/7 and leveraged on its updated cyber threat intelligence feeds to inspect and mitigate any malicious packets that go in and out of the network, with full activity logs provided to the IT team. This proactive cyber defense solution provided by Invisiron allowed Queby's IT team to better focus on other day to day IT related tasks.",
        ],
      },
    ],
  },
  {
    title: "An E-Portal Platform Protected From Cyber Threats and Attacks",
    excerpt: "Onestop Security Platform Pte Ltd is a Singapore based enterprise...",
    image: "case-studies/case-study-onestop-security.jpg",
    href: routes.onestopCaseStudy,
    pdf: "case-studies/invisiron-case-study-osp-s-1000.pdf",
    sections: [
      {
        heading: "Company Profile",
        paragraphs: [
          "Onestop Security Platform Pte Ltd is a Singapore based enterprise that offers a one-stop e-portal; providing solutions to security industry stakeholders to anticipate and resolve various challenges. In order to sustain smooth operations, avoid any down-time, and maintain a safe network, OSP required an affordable, advanced, and automated cyber defense technology.",
        ],
      },
      {
        heading: "The Challenge",
        paragraphs: [
          "The OSP team understands that having strong cyber security remains critical for a job listing web portal, to protect its core business and operations. However, OSP had the perception that a firewall was sufficient in protecting their resources from cyber threats and attacks. Unfortunately, the team soon faced difficulty in managing the increasing number of cyber threats over time, as their e-portal was constantly exposed to such prevalent dangers.",
          "In order to sustain smooth operations, avoid any down-time, and maintain a safe network, OSP required an affordable, advanced, and automated cyber defense technology. Technology which would allow the proactive detection and automatic mitigation of any incoming cyber threats consistently and tirelessly.",
        ],
      },
      {
        heading: "The Solution",
        paragraphs: [
          "Proactive Cyber Defense at affordable costs",
          "After assessing all the options in the market, Invisiron was the clear solution that OSP was searching for to tackle their challenges. Upon deployment of the Sentry S-1000, Invisiron began proactively monitoring OSP's network 24/7. It leveraged on its updated cyber threat intelligence feeds to inspect and mitigate any malicious packets that go in and out of the network. The daily reports provided indicated the decreasing number of cyber threats with the presence of Invisiron in OSP's network. This proactive cyber defense solution provided by Invisiron greatly reduced the e-portal's downtime.",
        ],
      },
    ],
  },
  {
    title: "Asia's Largest Defence & Engineering Group",
    excerpt: "One of the largest Engineering groups in Singapore for Government...",
    image: "case-studies/bill-oxford-fgqsewtsjy-unsplash-scaled.jpg",
    href: routes.asiaDefenceCaseStudy,
    sections: [
      { heading: "Company Profile", paragraphs: ["One of the largest Engineering groups in Singapore for Government and MNC projects."] },
      { heading: "The Challenge", paragraphs: ["They needed a robust Cyber Defence solution which is capable of providing customizable dynamic Deep Packet Inspection (DPI) rulesets in a closed environment without any Internet."] },
      { heading: "The Solution", paragraphs: ["The Invisiron® Security Threat Analysis and Research Team (STAR Team) supported the customer in creating dynamic Deep Packet Inspection (DPI) rulesets and also allowed them to import their own user-generated and other 3rd party threat intelligence into their Invisiron® Cyber Threat Intelligence feed. Invisiron® Cyber Defence device is certified with the International Common Criteria (CC) Certification."] },
    ],
  },
  {
    title: "Hosting Company in Thailand",
    excerpt: "The company operates Data Centers that host web sites and...",
    image: "case-studies/taylor-vick-m5tzztfcofs-unsplash-scaled.jpg",
    href: routes.hostingThailandCaseStudy,
    sections: [
      { heading: "Company Profile", paragraphs: ["The company operates Data Centers that host web sites and virtual private servers for corporate customers mostly in Thailand."] },
      { heading: "The Challenge", paragraphs: ["They were facing repeated cyber attacks on their network which disrupted their customers' virtual private servers, and this caused them to fail their committed Service Level Agreement to their customers. The existing security solution was an in-house solution using SNORT Deep Packet Inspection, which was incapable of inspecting packets for both incoming and outgoing Internet traffic."] },
      { heading: "The Solution", paragraphs: ["The company deployed Invisiron® Cyber Defence Platform as packets are processed at near line speed without degradation of their Internet bandwidth. The powerful Invisiron® Bi-Directional Deep Packet Inspection engine is capable of inspecting a packet down to a single byte level for both incoming and outgoing Internet traffic."] },
    ],
  },
  {
    title: "Logistics Industry",
    excerpt: "This company is an established SME in the Logistics industry....",
    image: "case-studies/chuttersnap-kycnggkcvyw-unsplash-scaled.jpg",
    href: routes.logisticsCaseStudy,
    sections: [
      { heading: "Company Profile", paragraphs: ["This company is an established SME in the Logistics industry."] },
      { heading: "The Challenge", paragraphs: ["The customer had limited cyber security resources and capabilities. They needed a cost-effective solution with ease of deployment to protect their network infrastructure."] },
      { heading: "The Solution", paragraphs: ["The company deployed Invisiron® Cyber Defence Platform. There was no modification to customer's existing network infrastructure as this was a fully automatic plug and play installation that is scalable for any network size. Invisiron® offers the customer a pro-active Cyber Defence Platform with auto threat mitigation."] },
    ],
  },
  {
    title: "Maritime Shipping Industry Player",
    excerpt: "The company has offices worldwide, mostly in Asia and Middle...",
    image: "case-studies/andy-li-cpstauposcw-unsplash-scaled.jpg",
    href: routes.maritimeCaseStudy,
    sections: [
      { heading: "Company Profile", paragraphs: ["The company has offices worldwide, mostly in Asia and Middle East. Each office is connected to their HQ using the Internet."] },
      { heading: "The Challenge", paragraphs: ["In 2017, EternalBlue exploited a vulnerability in Microsoft's implementation of the Server Message Block (SMB). Customer's Technology team did not have any visibility of these threats. This issue crippled all their communications."] },
      { heading: "The Solution", paragraphs: ["The company deployed Invisiron®'s Cyber Defence Platform. Using the Invisiron® Threat Commander Remote Monitoring Utility, the customer had full visibility of real-time security events and logs. There was no modification to the customer's existing network infrastructure as this was a fully automatic plug and play installation that is scalable for any network size."] },
    ],
  },
  {
    title: "Government Agency in South East Asia",
    excerpt: "A very large government organization with over 200 offices in...",
    image: "case-studies/nasa-q1p7bh3shj8-unsplash-scaled.jpg",
    href: routes.seaGovernmentCaseStudy,
    sections: [
      { heading: "Company Profile", paragraphs: ["A very large government organization with over 200 offices in the country."] },
      { heading: "The Challenge", paragraphs: ["Customer evaluated various global cyber security solutions to enhance their existing Cyber Defence with key considerations on ease of deployment and real-time monitoring."] },
      { heading: "The Solution", paragraphs: ["The Invisiron® Cyber Defence Platform was evaluated amongst numerous other solutions and was chosen based on these key features. Invisiron® devices do not require a MAC or IP address to operate. Hackers will not be able to detect the presence of an Invisiron® device in their network. There was no disruption to their network infrastructure as this was a fully plug and play installation. Every malicious packet that is mitigated can be reviewed real-time using the Invisiron® Threat Commander Remote Monitoring Tool. The customer was also able to import their own user-generated and other 3rd party threat intelligence into the Invisiron® Cyber Threat Intelligence feed. Invisiron® Cyber Defence device is certified with the International Common Criteria (CC) Certification."] },
    ],
  },
  {
    title: "Technology Consultancy",
    excerpt: "The company offers cyber security consulting services to clients throughout...",
    image: "case-studies/kevin-ku-w7zyugynprq-unsplash-scaled.jpg",
    href: routes.technologyConsultancyCaseStudy,
    sections: [
      { heading: "Company Profile", paragraphs: ["The company offers cyber security consulting services to clients throughout Asia."] },
      { heading: "The Challenge", paragraphs: ["Due to the nature of their business, the customer became a prime target for various hacker groups. They needed a robust and effective solution that offers auto threat mitigation."] },
      { heading: "The Solution", paragraphs: ["The company deployed Invisiron® Cyber Defence Platform. Invisiron® Cyber Threat Intelligence comes from over 30 globally validated sources which are updated and pushed down to every of their Invisiron® device, every hour, automatically. Invisiron® devices do not require a MAC or IP address to operate. Hackers will not be able to detect the presence of an Invisiron® device in their network."] },
    ],
  },
];

function findCaseStudyByHref(href: string) {
  return caseStudies.find((study) => study.href === href);
}

export { caseStudies, findCaseStudyByHref };
export type { CaseStudy };
