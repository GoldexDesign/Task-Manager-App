import React from "react";
import PropTypes from "prop-types";
import "../styles/DeleteTaskModal.css";

function DeleteTaskModal({ taskName, onDelete, onCancel }) {
  return (
    <div className="delete-modal">
      <div className="modal-content">
        <p>Are you sure you want to delete task "{taskName}"?</p>
        <div className="modal-buttons">
          <button onClick={onDelete}>Delete</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

DeleteTaskModal.propTypes = {
  taskName: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default DeleteTaskModal;
