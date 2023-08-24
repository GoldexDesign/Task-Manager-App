import React from "react";
import PropTypes from "prop-types";
import TaskItem from "./TaskItem";
import "../styles/TaskList.css";

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <div className="task-list">
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
