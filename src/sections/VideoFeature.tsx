import { assetPath } from "../config/assets";

function VideoFeature() {
  return (
    <section className="video-feature" id="video-feature">
      <div className="video-frame">
        <iframe
          title="Invisiron: We are the First and Last line of Cyber Defence"
          src="https://www.youtube.com/embed/xu4QjD1b9X8"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <h2>Fortify Your Existing Network with ProactiveCyber Defence</h2>
      <a className="button brown large" href={assetPath("invisiron-fortify-your-network-defence.pdf")} target="_blank" rel="noreferrer">
        Download White Paper
      </a>
    </section>
  );
}

export { VideoFeature };
