type HeroProps = {
  title: string;
  dark?: boolean;
};

function Hero({ title, dark = true }: HeroProps) {
  return (
    <section className={`page-hero ${dark ? "dark" : "light"}`}>
      <div className="container">
        <h1>{title}</h1>
      </div>
    </section>
  );
}

export { Hero };
