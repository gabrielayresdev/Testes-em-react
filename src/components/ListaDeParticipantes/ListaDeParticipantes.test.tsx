import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import ListaDeParticipantes from "./ListaDeParticipantes";
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";

jest.mock("../../state/hook/useListaDeParticipantes", () => {
  return { useListaDeParticipantes: jest.fn() };
});

describe("Uma lista vazia de participantes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });
  test("Lista deve ser renderizada vazia", () => {
    render(
      <RecoilRoot>
        <ListaDeParticipantes />
      </RecoilRoot>
    );

    const nomes = screen.queryAllByRole("listitem");

    expect(nomes).toHaveLength(0);
  });
});

describe("Uma lista preenchida de participantes", () => {
  const participantes = ["André", "Lucas"];

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
  });
  test("Lista deve ser renderizada com elementos se houverem participantes", () => {
    render(
      <RecoilRoot>
        <ListaDeParticipantes />
      </RecoilRoot>
    );

    const nomes = screen.queryAllByRole("listitem");

    expect(nomes).toHaveLength(participantes.length);
  });
});
