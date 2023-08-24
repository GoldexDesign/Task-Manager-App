import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/TaskForm.css";

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== "") {
      addTask(taskName);
      setTaskName("");
    }
  };

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskForm;
