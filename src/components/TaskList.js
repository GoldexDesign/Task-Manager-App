import React, { useEffect } from "react";
import PropTypes from "prop-types";
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  deleteTask,
  updateTaskStatus,
  currentFilter,
  onSaveTaskDetail,
  onTaskClick,
  setTasks, // Include setTasks as a prop
}) {
  useEffect(() => {
    // Load tasks from local storage when the component mounts
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    // Update the state with the saved tasks
    setTasks((prevTasks) => [...prevTasks, ...savedTasks]);
  }, [setTasks]); // Include setTasks in the dependency array

  const filteredTasks = tasks.filter((task) => {
    if (currentFilter === "all") {
      return true;
    } else if (currentFilter === "new") {
      return task.status === "New";
    } else if (currentFilter === "processing") {
      return task.status === "Processing";
    } else if (currentFilter === "done") {
      return task.status === "Done";
    }
    return false;
  });

  return (
    <div className="task-list">
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateTaskStatus={updateTaskStatus}
          onSaveTaskDetail={onSaveTaskDetail}
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
  onSaveTaskDetail: PropTypes.func.isRequired,
  onTaskClick: PropTypes.func.isRequired,
  setTasks: PropTypes.func.isRequired, // Include setTasks in propTypes
};

export default TaskList;
