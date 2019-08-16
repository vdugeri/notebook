import { noteActionTypes } from "./note.types";
import { addItemToNotes } from "./notes.utils";

const INITIAL_STATE = {
  notes: [],
  hidden: true
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
        notes: addItemToNotes(state.notes, payload)
      };
    default:
      return state;
  }
};

export default notesReducer;
