import React, { useState } from "react";
import "./styles/App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // Add filter state

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter); // Update the filter state
  };

  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      status: "New", // Default status
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        updateTaskStatus={updateTaskStatus}
        currentFilter={filter} // Pass the currentFilter state
      />
    </div>
  );
}

export default App;
