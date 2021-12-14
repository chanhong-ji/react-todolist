import { useForm } from "react-hook-form";

interface IForm {
  todo: string;
}

const Todo = () => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  function onSubmit(data: IForm) {
    console.log(data.todo);
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
      <ul></ul>
    </div>
  );
};

export default Todo;
