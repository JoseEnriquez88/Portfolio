import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import style from "./navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import screenIco from "../../assets/screenIco.png";
import resume from "../../assets/spanishResume.pdf";

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
      <motion.nav
        className={`${style.navbar} ${navOpen ? style.open : ""}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre mi</Link>
        <Link to="/project">Proyectos</Link>
        <Link to="/contact">Contacto</Link>
        <a href={resume} download="resume.pdf">
          Descargar CV
        </a>
      </motion.nav>
    </header>
  );
};

export default NavBar;
