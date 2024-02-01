import styles from "./about.module.css";
// import StackSlider from "../StackSlider/StackSlider";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.aboutContainer}>
          <div className={styles.subContainer}>
            <div className={styles.textContainer}>
              <h1 className={styles.about}>About Me</h1>
              <div className={styles.bioContainer}>
                <artilce className={styles.text}>
                  I'm a web developer with strong skills in HTML, CSS, and
                  JavaScript, enabling me to create appealing interfaces.
                  Furthermore, I have experience in developing web applications
                  using technologies such as React, Next, and Redux/Toolkit. On
                  the server side, I employ Express and relational databases
                  like SQL, Prisma, and PostgreSQL to ensure efficient
                  performance and effective data management.
                </artilce>
              </div>
            </div>
            <div className={styles.imageContainer}>
              {/* <img src={about} alt="image" className={styles.image} /> */}
            </div>
          </div>
          {/* <div className={styles.stackContainer}>
            <StackSlider />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
