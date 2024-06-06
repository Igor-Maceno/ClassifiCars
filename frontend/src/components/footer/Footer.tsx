import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul>
          <th>Comprar</th>
          <li>Usados</li>
          <li>Seminovos</li>
          <li>Novos</li>
        </ul>
        <ul>
          <th>Vender</th>
          <li>Carro</li>
          <li>Moto</li>
          <li>Anúncios</li>
        </ul>
        <ul>
          <th>Notícias</th>
          <li>Carro</li>
          <li>Moto</li>
          <li>Recentes</li>
        </ul>
        <ul>
          <th>Acesso</th>
          <li>Login</li>
          <li>Cadastro</li>
          <li>Recuperar acesso</li>
        </ul>
      </nav>
      <NavLink to="/" className={styles.brand}>
        Classifi<span>Cars</span> &copy; 2024
      </NavLink>
    </footer>
  );
};

export default Footer;
