import React from "react";
import PropTypes from "prop-types";
import "../styles/TaskItem.css";

function TaskItem({ task, toggleTaskCompletion, deleteTask }) {
  const { id, name, completed } = task;

  return (
    <div className={`task-item ${completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTaskCompletion(id)}
      />
      <p>{name}</p>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskItem;
