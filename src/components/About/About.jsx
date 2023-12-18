import styles from "./about.module.css";
import StackSlider from "../StackSlider/StackSlider";

const About = () => {
  const handleSubmit = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.aboutContainer}>
          <StackSlider />
        </div>
      </div>
    </div>
  );
};

export default About;
