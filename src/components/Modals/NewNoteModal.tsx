import React, { useState } from "react";
import Modal from "react-modal";
import "./NoteModal.css";
import { NewNoteInterface } from "../Note/Note.d.js";

interface NewNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateNote: (newNote: NewNoteInterface) => Promise<void>;
}

const NewNoteModal: React.FC<NewNoteModalProps> = ({
  isOpen,
  onClose,
  onCreateNote,
}) => {
  const [newNote, setNewNote] = useState({ title: "", body: "" });
  const [titleError, setTitleError] = useState<string | null>(null);
  const [bodyError, setBodyError] = useState<string | null>(null);
  const [closeAnimation, setCloseAnimation] = useState<boolean>(false);

  const handleCloseModal = () => {
    setCloseAnimation(true);
    setTimeout(() => {
      resetForm();
      setCloseAnimation(false);
      onClose();
    }, 500);
  };

  const resetForm = () => {
    setNewNote({
      title: "",
      body: "",
    });
    setTitleError(null);
    setBodyError(null);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "title" && value.length > 0) {
      setTitleError(null);
    }
    if (name === "body" && value.length > 0) {
      setBodyError(null);
    }
    if (name === "title" && value.length > 20) {
      return;
    }
    setNewNote((prevNote) => ({ ...prevNote, [name]: value.trim() }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
    await onCreateNote(newNote);
    handleCloseModal();
  };

  return (
    <Modal
      id="new-note-modal"
      className={
        closeAnimation
          ? "modal-content close-new-note-animation"
          : "modal-content open-new-note-animation"
      }
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
    >
      <div className="new-note-header">
        <button
          className="modal-close-btn fa fa-close"
          onClick={handleCloseModal}
        ></button>
        <h2 className="modal-title">Create a New Note</h2>
      </div>
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
          Create Note
        </button>
      </form>
    </Modal>
  );
};

export default NewNoteModal;
