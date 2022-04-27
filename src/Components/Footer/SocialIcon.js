import React from "react";
import styles from "./socialIcon.module.css";

const socialIcon = (props) => {
  return (
    <a href={props.link}>
        <div className={styles.icon}>{props.icon}</div>
    </a>
  );
};

export default socialIcon;
