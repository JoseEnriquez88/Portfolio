import styles from "./about.module.css";
import StackSlider from "../StackSlider/StackSlider";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const links = {
  discord: "https://discord.com/channels/954778773654478940",
  github: "https://github.com/JoseEnriquez88",
  linkedin: "https://www.linkedin.com/in/joseenriquez80/",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=3794277204&text&type=phone_number&app_absent=0",
  mail: "mailto:eenriquez.jose@gmail.com",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.aboutContainer}>
          <div className={styles.subContainer}>
            <div className={styles.textContainer}>
              <h1 className={styles.about}>About Me</h1>
              <div className={styles.bioContainer}>
                <article className={styles.text}>
                  I'm a web developer with strong skills in HTML, CSS, and
                  JavaScript, enabling me to create appealing interfaces.
                  Furthermore, I have experience in developing web applications
                  using technologies such as React, Next, and Redux/Toolkit. On
                  the server side, I employ Express and relational databases
                  like SQL, Prisma, and PostgreSQL to ensure efficient
                  performance and effective data management.
                </article>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <img src="/SVG/about.png" alt="image" className={styles.image} />
            </div>
          </div>
          <div className={styles.stackContainer}>
            <StackSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
