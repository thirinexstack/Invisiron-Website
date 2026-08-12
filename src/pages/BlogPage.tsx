import { posts } from "../data/posts";
import { PostCard } from "../features/resources/components/PostCard";
import { ResourceTabs } from "../features/resources/components/ResourceTabs";
import type { Post } from "../types/content";

type BlogPageProps = {
  category?: "articles" | "events" | "news";
};

const categoryMeta = {
  articles: { type: "ARTICLES", title: "Articles" },
  events: { type: "EVENTS", title: "Events" },
  news: { type: "NEWS", title: "News" },
} as const;

const archiveMeta: Record<string, { author: string; category: "Articles" | "Events" | "News"; categoryHref: string; sourceDate: string; datetime: string; excerpt: string }> = {
  "Invisiron Pre-Approved Digital Solution Grant": {
    author: "Wilgrafe Arriola",
    category: "News",
    categoryHref: "/category/news/",
    sourceDate: "September 25, 2023",
    datetime: "2023-09-25",
    excerpt:
      "SINGAPORE, 21 September 2023 - Invisiron is a Pre-Approved Digital Solution ICM Vendor qualified for the IMDA Pre-Approved@SMEsGoDigital Grant. With the use of our plug-and-play cyber solutions, [...]",
  },
  "Cyber Security Asia 2022": {
    author: "Manny Diaz",
    category: "Events",
    categoryHref: "/category/events/",
    sourceDate: "August 16, 2022",
    datetime: "2022-08-16",
    excerpt:
      "Invisiron team was excited to connect again in person with cyber experts, our Malaysia clients, partners and prospects at Cyber Security Asia KL in August 2022 after 2.5years. Our CTO Johan [...]",
  },
  "5 CyberSecurity Trends In 2022": {
    author: "oneberry",
    category: "Articles",
    categoryHref: "/category/articles/",
    sourceDate: "January 20, 2022",
    datetime: "2022-01-20",
    excerpt:
      "2021 has been a whirlwind in the cybersecurity space with record ransomware attacks during the year. It seems like last year was just the start of cyberthreats with greater uncertainties looming [...]",
  },
  "Cyber Defence - It's time to act now, Cyber Security and the Pandemic, Heightened Cyber Threats in the Legal Sector": {
    author: "oneberry",
    category: "Articles",
    categoryHref: "/category/articles/",
    sourceDate: "January 9, 2022",
    datetime: "2022-01-09",
    excerpt:
      "Since the start of the COVID-19 pandemic, remote work and distancing measures has led law firms to accelerate digitalization in their legal practices. With a surge in digital footprints created [...]",
  },
  "Breaking News: New Malware Threat Squirrelwaffle Discovered": {
    author: "oneberry",
    category: "News",
    categoryHref: "/category/news/",
    sourceDate: "December 16, 2021",
    datetime: "2021-12-16",
    excerpt:
      "Malware threats are ever-evolving and that includes the recent SquirrelWaffle which utlises stolen reply-chain email campaigns to plant phishing emails with malicious attachments mimicking [...]",
  },
  "Third-party software bug exploited by hackers": {
    author: "oneberry",
    category: "News",
    categoryHref: "/category/news/",
    sourceDate: "December 2, 2021",
    datetime: "2021-12-02",
    excerpt:
      "The new norm of employees working from home has created a huge demand for third-party software for work purposes. Hackers have seized this opportunity and uncovered new ways to exploit bugs in [...]",
  },
  "Surge in Complex Cyber Attacks Targeted at Small to Medium Enterprises": {
    author: "oneberry",
    category: "Articles",
    categoryHref: "/category/articles/",
    sourceDate: "November 11, 2021",
    datetime: "2021-11-11",
    excerpt:
      "SMEs are becoming more frequently targeted by hackers in cyber attacks, especially in sectors that deal with sensitive data or personal information, such as professional service and healthcare [...]",
  },
  "Upgrade Your Company's Cyber Security Networks Today": {
    author: "oneberry",
    category: "Articles",
    categoryHref: "/category/articles/",
    sourceDate: "October 21, 2021",
    datetime: "2021-10-21",
    excerpt:
      "The Asia-Pacific network security market is experiencing a huge growth, whereby the market is estimated to hit $7.32 BILLION by 2025, based on an analysis conducted by an American business [...]",
  },
  "7 Most Prominent Cyberattacks in ASEAN Countries": {
    author: "oneberry",
    category: "News",
    categoryHref: "/category/news/",
    sourceDate: "October 14, 2021",
    datetime: "2021-10-14",
    excerpt:
      "The acceleration of digital transformation caused by COVID-19, sparked a huge surge in the number of cyber attacks in the ASEAN region in 2020, evident from Interpol's ASEAN Cyberthreat [...]",
  },
  "Cybersecurity Tips to follow when working from home": {
    author: "oneberry",
    category: "Articles",
    categoryHref: "/category/articles/",
    sourceDate: "October 12, 2021",
    datetime: "2021-10-12",
    excerpt:
      "As COVID-19 drags on, remote work has been the default standard for most companies. To prevent employees from falling victim to cyber threats while working at home, here are some useful cyber [...]",
  },
};

function CategoryArchivePost({ post }: { post: Post }) {
  const meta = archiveMeta[post.title];

  return (
    <article className="article-archive-item">
      <a className="article-archive-image" href={post.href} aria-label={post.title}>
        <img src={post.image} alt={post.title} />
        <span className="article-archive-overlay" aria-hidden="true" />
        <span className="article-archive-image-icon" aria-hidden="true">
          <svg viewBox="0 0 512 512" focusable="false">
            <path d="M460 5H52C26 5 5 26 5 52v408c0 26 21 47 47 47h408c26 0 47-21 47-47V52c0-26-21-47-47-47ZM52 36h408c9 0 16 7 16 16v322h-53l-56-116c-2-5-7-8-12-9s-11 2-14 6l-36 45-85-138c-3-5-8-8-14-8s-11 4-13 9L89 374H36V52c0-9 7-16 16-16Zm72 338 84-172 82 133c3 4 7 7 12 7s10-2 14-6l34-43 38 81H124Zm336 102H52c-9 0-16-7-16-16v-55h440v55c0 9-7 16-16 16ZM366 209c35 0 63-28 63-63s-28-63-63-63-63 28-63 63 28 63 63 63Zm0-94c17 0 31 14 31 31s-14 31-31 31-31-14-31-31 14-31 31-31Z" />
          </svg>
        </span>
      </a>
      <div className="article-archive-social" aria-label="Post actions">
        <span className="article-share-icon" aria-label="Share">
          <svg viewBox="0 0 512 512" focusable="false">
            <path d="M432 352c-23 0-43 9-58 24L159 269c1-4 1-8 1-13s0-9-1-13l215-107c15 15 35 24 58 24 44 0 80-36 80-80S476 0 432 0s-80 36-80 80c0 4 0 9 1 13L138 200c-15-15-35-24-58-24-44 0-80 36-80 80s36 80 80 80c23 0 43-9 58-24l215 107c-1 4-1 8-1 13 0 44 36 80 80 80s80-36 80-80-36-80-80-80Z" />
          </svg>
        </span>
        <a className="article-comment-icon" href={`${post.href}#comments`} aria-label="0 comments">
          <svg viewBox="0 0 512 512" focusable="false">
            <path d="M96 128h320v32H96Zm0 64h256v32H96Zm0 64h128v32H96ZM464 32H48C22 32 0 54 0 80v256c0 26 22 48 48 48h80v128l154-128h182c26 0 48-22 48-48V80c0-26-22-48-48-48Zm-16 288H258l-98 87v-87H64V96h384Z" />
          </svg>
          <span>0</span>
        </a>
      </div>
      <div className="article-archive-meta">
        <div className="article-archive-byline">
          <span>By</span> <a href={`/author/${meta.author.toLowerCase().replace(/\s+/g, "-")}/`}>{meta.author}</a>
          <span> In</span> <a href={meta.categoryHref}>{meta.category}</a>
          <span>Posted</span> <time dateTime={meta.datetime}>{meta.sourceDate}</time>
        </div>
        <h3><a href={post.href}>{post.title}</a></h3>
        <p>{meta.excerpt}</p>
        <a className="article-read-more" href={post.href}>READ MORE</a>
      </div>
    </article>
  );
}

function CategoryArchive({ visiblePosts }: { visiblePosts: Post[] }) {
  return (
    <section className="articles-archive-page">
      <div className="articles-archive-container">
        <div className="articles-archive-content">
          {visiblePosts.map((post) => <CategoryArchivePost key={post.title} post={post} />)}
        </div>
      </div>
    </section>
  );
}

function BlogPage({ category }: BlogPageProps) {
  const visiblePosts = category
    ? posts.filter((post) => post.type === categoryMeta[category].type)
    : posts.slice(0, 9);
  const title = category ? categoryMeta[category].title : "Blog & Media Events";

  if (category) {
    return <CategoryArchive visiblePosts={visiblePosts} />;
  }

  return (
    <section className="resources-page blog-page">
      <div className="container center blog-content">
        <h1>{title}</h1>
        <ResourceTabs active={category ?? "all"} />
        <div className="post-grid">
          {visiblePosts.map((post) => <PostCard key={post.title} post={post} />)}
        </div>
      </div>
    </section>
  );
}

export { BlogPage };
