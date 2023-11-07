import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import resume from "../../assets/spanishResume.pdf";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const NavBar = () => {
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <div className={style.icons}>
          <a href="https://www.linkedin.com/in/joseenriquez80/">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/JoseEnriquez88">
            <GitHubIcon />
          </a>
        </div>

        <div className={style.buttons}>
          <Link to="/">Inicio</Link>
          <Link to="/about">Sobre Mi</Link>
          <Link to="/contact">Contacto</Link>
          <a href={resume} download="resume.pdf">
            Descargar CV <DownloadIcon />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
