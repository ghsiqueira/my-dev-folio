import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Projects from "../components/Projects";
import Skills from "../components/Skills"; 
import LanguageSwitch from "../components/LanguageSwitch";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <LanguageSwitch />
      <Hero />
      <Skills />    
      <Projects />
      <Timeline />
    </main>
  );
}