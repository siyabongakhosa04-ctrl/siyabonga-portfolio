import { glance, journeyPillars } from "../data";
import useReveal from "../hooks/useReveal";

export default function Journey() {
  const ref = useReveal();

  return (
    <section id="journey" ref={ref} className="py-24 md:py-32 border-b hairline">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal font-mono text-xs uppercase tracking-[0.2em] text-pitch/60 mb-3">
          Who I am
        </div>
        <h2 className="reveal font-display text-3xl md:text-5xl text-pitch leading-[1.1] max-w-3xl mb-14">
          Football taught me to show up.{" "}
          <span className="text-gold">Code is where I put it to work.</span>
        </h2>

        <div className="grid md:grid-cols-[2fr_1fr] gap-12 md:gap-16 items-start">
          <div>
            <div className="reveal space-y-5 text-ink/80 leading-relaxed text-base md:text-lg max-w-2xl">
              <p>
                I'm Siyabonga, an Advanced Diploma ICT student at the University
                of Mpumalanga. My journey hasn't been easy, and I won't pretend
                it has been. But every hard season shaped my mindset, my
                discipline, and my hunger to become more.
              </p>
              <p>
                You can see that in how I build. I started with HTML, CSS and
                Git, and now I ship full-stack systems with a team: a staff
                scheduler for a real catering team, a collaboration platform for
                students, a health record system aimed at a hospital in my own
                province, and a lodge management system.
              </p>
            </div>

            <blockquote className="reveal my-10 border-l-2 border-gold pl-6 font-display text-2xl md:text-3xl text-pitch leading-snug max-w-2xl">
              Technology is the tool. Impact is the point.
            </blockquote>

            <div className="grid sm:grid-cols-3 gap-4">
              {journeyPillars.map((pillar) => (
                <div
                  key={pillar.label}
                  className="reveal bg-pitch/[0.04] border hairline p-5 hover:border-gold/60 transition-colors"
                >
                  <div className="font-mono text-[11px] uppercase tracking-widest text-gold mb-2">
                    {pillar.label}
                  </div>
                  <h3 className="font-display text-xl text-ink mb-2">{pillar.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="reveal bg-pitch text-paper p-8 md:sticky md:top-24">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-6">
              At a glance
            </div>
            <dl className="space-y-5">
              {glance.map((item) => (
                <div key={item.label} className="border-b border-paper/10 pb-4 last:border-0 last:pb-0">
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-paper/50 mb-1">
                    {item.label}
                  </dt>
                  <dd className="text-paper/90 leading-snug">{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
