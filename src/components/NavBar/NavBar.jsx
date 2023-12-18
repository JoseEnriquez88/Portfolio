import style from "./navbar.module.css";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import screenIco from "../../assets/screenIco.png";
import resume from "../../assets/spanishResume.pdf";

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
    <header className={style.header}>
      <Link to="/">
        <img src={screenIco} alt="img" className={style.logo} title="Inicio" />
      </Link>
      <i className={style.menuIcon} onClick={toggleNav}>
        {navOpen ? <CloseIcon /> : <MenuIcon />}
      </i>
      <nav
        className={`${style.navbar} ${navOpen ? style.open : ""}`}
        // initial={{ opacity: 0, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 0.5 }}
      >
        <div className={style.itemsContainer}>
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
