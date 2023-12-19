import styles from "./contact.module.css";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    trasition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <motion.h1
              variants={variants}
              initial="initial"
              animate="animate"
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Let's get in touch!
            </motion.h1>
            <div className={styles.itemsContainer}>
              <h2>
                <EmailIcon className={styles.icon} /> 
                Mail
              </h2>
              <span>eenriquez.jose@gmail.com</span>
            </div>
            <div className={styles.itemsContainer}>
              <h2>
                <WhatsAppIcon className={styles.icon} />
                Phone
              </h2>
              <span>+54 379 4277204</span>
            </div>
          </div>
          <div className={styles.formContainer}>
            <motion.form
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
