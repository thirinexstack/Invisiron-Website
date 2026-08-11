import { assetPath } from "../config/assets";
import { routes } from "../config/routes";
import { productDetails } from "../data/productDetails";
import type { ProductDetail } from "../data/productDetails";

type SentryProductPageProps = {
  product: ProductDetail;
};

function renderMarkedText(text: string) {
  return text.split(/([®™])/g).map((part, index) => (
    part === "®" || part === "™" ? <sup key={`${part}-${index}`}>{part}</sup> : part
  ));
}

function getValueHeading(product: ProductDetail) {
  if (product.id === "s1000") {
    return "Great Value for Small Businesses";
  }

  if (product.id === "s4000") {
    return "Great Value for Medium Enterprises";
  }

  return "Great Value for Large Enterprises & Data Centres";
}

function SentryProductPage({ product }: SentryProductPageProps) {
  return (
    <div className="sentry-page">
      <section className="sentry-hero">
        <div className="container sentry-hero-grid">
          <div className="sentry-media">
            <img className="sentry-badge" src={assetPath("bfi_thumb/c3x-powered-1-100x-or1lx19xdyx225853sjrnd5ssltnkzy5tra2lzrav6.png")} alt="C3X powered" />
            <img className="sentry-product" src={product.image} alt={product.imageAlt} />
          </div>
          <div className="sentry-copy">
            <img className="sentry-logo" src={product.logo} alt={product.name} />
            <h1>{product.tagline}</h1>
            <p><strong>{renderMarkedText(product.name)}</strong> {product.description}</p>
            <div className="sentry-actions">
              <a className="button brown" href={product.datasheet}>Download Data Sheet</a>
              <a className="button brown" href={routes.contact}>Request for Demo</a>
            </div>
          </div>
        </div>
      </section>

      <section className="sentry-system">
        <div className="container">
          <h2>{getValueHeading(product)}</h2>
          <p>We designed each Cyber Defence system from the ground up. With each iteration, we were able to achieve substantial cost savings, resulting in a next-generation Cyber Defence system offering unparalleled value for enterprise-grade cybersecurity.</p>
          <div className="sentry-rule" />
          <div className="spec-card">
            <h2>Technical Specifications</h2>
            <table>
              <tbody>
                {product.specifications.map(([label, value]) => (
                  <tr
                    key={label}
                    className={product.id === "s1000" && label === "Power & Cooling" ? "single-line-value" : undefined}
                  >
                    <th scope="row">{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

function S1000Page() {
  return <SentryProductPage product={productDetails.s1000} />;
}

function S4000Page() {
  return <SentryProductPage product={productDetails.s4000} />;
}

function S6000Page() {
  return <SentryProductPage product={productDetails.s6000} />;
}

export { S1000Page, S4000Page, S6000Page };
