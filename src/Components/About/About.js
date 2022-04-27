import React from "react";
import styles from "./about.module.css";

const About = (props) => {
  return (
    <div className={styles.about}>
      <div className={styles["about-content"]}>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default About;

