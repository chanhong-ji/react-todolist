import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

const todoState = atom<ITodo[]>({
  key: "Todos",
  default: [],
});

interface IForm {
  todo: string;
}

interface ITodo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

const Todo = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [todos, setTodos] = useRecoilState<ITodo[]>(todoState);
  function onSubmit({ todo }: IForm) {
    setTodos((prev) => [
      { text: todo, id: Date.now(), category: "TO_DO" },
      ...prev,
    ]);
    setValue("todo", "");
  }
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("todo", {
            required: "Please write a Todo.",
          })}
          placeholder="Todo"
        />
        <button>New Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
