import React from "react";
import Button from "../Button/Button";
import styles from "./navbar.module.css";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles["navbar__brand"]}>JDM</div>
      <div className={styles["navbar__buttons"]}>
        {/* <NavItem text="Item" /> */}
        <Button text="Contacto" link="#cta"/>
      </div>
    </div>
  );
};

export default Navbar;
