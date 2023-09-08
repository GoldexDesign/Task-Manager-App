import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/TaskDetailPopup.css";

function TaskDetailPopup({ task, onClose, onSave, taskIndex }) {
  const [notes, setNotes] = useState(task.notes || "");

  const handleSave = () => {
    onSave(task.id, notes);
    onClose();
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <label>Task Details</label>
        <textarea
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
    </div>
  );
}

TaskDetailPopup.propTypes = {
  task: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  taskIndex: PropTypes.number.isRequired,
};

export default TaskDetailPopup;
