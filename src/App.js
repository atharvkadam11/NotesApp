import "./styles.css";

import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  const handleAddNote = () => {
    if (newNote.title && newNote.content) {
      const newId = Date.now();
      const noteToAdd = { id: newId, ...newNote };
      setNotes([...notes, noteToAdd]);
      setNewNote({ title: "", content: "" });
    } else {
      alert("Project Alert", "Please enter title and content");
    }
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="app">
      <div class="header">
        <Header />
      </div>
      <div className="note-form">
        <input
          type="text"
          placeholder="Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <div className="notes-list">
        {notes.map((note) => (
          <Note key={note.id} note={note} onDelete={handleDeleteNote} />
        ))}
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  );
}
