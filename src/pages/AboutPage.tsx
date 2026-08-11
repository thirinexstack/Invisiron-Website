import { Hero } from "../components/ui/Hero";
import { IntroAbout } from "../sections/IntroAbout";
import { WhyInvisiron } from "../sections/WhyInvisiron";

function AboutPage() {
  return (
    <>
      <Hero title="About Invisiron(R)" />
      <IntroAbout />
      <section className="cream-section">
        <div className="container">
          <h2>Mission</h2>
          <p><strong>Delivering Affordable Enterprise-Level Cyber-Security</strong></p>
          <p>We guarantee powerful protection at reasonable cost.</p>
          <h2>Vision</h2>
          <p><strong>A World Safe from Cyber-Threat</strong></p>
          <p>We envision a planetary future of a cyberspace that is fully-secure.</p>
          <h2>Brand Values</h2>
          <div className="value-grid">
            {["Invisible", "Visionary", "Versatile", "Value Driven"].map((item) => (
              <article key={item}>
                <h3>{item}</h3>
                <p>{item === "Invisible" ? "Undetectable, vigilant, and ready to defend against intruders." : item === "Visionary" ? "Forecasting the threats of tomorrow and refining solutions ahead of time." : item === "Versatile" ? "Designed to excel at every scale, complement existing solutions, and stay easy to implement." : "Powerful enterprise-level cyber-security delivered at reasonable cost."}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <WhyInvisiron />
    </>
  );
}

export { AboutPage };
