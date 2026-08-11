import { useMemo } from "react";
import { routes } from "../config/routes";
import { AboutPage } from "../pages/AboutPage";
import { findBlogDetailByHref } from "../data/blogDetails";
import { BlogDetailPage } from "../pages/BlogDetailPage";
import { BlogPage } from "../pages/BlogPage";
import { BlogGrantPage } from "../pages/BlogGrantPage";
import { CaseStudyDetailPage } from "../pages/CaseStudyDetailPage";
import { CaseStudiesPage } from "../pages/CaseStudiesPage";
import { ContactPage } from "../pages/ContactPage";
import { CorePage } from "../pages/CorePage";
import { findCaseStudyByHref } from "../data/caseStudies";
import { FeaturesPage } from "../pages/FeaturesPage";
import { HomePage } from "../pages/HomePage";
import { PartnerPage } from "../pages/PartnerPage";
import { ProductsPage } from "../pages/ProductsPage";
import { S1000Page, S4000Page, S6000Page } from "../pages/SentryProductPage";
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
      case routes.sentryS1000:
        return S1000Page;
      case routes.sentryS4000:
        return S4000Page;
      case routes.sentryS6000:
        return S6000Page;
      case routes.core:
        return CorePage;
      case routes.features:
        return FeaturesPage;
      case routes.partner:
        return PartnerPage;
      case routes.blog:
        return BlogPage;
      case routes.blogGrant:
        return BlogGrantPage;
      case routes.cyberSecurityAsia:
      case routes.cybersecurityTrends:
      case routes.cyberDefenceLegal:
      case routes.squirrelwaffle:
      case routes.thirdPartySoftware:
      case routes.surgeComplex:
      case routes.upgradeCompany:
      case routes.aseanCyberattacks:
      case routes.cybersecurityTips:
        return () => {
          const detail = findBlogDetailByHref(currentPath);
          return detail ? <BlogDetailPage detail={detail} /> : <BlogPage />;
        };
      case routes.articles:
        return () => <BlogPage category="articles" />;
      case routes.events:
        return () => <BlogPage category="events" />;
      case routes.news:
        return () => <BlogPage category="news" />;
      case routes.cases:
        return CaseStudiesPage;
      case routes.quebyCaseStudy:
      case routes.onestopCaseStudy:
      case routes.asiaDefenceCaseStudy:
      case routes.hostingThailandCaseStudy:
      case routes.logisticsCaseStudy:
      case routes.maritimeCaseStudy:
      case routes.seaGovernmentCaseStudy:
      case routes.technologyConsultancyCaseStudy:
        return () => {
          const study = findCaseStudyByHref(currentPath);
          return study ? <CaseStudyDetailPage study={study} /> : <CaseStudiesPage />;
        };
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
