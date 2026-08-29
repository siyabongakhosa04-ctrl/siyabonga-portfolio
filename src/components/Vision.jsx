import { drives } from "../data";
import useReveal from "../hooks/useReveal";

export default function Vision() {
  const ref = useReveal();

  return (
    <section id="vision" ref={ref} className="py-24 md:py-32 border-b hairline">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal font-mono text-xs uppercase tracking-[0.2em] text-pitch/60 mb-3">
          What drives me
        </div>
        <h2 className="reveal font-display text-3xl md:text-4xl text-pitch mb-14">
          The foundation behind the work.
        </h2>

        <div className="grid sm:grid-cols-3 gap-8">
          {drives.map((drive, i) => (
            <div key={drive.title} className="reveal">
              <div className="font-mono text-xs text-gold mb-3">0{i + 1}</div>
              <h3 className="font-display text-xl text-ink mb-2">{drive.title}</h3>
              <p className="text-ink/70 leading-relaxed">{drive.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
