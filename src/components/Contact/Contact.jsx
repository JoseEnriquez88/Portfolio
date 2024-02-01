"use client";
import styles from "./contact.module.css";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h1>Let's get in touch!</h1>
            <div className={styles.imageContainer}>
              <img
                // src={contact}
                alt="img"
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                className={styles.input}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                className={styles.input}
                onChange={handleChange}
              />
              <textarea
                name="message"
                rows={8}
                value={formData.message}
                placeholder="Message"
                className={styles.textarea}
                onChange={handleChange}
              />
              <button className={styles.button}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
