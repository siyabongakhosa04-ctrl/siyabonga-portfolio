import { skillGroups } from "../data";
import useReveal from "../hooks/useReveal";

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" ref={ref} className="py-24 md:py-32 border-b hairline">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal font-mono text-xs uppercase tracking-[0.2em] text-pitch/60 mb-3">
          Tools I'm building with
        </div>
        <h2 className="reveal font-display text-3xl md:text-4xl text-pitch mb-14">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {skillGroups.map((group) => (
            <div key={group.label} className="reveal">
              <h3 className="font-mono text-xs uppercase tracking-widest text-gold mb-4 pb-2 border-b hairline">
                {group.label}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-ink/80 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-pitch/50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
