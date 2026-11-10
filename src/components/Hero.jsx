import { heroFacts } from "../data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-24 md:pt-44 md:pb-32 bg-pitch-dark bg-pitch text-paper overflow-hidden"
    >
      <div className="absolute inset-0 bg-pitch-lines pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-gold mb-8">
          <span className="kit-number-dark w-8 h-8 text-sm">04</span>
          <span>Advanced Diploma ICT · Mpumalanga · Season 2026</span>
        </div>

        <div className="inline-flex items-center gap-2 mb-6 font-mono text-[11px] uppercase tracking-widest text-paper/80 border border-paper/20 px-3 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          Open to opportunities
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-3xl text-paper">
          Building software, character, and a future bigger than my circumstances.
        </h1>

        <p className="mt-6 max-w-xl text-paper/70 text-base md:text-lg leading-relaxed">
          I'm Siyabonga Khosa — a full-stack developer building real systems for
          real people: a hospital, a catering team, a campus of students, one
          project at a time.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-gold text-pitch-dark font-mono text-xs uppercase tracking-widest hover:bg-gold-light transition-colors"
          >
            View my work
          </a>
          <a
            href="#journey"
            className="px-6 py-3 border border-paper/30 text-paper font-mono text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-colors"
          >
            My journey
          </a>
        </div>

        <dl className="mt-16 pt-8 border-t border-paper/15 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
          {heroFacts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-[11px] uppercase tracking-widest text-paper/50 mb-1">
                {fact.label}
              </dt>
              <dd className="font-display text-xl text-gold">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
