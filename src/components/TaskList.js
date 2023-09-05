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
  setTasks,
}) {
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks((prevTasks) => [...prevTasks, ...savedTasks]);
  }, [setTasks]);

  // Sort tasks based on their status
  const sortedTasks = tasks.slice().sort((a, b) => {
    if (a.status === "New" && b.status !== "New") return -1;
    if (a.status === "Processing" && b.status === "Done") return -1; // Put "Done" at the end
    if (a.status === "Done" && b.status !== "Done") return 1;
    return 0;
  });

  const filteredTasks = sortedTasks.filter((task) => {
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
  setTasks: PropTypes.func.isRequired,
};

export default TaskList;
