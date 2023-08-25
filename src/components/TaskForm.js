import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/TaskForm.css";

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName.trim() !== "") {
      addTask(taskName);
      setTaskName("");
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        required
        type="text"
        placeholder="Enter task"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
      />
      {/* Remove the following select element */}
      {/* <select value={status} onChange={(event) => setStatus(event.target.value)}>
        <option value="New">New</option>
        <option value="Processing">Processing</option>
        <option value="Done">Done</option>
      </select> */}
      <button type="submit">Add Task</button>
    </form>
  );
}

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskForm;
