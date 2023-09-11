import React, { useState, useEffect } from "react";
import "./styles/App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import TaskDetailPopup from "./components/TaskDetailPopup";
import logo from "./styles/LogoTaskManager.png";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalActive, setIsModalActive] = useState(false); // Track modal state

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const handleTaskClick = (taskId) => {
    console.log("handleTaskClick called for task ID:", taskId); // Debugging log
    const task = tasks.find((task) => task.id === taskId);
    setSelectedTask(task);
    setIsModalActive(true); // Open the modal when a task is clicked
  };

  const handleSaveTaskDetail = (taskId, notes) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, notes } : task
    );
    setTasks(updatedTasks);
    setSelectedTask(null);
    setIsModalActive(false); // Close the modal after saving
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
      <div className="header">
        <img src={logo} alt="Task Manager Logo" className="logo" />
        <h1>TASK MANAGER</h1>
      </div>
      <TaskForm addTask={addTask} />
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        updateTaskStatus={updateTaskStatus}
        currentFilter={filter}
        onSaveTaskDetail={handleSaveTaskDetail}
        onTaskClick={handleTaskClick}
        setTasks={setTasks}
      />
      {selectedTask && isModalActive && (
        <TaskDetailPopup
          task={selectedTask}
          onClose={() => {
            setSelectedTask(null);
            setIsModalActive(false);
          }}
          onSave={handleSaveTaskDetail}
          taskIndex={selectedTask.id}
          isOpen={isModalActive}
        />
      )}
    </div>
  );
}

export default App;
