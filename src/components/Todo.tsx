import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, customCategory, ITodo, todoState } from "../atoms";

const Todo = ({ text, category, id }: ITodo) => {
  const setTodos = useSetRecoilState(todoState);
  function onClickTodoBtn(event: React.MouseEvent<HTMLButtonElement>) {
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

  const customCategories = useRecoilValue(customCategory);

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClickTodoBtn}>
          DOING
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClickTodoBtn}>
          DONE
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClickTodoBtn}>
          TO_DO
        </button>
      )}
      {customCategories.map(
        (item) =>
          category !== item && (
            <button key={item} name={item} onClick={onClickTodoBtn}>
              {item}
            </button>
          )
      )}
    </li>
  );
};

export default Todo;
