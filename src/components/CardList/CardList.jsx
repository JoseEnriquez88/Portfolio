import styles from "./cardList.module.css";
import projects from "../../utils/projects.json";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const CardList = () => {
  return (
    <div className={styles.container}>
      {projects.data.map((project, index) => (
        <div key={index} className={styles.card}>
          <img src={project.image} alt="si ves esto no cargó la imagen" />
          <h3>{project.name}</h3>
          <p>{project.type}</p>
          {/* <p>{project.id}</p> */}
          <a href={project.repo}>
            <GitHubIcon />
          </a>
          {project.deploy && (
            <a href={project.deploy}>
              <LanguageIcon />
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardList;
