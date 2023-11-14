import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import skills from "../../data/skills.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export const Hero = () => {
  return (
    <section id="#home" className={styles.heroContainer}>
      <div className={styles.content}>
        <div className={styles.details}>
          <h1 className={styles.title}>Software Engineer</h1>
          <p className={styles.description}>
            Hi, I'm Tanmayi D. A passionate Software Engineer based in
            Bengaluru, India.
          </p>
          <div className={styles.socialLinks}>
            <FontAwesomeIcon className={styles.socialLink} icon={faLinkedin} />
            <FontAwesomeIcon
              className={styles.socialLink}
              icon={faSquareGithub}
            />
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img src={getImageUrl("hero/tanmayi1.png")} alt="image of me" />
        </div>
      </div>
      <div className={styles.skills}>
        <p>Tech Stack</p>
        <div>
          <ul className={styles.skillItems}>
            {/* TODO: Add Jenkins docker image and remove sql, mongoDB. Kubernetes? */}
            {skills.map((skill, id) => (
              <li key={id}>
                <img
                  className={styles.skillImg}
                  src={getImageUrl(skill.imageSrc)}
                  alt={`Image of ${skill.title}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
