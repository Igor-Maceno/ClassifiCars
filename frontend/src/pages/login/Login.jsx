import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({
      email: email,
      password: password,
    });
  };

  console.log(user);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <NavLink to="/" className={styles.brand}>
          Classifi<span>Cars</span>
        </NavLink>
      </div>
      <div className={styles.login}>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label>
            <input
              type="email"
              name="email"
              id="userEmail"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              id="userpass"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <input type="submit" value="Acessar" className={styles.submit} />
          </label>
        </form>
        <p>
          Esqueceu a senha? <a href="#">Clique aqui</a>
        </p>
        <p>
          Não tem cadastro? <NavLink to="/register">Clique aqui</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
