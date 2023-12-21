import styles from "./footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import logo from "../../assets/logo.png";
import discordIcon from "../../assets/icons/discord.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import whatsappIcon from "../../assets/icons/whatsapp.png";
import emailIcon from "../../assets/icons/gmail.png" 


const links = {
  discord: "https://discord.com/channels/954778773654478940",
  github: "https://github.com/JoseEnriquez88",
  linkedin: "https://www.linkedin.com/in/joseenriquez80/",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=3794277204&text&type=phone_number&app_absent=0",
  mail: "mailto:eenriquez.jose@gmail.com",
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          &copy; {new Date().getFullYear()} Copyright: Jose Enriquez
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.linksContainer}>
          <a href={links.discord}>
            <img src={discordIcon} alt="logo" className={styles.img} />
          </a>
          <a href={links.github}>
            <GitHubIcon className={styles.icon} />
          </a>
          <a href={links.linkedin}>
            <img src={linkedinIcon} alt="logo" className={styles.img} />
          </a>
          <a href={links.whatsapp}>
            <img src={whatsappIcon} alt="logo" className={styles.img} />
          </a>
          <a href={links.mail}>
          <img src={emailIcon} alt="logo" className={styles.img} />

          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
