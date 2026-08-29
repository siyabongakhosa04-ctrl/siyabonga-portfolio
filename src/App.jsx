import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Vision from "./components/Vision";
import Contact, { Footer } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <Journey />
        <Timeline />
        <Skills />
        <Projects />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
