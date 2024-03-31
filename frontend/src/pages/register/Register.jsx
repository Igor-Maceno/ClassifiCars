import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import styles from "./Register.module.css";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPass: '',
  });

  const handleRegister = (e) => {
    e.preventDefault();
    setUser({
      name: name,
      email: email,
      password: password,
      confirmPass: confirmPass
    });
  }

  console.log(user);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <NavLink to="/" className={styles.brand}>
          Classifi<span>Cars</span>
        </NavLink>
      </div>
      <div className={styles.register}>
        <h1>Cadastro</h1>
        <form onSubmit={handleRegister}>
          <label>
            <input
              type="text"
              name="name"
              id="userName"
              placeholder="Nome completo*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              type="email"
              name="email"
              id="userEmail"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              id="userpass"
              placeholder="Senha*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              type="password"
              name="confirmPassword"
              id="userConfirmPass"
              placeholder="Confirmação de senha*"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              required
            />
          </label>
          <label>
            <input type="submit" value="Cadastrar" className={styles.submit} />
          </label>
        </form>
      </div>
    </div>
  )
}

export default Register;
