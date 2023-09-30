import React from "react";
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";

const ListaDeParticipantes = () => {
  const participantes = useListaDeParticipantes();
  return (
    <ul>
      {participantes.map((participante) => (
        <li key={participante}>{participante}</li>
      ))}
    </ul>
  );
};

export default ListaDeParticipantes;
