import { assetPath } from "../config/assets";
import { routes } from "../config/routes";

function IntroAbout() {
  return (
    <section className="black-section" id="about-intro">
      <div className="container split">
        <img className="supergraphic" src={assetPath("invisiron-supergraphic-400px.png")} alt="Invisiron supergraphic" />
        <div>
          <p className="section-label">About Invisiron</p>
          <h2>We Safeguard the Frontlines of Cyber Defence</h2>
          <p>At Invisiron, we believe the outcome of the cyber war is determined at the frontlines. Bringing together the best industry practices and latest technologies in cybersecurity, we have designed the next-generation Cyber Defence device that is proactive, robust and most importantly invisible to intruders.</p>
          <a className="button gold" href={routes.about}>More About Us</a>
        </div>
      </div>
    </section>
  );
}

export { IntroAbout };
