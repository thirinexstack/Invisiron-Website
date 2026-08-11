import { assetPath } from "../config/assets";

const testimonials = [
  {
    quote: [
      "“It is really amazing to witness how Invisiron had saved the company from hackers’ hefty ransom. I can’t image how sever the consequences could have be should the threats had gotten their way into our network. This proactive automated solution not only protected my entire network, it has certainly boost up our confidence in protecting our customers’ confidential data.”",
    ],
    logo: "testimonials/invisiron-testimonial-queby.png",
    name: "Dr LS Kalaiselvam",
    role: "CEO, Queby",
  },
  {
    quote: [
      "“The economic consequences would be massive if we were to be faced with cyber threats that we were not prepared for. This proactive and automated solution not only protected our entire network, but also definitely aligned with our company's vision in bridging security and technology even in the cyber space.”",
    ],
    logo: "testimonials/invisiron-testimonial-osp.png",
    name: "Jonathan",
    role: "Operations Personnel, OSP",
  },
  {
    quote: [
      "\"It is pure value for our organisation when we encounter with Invisiron Technology during the INTERPOL World 2019 conference and we instantaneously realise that the Invisiron technology is the next generation Cyber Defence Technology that we were looking for our key clients in Malaysia and in the region.",
      "When we signed up as Exclusive Distributor for Malaysia, the support and commitment given to us exceeded the normal expectations and these gives our organisation the real confidence and we believe that we will truly revolutionaries the way how Cyber Defence should be done. We strongly believe that Invasion Technology is a disruptive technology to step up the Cyber Defence Strategy for any size of organisation.",
      "We are looking forward for great success with Invisiron Cyber Defence Technology.\"",
    ],
    logo: "testimonials/vulsanx-grey-logo-scaled-e1592296892456.jpg",
    name: "Dr Prakash Christiansen",
    role: "CEO, Vulsan",
  },
  {
    quote: [
      "\"I am extremely impressed with Invisiron’s ability to prevent the company from the Tinba Malware attack. While there is an abundance of IT solutions in the market, Invisiron impresses me the most with its effective threat prevention capabilities. Since this proactive automated solution provides zero downtime, no losses were incurred. It also gave us greater confidence to protect our businesses and clients.\"",
    ],
    logo: "testimonials/picture1-1.png",
    name: "Abhishek Murthy",
    role: "CEO, CKMbT",
  },
];

function TestimonialsPage() {
  return (
    <main className="testimonials-page">
      <section className="testimonials-source-section">
        <div className="container testimonials-source-container">
          <h1>Many have fortified their cyber defences with<br /> Invisiron. Here's what they have to say.</h1>
          <div className="testimonials-source-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonials-source-card" key={testimonial.name}>
                <div className="quote-mark">“</div>
                <div className="testimonials-source-copy">
                  {testimonial.quote.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="testimonials-source-person">
                  <span className="testimonial-logo">
                    <img src={assetPath(testimonial.logo)} alt="" />
                  </span>
                  <div>
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export { TestimonialsPage };
