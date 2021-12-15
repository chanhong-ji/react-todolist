import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, todoSelector } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  function onInput(event: React.FormEvent<HTMLSelectElement>) {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value);
  }

  return (
    <div>
      <h1>To Do</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value="TO_DO">TO_DO</option>
        <option value="DOING">DOING</option>
        <option value="DONE">DONE</option>
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
