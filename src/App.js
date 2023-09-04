// App.js
import React, { useState, useEffect } from "react";
import "./styles/App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import TaskDetailPopup from "./components/TaskDetailPopup";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selectedTask, setSelectedTask] = useState(null);

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const handleTaskClick = (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    setSelectedTask(task);
  };

  const handleSaveTaskDetail = (taskId, notes) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, notes } : task
    );
    setTasks(updatedTasks);
    setSelectedTask(null);
    // Save the updated tasks to local storage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      status: "New",
      notes: "", // Initialize notes for a new task
    };
    setTasks([...tasks, newTask]);
    // Save the updated tasks to local storage
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    // Save the updated tasks to local storage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const updateTaskStatus = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
    // Save the updated tasks to local storage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
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
        currentFilter={filter}
        onSaveTaskDetail={handleSaveTaskDetail}
        onTaskClick={handleTaskClick}
        setTasks={setTasks} // Pass setTasks as a prop
      />
      {selectedTask && (
        <TaskDetailPopup
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onSave={handleSaveTaskDetail}
        />
      )}
    </div>
  );
}

export default App;
