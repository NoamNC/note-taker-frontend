// Note.tsx

import React from 'react';
import './Note.css';
import { NoteInterface } from './Note.d.js';

interface NoteProps {
  note: NoteInterface;
  onDelete: () => void;
  onEdit: () => void;
}

const Note: React.FC<NoteProps> = ({ note, onDelete, onEdit }) => {
  const [addDeleteAnimation, setAddDeleteAnimation] = React.useState(false);
  const deleteNote = () => {
    setAddDeleteAnimation(true);
    setTimeout(() => {
      onDelete();
    }, 1000);
  }

  return (
    <div key={note._id} className={addDeleteAnimation?'note delete-animation':'note'}>
        <p className='date'>{new Date(note.createdAt).toLocaleDateString("en-DE",{  year: 'numeric', month: 'numeric', day: 'numeric' })}</p>
      <div className='note-buttons'>
      <button onClick={deleteNote} className='note-button fa fa-trash'></button>
      <button onClick={onEdit} className='note-button fa fa-edit'>
      </button>

      </div>
      <p className='title'>{note.title}</p>
      <p className='description'>{note.body}</p>
    </div>
  );
};

export default Note;
