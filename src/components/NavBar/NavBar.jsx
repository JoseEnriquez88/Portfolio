import styles from "./navbar.module.css";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/logo.png";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemsVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.tooltipContainer}>
        <Link to="home">
          <img
            src={logo}
            alt="img"
            className={styles.logo}
          />
        {/* <span className={styles.tooltip}>Logo by Danang Mulyo Saputro</span> */}
        </Link>
      </div>
      <i className={styles.menuIcon} onClick={toggleNav}>
        {navOpen ? <CloseIcon /> : <MenuIcon />}
      </i>
      <nav
        className={`${styles.navbar} ${navOpen ? styles.open : ""}`}
        // initial={{ opacity: 0, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 0.5 }}
      >
        <div className={styles.itemsContainer}>
          <ul>
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="about">About me</Link>
            </li>
            <li>
              <Link to="projects">Projects</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>
              {/* <a href={resume} download="resume.pdf">
                Descargar CV
              </a> */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
