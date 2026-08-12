import { useState } from "react";
import { assetPath } from "../../config/assets";
import { routes } from "../../config/routes";
import { submitContact } from "../../utils/contactSubmit";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  return (
    <footer className="footer">
      <div className="footer-brand">
        <img className="tagline" src={assetPath("invisiron-tagline-cyber-defence-fortified-1.png")} alt="Cyber defence fortified" />
      </div>

      <div className="footer-signup">
        <h3>Sign Up For Updates</h3>
        <p>Sign up in seconds to receive the latest promotions &amp; news.</p>
        {status === "sent" ? (
          <div className="footer-subscribe-success">Thanks for contacting us! We will get in touch with you shortly.</div>
        ) : (
          <form
            noValidate
            onSubmit={async (event) => {
              event.preventDefault();
              const trimmedEmail = email.trim();
              setStatus("sending");
              setError("");

              if (!trimmedEmail) {
                setError("This field is required.");
                setStatus("error");
                return;
              }

              if (!emailPattern.test(trimmedEmail)) {
                setError("Please enter a valid email address.");
                setStatus("error");
                return;
              }

              try {
                await submitContact({
                  source: "Updates Signup",
                  name: "Website Subscriber",
                  email: trimmedEmail,
                  message: `Please subscribe ${trimmedEmail} to Invisiron updates.`,
                });
                setEmail("");
                setStatus("sent");
              } catch (submitError) {
                setError(submitError instanceof Error ? submitError.message : "Unable to send your subscription.");
                setStatus("error");
              }
            }}
          >
            <input
              type="email"
              className={status === "error" && error ? "is-invalid-field" : undefined}
              placeholder="*Enter Email"
              aria-label="Email address"
              aria-invalid={status === "error" && Boolean(error)}
              value={email}
              onChange={(event) => {
                setEmail(event.currentTarget.value);
                if (status === "error") {
                  setStatus("idle");
                  setError("");
                }
              }}
            />
            {status === "error" && error && <div className="footer-form-message is-error">{error}</div>}
            <button className="button brown" type="submit" disabled={status === "sending"}>
              Subscribe
            </button>
          </form>
        )}
        <div className="socials">
          <a href="https://www.youtube.com/channel/UCcwBqx3MqkvCBiOtf531_BA" target="_blank" rel="noreferrer" aria-label="YouTube">
            <img src={assetPath("youtube-icon-svg-1.png")} alt="" />
          </a>
          <a href="https://sg.linkedin.com/company/invisiron" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <img src={assetPath("linkedin-icon-svg-1.png")} alt="" />
          </a>
        </div>
      </div>

      <div>
        <h3>Quick Links</h3>
        <a href={routes.home}>Home</a>
        <a href={routes.about}>About</a>
        <a href={routes.cases}>Case Studies</a>
        <a href={routes.testimonials}>Testimonials</a>
        <a href={routes.contact}>Contact Us</a>
        <a href={routes.privacy}>Privacy and GDPR Policy</a>
      </div>

      <div>
        <h3>Core Technology</h3>
        <a href={routes.core}>C3X™ Core Technology</a>
        <a href={routes.features}>Features</a>
      </div>

      <div>
        <h3>Our Products</h3>
        <a href={routes.sentryS1000}>Invisiron® Sentry S-1000</a>
        <a href={routes.sentryS4000}>Invisiron® Sentry S-4000</a>
        <a href={routes.sentryS6000}>Invisiron® Sentry S-6000</a>
      </div>

      <div>
        <h3>Contact Us</h3>
        <p>150 Sims Drive<br />#06-00 Oneberry<br />Singapore 387381</p>
      </div>

      <p className="footer-copyright">©2022 Invisiron Pte Ltd. All rights reserved.</p>
    </footer>
  );
}

export { Footer };
