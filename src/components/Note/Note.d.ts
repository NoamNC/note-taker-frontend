// Note.d.js

export interface NoteInterface {
  _id: string;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface NewNoteInterface {
  title: string;
  body: string;
}

