import React from "react";
import useAdicionaParticipante from "../state/hook/useAdicionaParticipante";
import { useErrorMessage } from "../state/hook/useErrorMessage";

const Formulario = () => {
  const [value, setValue] = React.useState<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionaParticipante();

  const errorMessage = useErrorMessage();

  function adicionarParticipante(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    adicionarNaLista(value);
    setValue("");
    inputRef.current?.focus();
  }

  return (
    <form onSubmit={adicionarParticipante}>
      <input
        type="text"
        placeholder="Insira o nome do participante"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
      />
      {errorMessage && <p role="alert">{errorMessage}</p>}
      <button disabled={!value}>Inscrever usuário</button>
    </form>
  );
};

export default Formulario;
