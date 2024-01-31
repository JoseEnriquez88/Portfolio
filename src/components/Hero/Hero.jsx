import styles from "./hero.module.css";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Waves from "../Waves/Waves";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.dataContainer}>
          <h1 className={styles.name}>Jose Enriquez</h1>
          <h2>Full stack Developer</h2>
          <button className={styles.button}>
            <a
              href="/resume/JoseCarlosEnriquezDominguezEnglishResume.pdf"
              download="englishResume.pdf"
            >
              <CloudDownloadIcon className={styles.icon} /> Resume
            </a>
          </button>
        </div>
        <Waves />
      </div>
    </div>
  );
};

export default Hero;
