import { atom, selector } from "recoil";

export interface ITodo {
  text: string;
  id: number;
  category: string;
}

export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});

export const todoState = atom<ITodo[]>({
  key: "todoState",
  default: JSON.parse(localStorage.getItem("todos") || "[]"),
});

export const categoryState = atom({
  key: "categoryState",
  default: "TO_DO",
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(categoryState);
    return todos.filter((todo) => todo.category === category);
  },
});

export const CategoriesState = atom<string[]>({
  key: "categoriesState",
  default: JSON.parse(localStorage.getItem("categories") || "[]"),
});
