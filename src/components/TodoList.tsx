import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  Categories,
  categoryState,
  customCategory,
  todoSelector,
} from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";
import { useForm } from "react-hook-form";

interface INewCategory {
  newCategory: string;
}

const TodoList = () => {
  const todos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const [customCategories, setCustomCategories] =
    useRecoilState(customCategory);
  function onInput(event: React.FormEvent<HTMLSelectElement>) {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value as any);
  }

  const { register, handleSubmit, setValue } = useForm();
  function onNewCategory({ newCategory }: INewCategory) {
    setCustomCategories((prev) => [...prev, newCategory]);
    setValue("newCategory", "");
    localStorage.setItem("category", JSON.stringify(customCategories));
  }
  return (
    <div>
      <h1>To Do</h1>
      <hr />
      <form onSubmit={handleSubmit(onNewCategory)}>
        <input {...register("newCategory", { required: "Required" })} />
        <button>Create New Category</button>
      </form>
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>TO_DO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
        {customCategories.map((cate) => (
          <option key={cate} value={cate}>
            {cate}
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
