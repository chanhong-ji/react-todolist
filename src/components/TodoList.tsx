import { useRecoilValue } from "recoil";
import { todoSelector } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

const TodoList = () => {
  const [todo, doing, done] = useRecoilValue(todoSelector);

  return (
    <div>
      <h1>To Do</h1>
      <hr />
      <CreateTodo />
      <ul>
        {todo.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
      <h1>doing</h1>
      <hr />
      <ul>
        {doing.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
      <h1>Done</h1>
      <hr />
      <ul>
        {done.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
