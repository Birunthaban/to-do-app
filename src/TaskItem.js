import React from "react";

const TaskItem = ({ task, deleteTask, completeTask }) => {
  return (
    <div className={`task ${task.isComplete ? "completed" : ""}`}>
      <h1 style={{ textDecoration: task.isComplete ? "line-through" : "none" }}>
        {task.taskName}
      </h1>
      {!task.isComplete && (
        <button className="complete" onClick={() => completeTask(task.id)}>
          Complete
        </button>
      )}
      <button className="delete" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
