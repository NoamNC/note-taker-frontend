import React, { useState } from "react";
import "./Note.css";
import { NoteInterface } from "./Note.d.js";

interface NoteProps {
  note: NoteInterface;
  onDelete: () => void;
  onOpen: () => void;
}

const Note: React.FC<NoteProps> = ({ note, onDelete, onOpen }) => {
  const [addDeleteAnimation, setAddDeleteAnimation] = useState(false);

  const deleteNote = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation(); // Prevents the click from bubbling up to the parent elements
    setAddDeleteAnimation(true);
    setTimeout(() => {
      onDelete();
    }, 1000);
  };

  return (
    <div className={addDeleteAnimation ? "note delete-animation" : "note"} onClick={onOpen}>
      <p className="date">
        {new Date(note.createdAt).toLocaleDateString("en-DE", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
      </p>
      <div className="note-buttons">
        <button onClick={deleteNote} className="note-button fa fa-trash"></button>
      </div>
      <p className="title">{note.title}</p>
      <p className="description">{note.body}</p>
    </div>
  );
};

export default Note;
