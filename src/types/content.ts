type FeatureItem = {
  title: string;
  text: string;
};

type LogoItem = {
  src: string;
  alt: string;
};

type Post = {
  type: string;
  title: string;
  date: string;
  image: string;
  text: string;
};

type ProductItem = {
  name: string;
  image: string;
  text: string;
};

export type { FeatureItem, LogoItem, Post, ProductItem };
