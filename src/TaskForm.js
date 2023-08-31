import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() === "") return;
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="addTasks">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={newTask}
          placeholder="Enter a new task..."
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
