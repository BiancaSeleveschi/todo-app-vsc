import React from "react";
import { useState } from "react";

export const List = (props) => {
  const { passedData, setList, handleAction, title } = props;
  const [todoIndex, setTodoIndex] = useState(-1);
  const [editedText, setEditedText] = useState("");
  const conditionalStyles =
    title === "To do List" ? "bg-light" : "bg-dark text-white";
  const commonStyles =
    "border border-secondary border-5 mx-4 rounded rounded-3 p-4 my-3 ";

  const toggleEditActivation = (index, todo) => {
    setTodoIndex((prevIndex) => (prevIndex !== index ? index : -1));
    setEditedText(todo);
  };
  const editText = (todo, newText) => {
    todo.todo = newText;
    setEditedText(todo.todo);
    setTodoIndex(-1);
  };
  const deleteTodo = (index) => {
    passedData.splice(index, 1);
    setList([...passedData]);
  };

  const addToFavorite = (todoId) => {
    let favTodo = passedData.find((todo) => todo.id === todoId);
    console.log("fav todo is: ", favTodo);
    favTodo.isFavorite = !favTodo.isFavorite;
    setList([...passedData]);
  };
  return (
    <div className="d-inline-block">
      <ul className="list-group">
        <h3>{title}</h3>
        {passedData.map((todo, index) => (
          <li key={index} className={`${commonStyles} ${conditionalStyles}`}>
            {todoIndex === index ? (
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
            ) : (
              <h5 className="todo-name ms-1">{todo.todo}</h5>
            )}
            <button className="btn btn-secondary ms-4 me-2">
              {todoIndex !== index ? (
                <svg
                  onClick={() => toggleEditActivation(index, todo.todo)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
              ) : (
                <span
                  onClick={() => {
                    editText(todo, editedText);
                  }}
                >
                  Save
                </span>
              )}
            </button>
            <p
              onClick={() => handleAction(todo)}
              className="btn btn-success float-end"
            >
              {todo.isDone ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022" />
                </svg>
              ) : (
                "Done"
              )}
            </p>
            <button
              onClick={() => deleteTodo(index)}
              className="float-end mx-2 btn btn-danger"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
              </svg>
            </button>
            <button
              onClick={() => addToFavorite(todo.id)}
              className="float-end btn btn-primary"
            >
              {todo.isFavorite ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
