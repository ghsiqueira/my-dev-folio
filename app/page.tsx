import Hero from "../components/Hero";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Projects from "../components/Projects";
import Skills from "../components/Skills"; 
import Analytics from "../components/Analytics";
import Footer from "../components/Footer";
import LanguageSwitch from "../components/LanguageSwitch";
import LevelUp from "../components/LevelUp";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 relative">
      <LevelUp />
      <LanguageSwitch />
      <Hero />
      <About />
      <Skills />    
      <Analytics />
      <Projects />
      <Timeline />
      <ContactForm />
      <Footer />
    </main>
  );
}