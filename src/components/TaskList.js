import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TaskItem from "./TaskItem";
import DeleteTaskModal from "./DeleteTaskModal"; // Import your DeleteTaskModal component
import "../styles/TaskList.css";

function TaskList({
  tasks,
  deleteTask,
  updateTaskStatus,
  currentFilter,
  onTaskClick,
  setTasks,
}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks((prevTasks) => [...prevTasks, ...savedTasks]);
  }, [setTasks]);

  const handleDeleteClick = (task) => {
    setTaskToDelete(task);
    setShowDeleteModal(true);
  };

  // Function to sort tasks based on their status
  const sortTasks = (a, b) => {
    if (a.status === "New" && b.status !== "New") return -1;
    if (a.status === "Processing" && b.status === "Done") return -1; // Put "Done" at the end
    if (a.status === "Done" && b.status !== "Done") return 1;
    return 0;
  };

  // Function to filter tasks based on the current filter
  const filterTasks = (task) => {
    switch (currentFilter) {
      case "all":
        return true;
      case "new":
        return task.status === "New";
      case "processing":
        return task.status === "Processing";
      case "done":
        return task.status === "Done";
      default:
        return false;
    }
  };

  // Sort and filter tasks
  const sortedTasks = [...tasks].sort(sortTasks);
  const filteredTasks = sortedTasks.filter(filterTasks);

  return (
    <div className="task-list">
      {filteredTasks.map((task, index) => (
        <TaskItem
          key={task.id + index} // Use a combination of task.id and index to ensure uniqueness
          task={task}
          deleteTask={() => handleDeleteClick(task)} // Show delete confirmation modal on delete click
          updateTaskStatus={updateTaskStatus}
          onTaskClick={onTaskClick}
        />
      ))}
      {/* Render the delete confirmation modal if it's shown */}
      {showDeleteModal && (
        <DeleteTaskModal
          task={taskToDelete}
          onCancel={() => setShowDeleteModal(false)}
          onDelete={() => {
            deleteTask(taskToDelete);
            setShowDeleteModal(false);
          }}
        />
      )}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTaskStatus: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
  onTaskClick: PropTypes.func.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TaskList;
