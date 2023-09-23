import React from "react";

const Formulario = () => {
  return (
    <form>
      <input type="text" placeholder="Insira o nome do participante" />
      <button disabled={true}>Inscrever usuário</button>
    </form>
  );
};

export default Formulario;
