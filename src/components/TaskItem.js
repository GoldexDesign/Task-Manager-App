import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/TaskItem.css";
import TaskDetailPopup from "./TaskDetailPopup";

function TaskItem({
  task,
  deleteTask,
  updateTaskStatus,
  onSaveTaskDetail,
  onTaskClick,
}) {
  const [showDetailPopup, setShowDetailPopup] = useState(false);

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    updateTaskStatus(task.id, newStatus);
  };

  const handleTaskNameClick = () => {
    setShowDetailPopup(true);
  };

  return (
    <div className="task-item">
      <span
        className={`task-name ${task.status.toLowerCase()}`}
        onClick={() => {
          onTaskClick(task.id);
          handleTaskNameClick();
        }}
      >
        {task.name}
      </span>
      <div className="buttons-right">
        <select value={task.status} onChange={handleStatusChange}>
          <option value="New">New</option>
          <option value="Processing">Processing</option>
          <option value="Done">Done</option>
        </select>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
      {showDetailPopup && (
        <TaskDetailPopup
          task={task}
          onClose={() => setShowDetailPopup(false)}
          onSave={onSaveTaskDetail}
        />
      )}
    </div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTaskStatus: PropTypes.func.isRequired,
  onSaveTaskDetail: PropTypes.func.isRequired,
  onTaskClick: PropTypes.func.isRequired,
};

export default TaskItem;
