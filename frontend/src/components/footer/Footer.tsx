import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <NavLink to="/" className={styles.brand}>
        Classifi<span>Cars</span>
      </NavLink>
    </footer>
  );
};

export default Footer;
