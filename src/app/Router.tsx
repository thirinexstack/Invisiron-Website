import { useMemo } from "react";
import { routes } from "../config/routes";
import { AboutPage } from "../pages/AboutPage";
import { BlogPage } from "../pages/BlogPage";
import { CaseStudiesPage } from "../pages/CaseStudiesPage";
import { ContactPage } from "../pages/ContactPage";
import { CorePage } from "../pages/CorePage";
import { FeaturesPage } from "../pages/FeaturesPage";
import { HomePage } from "../pages/HomePage";
import { PartnerPage } from "../pages/PartnerPage";
import { ProductsPage } from "../pages/ProductsPage";
import { TestimonialsPage } from "../pages/TestimonialsPage";
import { normalizePath } from "../utils/path";

function Router() {
  const currentPath = normalizePath(window.location.pathname);
  const Page = useMemo(() => {
    switch (currentPath) {
      case routes.about:
        return AboutPage;
      case routes.products:
        return ProductsPage;
      case routes.core:
        return CorePage;
      case routes.features:
        return FeaturesPage;
      case routes.partner:
        return PartnerPage;
      case routes.blog:
        return BlogPage;
      case routes.cases:
        return CaseStudiesPage;
      case routes.testimonials:
        return TestimonialsPage;
      case routes.contact:
        return ContactPage;
      default:
        return HomePage;
    }
  }, [currentPath]);

  return <Page />;
}

export { Router };
