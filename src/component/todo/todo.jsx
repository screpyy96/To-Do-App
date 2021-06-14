import { nanoid } from "@reduxjs/toolkit";
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
      alert("add something");
    } else {
      props.addTodo({
        item: todo,
        id: nanoid(),
        // id: Math.floor(Math.random() * 1000),
        completed: false,
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
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
