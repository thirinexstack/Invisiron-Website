import { Hero } from "../components/ui/Hero";
import { routes } from "../config/routes";

const featureColumns = [
  [
    {
      title: "ADVANCED THREAT PROTECTION",
      text: "Our device protects your organisation against advanced persistent threats and many other attacks and malware.",
    },
    {
      title: "ADVANCED THREAT MITIGATION",
      text: "Invisiron® offers a pro-active Cyber Defence platform with auto threat mitigation.",
    },
    {
      title: "DDoS PROTECTION",
      note: "1",
      text: "We are able to mitigate both volumetric and protocol-based DDoS attacks.",
    },
    {
      title: "DNS SECURITY (DATA EXFILTRATION)",
      note: "2",
      text: "Our DNS threat analytics ruleset is able to detect and automatically block data exfiltration attempts via DNS.",
    },
    {
      title: "CYBER THREAT INTELLIGENCE (Invisiron-CTI™)",
      text: "Invisiron-CTI™ comes from over 30 globally validated sources, which are updated and pushed down to every Invisiron® device every hour, automatically.",
    },
    {
      title: "THREAT COMMANDER REMOTE MONITORING UTILITY",
      text: "Every malicious packet that is mitigated by Invisiron® can be reviewed in our Remote Monitoring System.",
    },
    {
      title: "BI-DIRECTIONAL DEEP PACKET INSPECTION (DPI)",
      text: "Our powerful DPI engine is capable of inspecting a packet down to a single byte level for both incoming and outgoing Internet traffic.",
    },
  ],
  [
    {
      title: "ULTRA-FAST IN-LINE PROCESSING SPEED",
      note: "3",
      text: "Packets are processed at near line speed without degradation of your Internet bandwidth.",
    },
    {
      title: "NO CHANGES TO EXISTING NETWORK INFRASTRUCTURE",
      text: "A plug-and-play complete Cyber Defence solution, without having the need to make any changes to existing IT infrastructure networks.",
    },
    {
      title: "GEO IP BLOCKING",
      text: "Invisiron® devices are able to block network connections based on geographical locations and countries.",
    },
    {
      title: "INVISIBLE STEALTH MODE",
      text: "Invisiron® devices do not require a MAC or IP address to operate. Hackers will not be able to detect the presence of an Invisiron device in a network.",
    },
    {
      title: "HIGH AVAILABILITY",
      note: "4",
      text: "Invisiron® appliances support High Availability.",
    },
    {
      title: "CARRIER DIVERSITY",
      note: "5",
      text: "Invisiron® appliances support Carrier Diversity.",
    },
    {
      title: "MOBILE APP",
      note: "6",
      text: "The Invisiron® Mobile App offers a convenient way to check appliance health status and cyber posture, real-time, on the go.",
    },
  ],
];

const featureFootnotes = [
  "Only Applicable to S-6000DDoS",
  "Only Applicable to S-6000DNS",
  "Not available for D-100",
  "Not available for S-1000",
  "Only available for S-4000",
  "Only available for S-1000 and S-4000",
];

function FeaturesPage() {
  return (
    <div className="features-page">
      <Hero title="INVISIRON® KEY FEATURES" />
      <section className="features-content-section">
        <div className="container features-content">
          <h2 className="gold-heading">Robust, Comprehensive & Multi-Pronged</h2>
          <p>For ease-of-use and a peace of mind, the Invisiron® Cyber Defence platform comes with Invisiron® Cyber Defence device, Invisiron-CTI™ (Cyber Threat Intelligence) and Invisiron® Threat Commander Remote Monitoring Tool.</p>
          <p>Together, they provide a robust, comprehensive and multi-pronged Cyber Defence platform to fight today’s cyberwar.</p>
          <hr />
          <h2 className="gold-heading">The Fully-Featured Cyber Defence System</h2>
          <div className="features-two-column-list">
            {featureColumns.map((column, index) => (
              <div className="features-column" key={index === 0 ? "left" : "right"}>
                {column.map((item) => (
                  <article key={item.title}>
                    <h3>
                      {item.title}
                      {item.note ? <sup>{item.note}</sup> : null}
                    </h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            ))}
          </div>
          <div className="features-footnotes">
            <div>
              {featureFootnotes.slice(0, 2).map((note, index) => (
                <p key={note}><sup>{index + 1}</sup> {note}</p>
              ))}
            </div>
            <div>
              {featureFootnotes.slice(2).map((note, index) => (
                <p key={note}><sup>{index + 3}</sup> {note}</p>
              ))}
            </div>
          </div>
          <a className="button brown large features-products-link" href={routes.products}>
            View Invisiron® Products
          </a>
        </div>
      </section>
    </div>
  );
}

export { FeaturesPage };
