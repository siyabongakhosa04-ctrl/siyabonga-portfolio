import { contact } from "../data";
import useReveal from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 bg-pitch text-paper relative overflow-hidden">
      <div className="absolute inset-0 bg-pitch-lines pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="reveal font-mono text-xs uppercase tracking-[0.2em] text-gold mb-4">
          Contact
        </div>
        <h2 className="reveal font-display text-3xl md:text-4xl mb-4">
          Let's build something meaningful.
        </h2>
        <p className="reveal text-paper/70 max-w-xl mx-auto mb-10">
          I'm growing, learning, and open to opportunities that align with
          impact and progress.
        </p>

        <div className="reveal flex flex-wrap justify-center gap-4 font-mono text-xs uppercase tracking-widest">
          <a
            href={`mailto:${contact.email}`}
            className="px-6 py-3 bg-gold text-pitch-dark hover:bg-gold-light transition-colors"
          >
            Email me
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-paper/30 hover:border-gold hover:text-gold transition-colors"
          >
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-paper/30 hover:border-gold hover:text-gold transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 bg-pitch-dark text-paper/50 text-center font-mono text-xs tracking-widest">
      © 2026 Siyabonga Khosa — Built with faith, discipline, and vision.
    </footer>
  );
}
