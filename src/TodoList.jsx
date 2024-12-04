import { useState } from "react";
import { v4 as uuid4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "Have Breakfast", id: uuid4(), isDone: false },
  ]);

  let [newTask, setnewTask] = useState("");

  let updateTask = () => {
    setTodos([...todos, { task: newTask, id: uuid4(), isDone: false }]);
    setnewTask("");
  };
  let addNewTask = (event) => {
    setnewTask(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let UpperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return { ...todo, task: todo.task.toUpperCase() };
      })
    );
  };
  let UpperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, task: todo.task.toUpperCase() };
        } else {
          return todo;
        }
      })
    );
  };
  let MarkasDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      })
    );
  };
  let MarkallDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return { ...todo, isDone: true };
      })
    );
  };
  return (
    <div>
      <h2>My Todo</h2>
      <span>
        <input
          type="text"
          placeholder="Enter Todo"
          value={newTask}
          onChange={addNewTask}
        />
        &nbsp;&nbsp;
        <button onClick={updateTask}>Submit</button>
      </span>
      <br />
      <br />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
              {todo.task}
            </span>
            &nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}> Delete </button>
            &nbsp;&nbsp;
            <button onClick={() => UpperCaseOne(todo.id)}> Uppercase </button>
            &nbsp;&nbsp;
            <button onClick={() => MarkasDone(todo.id)}> Mark as Done </button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={UpperCaseAll}>UpperCase</button>
      &nbsp;&nbsp;
      <button onClick={MarkallDone}>Mark all Done</button>
    </div>
  );
}
