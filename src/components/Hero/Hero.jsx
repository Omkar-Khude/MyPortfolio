import React from "react";

import styles from "./Hero.module.css";
import HeroImg from "../assets/hero/heroImage.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Omkar Khude</h1>
        <p className={styles.description}>
          I'm a frontend developer specialized in crafting responsive and visually appealing user interfaces using HTML, CSS, React and JavaScript.
        </p>
        <a href="mailto:omkarkhude1@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={HeroImg}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};