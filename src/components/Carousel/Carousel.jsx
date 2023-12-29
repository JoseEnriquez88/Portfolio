import styles from "./carousel.module.css";
import projects from "../../utils/projects.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <Slider {...settings}>
          {projects.data.map((project, index) => (
            <div className={styles.cardContainer} key={index}>
              <div className={styles.card}>
                <div className={styles.frontContent}>
                  <img
                    src={project.image}
                    alt="Si ves esto no cargó la imagen"
                    className={styles.img}
                  />
                </div>
                <div className={styles.content}>
                  <p className={styles.heading}>{project.name}</p>
                  <p>{project.type}</p>
                  <div className={styles.iconContainer}>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon className={styles.icon} />
                    </a>
                    {project.deploy && (
                      <a
                        href={project.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LanguageIcon className={styles.icon} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
