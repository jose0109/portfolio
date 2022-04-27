import React from "react";
import styles from "./feature.module.css";

const Feature = (props) => {
  return (
    <div className={styles.feature}>
      <div className={styles.icon}>
        {props.icon}
      </div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.description}>{props.mainDescription}</div>
      <div className={styles.subtitle}>{props.firstSubtitle}</div>
      <div className={styles.description}>{props.firstDescription}</div>
      <div className={styles.subtitle}>{props.secSubtitle}</div>
      <div className={styles.description}>{props.secDescription}</div>
    </div>
  );
};

export default Feature;
