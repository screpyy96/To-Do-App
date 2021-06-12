import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../../store/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todo = (props) => {
  console.log("props", props);

  const [todo, setTodo] = useState("");

  const addList = () => {
    if (todo === "") {
      alert("input empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        completed: false,
        item: todo,
      });
    }
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e)} value={todo} />
      <button type="submit" onClick={() => addList()}>
        Add
      </button>
      <ul>
        {props.todos.length > 0 &&
          props.todos.map((item) => {
            return <li key={item.id}>{item.item}</li>;
          })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
