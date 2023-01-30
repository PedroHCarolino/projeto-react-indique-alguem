import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/logo_ia.png";
import Modal from "../pages/Modal";
import Input from "../form/Input";
import LinkButton from "../layout/LinkButton";

function Navbar() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="indique_alguem" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Início</Link>
          </li>
          <li className={styles.item}>
            <Link to="/profissionais">Profissionais</Link>
          </li>
          <li className={styles.item}>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contato">Contato</Link>
          </li>

          <div>
            <button
              className={styles.button_modal}
              onClick={() => setIsModalVisible(true)}
            >
              Login
            </button>
            {isModalVisible ? (
              <Modal onClose={() => setIsModalVisible(false)}></Modal>
            ) : null}
          </div>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
