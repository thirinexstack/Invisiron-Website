function WhyInvisiron() {
  return (
    <section className="black-section">
      <div className="container">
        <h2>Why Invisiron?</h2>
        <div className="feature-grid compact">
          {[
            ["Certified", "Our Cyber Defence platform is certified with the International Common Criteria Certification."],
            ["Proactive", "We have a proactive Cyber Defence platform with Auto Threat Mitigation."],
            ["Invisible", "Our stealth Cyber Defence technology is completely invisible to hackers when deployed."],
            ["Fast", "An in-line Cyber Defence platform that does not impact internet bandwidth performance."],
          ].map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { WhyInvisiron };
