"use client";
import styles from "./navbar.module.css";
import { Link } from "react-scroll";
import NavLinks from "../NavLinks/NavLinks";

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navbar}>
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
