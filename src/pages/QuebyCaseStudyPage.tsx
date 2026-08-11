import { assetPath } from "../config/assets";

const pdfPath = "case-studies/invisiron-case-study-queby-s-1000.pdf";

function QuebyCaseStudyPage() {
  return (
    <article className="case-detail-page">
      <section className="case-detail-hero">
        <div className="container">
          <h1>Case Studies</h1>
        </div>
      </section>

      <section className="case-detail-split">
        <div className="case-detail-media">
          <img src={assetPath("case-studies/case-study-queby-recovery.jpg")} alt="" />
        </div>
        <div className="case-detail-content">
          <a className="case-detail-pdf-link" href={assetPath(pdfPath)}>PDF LINK</a>

          <h2>A Malaysian Debt Recovery Operations Company Protected From Pitou Ransomware</h2>

          <section>
            <h3>Company Profile</h3>
            <p>
              Queby Recovery Management handles and processes large volume of highly confidential data for both corporates and consumers.
              Hence, it is imperative to incorporate a robust cyber security platform within their networks, capable of safeguarding against
              any potential data exfiltration that may lead to significant reputation and monetary loss.
            </p>
          </section>

          <section>
            <h3>The Challenge</h3>
            <p>
              Strict cybersecurity compliance to the Banking and Financial Institutions Act 1989 and the Personal Data Protection Act 2010
              is a mandate in Malaysia. Hence, it is imperative for financial institutions to incorporate a robust cyber security platform,
              capable of safeguarding against any potential data exfiltration that may lead to significant reputation and monetary loss.
            </p>
            <p>
              Being a medium sized enterprise, the cost to have an in-house cybersecurity team is not justifiable. Furthermore, there is
              a huge shortage of cyber security talent in the country. Queby required a modern, automated cyber defense technology that can
              proactively detect and mitigate threats automatically round the clock.
            </p>
          </section>

          <section>
            <h3>The Solution</h3>
            <p><strong>Taking Cyber Defense to the next level at affordable costs</strong></p>
            <p>
              After an extensive search in finding the right solution, the management chose to deploy the Invisiron solution at its main
              office to protect it's main network. Upon deployment, Invisiron proactively monitored Queby's network 24/7 and leveraged on
              its updated cyber threat intelligence feeds to inspect and mitigate any malicious packets that go in and out of the network,
              with full activity logs provided to the IT team. This proactive cyber defense solution provided by Invisiron allowed Queby's
              IT team to better focus on other day to day IT related tasks.
            </p>
          </section>

          <a className="button case-detail-download" href={assetPath(pdfPath)}>Download PDF</a>
        </div>
      </section>
    </article>
  );
}

export { QuebyCaseStudyPage };
