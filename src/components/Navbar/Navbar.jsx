"use client";
import styles from "./navbar.module.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <Link to="home">
          <img src="/logo.png" alt="logo" className={styles.logo} />
        </Link>
        <div>
          <ul className={styles.itemsContainer}>
            <Link to="home">
              <li>Home</li>
            </Link>
            <Link to="projects">
              <li>Projects</li>
            </Link>
            <Link to="about">
              <li>About</li>
            </Link>
            <Link to="contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
