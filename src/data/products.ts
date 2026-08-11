import { assetPath } from "../config/assets";
import { routes } from "../config/routes";
import type { ProductItem } from "../types/content";

const productItems: ProductItem[] = [
  {
    name: "Invisiron Sentry S-1000",
    image: assetPath("s-1000-thumbnail.png"),
    text: "Compact cyber defence protection for lean offices, branches, and frontline sites.",
    href: routes.sentryS1000,
  },
  {
    name: "Invisiron Sentry S-4000",
    image: assetPath("s-4000-thumbnail.png"),
    text: "Enterprise-ready threat mitigation for growing organisations and resilient perimeters.",
    href: routes.sentryS4000,
  },
  {
    name: "Invisiron Sentry S-6000",
    image: assetPath("s-6000-thumbnail.png"),
    text: "High-capacity protection engineered for demanding operations and large-scale networks.",
    href: routes.sentryS6000,
  },
];

export { productItems };
