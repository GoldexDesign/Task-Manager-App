import React from "react";
import PropTypes from "prop-types";
import "../styles/TaskFilter.css";

function TaskFilter() {
  return (
    <div className="task-filter">
      <label htmlFor="filter">Filter Tasks:</label>
      <select id="filter">
        <option value="all">All Tasks</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
}

TaskFilter.propTypes = {};

export default TaskFilter;
