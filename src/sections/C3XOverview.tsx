import { assetPath } from "../config/assets";
import { routes } from "../config/routes";
import { scrollToId } from "../utils/scroll";

function C3XOverview() {
  return (
    <section className="c3x-section" id="c3x-section">
      <div className="container split c3x-grid">
        <img className="core-graphic" src={assetPath("c3x-technology-main-graphic-2021.png")} alt="C3X technology graphic" />
        <div className="c3x-copy">
          <h2>Powered by C3X™</h2>
          <p>At the core of Invisiron® is C3X™ which features three mission-critical technologies.</p>
          <a className="button brown" href={routes.core}>Discover More</a>
        </div>
      </div>
      <button className="hero-scroll section-scroll c3x-scroll" type="button" aria-label="Scroll to testimonials" onClick={() => scrollToId("testimonials")}>
        <span />
      </button>
    </section>
  );
}

export { C3XOverview };
