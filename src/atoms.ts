import { atom } from "recoil";

export interface ITodo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});

export const todoState = atom<ITodo[]>({
  key: "Todos",
  default: [],
});
