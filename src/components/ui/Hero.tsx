type HeroProps = {
  title: string;
  dark?: boolean;
  className?: string;
};

function renderTitle(title: string) {
  const parts = title.split(/([®™])/g);

  return parts.map((part, index) => (
    part === "®" || part === "™" ? <sup key={`${part}-${index}`}>{part}</sup> : part
  ));
}

function Hero({ title, dark = true, className = "" }: HeroProps) {
  return (
    <section className={`page-hero ${dark ? "dark" : "light"} ${className}`}>
      <div className="container">
        <h1>{renderTitle(title)}</h1>
      </div>
    </section>
  );
}

export { Hero };
