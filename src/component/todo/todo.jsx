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

  const [value, setValue] = useState("");

  const addTodo = () => {
    if (value === "") {
      alert("input empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        completed: false,
        value,
      });
    }
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e)} value={value} />
      <button type="submit" onClick={() => addTodo()}>
        Add
      </button>
      <ul>
        {props.todos.length > 0 &&
          props.todos.map((item) => {
            return <li key={item.id}>{item.value}</li>;
          })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
