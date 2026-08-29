import useReveal from "../hooks/useReveal";

export default function Journey() {
  const ref = useReveal();

  return (
    <section id="journey" ref={ref} className="py-24 md:py-32 border-b hairline">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
        <div className="reveal font-mono text-xs uppercase tracking-[0.2em] text-pitch/60">
          Who I am
        </div>

        <div className="reveal">
          <h2 className="font-display text-3xl md:text-4xl text-pitch mb-6">
            More than a portfolio.
          </h2>
          <p className="text-ink/80 leading-relaxed max-w-2xl mb-4">
            I'm an Advanced Diploma ICT student with a deep passion for software
            development, growth, and building a meaningful life. My journey
            hasn't been easy, but every challenge has shaped my mindset,
            discipline, and hunger to become more.
          </p>
          <p className="text-ink/80 leading-relaxed max-w-2xl">
            Football taught me resilience. Faith keeps me grounded. Technology
            gives me a tool to create impact — from a hospital record system to
            a scheduling tool for a real catering team. This site isn't just
            about my work; it's about the person I'm becoming.
          </p>
        </div>
      </div>
    </section>
  );
}
