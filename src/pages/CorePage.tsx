import { Hero } from "../components/ui/Hero";
import { assetPath } from "../config/assets";
import { C3XOverview } from "../sections/C3XOverview";

function CorePage() {
  return (
    <>
      <Hero title="C3X(TM) Core Technology" />
      <C3XOverview />
      <section className="black-section">
        <div className="container icon-grid">
          <article>
            <img src={assetPath("true-stealth-mode2.png")} alt="" />
            <h3>True Stealth Mode</h3>
            <p>Our stealth Cyber Defence technology is completely invisible to hackers when deployed.</p>
          </article>
          <article>
            <img src={assetPath("invisiron-atm-icon100x-100x100.png")} alt="" />
            <h3>Auto Threat Mitigation</h3>
            <p>We have a proactive Cyber Defence platform with Auto Threat Mitigation.</p>
          </article>
          <article>
            <img src={assetPath("invisiron-bandwidth-icon100x-100x100.png")} alt="" />
            <h3>Bandwidth Performance</h3>
            <p>An in-line Cyber Defence platform that does not impact internet bandwidth performance.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export { CorePage };
