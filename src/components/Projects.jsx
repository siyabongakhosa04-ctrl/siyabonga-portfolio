import { useEffect, useState } from "react";
import { projects } from "../data";
import useReveal from "../hooks/useReveal";

const linkClass =
  "font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2 transition-colors";

export default function Projects() {
  const ref = useReveal();
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!preview) return;
    const onKey = (e) => e.key === "Escape" && setPreview(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [preview]);

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
              className="reveal group bg-paper border hairline p-8 flex flex-col hover:border-gold/60 hover:-translate-y-0.5 transition-all"
            >
              <button
                type="button"
                onClick={() => setPreview(project)}
                aria-label={`View full screenshot of ${project.title}`}
                className="-mx-8 -mt-8 mb-6 block overflow-hidden border-b hairline bg-pitch/5 cursor-zoom-in"
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  className="w-full aspect-[2.1/1] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>

              <div className="flex items-center gap-4 mb-5">
                <span className="kit-number w-11 h-11 font-display text-base shrink-0">
                  {project.number}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-ink/50">
                  {project.context}
                </span>
                {project.featured && (
                  <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-gold border border-gold/50 px-2 py-0.5">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="font-display text-2xl text-ink mb-3">{project.title}</h3>
              <p className="text-ink/70 leading-relaxed mb-5 flex-1">{project.body}</p>

              <ul className="flex flex-wrap gap-2 mb-6" aria-label="Tech stack">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="font-mono text-[11px] tracking-wide text-pitch bg-pitch/[0.06] px-2.5 py-1"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-x-6 gap-y-2 border-t hairline pt-5">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} text-pitch hover:text-gold`}
                >
                  Code <span aria-hidden="true">→</span>
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClass} text-pitch hover:text-gold`}
                  >
                    Live demo <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {preview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={preview.title}
          onClick={() => setPreview(null)}
          className="fixed inset-0 z-[60] bg-pitch-dark/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
        >
          <figure className="max-w-5xl w-full">
            <img
              src={preview.image}
              alt={preview.imageAlt}
              className="w-full max-h-[80vh] object-contain border border-paper/20"
            />
            <figcaption className="mt-3 flex justify-between font-mono text-xs uppercase tracking-widest text-paper/70">
              <span>{preview.title}</span>
              <span>Click or press Esc to close</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
