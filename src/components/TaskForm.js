import React, { useState } from "react";
import "../styles/TaskForm.css"; // Add your CSS file here

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState("");

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName.trim() !== "") {
      addTask(taskName);
      setTaskName("");
    }
  };

  return (
    <div className="task-form">
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Add a new task..."
          value={taskName}
          onChange={handleTaskNameChange}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
