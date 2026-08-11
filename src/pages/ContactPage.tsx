import { useState } from "react";
import { Hero } from "../components/ui/Hero";

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Hero title="Contact Us" dark={false} />
      <section className="contact-section">
        <div className="container contact-grid">
          <div>
            <h2>Contact Us</h2>
            <p>150 Sims Drive<br />#06-00 Oneberry<br />Singapore 387381</p>
            <div className="map-card">Oneberry Technologies Regional HQ</div>
          </div>
          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <h2>Contact Invisiron</h2>
            <p>Drop us a message. We'd love to hear from you!</p>
            <input required placeholder="Full Name" />
            <div className="form-row">
              <input required type="email" placeholder="Email" />
              <input required type="tel" placeholder="Phone" />
            </div>
            <input required placeholder="Company" />
            <select required defaultValue="">
              <option value="" disabled>I am enquiring about</option>
              <option>Sales Enquiry</option>
              <option>Technical Support</option>
              <option>Be an Invisiron Partner</option>
              <option>Others</option>
            </select>
            <textarea placeholder="Your message..." rows={6} />
            <button className="button gold" type="submit">Submit</button>
            {sent && <div className="form-success">Thank you. Your local preview message has been captured.</div>}
          </form>
        </div>
      </section>
    </>
  );
}

export { ContactPage };
