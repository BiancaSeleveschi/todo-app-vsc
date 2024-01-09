import React from "react";
import { useState } from "react";
import { List } from "./List";

export const Home = () => {
  const [list, setTodoList] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);
  const dataForChild = [...list];
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      isFavorite: false,
      isDone: false,
      todo: todo,
      isEditting: false,
    };
    setTodoList([...list, newTodo]);
    setInput("");
  };
  const markAsDone = (todo) => {
    let index = list.findIndex((todoId) => todoId.id === todo.id);
    if (index !== -1) {
      todo.isDone = !todo.isDone;
      if (todo.isDone) {
        doneTodos.push(todo);
        setDoneTodos([...doneTodos]);
      } else {
        doneTodos = doneTodos.filter((doneItem) => doneItem.id === todo.id);
        setDoneTodos([...doneTodos]);
      }
      list.splice(index, 1);
      setTodoList([...list]);
    }
  };
  const markAsUndone = (todo) => {
    let doneTodoIndex = doneTodos.findIndex((todoId) => todoId.id === todo.id);
    if (doneTodoIndex !== -1) {
      todo.isDone = !todo.isDone;
      if (!todo.isDone) {
        list.push(todo);
        setTodoList([...list]);
      } else {
        list = list.filter((doneItem) => doneItem.id === todo.id);
        setTodoList([...list]);
      }
      doneTodos.splice(doneTodoIndex, 1);
      setDoneTodos([...doneTodos]);
    }
  };
  return (
    <div className="home">
      <h1 className="p-5">TODO LIST</h1>
      <h4>Create a task</h4>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="d-block m-auto mb-2 mt-3 rounded p-1 w-25"
      />
      <button
        onClick={() => addTodo(input)}
        className="btn btn-primary d-block mb-4 m-auto"
      >
        Add
      </button>

      <List
        passedData={dataForChild}
        setList={setTodoList}
        handleAction={markAsDone}
        title="To do List"
      />
      <List
        passedData={doneTodos}
        setList={setDoneTodos}
        handleAction={markAsUndone}
        title="Done todos"
      />
    </div>
  );
};
