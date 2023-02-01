import { Link } from "react-router-dom";
import savings from "../../img/img_perfil_programador.png";
import styles from "./InformacoesPessoais.module.css";
// import LinkButton from "../layout/LinkButton";
import React from "react";
import {
  FaDev,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaRegEnvelope,
} from "react-icons/fa";

import { RedeSociais, Detalhes, DadosEndereco } from "./Styles";

function InformacoesPessoais() {
  return (
    <div className={styles.container}>
      <div className={styles.informacoes}>
        <div className={styles.dados_perfil}>
          <img src={savings} alt="Imagem perfil" />
          <h1>Alex Júnior</h1>
        </div>
        <div className={styles.funcao}>
          <FaDev size={20} />
          <span>Web Developer</span>
        </div>
        <div className={styles.redes_sociais}>
          <div>
            <Link href="https://www.youtube.com/" target={"_blank"}>
              <FaYoutube size={25} />
            </Link>
            <Link href="https://www.linkedin.com/" target={"_blank"}>
              <FaLinkedin size={25} />
            </Link>
            <Link href="https://github.com/" target={"_blank"}>
              <FaGithub size={25} />
            </Link>
          </div>
        </div>
        <div className={styles.dados_endereco}>
          <div className={styles.detalhes}>
            <FaMapMarkerAlt size={20} />
            <span>João Pessoa, Brasil</span>
          </div>
          <div className={styles.detalhes}>
            <FaRegEnvelope size={20} />
            <span>alexjr@gmail.com</span>
          </div>
        </div>
      </div>
    </div>

    // <div className="main">
    //     <div className="mainBox1">
    // <form className={styles.form_advogado}>

    //     <div className={styles.imagemPerfiladv1}></div>
    //     <div>
    //         <label>Nome: </label>
    //         <span>Luis Felipe.</span>
    //     </div>
    //     <div>
    //         <label>Sexo: </label>
    //         <span>Masculino.</span>
    //     </div>
    //     <div>
    //         <label>Profissão: </label>
    //         <span>Advogado.</span>
    //     </div>
    //     <div>
    //     <label>Endereço: </label>
    //         <span>Av Rui Carneiro, 980 - Tambaú - João Pessoa/PB.</span>
    //     </div>

    //     <div className={styles.contratar}>
    //         <LinkButton to="/newusuario" text="Contratar" />
    //     </div>
    //     <div className={styles.mensagem}>
    //         <LinkButton to="/newusuario" text="Mensagem" />
    //     </div>

    // </form>
  );
}

export default InformacoesPessoais;
