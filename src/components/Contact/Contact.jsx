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
            Let's get in touch!
          </motion.h1>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.imageContainer}>
            <img src="/SVG/contact.png" alt="image" className={styles.image} />
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
                placeholder="Name"
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
                placeholder="Message"
                className={styles.textarea}
              />
              <button className={styles.button}>Send</button>
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
