import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import NavbarBottom from "@/components/NavBarBottom/NavbarBottom";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero id="home" />
      {/* <Projects id="projects" /> */}
      {/* <About id="about" /> */}
      {/* <Contact id="contact" /> */}
      {/* <Footer /> */}
    </div>
  );
}
