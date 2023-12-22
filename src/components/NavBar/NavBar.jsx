import styles from "./navbar.module.css";
import { React, useState } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/logo.png";

const navLinks = [
  { title: "Home", href: "home" },
  { title: "About", href: "about" },
  { title: "Projects", href: "projects" },
  { title: "Contact", href: "contact" },
];

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const MobileNavLink = ({ title, href, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.div variants={mobileLinkVars} className={styles.mobileLinks}>
      <Link to={href} onClick={handleClick}>
        {title}
      </Link>
    </motion.div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <img src={logo} alt="" className={styles.logo} />
        <div>
          <ul className={styles.itemsContainer}>
            <Link to="home">
              <li>HOME</li>
            </Link>
            <Link to="about">
              <li>ABOUT</li>
            </Link>
            <Link to="projects">
              <li>PROJECTS</li>
            </Link>
            <Link to="contact">
              <li>CONTACT</li>
            </Link>
          </ul>
        </div>
        <i className={styles.iconContainer} onClick={toggleMenu}>
          <MenuIcon />
        </i>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.menuContainer}
          >
            <div className={styles.menuSubContainer}>
              <div className={styles.mobileImgContainer}>
                <img
                  src={logo}
                  alt="como tan muchachos"
                  className={styles.imgMobile}
                />
                <i className={styles.iconCloseContainer} onClick={toggleMenu}>
                  <CloseIcon />
                </i>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className={styles.menuItemContainer}
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className={styles.links}>
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                        onClick={closeMenu}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
