import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Krownsoft from "@/components/Krownsoft";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AssistantWidget from "@/components/AssistantWidget";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Krownsoft />
        <Stack />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
      <AssistantWidget />
    </>
  );
}
