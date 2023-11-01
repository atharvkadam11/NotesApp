import React from "react";

function Note({ note, onDelete }) {
  return (
    <div className="notes">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button class="deletebutton" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}

export default Note;
