import { assetPath } from "../../config/assets";
import { routes } from "../../config/routes";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <img className="tagline" src={assetPath("invisiron-tagline-cyber-defence-fortified-1.png")} alt="Cyber defence fortified" />
      </div>

      <div className="footer-signup">
        <h3>Sign Up For Updates</h3>
        <p>Sign up in seconds to receive the latest promotions &amp; news.</p>
        <form>
          <input type="email" placeholder="*Enter Email" aria-label="Email address" />
          <button className="button brown" type="submit">Subscribe</button>
        </form>
        <div className="socials">
          <img src={assetPath("youtube-icon-svg-1.png")} alt="YouTube" />
          <img src={assetPath("linkedin-icon-svg-1.png")} alt="LinkedIn" />
          <img src={assetPath("whatsapp.svg")} alt="WhatsApp" />
        </div>
      </div>

      <div>
        <h3>Quick Links</h3>
        <a href={routes.home}>Home</a>
        <a href={routes.about}>About</a>
        <a href={routes.cases}>Case Studies</a>
        <a href={routes.testimonials}>Testimonials</a>
        <a href={routes.contact}>Contact Us</a>
        <a href="/">Privacy and GDPR Policy</a>
      </div>

      <div>
        <h3>Core Technology</h3>
        <a href={routes.core}>C3X™ Core Technology</a>
        <a href={routes.features}>Features</a>
      </div>

      <div>
        <h3>Our Products</h3>
        <a href={routes.products}>Invisiron® Sentry S-1000</a>
        <a href={routes.products}>Invisiron® Sentry S-4000</a>
        <a href={routes.products}>Invisiron® Sentry S-6000</a>
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
