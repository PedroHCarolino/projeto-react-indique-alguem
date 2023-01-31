import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from "react-router-dom";
// import { SkillsItem } from '../../services/data/skill';
// import { Projetos } from '../../services/data/projetos';
import styles from './DadosProjetos.module.css'
import Servicos from './Servicos';
import { CardsServicos } from '../Cards/CardsServicos';


function DadosProjetos() {
//   const ItensSkill = SkillsItem;
  const [showDados, setShowDados] = useState(true);
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  function handleClickMenu(isTrue) {
    if (isTrue) {
      setShowDados(true);
    } else {
      setShowDados(false);
    }
  }

  return (
    <div className={styles.container}>
      <nav>
        <div className={styles.menu}>
          <div className={styles.cabecalho}>
            <span>Sobre</span>
            <div></div>
          </div>
          {/* <div className={styles.opcoes_menu}>
            <span onClick={() => handleClickMenu(false)}>Projetos</span>
            <span onClick={() => handleClickMenu(true)}>Sobre</span>
            <div></div>
          </div> */}
        </div>
      </nav>
      <div className={styles.dados}>
        {showDados ? (
          <>
            <div className={styles.info_dados}>
              <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Caso queira saber mais sobre mim, pode estar entrando em contato atráves
                do Linkedin, <b><Link href='https://www.linkedin.com/' target={'_blank'}>Clicando aqui!</Link></b>
              </span>
            </div>
            <h1>Galeria de Projetos</h1>
            <Servicos />
            {/* <div className={styles.itens}>
              {CardsServicos.map((cardsservicos) =>
                <div className={styles.card} initial="hidden" animate="visible" variants={variants}>
                  <h3>{CardsServicos.nome}</h3>
                  <img src={CardsServicos.img} alt="" />
                  <a href={CardsServicos.github} target={'_blank'}>
                    <FaGithub size={20} />
                    Git Hub
                  </a>
                </div>
              )}
            </div> */}
            {/* <div className={styles.skills}>
              {ItensSkill.map((Item) =>
                <div className={styles.item_skills} animate={{ x: ['-100px', '100px', '0px'] }}
                  transition={{ ease: "easeOut", duration: 1 }}>
                  {Item.icon}
                  <div>
                    <h3>{Item.titulo}</h3>
                    <div className={styles.progress_bar}>
                      <div className={styles.progress} percentual={Item.Percentual}>
                        <span>{Item.Percentual}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div> */}
          </>
        ) : (
          <>
            {/* <div className={styles.itens}>
              {Projetos.map((projetos) =>
                <div className={styles.card} initial="hidden" animate="visible" variants={variants}>
                  <h3>{projetos.nome}</h3>
                  <img src={projetos.img} alt="" />
                  <a href={projetos.github} target={'_blank'}>
                    <FaGithub size={20} />
                    Git Hub
                  </a>
                </div>
              )}
            </div> */}
          </>
        )}
      </div>
    </div >
  );
}

export default DadosProjetos