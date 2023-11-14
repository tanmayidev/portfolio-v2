import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.aboutContainer} id="about">
      <div className={styles.imgContainer}>
        <img
          src={getImageUrl("about/tanmayiWorking.jpeg")}
          alt="image of me working with laptop"
        />
      </div>
      <div className={styles.details}>
        <h3 className={styles.heading}>About me</h3>
        <h4 className={styles.subHeading}>
          A passionate Software Engineer based in Bengaluru, India
        </h4>
        <p className={styles.description}>
          I embrace the invigorating journey of exploring innovative solutions
          to real&#8209;world problems through software. My unwavering devotion
          to clean&#8209;code and clean&#8209;architecture principles coupled
          with rigorous discipline of test&#8209;driven development, guarantees
          the robust and reliable delivery of software&#8209;solutions. My
          skillset encompasses a wide range of technologies, including Django,
          Node.js, React, Next.js, Docker, Jenkins, Kubernetes and SQL/NoSQL
          databases.
        </p>
      </div>
    </section>
  );
};
