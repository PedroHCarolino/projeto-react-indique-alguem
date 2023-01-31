import styles from "./Servicos.module.css";
import { Link } from "react-router-dom";
import projeto_listadetarefas from "../../img/projeto_listadetarefas.png";
import projeto_cronometro from "../../img/projeto_cronometro.png";
import projeto_clima_tempo from "../../img/projeto_clima_tempo.png";
import { FaGithub, FaInstagram } from "react-icons/fa";

function Servicos() {
  return (
    <div className={styles.itens}>
      <div className={styles.card}>
        <h3>Cronometro</h3>
        <img src={projeto_cronometro} alt="projeto_cronometro" />
        <Link href="https://github.com/" target={"_blank"}>
          <FaGithub size={25} /> Git Hub
        </Link>
      </div>
      <div className={styles.card}>
        <h3>Lista de Tarefas</h3>
        <img src={projeto_listadetarefas} alt="projeto_listadetarefas" />
        <Link href="https://github.com/" target={"_blank"}>
          <FaGithub size={25} /> Git Hub
        </Link>
      </div>
      <div className={styles.card}>
        <h3>Clima Tempo</h3>
        <img src={projeto_clima_tempo} alt="projeto_clima_tempo" />
        <Link href="https://github.com/" target={"_blank"}>
          <FaGithub size={25} /> Git Hub
        </Link>
      </div>
    </div>
  );
}

export default Servicos;
