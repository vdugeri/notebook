import { noteActionTypes } from "./note.types";

export const toggleFormHidden = {
  type: noteActionTypes.TOGGLE_FORM_HIDDEN
};

export const createNote = payload => ({
  type: noteActionTypes.CREATE_NOTE,
  payload
});
