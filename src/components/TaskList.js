import React, { useEffect } from "react";
import PropTypes from "prop-types";
import TaskItem from "./TaskItem";
import "../styles/TaskList.css";

function TaskList({
  tasks,
  deleteTask,
  updateTaskStatus,
  currentFilter,
  onTaskClick,
  setTasks,
}) {
  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks((prevTasks) => [...prevTasks, ...savedTasks]);
  }, [setTasks]);

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
          deleteTask={deleteTask}
          updateTaskStatus={updateTaskStatus}
          onTaskClick={onTaskClick}
        />
      ))}
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
