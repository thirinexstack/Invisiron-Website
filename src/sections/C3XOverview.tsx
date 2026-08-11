import { assetPath } from "../config/assets";
import { routes } from "../config/routes";

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
      <a className="hero-scroll section-scroll c3x-scroll" href="#testimonials" aria-label="Scroll to testimonials">
        <span />
      </a>
    </section>
  );
}

export { C3XOverview };
