import { useState } from "react";
import { assetPath } from "../config/assets";
import { relatedBlogPosts } from "../data/relatedPosts";
import { PostCard } from "../features/resources/components/PostCard";

function BlogGrantPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="blog-detail-page">
      <div className="blog-detail-container">
        <article className="blog-detail-article">
          <p className="blog-detail-label">News</p>
          <h1>Invisiron Pre-Approved Digital Solution Grant</h1>
          <p className="blog-detail-date">25th Sep 2023</p>
          <figure className="blog-detail-image">
            <img src={assetPath("blog/invisiron.png")} alt="Invisiron Pre-Approved Digital Solution Grant" />
          </figure>

          <p>
            <strong>SINGAPORE, 21 September 2023</strong> - Invisiron is a Pre-Approved Digital Solution ICM Vendor
            qualified for the IMDA Pre-Approved@SMEsGoDigital Grant.
          </p>
          <p>
            With the use of our plug-and-play cyber solutions, SMEs can aim to build strong cyber defence capabilities,
            with up to 50% government grant!
          </p>
          <p>
            Invisiron is your first and last line of Cyber Defence. At the core of Invisiron(R) is C3X(TM), which
            features three mission-critical technologies.
          </p>
          <ol>
            <li>Invisible Stealth Mode</li>
            <li>Autonomous Threat Prevention</li>
            <li>Ultra-Fast In-Line Packet Processing Speed</li>
          </ol>
          <p>The Sentry S-1000 boasts a compact form-factor designed for small networks. This is the perfect solution for Small Size Enterprises.</p>
          <ul>
            <li>Invisiron appliance for 1 or 10 Gbps of bandwidth</li>
            <li>Highly Sophisticated Cyber Threat Intelligence</li>
          </ul>
          <p>Source: Oneberry Technologies Pte Ltd</p>

          <button className="blog-detail-button" type="button" onClick={() => setIsModalOpen(true)}>
            download whitepaper
          </button>
        </article>
      </div>

      <section className="blog-related">
        <div className="blog-detail-container">
          <h2>Related Articles</h2>
          <div className="blog-related-carousel">
            <div className="post-grid">
              {relatedBlogPosts.map((post) => (
                <PostCard key={post.title} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="blog-download-modal" role="dialog" aria-modal="true" aria-labelledby="blog-download-title">
          <button className="blog-download-backdrop" type="button" aria-label="Close popup" onClick={() => setIsModalOpen(false)} />
          <div className="blog-download-dialog">
            <button className="blog-download-close" type="button" aria-label="Close popup" onClick={() => setIsModalOpen(false)}>
              ×
            </button>
            <h2 id="blog-download-title">Fortify Your Existing Network with Proactive Cyber Defence</h2>
            <p>Download Invisiron's exclusive Whitepaper</p>
            <form>
              <input type="text" placeholder="Full Name*" />
              <input type="email" placeholder="Work Email*" />
              <input type="text" placeholder="Job Title*" />
              <input type="text" placeholder="Company Name*" />
              <input type="tel" placeholder="Work Phone Number*" />
              <button type="button">SUBMIT</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export { BlogGrantPage };
