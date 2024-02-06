"use client";
import styles from "./navbarBottom.module.css";
import { Link } from "react-scroll";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import ContactPageIcon from "@mui/icons-material/ContactPage";

const NavbarBottom = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.iconContainer}>
        <Link to="home">
          <li>
            <span className={styles.icon}>
              <HomeIcon />
            </span>
            Home
          </li>
        </Link>
        <Link to="projects">
          <li>
            <span className={styles.icon}>
              <WorkIcon />
            </span>
            Projects
          </li>
        </Link>
        <Link to="home">
          <img src="icon.ico" alt="logo" className={styles.logo} />
        </Link>
        <Link to="about">
          <li>
            <span className={styles.icon}>
              <PersonIcon />
            </span>
            About
          </li>
        </Link>
        <Link to="contact">
          <li>
            <span className={styles.icon}>
              <ContactPageIcon />
            </span>
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavbarBottom;
