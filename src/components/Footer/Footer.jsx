"use client";
import styles from "./footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { FaDiscord } from "react-icons/fa";

const socials = {
  discord: "https://discord.com/channels/954778773654478940",
  github: "https://github.com/JoseEnriquez88",
  linkedin: "https://www.linkedin.com/in/joseenriquez80/",
  mail: "mailto:eenriquez.jose@gmail.com",
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.linksContainer}>
          <a href={socials.github} rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a href={socials.linkedin} rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href={socials.whatsapp} rel="noopener noreferrer">
            <FaDiscord className={styles.discordIcon} />
          </a>
          <a href={socials.mail} rel="noopener noreferrer">
            <EmailIcon alt="Email" className={styles.icon} />
          </a>
        </div>
        <div className={styles.textContainer}>
          &copy; {new Date().getFullYear()}: Jose Enriquez
          <img src="/icon.ico" alt="logo" className={styles.logo} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
