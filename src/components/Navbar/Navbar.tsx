import { useState } from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <h3>
        <a className={styles.title} href="/">
          tanmayi.dev
        </a>
      </h3>
      <div className={styles.menu}>
        <FontAwesomeIcon
          className={styles.menuBtn}
          icon={menuOpen ? faXmark : faBars}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />

        <ul
          className={styles.menuItems}
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* Mobile Nav */}
      <div className={`${styles.mobile} ${menuOpen ? styles.mobileMenu : ""}`}>
        <span className={styles.menuClose}>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          />
        </span>
        <ul
          className={styles.mobileMenuItems}
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
