import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import notesReducer from "./note/note.reducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["notes"]
};

const rootReducer = combineReducers({
  notes: notesReducer
});

export default persistReducer(persistConfig, rootReducer);
