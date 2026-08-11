import { assetPath } from "../config/assets";
import { routes } from "../config/routes";
import { C3XOverview } from "../sections/C3XOverview";
import { TestimonialsStrip } from "../sections/TestimonialsStrip";
import { VideoFeature } from "../sections/VideoFeature";
import { scrollToId } from "../utils/scroll";

function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-copy">
          <h1>We are the First and Last Line of Cyber Defence</h1>
          <p>Next-Generation Cyber Defence Platforms</p>
          <a className="button gold" href={routes.about}>Learn More</a>
        </div>
        <img className="home-graphic" src={assetPath("invisironmaingraphicresized-2.gif")} alt="Invisiron cyber defence graphic" />
        <button className="hero-scroll" type="button" aria-label="Scroll to next section" onClick={() => scrollToId("home-intro")}>
          <span />
        </button>
      </section>
      <section className="gold-band" id="home-intro">
        <div className="container narrow right">
          <h2>We mitigate millions of cyber attacks monthly per organisation.</h2>
          <p>With over a million records within our Invisiron® Cyber Threat Intelligence feeds, Invisiron® Security Threat Analysis and Research Team (Invisiron® STAR Team) has implemented unique rulesets to mitigate cyber attacks and protect 100,000+ users worldwide, 24 hours a day, 7 days a week.</p>
          <a className="button brown" href={routes.products}>View Products</a>
        </div>
        <button className="section-scroll" type="button" aria-label="Scroll to video section" onClick={() => scrollToId("video-feature")}>
          <span />
        </button>
      </section>
      <VideoFeature />
      <C3XOverview />
      <TestimonialsStrip />
    </>
  );
}

export { HomePage };
