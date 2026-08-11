import { Hero } from "../components/ui/Hero";
import { assetPath } from "../config/assets";
import { WhyInvisiron } from "../sections/WhyInvisiron";

const brandValues = [
  ["Invisible", "We are undetectable, vigilant, and ready to defend against intruders."],
  ["Visionary", "We forecast the threats of tomorrow and refine our solutions ahead of time."],
  ["Versatile", "Our solutions are designed to excel at every scale. They complement existing solutions and are easy to implement."],
  ["Value Driven", "We deliver powerful solutions at reasonable cost."],
];

function AboutPage() {
  return (
    <div className="about-page">
      <Hero title="About Invisiron®" />
      <section className="about-overview">
        <div className="container">
          <h2>We Safeguard the Frontlines of Cyber Defence</h2>
          <div className="about-overview-grid">
            <img src={assetPath("invisiron-supergraphic-400px.png")} alt="Invisiron supergraphic" />
            <div>
              <p>At Invisiron<sup>®</sup>, we believe the outcome of the cyber war is determined at the frontlines.</p>
              <p>Bringing together the best industry practices and latest technologies in cybersecurity, we have designed the next-generation Cyber Defence device that is proactive, robust and most importantly invisible to intruders.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-belief mission-section">
        <div className="container">
          <h2>Mission</h2>
          <div className="belief-card">
            <p><strong>Delivering Affordable Enterprise-Level Cyber-Security</strong></p>
            <p>We guarantee power protection at reasonable cost.</p>
          </div>
        </div>
      </section>
      <section className="about-belief vision-section">
        <div className="container">
          <h2>Vision</h2>
          <div className="belief-card">
            <p><strong>A World Safe from Cyber-Threat</strong></p>
            <p>We envision a planetary future of a cyberspace that is fully-secure.</p>
          </div>
        </div>
      </section>
      <section className="brand-values-section">
        <div className="brand-values-card">
          <h2>Brand Values</h2>
          {brandValues.map(([title, text]) => (
            <div className="brand-value" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <WhyInvisiron />
    </div>
  );
}

export { AboutPage };
