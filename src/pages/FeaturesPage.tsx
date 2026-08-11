import { Hero } from "../components/ui/Hero";
import { featureItems } from "../data/features";

function FeaturesPage() {
  return (
    <>
      <Hero title="INVISIRON(R) KEY FEATURES" />
      <section className="white-section">
        <div className="container">
          <h2 className="gold-heading">Robust, Comprehensive & Multi-Pronged</h2>
          <p>For ease-of-use and a peace of mind, the Invisiron Cyber Defence platform comes with Invisiron Cyber Defence device, Invisiron-CTI(TM) (Cyber Threat Intelligence) and Invisiron Threat Commander Remote Monitoring Tool.</p>
          <p>Together, they provide a robust, comprehensive and multi-pronged Cyber Defence platform to fight today’s cyberwar.</p>
          <hr />
          <h2 className="gold-heading">The Fully-Featured Cyber Defence System</h2>
          <div className="feature-grid">
            {featureItems.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export { FeaturesPage };
