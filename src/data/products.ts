import { assetPath } from "../config/assets";
import type { ProductItem } from "../types/content";

const productItems: ProductItem[] = [
  {
    name: "Invisiron Sentry S-1000",
    image: assetPath("s-1000-thumbnail.png"),
    text: "Compact cyber defence protection for lean offices, branches, and frontline sites.",
  },
  {
    name: "Invisiron Sentry S-4000",
    image: assetPath("s-4000-thumbnail.png"),
    text: "Enterprise-ready threat mitigation for growing organisations and resilient perimeters.",
  },
  {
    name: "Invisiron Sentry S-6000",
    image: assetPath("s-6000-thumbnail.png"),
    text: "High-capacity protection engineered for demanding operations and large-scale networks.",
  },
];

export { productItems };
