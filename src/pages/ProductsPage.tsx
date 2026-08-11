import { Hero } from "../components/ui/Hero";
import { assetPath } from "../config/assets";
import { routes } from "../config/routes";

const productRows = [
  {
    eyebrow: "Designed for Small Enterprises",
    logo: assetPath("invisiron-sentry-s1000-logo.png"),
    image: assetPath("s_1000_website-1.png"),
    imageAlt: "Invisiron Sentry S-1000 appliance",
    text: "Invisiron® Sentry S-1000 boasts a compact form-factor designed for small networks. The perfect solution for Small Businesses.",
    href: routes.sentryS1000,
  },
  {
    eyebrow: "Designed for Medium Enterprises",
    logo: assetPath("invisiron-sentry-s4000-logo.png"),
    image: assetPath("s-4000_001_tt_2500x2500-1-2.png"),
    imageAlt: "Invisiron Sentry S-4000 appliance",
    text: "Invisiron® Sentry S-4000 is optimised for medium-sized networks. Options for High Availability and Carrier Diversity are available.",
    href: routes.sentryS4000,
  },
  {
    eyebrow: "Designed for Large Enterprises & Data Centres",
    logo: assetPath("invisiron-sentry-s6000-logo.png"),
    image: assetPath("invisiron-sentry-s6000b.png"),
    imageAlt: "Invisiron Sentry S-6000 appliance",
    text: "Invisiron® Sentry S-6000 is built for large networks and data centres. Supports up to 2 x 10GB ports and copper as well as fibre-optic connections.",
    href: routes.sentryS6000,
  },
];

function ProductsPage() {
  return (
    <>
      <Hero title="Invisiron® Cyber Defence Systems" className="products-hero" />
      <section className="products-detail-list">
        <div className="container">
          <h2>Unparalleled Value for Enterprise-Grade Cybersecurity</h2>
          <p className="products-intro">The Invisiron® Cyber Defence product line includes the Cyber Defence device, the Invisiron Cyber Threat Intelligence (Invisiron-CTI™) and the Threat Commander Remote Monitoring Software tool. Together, these form a complete Cyber Defence eco-system.</p>
          <div className="product-rows">
            {productRows.map((item) => (
              <article className="product-row" key={item.logo}>
                <div className="product-row-media">
                  <img src={item.image} alt={item.imageAlt} />
                </div>
                <div className="product-row-copy">
                  <img className="product-row-logo" src={item.logo} alt="" />
                  <h3>{item.eyebrow}</h3>
                  <p>{item.text}</p>
                  <a className="button gold" href={item.href}>Learn More</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export { ProductsPage };
