import { posts } from "../data/posts";
import { PostCard } from "../features/resources/components/PostCard";
import { ResourceTabs } from "../features/resources/components/ResourceTabs";

function BlogPage() {
  return (
    <section className="resources-page">
      <div className="container center">
        <h1>Blog & Media Events</h1>
        <ResourceTabs active="all" />
        <div className="post-grid">
          {posts.map((post) => <PostCard key={post.title} post={post} />)}
        </div>
      </div>
    </section>
  );
}

export { BlogPage };
