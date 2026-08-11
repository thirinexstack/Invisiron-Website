import type { Post } from "../../../types/content";

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <img src={post.image} alt="" />
      <div className="post-body">
        <span>{post.type}</span>
        <h2>{post.title}</h2>
        <p className="post-date">{post.date}</p>
        <p>{post.text}</p>
      </div>
    </article>
  );
}

export { PostCard };
