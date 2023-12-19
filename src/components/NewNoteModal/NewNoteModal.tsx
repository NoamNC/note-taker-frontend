
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { NewNoteInterface, NoteInterface } from "../Note/Note.d.js";
import "./NewNoteModal.css";

interface NewNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateNote?: (newNote: NewNoteInterface) => Promise<void>;
  onEditMode?: (editedNote: NoteInterface) => Promise<void>;
  initialNote?: NoteInterface | null;
}

const NewNoteModal: React.FC<NewNoteModalProps> = ({
  isOpen,
  onClose,
  onCreateNote,
  onEditMode,
  initialNote,
}) => {
  Modal.setAppElement("#root");

  const [newNote, setNewNote] = useState({ title: "", body: "" });
  const [titleError, setTitleError] = useState<string | null>(null);
  const [bodyError, setBodyError] = useState<string | null>(null);
  const [closeAnimation, setCloseAnimation] = useState<boolean>(false);

  useEffect(() => {
    if (initialNote) {
      setNewNote({ title: initialNote.title, body: initialNote.body });
    }
  }, [initialNote]);

  const handleCloseModal = () => {
    setCloseAnimation(true);
    setTimeout(() => {
      setCloseAnimation(false);
      onClose();
    }, 500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "title" && value.length > 1) {
      setTitleError(null);
    }
    if (name === "body" && value.length > 1) {
      setBodyError(null);
    }
    if (name === "title" && value.length > 20) {
      return;
    }
    setNewNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTitleError(null);
    setBodyError(null);

    if (!newNote.title.trim()) {
      setTitleError("Title cannot be empty");
      if (!newNote.body.trim()) {
        setBodyError("Body cannot be empty");
      }
      return;
    }

    if (!newNote.body.trim()) {
      setBodyError("Body cannot be empty");
      return;
    }

    if (titleError || bodyError) {
      return;
    }

    if (initialNote && onEditMode) {

      await onEditMode({
        ...initialNote,
        title: newNote.title,
        body: newNote.body,
      });
    } else if (onCreateNote) {
      await onCreateNote(newNote);
    }
    setNewNote({
      title: "",
      body: "",
    });
    handleCloseModal();
  };

  return (
    <Modal
      className={
        closeAnimation ? "modal-content close-animation" : "modal-content"
      }
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
    >
      <button
        className="modal-close-btn fa fa-close"
        onClick={handleCloseModal}
      ></button>
      <h2 className="modal-title">
        {initialNote ? "Edit Note" : "Create a New Note"}
      </h2>
      <form className="new-note-form" onSubmit={handleFormSubmit}>
        <div className="label-and-error">
          <label>Title:</label>
          {titleError && <p className="validation-error">{titleError}</p>}
        </div>
        <input
          type="text"
          name="title"
          value={newNote.title}
          onChange={handleInputChange}
        />
        <div className="label-and-error">
          <label>Body:</label>
          {bodyError && <p className="validation-error">{bodyError}</p>}
        </div>
        <textarea
          name="body"
          value={newNote.body}
          onChange={handleInputChange}
        />

        <button type="submit" id="submit">
          {initialNote ? "Save Changes" : "Create Note"}
        </button>
      </form>
    </Modal>
  );
};

export default NewNoteModal;
