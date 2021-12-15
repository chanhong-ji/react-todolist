import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { todoState } from "../atoms";

interface IForm {
  todo: string;
}

const CreateTodo = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setTodos = useSetRecoilState(todoState);
  function onSubmit({ todo }: IForm) {
    setTodos((prev) => [
      ...prev,
      { text: todo, id: Date.now(), category: "TO_DO" },
    ]);
    setValue("todo", "");
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
