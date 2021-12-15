import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, todoState } from "../atoms";

interface IForm {
  todo: string;
}

const CreateTodo = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [todos, setTodos] = useRecoilState(todoState);
  const category = useRecoilValue(categoryState);
  function onSubmit({ todo }: IForm) {
    setTodos((prev) => [...prev, { text: todo, id: Date.now(), category }]);
    setValue("todo", "");
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("todo", {
          required: "Please write a Todo.",
        })}
        placeholder="Todo"
      />
      <button>New Todo</button>
    </form>
  );
};

export default CreateTodo;
