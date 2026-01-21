import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Projects from "../components/Projects";
import LanguageSwitch from "../components/LanguageSwitch"; 

export default function Home() {
  return (
    <main className="min-h-screen">
      <LanguageSwitch /> 
      <Hero />
      <Projects />
      <Timeline />
    </main>
  );
}