import React from "react";
import PropTypes from "prop-types";
import "../styles/DeleteTaskModal.css";

function DeleteTaskModal({ task, onDelete, onCancel }) {
  return (
    <div className="delete-modal">
      <div className="modal-content">
        <p>Are you sure you want to delete task "{task.name}"?</p>
        <div className="modal-buttons">
          <button onClick={() => onDelete(task.id)}>Delete</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

DeleteTaskModal.propTypes = {
  task: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default DeleteTaskModal;
