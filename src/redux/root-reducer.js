import { combineReducers } from "redux";

import notesReducer from "./note/note.reducer";

const rootReducer = combineReducers({
  notes: notesReducer
});

export default rootReducer;
