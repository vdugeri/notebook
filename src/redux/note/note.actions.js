import { noteActionTypes } from "./note.types";

export const toggleFormHidden = () => ({
  type: noteActionTypes.TOGGLE_FORM_HIDDEN
});

export const createNote = payload => ({
  type: noteActionTypes.CREATE_NOTE,
  payload
});

export const selectNote = note => ({
  type: noteActionTypes.SELECT_NOTE,
  payload: note
});

export const deleteNote = note => ({
  type: noteActionTypes.DELETE_NOTE,
  payload: note
});

export const startEdit = note => ({
  type: noteActionTypes.START_EDIT,
  payload: note
});

export const editNote = note => ({
  type: noteActionTypes.EDIT_NOTE,
  payload: note
});
