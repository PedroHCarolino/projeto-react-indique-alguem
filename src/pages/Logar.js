import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Modal.module.css";
import Input from "../components/formulario/Input";
import LinkButton from "../components/layout/LinkButton";
import { toast } from "react-toastify";

export default function Logar() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Login = async () => {
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

    const resposta = await axios.post(`http://127.0.0.1:3001/usuarios/auth`, {
      email,
      password,
    });

    console.log(resposta);
    if (resposta.data && resposta.status === 200) {
      localStorage.setItem("usuario", JSON.stringify(resposta.data));
      navigate("/profissionais");
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
    }

    return (
      <div className={styles.modal}>
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
            <button
              className={styles.btn}
              text="Entrar"
              onClick={(e) => Login(e)}
            >
              Entrar
            </button>
          </label>

          <div className={styles.criar_conta}>
            Ainda não tem uma conta?{" "}
            <LinkButton to="../newusuario" text="Clique aqui!" />
          </div>
        </form>
      </div>
    );
  };
}
