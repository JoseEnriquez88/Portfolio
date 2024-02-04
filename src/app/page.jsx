import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import NavbarBottom from "@/components/NavBarBottom/NavbarBottom";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Navbar />
        <Hero id="home" />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
