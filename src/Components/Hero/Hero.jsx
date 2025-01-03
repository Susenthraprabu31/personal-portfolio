import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Susenthra Prabu</h1>
        <p className={styles.description}>
          I'm a full-stack developer with a experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="https://drive.google.com/file/d/1_l8PhJtI_N_1-BgcYUDvjqxFBiT2bKIt/view?pli=1" className={styles.contactBtn}>
        Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
