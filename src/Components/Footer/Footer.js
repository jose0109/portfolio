import React from "react";
import styles from "./footer.module.css";
import SocialIcon from "./SocialIcon";

const Contact = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>JDM</div>
      <div className={styles.slogan}>
        Living, learning, & leveling up one day at a time.
      </div>
      <div className={styles.social}>
        <SocialIcon
          icon={<i class='bx bxl-linkedin'></i>}
          link="https://www.linkedin.com/in/jose-martinezu/"
        />
        <SocialIcon
          icon={<i class="bx bxl-github"></i>}
          link="https://github.com/jose0109"
        />
        <SocialIcon
          icon={<i class='bx bx-envelope'></i>}
          link="mailto:martinezujd@gmail.com"
        />
      </div>
    </div>
  );
};

export default Contact;
