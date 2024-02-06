"use client";
import styles from "./navbar.module.css";
import { Link } from "react-scroll";
import NavLinks from "../NavLinks/NavLinks";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const navColored = () => {
      if (window.scrollY >= 950) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", navColored);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", navColored);
      }
    };
  }, []);

  return (
    <header>
      <nav
        className={navbar ? `${styles.navbar} ${styles.active}` : styles.navbar}
      >
        <Link to="home">
          <img src="/logo.png" alt="logo" className={styles.logo} />
        </Link>
        <div className={styles.itemsContainer}>
          <NavLinks />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
