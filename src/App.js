import React, { useState } from "react";
import "./App.css";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {
  const [todolist, setTodoList] = useState([]);

  const addTask = (newTask) => {
    const newerTask = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskName: newTask,
      isComplete: false,
    };
    setTodoList([...todolist, newerTask]);
  };

  const deleteTask = (taskId) => {
    const newTodoList = todolist.filter((task) => task.id !== taskId);
    setTodoList(newTodoList);
  };

  const completeTask = (taskId) => {
    const completeList = todolist.map((task) =>
      task.id === taskId ? { ...task, isComplete: true } : task
    );
    setTodoList(completeList);
  };

  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <TaskForm addTask={addTask} />
      {todolist.length > 0 ? (
        <TaskList
          todolist={todolist}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ) : (
        <p className="empty-list-message">No tasks to display.</p>
      )}
    </div>
  );
}

export default App;
