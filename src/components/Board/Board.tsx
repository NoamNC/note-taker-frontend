// Board.tsx

import React, { useEffect, useState } from 'react';
import Note from '../Note/Note';
import { NoteInterface, NewNoteInterface } from '../Note/Note.d.js';
import { getAllNotes, deleteNote, createNote, editNote } from '../../services/noteService';
import NewNoteModal from '../NewNoteModal/NewNoteModal';
import './Board.css';

const Board: React.FC = () => {
  const [notes, setNotes] = useState<NoteInterface[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedNote, setEditedNote] = useState<NoteInterface | null>(null);

  useEffect(() => {
    getAllNotes().then((notes) => {
      setNotes(notes);
    });
  }, []);

  const deleteNoteHandler = (_id: string) => {
    deleteNote(_id).then(() => {
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== _id));
    });
  };

  const createNoteHandler = async (newNote: NewNoteInterface) => {
    try {
      const createdNote = await createNote(newNote);
      setNotes((prevNotes) => [...prevNotes, createdNote]);
      closeModal();
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const editNoteHandler = (editedNote: NoteInterface) => {
    setEditedNote(editedNote);
    openEditModal();
  };

  const handleEditNote = async (editedNote: NoteInterface) => {
    try {
      await editNote(editedNote._id, {
        title: editedNote.title,
        body: editedNote.body,
      });

      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note._id === editedNote._id ? { ...note, ...editedNote } : note
        )
      );

      closeEditModal();
    } catch (error) {
      console.error('Error editing note:', error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditedNote(null);
  };

  const userNotes = notes.map((note) => (
    <Note
      key={note._id}
      note={note}
      onDelete={() => deleteNoteHandler(note._id)}
      onEdit={() => editNoteHandler(note)}
    />
  ));

  return (
    <div id='board'>
      <button id='pen' onClick={openModal}>
        <img
          src="http://res.cloudinary.com/cspaveljb/image/upload/v1499110957/pen2_albumw.png"
          alt="pen-img"
          id="pen"
          data-toggle="modal"
        ></img>
      </button>
      {userNotes}

      <NewNoteModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onCreateNote={createNoteHandler}
      />

      {isEditModalOpen && (
        <NewNoteModal
          isOpen={isEditModalOpen}
          onClose={closeEditModal}
          onEditMode={handleEditNote}
          initialNote={editedNote}
        />
      )}
    </div>
  );
};

export default Board;
