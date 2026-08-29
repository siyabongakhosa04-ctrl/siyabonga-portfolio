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
      </div>
    </section>
  );
}
