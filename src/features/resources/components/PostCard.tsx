import type { Post } from "../../../types/content";

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  const image = (
    <div className="post-image-link" aria-label={post.title}>
      <img src={post.image} alt="" />
    </div>
  );

  const title = <h2>{post.title}</h2>;

  return (
    <article className="post-card">
      {post.href ? <a href={post.href} className="post-card-link">{image}</a> : image}
      <div className="post-body">
        <p className="card-top-label">
          <span>{post.type.charAt(0) + post.type.slice(1).toLowerCase()}</span>
        </p>
        {post.href ? <a href={post.href} className="post-title-link">{title}</a> : title}
        <p>{post.text}</p>
        <p className="post-date">{post.date}</p>
      </div>
    </article>
  );
}

export { PostCard };
