import { assetPath } from "../config/assets";
import { ResourceTabs } from "../features/resources/components/ResourceTabs";

function CaseStudiesPage() {
  return (
    <section className="resources-page">
      <div className="container center">
        <h1>Case Studies</h1>
        <ResourceTabs active="articles" />
        <div className="case-list">
          <article>
            <img src={assetPath("invisiron-testimonial-queby.png")} alt="Queby" />
            <div>
              <h2>Enterprise Cyber Defence Deployment</h2>
              <p>Invisiron helps organisations fortify network defence with proactive monitoring, intelligence-led mitigation, and invisible in-line protection.</p>
            </div>
          </article>
          <article>
            <img src={assetPath("invisiron-testimonial-osp.png")} alt="OSP" />
            <div>
              <h2>Managed Security Readiness</h2>
              <p>Practical deployment models support teams that need reliable cyber defence without adding unnecessary operational complexity.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export { CaseStudiesPage };
