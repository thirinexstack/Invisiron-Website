import { Hero } from "../components/ui/Hero";
import { routes } from "../config/routes";
import { productItems } from "../data/products";

function ProductsPage() {
  return (
    <>
      <Hero title="Invisiron Cyber Defence Systems" />
      <section className="black-section products-page">
        <div className="container center">
          <h2>Next-Generation Cyber Defence Platforms</h2>
          <p>Invisiron Cyber Defence Systems provide robust, proactive, and invisible protection for organisations that need enterprise-level defence at practical cost.</p>
          <div className="product-grid">
            {productItems.map((item) => (
              <article className="product-card" key={item.name}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                <a className="button outline small" href={routes.contact}>Enquire</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export { ProductsPage };
