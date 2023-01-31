import DadosProjetos from "./DadosProjetos";
import InformacoesPessoais from "./InformacoesPessoais";
import styles from "./Perfil.module.css";

function Perfil() {
    return (
      <div className={styles.container_perfil}>
        <div className={styles.aside_informacoes}>
          <InformacoesPessoais/>
        </div>
        <div className={styles.main_dados}>
          <DadosProjetos/>
        </div>
      </div>
    );
  }
  
  export default Perfil;