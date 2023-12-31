// TaskForm.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/TaskForm.css";

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName.trim() !== "") {
      const formattedDate = new Date().toLocaleDateString("en-GB"); // Get current date in "dd/mm/yyyy" format
      const taskWithDate = `${taskName} (${formattedDate})`;
      addTask(taskWithDate);
      setTaskName("");
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        required
        type="text"
        id="taskName" // Add a unique id attribute
        name="taskName" // You can also add a name attribute
        placeholder="Enter the task name and click 'Add Task' =>"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskForm;
