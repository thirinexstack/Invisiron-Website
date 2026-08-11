import { Hero } from "../components/ui/Hero";
import { partnerLogos } from "../data/partners";

function PartnerPage() {
  return (
    <>
      <Hero title="Technology Partners" />
      <section className="white-section">
        <div className="container center">
          <h2 className="gold-heading">Technology Partners</h2>
          <p>Invisiron works with trusted technology partners to provide practical, enterprise-level Cyber Defence platforms.</p>
          <div className="partner-logos">
            {partnerLogos.map((logo) => <img key={logo.alt} src={logo.src} alt={logo.alt} />)}
          </div>
        </div>
      </section>
    </>
  );
}

export { PartnerPage };
