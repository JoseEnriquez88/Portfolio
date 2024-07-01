"use client";
import styles from "./footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { FaDiscord } from "react-icons/fa";

const socials = {
  github: {
    url: "https://github.com/JoseEnriquez88",
    icon: <GitHubIcon />,
  },
  linkedin: {
    url: "https://www.linkedin.com/in/joseenriquez80/",
    icon: <LinkedInIcon />,
  },
  discord: {
    url: "https://discord.com/channels/954778773654478940",
    icon: <FaDiscord className={styles.discordIcon} />,
  },
  mail: {
    url: "mailto:eenriquez.jose@gmail.com",
    icon: <EmailIcon alt="Email" className={styles.icon} />,
  },
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.linksContainer}>
          {Object.values(socials).map((social, index) => (
            <a key={index} href={social.url} target="_blank">
              {social.icon}
            </a>
          ))}
        </div>
        <div className={styles.textContainer}>
          &copy; {new Date().getFullYear()}: Jose Enriquez
          <img src="/logo.png" alt="logo" className={styles.logo} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
