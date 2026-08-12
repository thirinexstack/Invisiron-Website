import { useState } from "react";
import { WhitepaperModal } from "../components/WhitepaperModal";
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

      {isModalOpen && <WhitepaperModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}

export { BlogDetailPage };
