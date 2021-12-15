import { atom, selector } from "recoil";

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

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const result = [
      todos.filter((todo) => todo.category === "TO_DO"),
      todos.filter((todo) => todo.category === "DOING"),
      todos.filter((todo) => todo.category === "DONE"),
    ];
    return result;
  },
});
