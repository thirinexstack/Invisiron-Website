import { useState } from "react";

const enquiryOptions = ["Sales Enquiry", "Technical Support", "Be an Invisiron Partner", "Others"];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiry, setEnquiry] = useState("");

  return (
    <section className="contact-source-section">
      <div className="contact-source-grid">
        <div className="contact-source-info">
          <div className="contact-source-copy">
            <h2>Contact Us</h2>
            <p>
              150 Sims Drive
              <br />
              #06-00 Oneberry
              <br />
              Singapore 387381
            </p>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.760974128509!2d103.8740187603766!3d1.319104704128842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19e3c98a834b%3A0xdfdfe95dad48f6ed!2sOneberry%20Technologies%20Regional%20HQ%2C%20R%26D%2C%20%26%20Innovation%20Lab!5e0!3m2!1sen!2sin!4v1716446039327!5m2!1sen!2sin"
              title="Oneberry Technologies Regional HQ map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="contact-source-form-wrap">
          <form
            className="contact-source-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <h2>Contact Invisiron</h2>
            <p>Drop us a message. We'd love to hear from you!</p>
            <input required placeholder="Full Name" aria-label="Full Name" />
            <div className="form-row">
              <input required type="email" placeholder="Email" aria-label="Email" />
              <input required type="tel" placeholder="Phone" aria-label="Phone" />
            </div>
            <input required placeholder="Company" aria-label="Company" />
            <div
              className={`contact-dropdown${isEnquiryOpen ? " is-open" : ""}`}
              onBlur={(event) => {
                const nextFocus = event.relatedTarget;
                if (!(nextFocus instanceof Node) || !event.currentTarget.contains(nextFocus)) {
                  setIsEnquiryOpen(false);
                }
              }}
            >
              <input type="hidden" name="enquiry" value={enquiry} />
              <button
                type="button"
                className="contact-dropdown-trigger"
                aria-haspopup="listbox"
                aria-expanded={isEnquiryOpen}
                onClick={() => setIsEnquiryOpen((open) => !open)}
              >
                <span className={enquiry ? undefined : "is-placeholder"}>
                  {enquiry || "I am enquiring about"}
                </span>
              </button>
              {isEnquiryOpen && (
                <div className="contact-dropdown-menu" role="listbox" tabIndex={-1}>
                  {enquiryOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      role="option"
                      aria-selected={enquiry === option}
                      onClick={() => {
                        setEnquiry(option);
                        setIsEnquiryOpen(false);
                      }}
                    >
                      <span>{option}</span>
                      {option === "Others" && <small>Press to select.</small>}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <textarea placeholder="Your message..." rows={6} aria-label="Your message" />
            <button type="submit">Submit</button>
            {sent && <div className="form-success">Thank you. Your local preview message has been captured.</div>}
          </form>
        </div>
      </div>
    </section>
  );
}

export { ContactPage };
