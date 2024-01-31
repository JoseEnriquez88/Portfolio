"use client";
import styles from "./navbar.module.css";
import { Link } from "react-scroll";

const navLinks = [
  { title: "Home", href: "home" },
  { title: "About", href: "about" },
  { title: "Projects", href: "projects" },
  { title: "Contact", href: "contact" },
];

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <Link to="home">
          <img src="/logo.png" alt="logo" className={styles.logo} />
        </Link>
        <div>
          <ul className={styles.itemsContainer}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
