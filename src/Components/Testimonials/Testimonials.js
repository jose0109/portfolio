import React from "react";
import { useState } from "react";
import Slide from "./Slide";
import styles from "./testimonials.module.css";

const Testimonials = () => {
  const [slide, setSlide] = useState("item1");

  const slideChangeHandler = (e) => {
    setSlide(e.target.id);
  };

  let firstActive = slide === "item1" ? styles.active : "";
  let secondActive = slide === "item2" ? styles.active : "";

  return (
    <div className={styles.testimonials}>
      <h2>Testimonials</h2>
      <div className={styles.slider}>
        <Slide
          id="item1"
          letter="A"
          text="It was a real pleasure working with Jose. He’s a very professional person and always try to find the best solution for your needs."
          name=""
          role=""
        />
        <Slide
          id="item2"
          letter="E"
          text="We've started working with Jose recently, he really takes the time to understand your business and how to highlight it's key features through his web design."
          name=""
          role=""
        />
      </div>
      <div className={styles["slider__nav"]}>
        <a href="#item1">
          <div
            id="item1"
            className={`${styles["slider__nav-dot"]} ${firstActive}`}
            onClick={slideChangeHandler}
          ></div>
        </a>
        <a href="#item2">
          <div
            id="item2"
            className={`${styles["slider__nav-dot"]} ${secondActive}`}
            onClick={slideChangeHandler}
          ></div>
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
