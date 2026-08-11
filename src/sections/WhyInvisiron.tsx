import { assetPath } from "../config/assets";
import { routes } from "../config/routes";

const reasons = [
  {
    icon: "common-criteria-certification-logo-300x300-1-1-100x100.png",
    text: "Our Cyber Defence platform is certified with the International Common Criteria Certification.",
  },
  {
    icon: "invisiron-atm-icon100x-100x100.png",
    text: "We have a proactive Cyber Defence platform with Auto Threat Mitigation.",
  },
  {
    icon: "invisiron-pp-icon_1100x-2-100x100.png",
    text: "Our solutions are plug-and-play which do not require any changes to existing IT infrastructure networks.",
  },
  {
    icon: "true-stealth-mode2.png",
    text: "Our stealth Cyber Defence technology is completely invisible to hackers when deployed.",
  },
  {
    icon: "invisiron-bandwidth-icon100x-100x100.png",
    text: "An in-line Cyber Defence platform that does not impact internet bandwidth performance.",
  },
];

const partners = [
  { icon: "hewlett_packard_enterprise_logo-192x80.png", label: "Hewlett Packard Enterprise" },
  { icon: "invis-partner-m1-80x80-1.png", label: "M1" },
  { icon: "invis-partner-intel-136x52-1.png", label: "Intel" },
];

function WhyInvisiron() {
  return (
    <section className="about-why-section">
      <div className="container">
        <h2>Why Invisiron?</h2>
        <div className="about-reasons">
          {reasons.map(({ icon, text }) => (
            <article key={icon}>
              <img src={assetPath(icon)} alt="" />
              <p>{text}</p>
            </article>
          ))}
        </div>
        <h2 className="partners-heading">Technology Partners</h2>
        <div className="about-partners">
          {partners.map(({ icon, label }) => (
            <img key={label} src={assetPath(icon)} alt={label} />
          ))}
        </div>
        <a className="button gold about-products-link" href={routes.products}>View Invisiron® Products</a>
      </div>
    </section>
  );
}

export { WhyInvisiron };
