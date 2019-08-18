import { noteActionTypes } from "./note.types";
import { addItemToNotes, deleteNoteItem } from "./notes.utils";

const INITIAL_STATE = {
  noteItems: [],
  hidden: true,
  note: {}
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
        noteItems: addItemToNotes(state.noteItems, payload)
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
			}
    default:
      return state;
  }
};

export default notesReducer;
