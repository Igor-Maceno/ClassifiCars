import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";

function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
          Classifi<span>Cars</span>
        </NavLink>
        <ul className={styles.nav_links}>
          <li>
            <NavLink to="/products">Comprar</NavLink>
          </li>
          <li>
            <NavLink to="/products">Vender</NavLink>
          </li>
          <li>
            <NavLink to="/products">Notícias</NavLink>
          </li>
          <li>
            <NavLink to="/about">Sobre</NavLink>
          </li>
        </ul>
        <NavLink to="/login" className={styles.login}>
          Entrar
        </NavLink>
      </nav>
      <BreadCrumbs />
    </div>
  );
}

export default Navbar;
