import React from "react";
import { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

const TodoItem = ({ item, updateTodo, removeTodo, completeTodo }) => {
  const inputRef = useRef(true);

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  const changeFocus = () => {
    inputRef.crrent.disabled = false;
    inputRef.current.focus();
  };
  return (
    <div>
      <li>
        <textarea
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.item}
          onKeyPress={(e) => update(item.id, inputRef.current.valueOf, e)}
        />
      </li>
      <div>
        <button onClick={() => changeFocus()}>
          <AiFillEdit />
        </button>
        {item.completed === false && (
          <button style={{ color: "green" }} onClick={completeTodo(item.id)}>
            <IoCheckmarkDoneSharp />
          </button>
        )}
        <button style={{ color: "red" }} onClick={removeTodo(item.id)}>
          <IoClose />
        </button>
      </div>
      {item.completed && <span>done</span>}
    </div>
  );
};

export default TodoItem;
