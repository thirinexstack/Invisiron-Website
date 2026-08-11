import { useState } from "react";
import { assetPath } from "../config/assets";

const c3xVideoUrl = "https://invisiron.com/wp-content/uploads/video/Invisiron.mp4";

const c3xFeatures = [
  {
    icon: "true-stealth-mode2.png",
    title: "Invisible Stealth Mode",
    text: "The Invisiron® Cyber Defence device operates in stealth mode, without any IP addresses or Media Access Control (MAC) addresses. This renders it invisible to cyber criminals when deployed. Hackers attempting to penetrate the network will not be able to detect the presence of an Invisiron® device.",
  },
  {
    icon: "invisiron-bandwidth-icon100x-100x100.png",
    title: "Ultra Fast In-Line Packet Processing Speed",
    text: "Network packets are processed at near line rate without degrading the Internet bandwidth.",
  },
  {
    icon: "invisiron-atm-icon100x-100x100.png",
    title: "Autonomous Threat Prevention",
    text: "The Invisiron Cyber Defence Platform operates fully autonomous with no user intervention needed. Threats are detected and mitigated fully automatically and in real-time.",
  },
];

function CorePage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="core-video-hero">
        <div className="core-video-container">
          <video src={c3xVideoUrl} autoPlay muted loop playsInline />
        </div>
        <div className="core-video-content">
          <h1>C3X™ CORE TECHNOLOGY</h1>
          <p>At the core of Invisiron® is C3X™ which features three mission-critical technologies.</p>
        </div>
        <button className="core-video-play" type="button" aria-label="Play C3X core technology video" onClick={() => setIsVideoOpen(true)}>
          <span />
        </button>
      </section>
      {isVideoOpen ? (
        <div className="core-video-modal" role="dialog" aria-modal="true" aria-label="C3X core technology video">
          <button className="core-video-backdrop" type="button" aria-label="Close C3X core technology video" onClick={() => setIsVideoOpen(false)} />
          <div className="core-video-dialog">
            <button className="core-video-close" type="button" aria-label="Close C3X core technology video" onClick={() => setIsVideoOpen(false)}>
              ×
            </button>
            <video src={c3xVideoUrl} controls autoPlay />
          </div>
        </div>
      ) : null}
      <section className="core-detail-section">
        <div className="container core-detail-intro">
          <img src={assetPath("c3x-technology-main-graphic-2021.png")} alt="C3X core technology" />
          <h2>At the core of Invisiron® is C3X™ which features three mission-critical technologies.</h2>
        </div>
        <div className="container core-feature-grid">
          {c3xFeatures.map((feature) => (
            <article key={feature.title}>
              <img src={assetPath(feature.icon)} alt="" />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
        <div className="core-detail-action">
          <a className="button brown large" href={assetPath("invisiron-fortify-your-network-defence.pdf")} target="_blank" rel="noreferrer">
            Download Whitepaper
          </a>
        </div>
      </section>
    </>
  );
}

export { CorePage };
