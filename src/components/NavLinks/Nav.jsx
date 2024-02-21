"use client";
import { Link } from "react-scroll";
import styles from "./navlinks.module.css";

const pillTabs = [
  { title: "Inicio", href: "home" },
  { title: "Proyectos", href: "projects" },
  { title: "Sobre mí", href: "about" },
  { title: "Contacto", href: "contact" },
];

const Nav = () => {
  return (
    <nav className={styles.container}>
      <ul>
        {pillTabs.map((tab, index) => (
          <li key={index}>
            <Link to={tab.href}>{tab.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
