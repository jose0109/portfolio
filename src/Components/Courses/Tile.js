import React from "react";
import styles from "./tile.module.css";

const Tile = (props) => {
  return (
    <div className={styles.tile}>
      <div className={styles.logo}>
        <img src={props.logo}></img>
      </div>

      <div className={styles.title}>
        <h3>{props.title}</h3>
      </div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.status}>
        {props.icon}
        <p>{props.status}</p>
      </div>
      <div className={styles.link}>
          <a href={props.link} target="_blank">
            <div><i class="bx bx-right-top-arrow-circle"></i></div>
            <div>{props.linkText}</div>
          </a>
      </div>
    </div>
  );
};

export default Tile;
