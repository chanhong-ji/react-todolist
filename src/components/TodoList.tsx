import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  categoryState,
  CategoriesState,
  todoSelector,
  todoState,
} from "../atoms";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import CategoryForm from "./CategoryForm";

const TodoList = () => {
  const allTodos = useRecoilValue(todoState);
  const categories = useRecoilValue(CategoriesState);
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
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  return (
    <div>
      <h1>To Do</h1>
      <hr />
      <CategoryForm />
      <select value={category} onInput={onInput}>
        <option value="TO_DO">TO DO</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <TodoForm />
      <ul>
        {todos?.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
