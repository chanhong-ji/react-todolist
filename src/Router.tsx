import { BrowserRouter, Route, Switch } from "react-router-dom";
import Todo from "./routes/Todo";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Todo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
