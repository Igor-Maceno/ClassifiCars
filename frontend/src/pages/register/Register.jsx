import React from 'react'
import { NavLink } from "react-router-dom";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <NavLink to="/" className={styles.brand}>
          Classifi<span>Cars</span>
        </NavLink>
      </div>
      <div className={styles.register}>
        <h1>Cadastro</h1>
        <form>
        <label>
            <input
              type="text"
              name="name"
              id="userName"
              placeholder="Name completo*"
              required
            />
          </label>
          <label>
            <input
              type="text"
              name="email"
              id="userEmail"
              placeholder="Email*"
              required
            />
          </label>
          <label>
            <input
              type="text"
              name="password"
              id="userpass"
              placeholder="Senha*"
              required
            />
          </label>
          <label>
            <input
              type="text"
              name="confirmPassword"
              id="userConfirmPass"
              placeholder="Confirmação de senha*"
              required
            />
          </label>
          <label>
            <input type="submit" value="Acessar" className={styles.submit}/>
          </label>
        </form>
      </div>
    </div>
  )
}

export default Register