import { projects } from "../data";
import useReveal from "../hooks/useReveal";

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 bg-pitch/[0.03] border-b hairline">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal font-mono text-xs uppercase tracking-[0.2em] text-pitch/60 mb-3">
          Things I'm building
        </div>
        <h2 className="reveal font-display text-3xl md:text-4xl text-pitch mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.number}
              className="reveal group bg-paper border hairline p-8 flex flex-col hover:border-gold/60 transition-colors"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="kit-number w-11 h-11 font-display text-base shrink-0">
                  {project.number}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-ink/50">
                  {project.tag}
                </span>
              </div>

              <h3 className="font-display text-2xl text-ink mb-3">{project.title}</h3>
              <p className="text-ink/70 leading-relaxed mb-6 flex-1">{project.body}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-pitch group-hover:text-gold transition-colors inline-flex items-center gap-2"
              >
                {project.linkLabel}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
