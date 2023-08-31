import React from "react";
import PropTypes from "prop-types";
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  deleteTask,
  updateTaskStatus,
  currentFilter,
  onSaveTaskDetail,
  onTaskClick,
}) {
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
          onSaveTaskDetail={onSaveTaskDetail} // Use the onSaveTaskDetail prop
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
};

export default TaskList;
