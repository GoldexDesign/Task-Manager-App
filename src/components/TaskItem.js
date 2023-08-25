import React from "react";
import PropTypes from "prop-types";
import "../styles/TaskItem.css";

function TaskItem({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <span onClick={() => toggleTaskCompletion(task.id)}>{task.name}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskItem;
