import { timeline } from "../data";
import useReveal from "../hooks/useReveal";

export default function Timeline() {
  const ref = useReveal();

  return (
    <section id="timeline" ref={ref} className="py-24 md:py-32 bg-pitch/[0.03] border-b hairline">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal font-mono text-xs uppercase tracking-[0.2em] text-pitch/60 mb-3">
          The road that shaped me
        </div>
        <h2 className="reveal font-display text-3xl md:text-4xl text-pitch mb-14">
          Timeline
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute left-[27px] top-2 bottom-2 w-px bg-line" />

          <div className="space-y-12 md:space-y-16">
            {timeline.map((item) => (
              <div key={item.season} className="reveal relative md:pl-20 grid md:grid-cols-[auto_1fr] gap-4 md:gap-0">
                <div className="kit-number w-14 h-14 bg-paper font-display text-lg z-10 md:absolute md:left-0">
                  {item.season.slice(2)}
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-gold mb-1">
                    {item.season}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-ink mb-2">
                    {item.title}
                  </h3>
                  <p className="text-ink/70 leading-relaxed max-w-2xl">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
