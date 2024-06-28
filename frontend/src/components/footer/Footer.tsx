import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Footer.module.css";
import ContactForm from "../../pages/contactForm/contact";

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
      <div>
      <Link to="/contact">Contato suporte +5542991326307 - Igor</Link>
      </div>
      <NavLink to="/" className={styles.brand}>
        Classifi<span>Cars</span> &copy; 2024
      </NavLink>
    </footer>
  );
};

export default Footer;
