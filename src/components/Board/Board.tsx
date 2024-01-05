import React, { useEffect, useState } from "react";
import Note from "../Note/Note";
import { NoteInterface, NewNoteInterface } from "../Note/Note.d.js";
import {
  getAllNotes,
  deleteNote,
  createNote,
  editNote,
} from "../../services/noteService";
import EditNoteModal from "../Modals/EditNoteModal";
import "./Board.css";
import NewNoteModal from "../Modals/NewNoteModal";
import { AxiosError } from "axios";

const Board: React.FC = () => {
  const [notes, setNotes] = useState<NoteInterface[]>([]);
  const [isNewNoteModalOpen, setIsNewNoteModalOpen] = useState<boolean>(false);
  const [isEditNoteModalOpen, setIsEditNoteModalOpen] =
    useState<boolean>(false);
  const [editedNote, setEditedNote] = useState<NoteInterface | null>(null);
  // const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    getAllNotes()
      .then((notes) => {
        setNotes(notes);
      })
      .catch((error:AxiosError) => {
        const errorNote = createErrorNote(error)
        setNotes([errorNote])
      });
  }, []);

  const deleteNoteHandler = (_id: string) => {
    deleteNote(_id).then(() => {
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== _id));
    });
  };


const createErrorNote = (error: AxiosError) => {
  const errorNote = {
    _id: `${notes.length+1}`,
    title: `${error.code}`,
    body: error.message,
    createdAt: new Date()
  } as NoteInterface
  return errorNote
}

  const createNoteHandler = async (newNote: NewNoteInterface) => {
    try {
      const createdNote = await createNote(newNote);
      setNotes((prevNotes) => [createdNote, ...prevNotes]);
      closeNewNoteModal();
    } catch (error) {
      const axiosError = error as AxiosError;
      const errorNote = createErrorNote(axiosError) as NoteInterface
      setNotes((prevNotes) => [errorNote, ...prevNotes]);

      closeNewNoteModal();
    }
  };

  const editNoteHandler = (editedNote: NoteInterface) => {
    setEditedNote(editedNote);
    openEditNoteModal();
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

      closeEditNoteModal();
    } catch (error) {
      console.error("Error editing note:", error);
    }
  };

  const openNewNoteModal = () => {
    setIsNewNoteModalOpen(true);
  };

  const closeNewNoteModal = () => {
    setIsNewNoteModalOpen(false);
  };

  const openEditNoteModal = () => {
    setIsEditNoteModalOpen(true);
  };

  const closeEditNoteModal = () => {
    setIsEditNoteModalOpen(false);
    setEditedNote(null);
  };

  const userNotes = notes.map((note) => (
    <Note
      key={note._id}
      note={note}
      onDelete={() => deleteNoteHandler(note._id)}
      onOpen={() => editNoteHandler(note)}
    />
  ));

  return (
    <div id="board">
      <button className="pen" onClick={openNewNoteModal}>
        {/* <img
          src="http://res.cloudinary.com/cspaveljb/image/upload/v1499110957/pen2_albumw.png"
          alt="pen-img"
          id="pen"
          data-toggle="modal"
        ></img> */}
        <span className="pen-text">
       create new note
        </span>
      </button>
      {userNotes}
      <NewNoteModal
        isOpen={isNewNoteModalOpen}
        onClose={closeNewNoteModal}
        onCreateNote={createNoteHandler}
      />
      {editedNote && (
        <EditNoteModal
          isOpen={!!editedNote && isEditNoteModalOpen}
          onClose={closeEditNoteModal}
          onEditMode={handleEditNote}
          initialNote={editedNote}
        />
      )}
    </div>
  );
};

export default Board;
