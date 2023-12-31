import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./NoteModal.css";
import { NoteInterface } from "../Note/Note.d.js";

interface EditNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEditMode: (editedNote: NoteInterface) => Promise<void>;
  initialNote: NoteInterface;
}

const EditNoteModal: React.FC<EditNoteModalProps> = ({
  isOpen,
  onClose,
  onEditMode,
  initialNote,
}) => {
  const [note, setNote] = useState({ ...initialNote });
  const [closeAnimation, setCloseAnimation] = useState<boolean>(false);
  const [noteHasChanged, setNoteHasChanged] = useState<boolean>(false);
  const [changes, setChanges] = useState({
    title: false,
    body: false,
  });
  const [editTitle, setEditTitle] = useState<boolean>(false);
  const [editBody, setEditBody] = useState<boolean>(false);

  useEffect(() => {
    const noteTitle = document.getElementById("note-title");
    const noteBody = document.getElementById("note-body");
    if (editTitle) {
      noteTitle?.focus();
      noteTitle?.addEventListener("blur", (e) => {
        e.preventDefault();
        const target = e.target as HTMLInputElement;
        if (target.value.trim() === initialNote.title) {
          setEditTitle(false);
        }
      });
      return;
    }
    if (editBody) {
      noteBody?.focus();
      noteBody?.addEventListener("blur", (e) => {
        e.preventDefault();
        const target = e.target as HTMLInputElement;
        if (target.value.trim() === initialNote.body) {
          setEditBody(false);
        }
      });
      return;
    }
    return () => {
      noteTitle?.removeEventListener("blur", (e) => {
        e.preventDefault();
        const target = e.target as HTMLInputElement;
        if (target.value.trim() === initialNote.title) {
          setEditTitle(false);
        }
        return;
      });
      noteBody?.removeEventListener("blur", (e) => {
        e.preventDefault();
        const target = e.target as HTMLInputElement;
        if (target.value.trim() === initialNote.body) {
          setEditBody(false);
        }
      });
      return;
    };
  }, [editTitle, editBody]);

  const handleCloseModal = () => {
    setCloseAnimation(true);
    setTimeout(() => {
      setCloseAnimation(false);
      onClose();
    }, 300);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setChanges({
      ...changes,
      [name as keyof NoteInterface]:
        initialNote[name as keyof NoteInterface] !== value,
    });
    if (name === "title" && value.length > 20) {
      return;
    }
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleChangeTitle = (e: React.FormEvent) => {
    e.preventDefault();
    setNoteHasChanged(true);
    setEditTitle(false);
  };
  const handleChangeBody = (e: React.FormEvent) => {
    e.preventDefault();
    setNoteHasChanged(true);
    setEditBody(false);
  };
  const handleRevertTitle = (e: React.FormEvent) => {
    e.preventDefault();

    setNote({
      ...note,
      title: initialNote.title,
    });
    setChanges({
      ...changes,
      title: false,
    });
    setNoteHasChanged(changes.body);
    setEditTitle(false);
  };
  const handleRevertBody = (e: React.FormEvent) => {
    e.preventDefault();
    setNote({
      ...note,
      body: initialNote.body,
    });
    setChanges({
      ...changes,
      body: false,
    });
    setNoteHasChanged(changes.title);
    setEditBody(false);
  };

  const handleSaveChanges = async (e: React.FormEvent) => {
    e.preventDefault();

    await onEditMode({
      ...initialNote,
      title: note.title,
      body: note.body,
    });

    handleCloseModal();
  };

  return (
    <Modal
      id="edit-note-modal"
      className={
        closeAnimation
          ? "modal-content close-edit-note-animation"
          : "modal-content open-edit-note-animation"
      }
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
    >
      <div className="edit-note-header">
        <button className="modal-close-btn" onClick={handleCloseModal}>
          <img src={process.env.PUBLIC_URL + "icons/x-solid.svg"} alt="close" />
        </button>
        <span className="explanation">
          *Edit the note by clicking on the title or body
        </span>
      </div>

      <div className="edit-note-form">
        {editTitle ? (
          <form onSubmit={handleChangeTitle}>
            <input
              id="note-title"
              type="text"
              name="title"
              value={note.title}
              onChange={handleInputChange}
            />
            {changes.title && (
              <div>
                <button aria-label="undo" onClick={handleRevertTitle}>
                  <img
                    src={process.env.PUBLIC_URL + "icons/rotate-left-solid.svg"}
                    alt="undo"
                  />
                </button>
                {note.title.trim().length > 0 && (
                  <button type="submit" onClick={handleChangeTitle}>
                    <img
                      src={process.env.PUBLIC_URL + "icons/check-solid.svg"}
                      alt="approve"
                    />
                  </button>
                )}
              </div>
            )}
          </form>
        ) : (
          <button
            className="edit-button"
            onClick={() => {
              setEditTitle(true);
            }}
          >
            <h2>{note.title}</h2>
          </button>
        )}
        {editBody ? (
          <form onSubmit={handleChangeBody}>
            <textarea
              id="note-body"
              name="body"
              value={note.body}
              onChange={handleInputChange}
            />
            {changes.body && (
              <div>
                <button onClick={handleRevertBody}>
                  <img
                    src={process.env.PUBLIC_URL + "icons/rotate-left-solid.svg"}
                    alt="undo"
                  />{" "}
                </button>
                {note.body.trim().length > 0 && (
                  <button type="submit" onClick={handleChangeBody}>
                    <img
                      src={process.env.PUBLIC_URL + "icons/check-solid.svg"}
                      alt="approve"
                    />{" "}
                  </button>
                )}
              </div>
            )}
          </form>
        ) : (
          <button
            className="edit-button"
            onClick={() => {
              setEditBody(true);
            }}
          >
            <p>{note.body}</p>
          </button>
        )}

        {noteHasChanged && (
          <button onClick={handleSaveChanges} id="submit">
            Save Changes
          </button>
        )}
      </div>
    </Modal>
  );
};

export default EditNoteModal;
