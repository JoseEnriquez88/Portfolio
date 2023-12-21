import styles from "./contact.module.css";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import contact from "../../assets/SVG/contact.png";
import Footer from "../Footer/Footer";

const h1Variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
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

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const imgVariants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  floating: {
    y: [0, 15, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    message: "",
  });

  const succesNotify = () => {
    toast.success("Thanks for communicating. I'll be in touch soon");
  };

  const errorNotify = () => {
    toast.error("There was an error. Please try again");
  };

  const warnNotify = () => {
    toast.error("Make sure you had complete all fields.");
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
      formData.mail === "" ||
      formData.message === ""
    ) {
      warnNotify();
      return;
    }

    await emailjs
      .sendForm(
        "service_b5at8ue",
        "template_rliwto9",
        formRef.current,
        "vxpkT-TbZOwb3eaHL"
      )
      .then(
        (result) => {
          setFormData({
            name: "",
            mail: "",
            message: "",
          });
          succesNotify();
        },
        (error) => {
          errorNotify();
        }
      );
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <motion.h1
              variants={h1Variants}
              initial="initial"
              animate={isInView && "animate"}
              ref={ref}
            >
              Let's get in touch!
            </motion.h1>
            <motion.div
              className={styles.imageContainer}
              variants={containerVariants}
              animate={isInView && "animate"}
              ref={ref}
            >
              <img
                src={contact}
                alt="si ves esto no cargó la imagen"
                className={styles.image}
              />
            </motion.div>
          </div>
          <div className={styles.formContainer}>
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className={styles.form}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              // transition={{ delay: 1, duration: 1 }}
              transition={{ duration: 4 }}
            >
              <input
                type="text"
                name="name"
                // required
                value={formData.name}
                placeholder="Name"
                className={styles.input}
                onChange={handleChange}
              />
              <input
                type="mail"
                name="mail"
                // required
                value={formData.mail}
                placeholder="Mail"
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
              <Toaster
                position="bottom-center"
                toastOptions={{
                  className: "",
                  style: {
                    border: "2px solid #142d4c",
                    padding: "10px",
                    color: "#ececec",
                    background: "#142d4c",
                    marginBottom: "50px",
                  },
                  duration: 5000,
                }}
              />
            </motion.form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
