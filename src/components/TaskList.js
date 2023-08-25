import React from "react";
import PropTypes from "prop-types";
import TaskItem from "./TaskItem"; // Make sure to import TaskItem

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <div className="task-list">
      {/* List of tasks */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskList;
