import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  Categories,
  categoryState,
  customCategoryState,
  todoSelector,
  todoState,
} from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";
import CreateCategory from "./CreateCategory";

const TodoList = () => {
  const allTodos = useRecoilValue(todoState);
  const customCategories = useRecoilValue(customCategoryState);
  const todos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  function onInput(event: React.FormEvent<HTMLSelectElement>) {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value as any);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }, [allTodos]);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(customCategories));
  }, [customCategories]);

  return (
    <div>
      <h1>To Do</h1>
      <hr />
      <CreateCategory />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>TO_DO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
        {customCategories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <CreateTodo />
      <ul>
        {todos?.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
