import { fireEvent, render, screen } from "@testing-library/react";
import Formulario from "./Formulario";
import { RecoilRoot } from "recoil";

// Padão AAA (Arrange, Act and Assert em inglês).
test("o estado iniciado do formulario", () => {
  // Arrumamos o cenário (por exemplo, renderizar um componente, buscamos componentes)
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );

  // Agimos (realizamos clicks, definimos valores)
  const input = screen.getByPlaceholderText("Insira o nome do participante");
  const botao = screen.getByRole("button");

  // Afirmamos o que queremos (onde realizamos as expectativas)
  expect(input).toBeInTheDocument();
  expect(botao).toBeDisabled();
});

test("Adicionar participante", () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );

  const input = screen.getByPlaceholderText("Insira o nome do participante");
  const botao = screen.getByRole("button");

  fireEvent.change(input, {
    target: {
      value: "Gabriel Ayres",
    },
  });

  fireEvent.click(botao);

  expect(input).toHaveFocus();
  expect(input).toHaveValue("");
});

test("Nome duplicados não são aceitos", () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );

  const input = screen.getByPlaceholderText<HTMLInputElement>(
    "Insira o nome do participante"
  );
  const botao = screen.getByRole("button");

  fireEvent.change(input, {
    target: {
      value: "Gabriel Ayres",
    },
  });
  fireEvent.click(botao);

  fireEvent.change(input, {
    target: {
      value: "Gabriel Ayres",
    },
  });
  fireEvent.click(botao);

  const errorMessage = screen.getByRole("alert");

  expect(errorMessage.textContent).toBe("Nomes duplicados não são permitidos!");
});
