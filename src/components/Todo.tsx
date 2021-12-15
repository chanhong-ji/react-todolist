import React from "react";
import { useSetRecoilState } from "recoil";
import { ITodo, todoState } from "../atoms";

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

  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClickTodoBtn}>
          DOING
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClickTodoBtn}>
          DONE
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClickTodoBtn}>
          TO_DO
        </button>
      )}
    </li>
  );
};

export default Todo;
