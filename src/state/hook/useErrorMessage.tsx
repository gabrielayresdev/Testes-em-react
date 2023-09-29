import { useRecoilValue } from "recoil";
import { errorMessage } from "../atom";

export const useErrorMessage = () => {
  const mensagem = useRecoilValue(errorMessage);
  return mensagem;
};
