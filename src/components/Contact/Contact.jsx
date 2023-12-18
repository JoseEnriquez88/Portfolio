import styles from "./contact.module.css";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
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
            <h1>Contacta conmigo!</h1>
            <div className={styles.itemsContainer}>
              <h2>Mail</h2>
              <span>contacto@contac.com</span>
            </div>
            <div className={styles.itemsContainer}>
              <h2>Calle</h2>
              <span>742 Evergreen Terrace</span>
            </div>
            <div className={styles.itemsContainer}>
              <h2>Teléfono</h2>
              <span>+1 234 5678</span>
            </div>
          </div>
          <div className={styles.formContainer}>
            <motion.form
              className={styles.form}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              // transition={{ delay: 1, duration: 1 }}
              transition={{ duration: 3 }}
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Nombre"
                className={styles.input}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Mail"
                className={styles.input}
              />
              <textarea
                name="message"
                rows={8}
                placeholder="Mensaje"
                className={styles.textarea}
              />
              <button className={styles.button}>Enviar</button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
