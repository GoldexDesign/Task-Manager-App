import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import "../styles/TaskDetailPopup.css";

Modal.setAppElement("#root"); // Set the root element for accessibility

function TaskDetailPopup({ task, onClose, onSave, taskIndex, isOpen }) {
  const [notes, setNotes] = useState(task.notes || "");

  const handleSave = () => {
    onSave(task.id, notes);
    onClose();
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  return (
    <Modal
      isOpen={isOpen} // Use the isOpen prop to control modal visibility
      onRequestClose={onClose}
      contentLabel="Task Details"
      className="custom-modal" // Apply custom class
      overlayClassName="custom-overlay" // Apply custom overlay class
    >
      <div className="popup-inner">
        <label htmlFor="notes">Task Details</label>
        <textarea
          id="notes"
          className="Notes"
          value={notes}
          onChange={handleNotesChange}
          placeholder="Add notes..."
        />
        <div className="popup-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
}

TaskDetailPopup.propTypes = {
  task: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  taskIndex: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired, // Ensure isOpen is a boolean prop
};

export default TaskDetailPopup;
