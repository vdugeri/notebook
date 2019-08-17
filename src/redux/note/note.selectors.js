import { createSelector } from "reselect";

const selectNotes = state => state.notes;

export const selectNoteItems = createSelector(
  [selectNotes],
  notes => notes.noteItems
);

export const selectNoteItem = createSelector(
  [selectNotes],
  notes => notes.note
);

export const selectHidden = createSelector(
  [selectNotes],
  notes => notes.hidden
);
