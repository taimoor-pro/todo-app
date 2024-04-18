import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

const Todo = ({ todo, todoComplete, deleteTodo }) => {
  return (
    <div
      className={`rounded w-9/12 flex justify-between ${
        todo.completed ? "bg-[#6e8bff]" : "bg-[#5272F2]"
      }
      p-4 my-2 capitalize`}
    >
      <div className="flex">
        <input
          onChange={() => todoComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => todoComplete(todo)}
          className={todo.completed ? style.textComplete : style.text}
        >
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
    </div>
  );
};

export default Todo;
