import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <NavLink to="/" className={styles.brand}>
          Classifi<span>Cars</span>
        </NavLink>
      </div>
      <div className={styles.login}>
        <h1>Login</h1>
        <form>
          <label>
            <input
              type="text"
              name="email"
              id="userEmail"
              placeholder="Email"
            />
          </label>
          <label>
            <input
              type="text"
              name="password"
              id="userpass"
              placeholder="Senha"
            />
          </label>
          <label>
            <input type="submit" value="Acessar" className={styles.submit}/>
          </label>
        </form>
        <p>Esqueceu a senha? <a href="#">Clique aqui</a></p>
        <p>Não tem cadastro? <NavLink to='/register'>Clique aqui</NavLink></p>
      </div>
    </div>
  );
};

export default Login;
