import styles from "./contact.module.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
  intial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const slideVariants = {
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
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_b5at8ue",
        "template_rliwto9",
        formRef.current,
        "vxpkT-TbZOwb3eaHL"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
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
              className={styles.itemsContainer}
              variants={containerVariants}
              animate={isInView && "animate"}
              ref={ref}
            >
              <motion.h2 variants={slideVariants}>
                <EmailIcon className={styles.icon} />
                Mail
              </motion.h2>
              <motion.span variants={slideVariants}>
                eenriquez.jose@gmail.com
              </motion.span>
              <motion.h2 variants={slideVariants}>
                <WhatsAppIcon className={styles.icon} />
                Phone
              </motion.h2>
              <motion.span variants={slideVariants}>
                +54 379 4277204
              </motion.span>
            </motion.div>
          </div>
          <div className={styles.formContainer}>
            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              className={styles.form}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              // transition={{ delay: 1, duration: 1 }}
              transition={{ duration: 4 }}
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className={styles.input}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className={styles.input}
              />
              <textarea
                name="message"
                rows={8}
                placeholder="Message"
                className={styles.textarea}
              />
              <button className={styles.button}>Send</button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
