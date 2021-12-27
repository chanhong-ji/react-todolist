import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CategoriesState, ITodo, todoState } from "../atoms";

const Todo = ({ text, category, id }: ITodo) => {
  const setTodos = useSetRecoilState(todoState);
  const categories = useRecoilValue(CategoriesState);

  function onBtnClick(event: React.MouseEvent<HTMLButtonElement>) {
    const {
      currentTarget: { name },
    } = event;
    setTodos((prevTodos) => {
      const copiedTodos = [...prevTodos];
      const targetIndex = prevTodos.findIndex((item) => item.id === id);
      copiedTodos.splice(targetIndex, 1, { text, id, category: name });
      return copiedTodos;
    });
  }

  return (
    <li>
      <span>{text}</span>
      {categories.map(
        (item, index) =>
          category !== item && (
            <button key={index} name={item} onClick={onBtnClick}>
              {item}
            </button>
          )
      )}
    </li>
  );
};

export default Todo;
