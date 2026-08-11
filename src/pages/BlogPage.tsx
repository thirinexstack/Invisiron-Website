import { posts } from "../data/posts";
import { PostCard } from "../features/resources/components/PostCard";
import { ResourceTabs } from "../features/resources/components/ResourceTabs";

type BlogPageProps = {
  category?: "articles" | "events" | "news";
};

const categoryMeta = {
  articles: { type: "ARTICLES", title: "Articles" },
  events: { type: "EVENTS", title: "Events" },
  news: { type: "NEWS", title: "News" },
} as const;

function BlogPage({ category }: BlogPageProps) {
  const visiblePosts = category
    ? posts.filter((post) => post.type === categoryMeta[category].type)
    : posts.slice(0, 9);
  const title = category ? categoryMeta[category].title : "Blog & Media Events";

  return (
    <section className="resources-page blog-page">
      <div className="container center blog-content">
        <h1>{title}</h1>
        <ResourceTabs active={category ?? "all"} />
        <div className="post-grid">
          {visiblePosts.map((post) => <PostCard key={post.title} post={post} />)}
        </div>
        {!category && (
          <nav className="blog-pagination" aria-label="Blog pagination">
            <span>1</span>
            <span>2</span>
            <span aria-label="Next page">›</span>
          </nav>
        )}
      </div>
    </section>
  );
}

export { BlogPage };
