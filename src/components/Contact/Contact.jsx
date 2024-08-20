import React from "react";

import styles from "./Contact.module.css";
import githubIcon from "../assets/contact/githubIcon.png"
import emailIcon from "../assets/contact/emailIcon.png"
import linkedinIcon from "../assets/contact/linkedinIcon.png"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:omkarkhude1@gmail.com">omkarkhude1@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/omkar-khude-b06371168/">linkedin.com/omkar-khude</a>
        </li>
      </ul>
    </footer>
  );
};