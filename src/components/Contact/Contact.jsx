"use client";
import styles from "./contact.module.css";
import { useState } from "react";
import Footer from "../Footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
            <form className={styles.form}>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                className={styles.input}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                className={styles.input}
              />
              <textarea
                name="message"
                rows={8}
                value={formData.message}
                placeholder="Message"
                className={styles.textarea}
              />
              <button className={styles.button}>Send</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
