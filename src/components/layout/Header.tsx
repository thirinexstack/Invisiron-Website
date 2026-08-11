import { useEffect, useState } from "react";
import { assetPath } from "../../config/assets";
import { routes } from "../../config/routes";
import { productItems } from "../../data/products";
import { normalizePath } from "../../utils/path";

const productMenuMeta = [
  { title: "For Small Enterprises", icon: "store" },
  { title: "For Medium Enterprises", icon: "building" },
  { title: "For Large Enterprises & DCs", icon: "city" },
];

function ProductMenuIcon({ type }: { type: string }) {
  if (type === "store") {
    return (
      <svg viewBox="0 0 96 72" aria-hidden="true">
        <path d="M18 30h60l-7-16H25z" />
        <path d="M24 30v30h48V30" />
        <path d="M34 60V43h12v17M55 47h10v13" />
        <path d="M18 30c0 6 4 10 10 10s10-4 10-10c0 6 4 10 10 10s10-4 10-10c0 6 4 10 10 10s10-4 10-10" />
        <path d="M14 60h68" />
      </svg>
    );
  }

  if (type === "building") {
    return (
      <svg viewBox="0 0 96 72" aria-hidden="true">
        <path d="M25 60h46V20H25z" />
        <path d="M31 14h34v6H31zM35 60V48h14v12" />
        <path d="M34 28h8M50 28h8M34 36h8M50 36h8M34 44h8M50 44h8" />
        <path d="M18 60h60" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 96 72" aria-hidden="true">
      <path d="M17 60h62" />
      <path d="M25 60V38h18v22" />
      <path d="M43 60V20l24 15v25" />
      <path d="M30 45h8M30 52h8M50 36h8M50 44h8M50 52h8" />
      <path d="M67 35v25" />
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const path = normalizePath(window.location.pathname);
  const productActive = [routes.products, routes.sentryS1000, routes.sentryS4000, routes.sentryS6000].includes(path);
  const resourceActive = [routes.blog, routes.articles, routes.events, routes.news, routes.cases, routes.testimonials].includes(path);
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
          <a className={productActive ? "active" : ""} href={routes.products}>Products</a>
          <div className="dropdown product-menu">
            {productItems.map((item, index) => (
              <div className="product-menu-column" key={item.name}>
                <h3>{productMenuMeta[index]?.title}</h3>
                <a className="product-menu-icon-link" href={item.href} aria-label={item.name}>
                  <ProductMenuIcon type={productMenuMeta[index]?.icon ?? "building"} />
                </a>
                <a href={item.href}>{item.name}</a>
              </div>
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
          <a className={resourceActive ? "active white" : ""} href={routes.blog}>Resources</a>
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
        <a href={routes.sentryS1000} onClick={close}>Invisiron Sentry S-1000</a>
        <a href={routes.sentryS4000} onClick={close}>Invisiron Sentry S-4000</a>
        <a href={routes.sentryS6000} onClick={close}>Invisiron Sentry S-6000</a>
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
