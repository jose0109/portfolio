import React from "react";
import Button from "../Button/Button";
import styles from "./cta.module.css";

const CTA = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cta}>
        <h2>Start a project</h2>
        <p>Are you interested in working together? Let's set a meeting. </p>
        <Button
          text="Let's begin"
          color="white"
          link="mailto:martinezujd@gmail.com"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default CTA;
