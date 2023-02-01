import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Select from "../formulario/Select";
import styles from "./CadastroForm.module.css";
import { toast } from "react-toastify";
// import LinkButton from "../layout/LinkButton";
// import SubmitButton from '../form/SubmitButton'
// import Endereco from './Endereco'

// let axiosConfig = {
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//   },
// };

const CadastroForm = () => {
  let navigate = useNavigate();
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [cpfOrCnpj, setCpfOrCnpj] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const cadastrarUsuario = async (e) => {
    e.preventDefault();
    const usuario = {
      nomeCompleto: nomeCompleto,
      email: email,
      password: password,
      phone: phone,
      cpfOrCnpj: cpfOrCnpj,
      dataNascimento: dataNascimento,
    };

    const response = await axios.post(
      "https://indique-alguem-back-end.herokuapp.com/usuarios",
      usuario
    );
    // .then((res) => {
    //   console.log(res.data);
    // })
    // .catch((e) => {
    //   console.log(e);
    // });

    if (response.status === 200) {
      navigate(`/endereco/${response.data.id}`);
      toast.success("Assinatura feita com Sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  

  return (
    <form className={styles.form_cliente}>
      <div className={styles.form_control}>
        <input
          className={styles.form_control}
          required
          type="text"
          name="nomeCompleto"
          id="nomeCompleto"
          placeholder="Nome Completo"
          value={nomeCompleto}
          onChange={(e) => setNomeCompleto(e.target.value)}
        />

        <input
          className={styles.form_control}
          required
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className={styles.form_control}
          type="number"
          name="cpf"
          id="cpf"
          placeholder="Informe seu CPF ou CNPJ"
          required
          value={cpfOrCnpj}
          onChange={(e) => setCpfOrCnpj(e.target.value)}
        />

        <input
          className={styles.form_control}
          required
          type="date"
          text="Data de Nascimento"
          placeholder="Informe sua data de nascimento"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
        />

        <input
          className={styles.form_control}
          required
          type="tel"
          name="telefone"
          id="telefone"
          placeholder="(00) 00000-0000"
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          className={styles.form_control}
          required
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Select name="category_id" text="Atividades" />

        <button onClick={(e) => cadastrarUsuario(e)}>cadastrar</button>
      </div>
    </form>
  );
};

export default CadastroForm;
