import React, { useState, useEffect } from "react";
import { collection, db, onSnapshot, query } from "../../firebase/firebase";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "../Todo";
import { Heading } from "../../components/element/Heading";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { todoSchema } from "../../formValidations";
import { Input } from "../../components/element/Input";
import { useNavigate } from "react-router-dom";
import { DeleteTodo, TodoOnSubmit, UpdateTodo } from "../../firebase";
import { notifySuccess } from "../../utils/toast";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  const createTodo = (formData) => {
    TodoOnSubmit(formData);
    reset();
  };

  // Read todo from firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  const todoComplete = (todo) => {
    UpdateTodo(todo);
  };

  const deleteTodo = (id) => {
    DeleteTodo(id);
  };

  const logOut = () => {
    localStorage.removeItem("role");
    navigate("/");
    notifySuccess("Logout Successfully!");
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(todoSchema),
  });

  return (
    <div className="p-4 bg-[#FF8080]">
      <div className="flex justify-between items-center">
        {todos.length < 1 ? null : (
          <h4 className="text-xl font-bold">{`You have (${todos.length}) todos`}</h4>
        )}
        <button
          className="rounded-full p-4 ml-2 bg-black text-slate-100"
          onClick={logOut}
        >
          Log Out
        </button>
      </div>

      <div className="bg-red-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4">
        <Heading
          text={localStorage.getItem("role")}
          className="text-3xl font-bold text-center text-gray-800 p-2"
        />
        <small className="mb-3 font-bold text-center text-gray-800">
          {localStorage.getItem("role") === "admin"
            ? "(CRUD)"
            : "Only you will able, Create & View"}
        </small>

        <form
          onSubmit={handleSubmit(createTodo)}
          className="flex justify-between"
        >
          <Controller
            name="todo"
            control={control}
            render={({ field }) => (
              <Input
                id="todo"
                field={field}
                type="text"
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1"
                placeholder="Add Todo"
              />
            )}
          />
          <button className="rounded-full p-4 ml-2 bg-black text-slate-100 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform">
            <AiOutlinePlus size={30} />
          </button>
        </form>
        {errors.todo && (
          <p className="ms-2 w-full text-red-500 mt-1">{errors.todo.message}</p>
        )}
      </div>

      <div className="mt-5 flex flex-col items-center">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            todoComplete={
              localStorage.getItem("role") !== "user" && todoComplete
            }
            deleteTodo={localStorage.getItem("role") !== "user" && deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};
