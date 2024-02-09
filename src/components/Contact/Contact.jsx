"use client";
import styles from "./contact.module.css";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { successNotify, warnNotify, errorNotify } from "@/utils/toastify.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import Footer from "../Footer/Footer";
import BottomNav from "../NavBarBottom/BottomNav";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const links = {
  location:
    "https://www.google.com.ar/maps/place/Corrientes/@-27.4861694,-58.8335862,13z/data=!3m1!4b1!4m6!3m5!1s0x94456b79d5bed36b:0xfa999f1ef3b40646!8m2!3d-27.4692131!4d-58.8306349!16zL20vMDJ0Ymo1?entry=ttu",
  linkedin: "https://www.linkedin.com/in/joseenriquez80/",
  mail: "mailto:eenriquez.jose@gmail.com",
};

const titleVariants = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: -25,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

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
                href={links.location}
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
                href={links.linkedin}
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
              <a href={links.mail} target="_blank" rel="noopener noreferrer">
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
