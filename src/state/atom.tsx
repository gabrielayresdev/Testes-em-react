import { atom } from "recoil";

export const listaParticipantesState = atom<string[]>({
  key: "listaParticipantesState",
  default: [],
});

export const errorMessage = atom<string | null>({
  key: "errorMessage",
  default: null,
});
