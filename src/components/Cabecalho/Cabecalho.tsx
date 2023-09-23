import React from "react";
import styles from "./Cabecalho.module.css";

const Cabecalho = () => {
  return (
    <header className={styles.cabecalho}>
      <img
        src={
          window.innerWidth > 768
            ? "/imagens/logo.png"
            : "/imagens/logo-pequeno.png"
        }
        alt="Logo do site"
      />
      <img
        className={styles.participante}
        src="/imagens/participante.png"
        alt="Participante com um presente na mão"
      />
    </header>
  );
};

export default Cabecalho;
