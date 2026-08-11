import { routes } from "../../../config/routes";

type ResourceTabsProps = {
  active: "all" | "articles" | "events" | "news";
};

function ResourceTabs({ active }: ResourceTabsProps) {
  return (
    <div className="resource-tabs" aria-label="Resource categories">
      <a className={active === "all" ? "active" : ""} href={routes.blog}>All</a>
      <a className={active === "articles" ? "active" : ""} href={routes.blog}>Articles</a>
      <a className={active === "events" ? "active" : ""} href={routes.blog}>Events</a>
      <a className={active === "news" ? "active" : ""} href={routes.blog}>News</a>
    </div>
  );
}

export { ResourceTabs };
