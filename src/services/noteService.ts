import axios from "axios";
import { NoteInterface, NewNoteInterface } from "../components/Note/Note.d.js";

const BASE_URL = "http://localhost:5001/notes";

const getAllNotes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching notes:", error);
    throw error;
  }
};

const getNoteById = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching note by ID:", error);
    throw error;
  }
};

const createNote = async (
  newNote: NewNoteInterface
): Promise<NoteInterface> => {
  try {
    const response = await axios.post(`${BASE_URL}/create`, newNote, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const createdNote: NoteInterface = response.data;

    return createdNote;
  } catch (error) {
    console.error("Error creating note:", error);
    throw error;
  }
};

const editNote = async (
  _id: string,
  updatedNoteData: { title: string; body: string }
) => {
  try {
    const response = await axios.put(`${BASE_URL}/${_id}`, updatedNoteData);
    return response.data;
  } catch (error) {
    console.error("Error editing note:", error);
    throw error;
  }
};

const deleteNote = async (id: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting note:", error);
    throw error;
  }
};

export { getAllNotes, getNoteById, createNote, editNote, deleteNote };
