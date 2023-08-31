import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ todolist, deleteTask, completeTask }) => {
  return (
    <div className="list">
      {todolist.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
