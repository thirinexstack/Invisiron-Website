import { assetPath } from "../config/assets";
import { caseStudies } from "../data/caseStudies";

function CaseStudiesPage() {
  return (
    <section className="resources-page case-studies-page">
      <div className="container center case-studies-content">
        <h1>Case Studies</h1>
        <div className="case-list">
          {caseStudies.map((study) => (
            <article key={study.title} className="case-card">
              <a href={study.href} className="case-image-link">
                <img src={assetPath(study.image)} alt="" />
              </a>
              <div className="case-card-body">
                <h2><a href={study.href}>{study.title}</a></h2>
                <p>{study.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { CaseStudiesPage };
