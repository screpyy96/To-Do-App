import { render } from "react-dom";
import Todo from "./component/todo/";

const app = <Todo />;
const here = document.querySelector("#here");

render(app, here);
