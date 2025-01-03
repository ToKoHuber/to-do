"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  //["rrrr",  "hool hiih"]
  const addTodoHandler = () => {
    setTodos([...todos, newTodo]);
  };
  const deleteHandler = () => {
    alert("are you sure to delete ?");
  };

  return (
    <div>
      <div className={styles[`todo-container`]}>
        <h1 className={styles[`container-title`]}>To-Do list</h1>
        <div className={`${styles.flex}`}>
          <input
            className={styles[`container-input`]}
            type="text"
            placeholder="Add a new task"
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            className={styles[`container-input-button`]}
            onClick={addTodoHandler}
          >
            Add
          </button>
        </div>
        <div className={`${styles.flex} ${styles.filterButtons}`}>
          <button
            className={activeFilter == "all" && styles.activeStyle}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>

          <button
            className={activeFilter == "active" && styles.activeStyle}
            onClick={() => setActiveFilter("active")}
          >
            Active
          </button>
          <button
            className={activeFilter == "completed" && styles.activeStyle}
            onClick={() => setActiveFilter("completed")}
          >
            Completed
          </button>
        </div>
        <div>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
