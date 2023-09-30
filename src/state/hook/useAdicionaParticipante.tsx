import { errorMessage, listaParticipantesState } from "../atom";
import { useRecoilValue, useSetRecoilState } from "recoil";

const useAdicionaParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantesState);
  const lista = useRecoilValue(listaParticipantesState);
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
