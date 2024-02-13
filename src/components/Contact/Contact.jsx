"use client";
import styles from "./contact.module.css";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  successNotify,
  warnNotify,
  errorNotify,
  emailWarnNotify,
} from "@/utils/toastify.js";
import { ToastContainer } from "react-toastify";
import { titleVariants } from "./contactMotion";
import socials from "@/utils/socials";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import Footer from "../Footer/Footer";
import BottomNav from "../NavBarBottom/BottomNav";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const isInView = useInView(ref, { threshold: 0.5 });
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const showNav = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    showNav();
    window.addEventListener("resize", showNav);

    return () => {
      window.removeEventListener("resize", showNav);
    };
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      warnNotify();
      return;
    }

    if (!emailRegex.test(formData.email)) {
      emailWarnNotify();
      return;
    }

    await emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          successNotify();
        },
        (error) => {
          errorNotify();
        }
      );
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <motion.h1
            className={styles.title}
            variants={titleVariants}
            initial="initial"
            animate={isInView && "animate"}
            ref={ref}
          >
            Contacta conmigo
          </motion.h1>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.itemsContainer}>
            <ul>
              <a
                href={socials.Location}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <LocationOnIcon
                    className={styles.icon}
                    style={{ fontSize: 45 }}
                  />
                  Corrientes, Corrientes. Argentina
                </li>
              </a>
              <a
                href={socials.Linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <LinkedInIcon
                    className={styles.icon}
                    style={{ fontSize: 45 }}
                  />
                  Ir a mi perfil
                </li>
              </a>
              <a href={socials.Mail} target="_blank" rel="noopener noreferrer">
                <li>
                  <EmailIcon className={styles.icon} style={{ fontSize: 45 }} />
                  eenriquez.jose@gmail.com
                </li>
              </a>
            </ul>
          </div>
          <div className={styles.formContainer}>
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className={styles.form}
              initial={{
                y: 0,
                opacity: 0,
              }}
              animate={{
                y: -40,
                opacity: 1,
              }}
              transition={{ duration: 2 }}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre"
                className={styles.input}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={styles.input}
              />
              <textarea
                name="message"
                rows={8}
                value={formData.message}
                onChange={handleChange}
                placeholder="Mensaje"
                className={styles.textarea}
              />
              <button className={styles.button}>Enviar</button>
              <ToastContainer className={styles.toaster} />
            </motion.form>
          </div>
        </div>
      </div>
      {!isMobile ? <Footer /> : <BottomNav />}
    </div>
  );
};

export default Contact;
