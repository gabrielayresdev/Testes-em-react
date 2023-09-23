import { render, screen } from "@testing-library/react";
import Formulario from "./Formulario";

// Padão AAA (Arrange, Act and Assert em inglês).
test("o estado iniciado do formulario", () => {
  // Arrumamos o cenário (por exemplo, renderizar um componente, buscamos componentes)
  render(<Formulario />);

  // Agimos (realizamos clicks, definimos valores)
  const input = screen.getByPlaceholderText("Insira o nome do participante");
  const botao = screen.getByRole("button");

  // Afirmamos o que queremos (onde realizamos as expectativas)
  expect(input).toBeInTheDocument();
  expect(botao).toBeDisabled();
});
