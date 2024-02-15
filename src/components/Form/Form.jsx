"use client";
import styles from "./form.module.css";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  successNotify,
  warnNotify,
  errorNotify,
  emailWarnNotify,
} from "@/utils/toastify.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Form = () => {
  const ref = useRef();
  const formRef = useRef();
  // const isInView = useInView(ref, { threshold: 0.5 });
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
  );
};

export default Form;
