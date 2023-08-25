import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/TaskFilter.css";

function TaskFilter({ onFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterChange = (event) => {
    const newFilter = event.target.value;
    setSelectedFilter(newFilter);
    onFilterChange(newFilter); // Call the prop function passed from App
  };

  return (
    <div className="task-filter">
      <label htmlFor="filter">Filter Tasks:</label>
      <select id="filter" value={selectedFilter} onChange={handleFilterChange}>
        <option value="all">All Tasks</option>
        <option value="new">New</option>
        <option value="processing">Processing</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
}

TaskFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default TaskFilter;
