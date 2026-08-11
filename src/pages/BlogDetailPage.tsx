import { useState } from "react";
import type { BlogDetail } from "../data/blogDetails";
import { relatedBlogPosts } from "../data/relatedPosts";
import { PostCard } from "../features/resources/components/PostCard";

type BlogDetailPageProps = {
  detail: BlogDetail;
};

function BlogDetailPage({ detail }: BlogDetailPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="blog-detail-page">
      <div className="blog-detail-container">
        <article className="blog-detail-article">
          <p className="blog-detail-label">{detail.label}</p>
          <h1>{detail.title}</h1>
          <p className="blog-detail-date">{detail.date}</p>
          <figure className="blog-detail-image">
            <img src={detail.image} alt={detail.title} />
          </figure>

          <div className="blog-detail-body" dangerouslySetInnerHTML={{ __html: detail.contentHtml }} />

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

export { BlogDetailPage };
