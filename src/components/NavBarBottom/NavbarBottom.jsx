import styles from "./navbarBottom.module.css";
import { useState } from "react";
import { Link } from "react-scroll";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import MenuIcon from "@mui/icons-material/Menu";
import SocialsLinks from "../SocialLinks/SocialsLinks";

const NavbarBottom = () => {
  const [socialLinksOpen, setSocialLinksOpen] = useState(false);

  const handleMenuClick = () => {
    setSocialLinksOpen(true);
  };

  const handleCloseSocialLinks = () => {
    setSocialLinksOpen(false);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.iconContainer}>
        <Link to="home">
          <li>
            <span className={styles.icon} role="img">
              <HomeIcon />
            </span>
            <span className={styles.title}>Inicio</span>
          </li>
        </Link>
        <Link to="projects">
          <li>
            <span className={styles.icon} role="img">
              <WorkIcon />
            </span>
            Proyectos
          </li>
        </Link>

        <Link to="about">
          <li>
            <span className={styles.icon} role="img">
              <PersonIcon />
            </span>
            Sobre mí
          </li>
        </Link>
        <Link to="contact">
          <li>
            <span className={styles.icon} role="img">
              <ContactPageIcon />
            </span>
            Contacto
          </li>
        </Link>
        <li onClick={handleMenuClick}>
          <span className={styles.icon} role="img">
            <MenuIcon />
          </span>
          Redes
        </li>
      </ul>
      <SocialsLinks open={socialLinksOpen} onClose={handleCloseSocialLinks} />
    </div>
  );
};

export default NavbarBottom;
