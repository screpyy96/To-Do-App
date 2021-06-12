import { render } from "react-dom";
import { Provider } from "react-redux";
import Todo from "./component/todo/";
import DisplayTodo from "./component/todo/display-todo";
import { store } from "./store/store";

const app = (
  <Provider store={store}>
    <Todo />
    <DisplayTodo />
  </Provider>
);
const here = document.querySelector("#here");

render(app, here);
