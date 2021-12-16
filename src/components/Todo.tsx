import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, customCategoryState, ITodo, todoState } from "../atoms";

const Todo = ({ text, category, id }: ITodo) => {
  const setTodos = useSetRecoilState(todoState);
  const customCategories = useRecoilValue(customCategoryState);

  function onClick(event: React.MouseEvent<HTMLButtonElement>) {
    const {
      currentTarget: { name },
    } = event;
    setTodos((prevTodos) => {
      const index = prevTodos.findIndex((todo) => todo.id === id);
      const newTodo = { text, id, category: name as any };
      return [
        ...prevTodos.slice(0, index),
        newTodo,
        ...prevTodos.slice(index + 1),
      ];
    });
  }

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          DOING
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          DONE
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          TO_DO
        </button>
      )}
      {customCategories.map(
        (item, index) =>
          category !== item && (
            <button key={index} name={item} onClick={onClick}>
              {item}
            </button>
          )
      )}
    </li>
  );
};

export default Todo;
