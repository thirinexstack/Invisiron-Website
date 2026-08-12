import { assetPath } from "../config/assets";

const pdfPath = "case-studies/invisiron-case-study-osp-s-1000.pdf";

function OnestopCaseStudyPage() {
  return (
    <article className="case-detail-page">
      <section className="case-detail-hero">
        <div className="mk-video-color-mask" />
        <div className="container">
          <h1>Case Studies</h1>
        </div>
      </section>

      <section className="case-detail-split">
        <div className="case-detail-media">
          <img src={assetPath("case-studies/case-study-onestop-security.jpg")} alt="" />
        </div>
        <div className="case-detail-content">
          <a className="case-detail-pdf-link" href={assetPath(pdfPath)}>PDF LINK</a>

          <h2>An E-Portal Platform Protected From Cyber Threats and Attacks</h2>

          <section>
            <h3>Company Profile</h3>
            <p>
              Onestop Security Platform Pte Ltd is a Singapore based enterprise that offers a one-stop e-portal; providing solutions to
              security industry stakeholders to anticipate and resolve various challenges. In order to sustain smooth operations, avoid any
              down-time, and maintain a safe network, OSP required an affordable, advanced, and automated cyber defense technology.
            </p>
          </section>

          <section>
            <h3>The Challenge</h3>
            <p>
              The OSP team understands that having strong cyber security remains critical for a job listing web portal, to protect its core
              business and operations. However, OSP had the perception that a firewall was sufficient in protecting their resources from cyber
              threats and attacks. Unfortunately, the team soon faced difficulty in managing the increasing number of cyber threats over time,
              as their e-portal was constantly exposed to such prevalent dangers.
            </p>
            <p>
              In order to sustain smooth operations, avoid any down-time, and maintain a safe network, OSP required an affordable, advanced,
              and automated cyber defense technology. Technology which would allow the proactive detection and automatic mitigation of any
              incoming cyber threats consistently and tirelessly.
            </p>
          </section>

          <section>
            <h3>The Solution</h3>
            <p><strong>Proactive Cyber Defense at affordable costs</strong></p>
            <p>
              After assessing all the options in the market, Invisiron was the clear solution that OSP was searching for to tackle their
              challenges. Upon deployment of the Sentry S-1000, Invisiron began proactively monitoring OSP's network 24/7. It leveraged on
              its updated cyber threat intelligence feeds to inspect and mitigate any malicious packets that go in and out of the network.
              The daily reports provided indicated the decreasing number of cyber threats with the presence of Invisiron in OSP's network.
              This proactive cyber defense solution provided by Invisiron greatly reduced the e-portal's downtime.
            </p>
          </section>

          <a className="button case-detail-download" href={assetPath(pdfPath)}>Download PDF</a>
        </div>
      </section>
    </article>
  );
}

export { OnestopCaseStudyPage };
