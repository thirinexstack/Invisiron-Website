import { posts } from "./posts";
import type { Post } from "../types/content";

const relatedBlogPosts = [
  posts.find((post) => post.title === "Cybersecurity Tips to follow when working from home"),
  posts.find((post) => post.title === "7 Most Prominent Cyberattacks in ASEAN Countries"),
  posts.find((post) => post.title === "Upgrade Your Company's Cyber Security Networks Today"),
].filter((post): post is Post => Boolean(post));

export { relatedBlogPosts };
