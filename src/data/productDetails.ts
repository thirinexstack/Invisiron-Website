import { assetPath } from "../config/assets";

type ProductDetail = {
  id: "s1000" | "s4000" | "s6000";
  name: string;
  logo: string;
  image: string;
  imageAlt: string;
  tagline: string;
  description: string;
  datasheet: string;
  specifications: Array<[string, string]>;
};

const productDetails: Record<ProductDetail["id"], ProductDetail> = {
  s1000: {
    id: "s1000",
    name: "Invisiron® Sentry S-1000",
    logo: assetPath("invisiron-sentry-s1000-logo.png"),
    image: assetPath("s_1000_website-1.png"),
    imageAlt: "Invisiron Sentry S-1000 appliance",
    tagline: "Designed for Small Enterprises",
    description: "boasts a compact form-factor designed for small networks. The perfect solution for Small Businesses.",
    datasheet: assetPath("invisiron-sentry-s-1000-data-sheet-2021.pdf"),
    specifications: [
      ["Processor", "Intel Celeron Quad Core"],
      ["Memory", "2 GB DDR3 memory"],
      ["Disk Drives", "120 GB SSD MSATA"],
      ["Packet Processing", "2x Intel 82583V Gb Ethernet Ports (RJ45)"],
      ["Management", "1Gb Ethernet (RJ45) for Management"],
      ["Power & Cooling", "12 volt DC external adapter. 2x System Fans, low noise"],
      ["Form Factor", "197mm x 174mm x 35mm"],
      ["Embedded OS", "Linux"],
      ["Cyber Threat Intelligence", "Cloud-based Invisiron-CTI™"],
      ["DPI rules", "Up to 1,000 rules"],
      ["Reputation Detection", "Up to 1,500,000 domain names and URLs"],
      ["IP Address Filtering", "Up to 250,000 IP addresses, both IPv4 and IPv6"],
      ["DGA Detection", "Supported on DNS queries and replies"],
      ["Configuration", "Graphical User Interface over encrypted link"],
      ["Alerts & Notifications", "By graphical user interface, e-mails and mobile phone application"],
      ["Evidence Collection", "PCAP data format"],
      ["System Upgrades", "Software updates provided from the cloud"],
    ],
  },
  s4000: {
    id: "s4000",
    name: "Invisiron® Sentry S-4000",
    logo: assetPath("invisiron-sentry-s4000-logo.png"),
    image: assetPath("invisiron-sentry-s4000b.png"),
    imageAlt: "Invisiron Sentry S-4000 appliance",
    tagline: "Designed for Medium Enterprises",
    description: "is optimised for medium-sized networks. Options for High Availability and Carrier Diversity are available.",
    datasheet: assetPath("invisiron-sentry-s-4000-data-sheet.pdf"),
    specifications: [
      ["Processor", "Intel Xeon"],
      ["Memory", "8 GB of DDR4 memory"],
      ["Storage", "HPE Dynamic Smart Array configured in disk mirroring mode"],
      ["Disk Drives", "2x 1 TB low form factor SATA disk drives"],
      ["Packet Processing", "High performance Intel NIC with 4x 1Gb Ethernet ports (RJ45)"],
      ["Management", "1Gb Ethernet (RJ45) for Management"],
      ["Power & Cooling", "Standard 290 W switching power supply, 100-240 Volt AC. High efficient cooling for warm environments"],
      ["Form Factor", "Rack (1 U) 380 mm deep"],
      ["Embedded OS", "Linux"],
      ["Cyber Threat Intelligence", "Cloud-based Invisiron-CTI™"],
      ["DPI rules", "Up to 10,000 rules"],
      ["Reputation Detection", "Up to 1,500,000 domain names and URLs"],
      ["IP Address Filtering", "Up to 250,000 IP addresses, both IPv4 and IPv6"],
      ["DGA Detection", "Supported on DNS queries and replies"],
      ["Configuration", "Graphical User Interface over encrypted link"],
      ["Alerts & Notifications", "By graphical user interface, emails and mobile phone application"],
      ["Evidence Collection", "PCAP data format"],
      ["System Upgrades", "Software updates provided from the cloud"],
    ],
  },
  s6000: {
    id: "s6000",
    name: "Invisiron® Sentry S-6000",
    logo: assetPath("invisiron-sentry-s6000-logo.png"),
    image: assetPath("invisiron-sentry-s6000b.png"),
    imageAlt: "Invisiron Sentry S-6000 appliance",
    tagline: "Designed for Large Enterprises & Data Centres",
    description: "is built for large networks and data centres. Supports up to 2 x 10GB ports and copper as well as fibre-optic connections.",
    datasheet: assetPath("invisiron-sentry-s-6000-data-sheet-2021.pdf"),
    specifications: [
      ["Processor", "Intel Xeon"],
      ["Memory", "8 GB of DDR4 memory"],
      ["Storage", "HPE Dynamic Smart Array configured in disk mirroring mode"],
      ["Disk Drives", "2x 1 TB low form factor SATA disk drives"],
      ["Packet Processing", "2x 10Gb Ethernet ports. High performance Intel NIC with SFP Optical as well as copper SFP modules supported"],
      ["Management", "1Gb Ethernet (RJ45) for Management"],
      ["Power & Cooling", "Dual redundant 900W switching power supplies, 100-240 Volt AC. High efficient cooling for warm environments"],
      ["Form Factor", "2U (W x D x H) 43,47 x 63.43 x 8.76 cm"],
      ["Embedded OS", "Linux"],
      ["Cyber Threat Intelligence", "Cloud-based Invisiron-CTI™"],
      ["DPI rules", "Up to 10,000 rules"],
      ["Reputation Detection", "Up to 1,500,000 domain names and URLs"],
      ["IP Address Filtering", "Up to 250,000 IP addresses, both IPv4 and IPv6"],
      ["DGA Detection", "Supported on DNS queries and replies"],
      ["Configuration", "Graphical User Interface over encrypted link"],
      ["Alerts & Notifications", "By graphical user interface, e-mails"],
      ["Evidence Collection", "Packets captured in PCAP data format. Event logging in JSON format"],
      ["System Upgrades", "Software updates provided from the cloud"],
    ],
  },
};

export type { ProductDetail };
export { productDetails };
