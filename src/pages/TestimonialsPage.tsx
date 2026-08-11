import { Hero } from "../components/ui/Hero";
import { assetPath } from "../config/assets";

function TestimonialsPage() {
  return (
    <>
      <Hero title="Testimonials" dark={false} />
      <section className="white-section">
        <div className="container">
          <div className="testimonial-grid">
            {[
              ["Queby", assetPath("invisiron-testimonial-queby.png"), "Invisiron provides proactive cyber defence that supports secure and reliable operations."],
              ["OSP", assetPath("invisiron-testimonial-osp.png"), "The platform strengthens front-line protection while keeping deployment practical."],
            ].map(([name, img, text]) => (
              <article key={name}>
                <img src={img} alt={name} />
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export { TestimonialsPage };
