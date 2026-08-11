type FeatureItem = {
  title: string;
  text: string;
};

type LogoItem = {
  src: string;
  alt: string;
};

type Post = {
  type: "ARTICLES" | "EVENTS" | "NEWS";
  title: string;
  date: string;
  image: string;
  text: string;
  href?: string;
};

type ProductItem = {
  name: string;
  image: string;
  text: string;
  href: string;
};

export type { FeatureItem, LogoItem, Post, ProductItem };
