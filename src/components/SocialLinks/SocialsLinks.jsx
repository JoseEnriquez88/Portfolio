import styles from "./socialLinks.module.css";
import socials from "@/utils/socials";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const socialIcons = {
  Github: <GitHubIcon />,
  Linkedin: <LinkedInIcon />,
  Whatsapp: <WhatsAppIcon />,
  Mail: <EmailIcon />,
};

const SocialsLinks = ({ open, onClose }) => {
  const handleArrowClick = () => {
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={(event) => event.stopPropagation()}
        onKeyDown={(event) => event.stopPropagation()}
        className={styles.drawer}
      >
        <div className={styles.topContainer}>
          <span className={styles.closeIcon} onClick={handleArrowClick}>
            <ArrowForwardIcon />
          </span>
          <img src="/logo.png" alt="image" className={styles.image} />
        </div>
        <List className={styles.list}>
          {Object.keys(socials).map((key) => (
            <ListItem key={key} disablePadding>
              <a
                href={socials[key]}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <ListItemButton className={styles.button}>
                  <ListItemIcon className={styles.icon}>
                    {socialIcons[key]}
                  </ListItemIcon>
                  <ListItemText primary={key} className={styles.text} />
                </ListItemButton>
              </a>
            </ListItem>
          ))}
        </List>
        <div className={styles.textContainer}>
          &copy; {new Date().getFullYear()}: Jose Enriquez
        </div>
      </Box>
    </Drawer>
  );
};

export default SocialsLinks;
