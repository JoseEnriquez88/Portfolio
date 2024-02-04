"use client";
import styles from "./contact.module.css";
import { useState, useRef } from "react";
import Footer from "../Footer/Footer";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { NEXT_PUBLIC_SERVICE_ID, NEXT_PUBLIC_TEMPLATE_ID, NEXT_PUBLIC_USER_ID } =
  process.env;

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const successNotify = () => {
    toast.success("Thanks for communicating. I'll be in touch soon", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const errorNotify = () => {
    toast.error("There was an error. Please try again", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const warnNotify = () => {
    toast.warn("Make sure you have completed all fields.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

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
        "service_wd4xr5o",
        "template_rliwto9",
        formRef.current,
        "vxpkT-TbZOwb3eaHL"
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
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
