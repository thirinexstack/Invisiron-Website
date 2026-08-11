import { assetPath } from "../config/assets";

const whyReasons = [
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

function PartnerPage() {
  return (
    <div className="partner-page">
      <section className="partner-join-section">
        <div className="partner-join-grid">
          <div className="partner-copy">
            <h1>Join The Invisiron Partner Force</h1>
            <p>Our vision is to create a world safe from cyber-threats; envisioning a planetary future of a cyberspace that is fully secure.</p>
            <p>With over a million records of cyber threat intelligence feeds, our Invisiron Security Threat Analysis and Research Team (Invisiron STAR Team) has implemented rulesets to mitigate cyber-attacks and protect 100,000+ users worldwide, 24/7!</p>
            <p>In order to extend our services to protect customers around the globe, Invisiron works closely with valued partners like yourself, with a joint mission to deliver affordable enterprise-level Cyber-Security.</p>
          </div>
          <form className="partner-form" onSubmit={(event) => event.preventDefault()}>
            <h2>Be an Invisiron Partner</h2>
            <p>Fill in your details below and we will be in touch!</p>
            <div className="form-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="text" placeholder="Company Name" />
            <input type="text" placeholder="Position (Job Title)" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
            <input type="text" placeholder="Country" />
            <select defaultValue="">
              <option value="" disabled>Partner Type</option>
              <option>Technology Partner</option>
              <option>Reseller</option>
              <option>Distributor</option>
            </select>
            <textarea placeholder="Your Message" rows={5} />
            <button className="button brown large" type="submit">Submit</button>
          </form>
        </div>
      </section>
      <section className="partner-why-section">
        <div className="container">
          <h2>Why Invisiron?</h2>
          <div className="partner-reasons">
            {whyReasons.map((reason) => (
              <article key={reason.icon}>
                <img src={assetPath(reason.icon)} alt="" />
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export { PartnerPage };
