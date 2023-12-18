import styles from "./stackSlider.module.css";
import logos from "../../utils/logos";

const StackSlider = () => {
  const infiniteLogos = [...logos, ...logos];

  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        {infiniteLogos.map((logo, index) => (
          <img
            src={logo}
            alt={`logo ${index}`}
            key={index}
            className={styles.img}
          />
        ))}
      </div>
    </div>
  );
};

export default StackSlider;
