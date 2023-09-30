import { errorMessage, listaParticipantesState } from "../atom";
import { useSetRecoilState } from "recoil";
import { useListaDeParticipantes } from "./useListaDeParticipantes";

const useAdicionaParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantesState);
  const lista = useListaDeParticipantes();
  const setError = useSetRecoilState(errorMessage);

  return (nomeDoParticipante: string) => {
    if (lista.includes(nomeDoParticipante)) {
      setError("Nomes duplicados não são permitidos!");
      setTimeout(() => setError(null), 3000);
      return;
    }

    return setLista((listaAtual) => [...listaAtual, nomeDoParticipante]);
  };
};

export default useAdicionaParticipante;
