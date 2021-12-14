import { useRecoilValue } from "recoil";
import { todoState } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const TodoList = () => {
  const Todos = useRecoilValue(todoState);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateTodo />
      <ul>
        {Todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
