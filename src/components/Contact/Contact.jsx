"use client";
import styles from "./contact.module.css";
import { useRef, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import emailjs from "@emailjs/browser";
import { successNotify, warnNotify, errorNotify } from "@/utils/toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setIsMobile(window.innerWidth <= 800);
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
          <h1 className={styles.title}>Let's get in touch!</h1>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.imageContainer}>
            <img src="/SVG/contact.png" alt="image" className={styles.image} />
          </div>
          <div className={styles.formContainer}>
            <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
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
            </form>
          </div>
        </div>
      </div>
      {!isMobile && <Footer />}
    </div>
  );
};

export default Contact;
