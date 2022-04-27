import React from "react";
import styles from "./slide.module.css";

const Slide = (props) => {
  return (
    <div id={props.id} className={styles.slide}>
      <div className={styles.avatar}><div className={styles.letter}>{props.letter}</div></div>
      <div className={styles.text}>"{props.text}"</div>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.role}>{props.role}</div>
    </div>
  );
};

export default Slide;
