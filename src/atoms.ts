import { atom, selector } from "recoil";

const savedCategories = localStorage.getItem("category");
const parsedCategories = savedCategories ? JSON.parse(savedCategories) : [];

const savedTodos = localStorage.getItem("todos");
const parsedTodos = savedTodos ? JSON.parse(savedTodos) : [];

export interface ITodo {
  text: string;
  id: number;
  category: Categories;
}

export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export const todoState = atom<ITodo[]>({
  key: "todoState",
  default: parsedTodos,
});

export const categoryState = atom<Categories>({
  key: "categoryState",
  default: Categories.TO_DO,
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(categoryState);
    return todos.filter((todo) => todo.category === category);
  },
});

export const customCategory = atom<string[]>({
  key: "customCategory",
  default: parsedCategories,
});
