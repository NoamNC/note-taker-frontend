import axios, { AxiosError } from "axios";
import { NoteInterface, NewNoteInterface } from "../components/Note/Note.d.js";

const BASE_URL = "http://localhost:5001/notes";

const getAllNotes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/all`, { timeout: 7500 });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError;
  }
};

const getNoteById = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError;  }
};

const createNote = async (
  newNote: NewNoteInterface
): Promise<NoteInterface> => {
  try {
    const response = await axios.post(`${BASE_URL}/create`, newNote, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 1000 
    });
    const createdNote: NoteInterface = response.data;
    return createdNote;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError;
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
    const axiosError = error as AxiosError;
    throw axiosError;
  }
};

const deleteNote = async (id: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError;
  }
};

export { getAllNotes, getNoteById, createNote, editNote, deleteNote };
