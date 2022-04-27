import React from "react";
import styles from "./button.module.css";

const Button = (props) => {
  return (
    <a href={props.link} target={props.target} rel="noreferrer">
      <div
        style={{ color: `${props.color}`, border: `1px solid ${props.color}` }}
        className={styles.button}
      >
        {props.text}
      </div>
    </a>
  );
};

export default Button;
