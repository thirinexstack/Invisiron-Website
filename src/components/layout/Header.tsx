import { useEffect, useState } from "react";
import { assetPath } from "../../config/assets";
import { routes } from "../../config/routes";
import { productItems } from "../../data/products";
import { normalizePath } from "../../utils/path";

function Header() {
  const [open, setOpen] = useState(false);
  const path = normalizePath(window.location.pathname);
  const close = () => setOpen(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 980) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href={routes.home} onClick={close} aria-label="Invisiron home">
        <img src={assetPath("2020/03/invisiron-logotype-gold.png")} alt="Invisiron" />
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a className={path === routes.home ? "active" : ""} href={routes.home}>Home</a>
        <a className={path === routes.about ? "active" : ""} href={routes.about}>About</a>
        <div className="nav-group">
          <a className={path === routes.products ? "active" : ""} href={routes.products}>Products</a>
          <div className="dropdown product-menu">
            {productItems.map((item) => (
              <a key={item.name} href={routes.products}>
                <img src={item.image} alt="" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="nav-group">
          <a className={path === routes.core || path === routes.features ? "active white" : ""} href={routes.core}>Core Technology</a>
          <div className="dropdown">
            <a href={routes.core}>C3X(TM) Core Technology</a>
            <a href={routes.features}>Features</a>
          </div>
        </div>
        <a className={path === routes.partner ? "active" : ""} href={routes.partner}>Partners</a>
        <div className="nav-group">
          <a className={[routes.blog, routes.cases, routes.testimonials].includes(path) ? "active white" : ""} href={routes.blog}>Resources</a>
          <div className="dropdown">
            <a href={routes.blog}>Blog</a>
            <a href={routes.cases}>Case Studies</a>
            <a href={routes.testimonials}>Testimonials</a>
          </div>
        </div>
        <a className={path === routes.contact ? "active" : ""} href={routes.contact}>Contact Invisiron</a>
      </nav>
      <button className="menu-button" type="button" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}>
        <span />
        <span />
        <span />
      </button>
      <div className={`mobile-panel ${open ? "is-open" : ""}`}>
        <a href={routes.home} onClick={close}>Home</a>
        <a href={routes.about} onClick={close}>About</a>
        <a href={routes.products} onClick={close}>Products</a>
        <a href={routes.core} onClick={close}>C3X Core Technology</a>
        <a href={routes.features} onClick={close}>Features</a>
        <a href={routes.partner} onClick={close}>Partners</a>
        <a href={routes.blog} onClick={close}>Blog</a>
        <a href={routes.cases} onClick={close}>Case Studies</a>
        <a href={routes.testimonials} onClick={close}>Testimonials</a>
        <a href={routes.contact} onClick={close}>Contact Invisiron</a>
      </div>
    </header>
  );
}

export { Header };
