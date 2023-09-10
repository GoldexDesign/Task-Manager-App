import React from "react";
import PropTypes from "prop-types";
import "../styles/TaskItem.css";

function TaskItem({ task, deleteTask, updateTaskStatus, onTaskClick }) {
  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    updateTaskStatus(task.id, newStatus);
  };

  return (
    <div className="task-item">
      <span
        className={`task-name ${task.status.toLowerCase()}`}
        onClick={() => {
          onTaskClick(task.id);
        }}
      >
        {task.name}
      </span>
      <div className="buttons-right">
        <select
          className="select-filter"
          value={task.status}
          onChange={handleStatusChange}
        >
          <option value="New">New</option>
          <option value="Processing">Processing</option>
          <option value="Done">Done</option>
        </select>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTaskStatus: PropTypes.func.isRequired,
  onTaskClick: PropTypes.func.isRequired,
};

export default TaskItem;
