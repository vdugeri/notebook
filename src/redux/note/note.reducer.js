import { noteActionTypes } from "./note.types";
import { addItemToNotes, deleteNoteItem, editNote } from "./notes.utils";

const INITIAL_STATE = {
  noteItems: [],
  hidden: true,
  note: null,
  noteToEdit: null
};

const notesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case noteActionTypes.TOGGLE_FORM_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case noteActionTypes.CREATE_NOTE:
      return {
        ...state,
        noteItems: addItemToNotes(state.noteItems, payload),
        note: payload
      };
    case noteActionTypes.SELECT_NOTE:
      return {
        ...state,
        note: payload
      };
    case noteActionTypes.DELETE_NOTE:
      return {
        ...state,
        noteItems: deleteNoteItem(state.noteItems, payload)
      };
    case noteActionTypes.START_EDIT:
      return {
        ...state,
        noteToEdit: payload,
        note: null
      };

    case noteActionTypes.EDIT_NOTE:
      return {
        ...state,
        noteItems: editNote(state.noteItems, payload),
        note: payload,
        noteToEdit: null
      };
    default:
      return state;
  }
};

export default notesReducer;
