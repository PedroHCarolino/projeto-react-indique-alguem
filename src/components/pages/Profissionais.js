import Profissoes from "../profissoes/Profissoes";
import styles from "./Newp.module.css";

function Profissionais() {
  return (
    <div className={styles.newp_container}>
      <h1>Profissionais</h1>
      <Profissoes />
    </div>
  );
}

export default Profissionais;
