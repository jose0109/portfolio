import React from "react";
import { useState } from "react";
import Slide from "./Slide";
import styles from "./testimonials.module.css";

const Testimonials = () => {

  const [slide, setSlide] = useState("item1")

  const slideChangeHandler = (e) => {
    setSlide(e.target.id)
  }

  let firstActive = slide === "item1" ? styles.active:'';
  let secondActive = slide === "item2" ? styles.active:'';

  return (
    <div className={styles.testimonials}>
      <h2>Testimonials</h2>
      <div className={styles.slider}>
        <Slide
        id='item1'
          letter="M"
          text="Matt was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish."
          name="Marco Benitez"
          role="Software Developer, Company"
        />
        <Slide
        id='item2'
          letter="M"
          text="Matt was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish."
          name="Marco Benitez"
          role="Software Developer, Company"
        />
      </div>
      <div className={styles["slider__nav"]}>
        <a href="#item1"><div id="item1" className={`${styles['slider__nav-dot']} ${firstActive}`} onClick={slideChangeHandler}></div></a>
        <a href="#item2"><div id="item2" className={`${styles['slider__nav-dot']} ${secondActive}`} onClick={slideChangeHandler}></div></a>
      </div>
    </div>
  );
};

export default Testimonials;
