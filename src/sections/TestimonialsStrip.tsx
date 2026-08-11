import { useEffect, useState } from "react";
import { assetPath } from "../config/assets";
import { routes } from "../config/routes";
import { scrollToPageTop } from "../utils/scroll";

const testimonials = [
  {
    quote: "It is really amazing to witness how Invisiron had saved the company from hackers' hefty ransom. I can't image how sever the consequences could have be should the threats had gotten their way into our network. This proactive automated solution not only protected my entire network...",
    logo: assetPath("invisiron-testimonial-queby.png"),
    name: "Dr LS Kalaiselvam",
    role: "CEO, Queby",
  },
  {
    quote: "The economic consequences would be massive if we were to be faced with cyber threats that we were not prepared for. This proactive and automated solution not only protected our entire network, but also definitely aligned with our company's vision in bridging security and technology ...",
    logo: assetPath("invisiron-testimonial-osp.png"),
    name: "Jonathan",
    role: "Operations Personnel, OSP",
  },
  {
    quote: "It is pure value for our organisation when we encounter with Invisiron Technology during the INTERPOL World 2019 conference and we instantaneously realise that the Invisiron technology is the next generation Cyber Defence Technology that we were looking for our key clients in Malaysia...",
    logo: assetPath("vulsanx-grey-logo-scaled-e1592296892456.jpg"),
    name: "Dr Prakash Christiansen",
    role: "CEO, Vulsan",
  },
  {
    quote: "I am extremely impressed with Invisiron's ability to prevent the company from the Tinba Malware attack. While there is an abundance of IT solutions in the market, Invisiron impresses me the most with its effective threat prevention capabilities...",
    logo: assetPath("picture1-1.png"),
    name: "Abhishek Murthy",
    role: "CEO, CKMbT",
  },
];

const desktopSlides = [
  [testimonials[0], testimonials[1]],
  [testimonials[1], testimonials[2]],
];

const mobileSlides = testimonials.map((testimonial) => [testimonial]);

function TestimonialsStrip() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const slides = isMobile ? mobileSlides : desktopSlides;
  const currentSlide = slides[slideIndex];
  const showPrevious = () => setSlideIndex((value) => (value === 0 ? slides.length - 1 : value - 1));
  const showNext = () => setSlideIndex((value) => (value + 1) % slides.length);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 980px)");
    const updateLayout = () => setIsMobile(mediaQuery.matches);

    updateLayout();
    mediaQuery.addEventListener("change", updateLayout);
    return () => mediaQuery.removeEventListener("change", updateLayout);
  }, []);

  useEffect(() => {
    setSlideIndex((value) => Math.min(value, slides.length - 1));
  }, [slides.length]);

  return (
    <section className="testimonials-strip" id="testimonials">
      <h2>Many have fortified their cyber defences with<br /> Invisiron. Here's what they have to say.</h2>
      <button className="testimonial-arrow prev" type="button" aria-label="Previous testimonial" onClick={showPrevious}>‹</button>
      <div className="testimonial-cards">
        {currentSlide.map((item) => (
          <article className="testimonial-card" key={item.name}>
            <div className="quote-mark">“</div>
            <p>{item.quote}</p>
            <a className="read-more" href={routes.testimonials}>Read More</a>
            <div className="testimonial-person">
              <span className="testimonial-logo">
                <img src={item.logo} alt="" />
              </span>
              <div>
                <h3>{item.name}</h3>
                <span>{item.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <button className="testimonial-arrow next" type="button" aria-label="Next testimonial" onClick={showNext}>›</button>
      <div className="testimonial-dots" aria-hidden="true">
        {slides.map((_, index) => (
          <span className={index === slideIndex ? "active" : ""} key={index} />
        ))}
      </div>
      <a className="button brown testimonials-more" href={routes.testimonials}>View More Testimonials</a>
      <button className="back-top" type="button" aria-label="Back to top" onClick={scrollToPageTop}>
        <span />
      </button>
    </section>
  );
}

export { TestimonialsStrip };
