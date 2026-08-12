import { useState } from "react";
import { WhitepaperModal } from "../components/WhitepaperModal";

function VideoFeature() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <button className="button brown large" type="button" onClick={() => setIsModalOpen(true)}>
        Download White Paper
      </button>
      {isModalOpen && <WhitepaperModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}

export { VideoFeature };
