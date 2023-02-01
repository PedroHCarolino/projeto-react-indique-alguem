import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Modal.module.css";
import Input from "../components/formulario/Input";
import LinkButton from "../components/layout/LinkButton";
import { toast } from "react-toastify";

const Modal = ({ id = "modal", onClose = () => {}, children }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  } 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault()
    if (!email && !password) {
      toast("Username ou senha incorretos!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    const resposta = await axios.post(
      `https://indique-alguem-back-end.herokuapp.com/usuarios/auth`,
      {
        email,
        password,
      }
      );
      console.log(resposta)
    if (resposta.data && resposta.status === 200) {
      toast("Bem-vindos!!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      localStorage.setItem("usuario", JSON.stringify(resposta.data));
      navigate("/telapro"); 
    }
  };
  // console.log(login)

  return (
    <div id="modal" className={styles.modal} onClick={handleOutsideClick}>
      <div className={styles.container}>
        <button className={styles.close} onClick={onClose} />
        <div className={styles.content}>{children}</div>

        <h1>Bem Vindo ao Indique Alguém</h1>

        <form className={styles.form_modal}>
          <label>
            <Input
              type="text"
              text="E-mail"
              placeholder="E-mail"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Input
              type="password"
              text="Senha"
              placeholder="Senha"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <button className={styles.btn} text="Entrar" onClick={(e) => login(e)}>
              Entrar
            </button>
          </label>

          <div className={styles.criar_conta}>
            Ainda não tem uma conta?{" "}
            <LinkButton to="../newusuario" text="Clique aqui!" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
