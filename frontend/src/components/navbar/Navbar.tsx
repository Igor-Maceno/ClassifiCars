import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink to='/' className={styles.brand}>
        Classifi<span>Cars</span>
      </NavLink>
      <ul className={styles.nav_links}>
        <li>
          <NavLink to='#'>Comprar</NavLink>
        </li>
        <li>
          <NavLink to='#'>Vender</NavLink>
        </li>
        <li>
          <NavLink to='#'>Notícias</NavLink>
        </li>
      </ul>
      <NavLink to="/login" className={styles.login}>Entrar</NavLink>
    </nav>
  )
}

export default Navbar 