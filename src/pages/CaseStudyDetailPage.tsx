import { assetPath } from "../config/assets";
import type { CaseStudy } from "../data/caseStudies";

function CaseStudyDetailPage({ study }: { study: CaseStudy }) {
  return (
    <article className="case-detail-page">
      <section className="case-detail-hero">
        <div className="container">
          <h1>Case Studies</h1>
        </div>
      </section>

      <section className="case-detail-split">
        <div className="case-detail-media">
          <img src={assetPath(study.image)} alt="" />
        </div>
        <div className="case-detail-content">
          {study.pdf ? <a className="case-detail-pdf-link" href={assetPath(study.pdf)}>PDF LINK</a> : null}

          <h2>{study.title}</h2>

          {study.sections.map((section) => (
            <section key={section.heading}>
              <h3>{section.heading}</h3>
              {section.paragraphs.map((paragraph, index) => (
                <p key={paragraph}>
                  {section.heading === "The Solution" && index === 0 && section.paragraphs.length > 1 ? <strong>{paragraph}</strong> : paragraph}
                </p>
              ))}
            </section>
          ))}

          {study.pdf ? <a className="button case-detail-download" href={assetPath(study.pdf)}>Download PDF</a> : null}
        </div>
      </section>
    </article>
  );
}

export { CaseStudyDetailPage };
