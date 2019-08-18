export const addItemToNotes = (notes, noteToAdd) => {
  return [...notes, noteToAdd];
};

export const deleteNoteItem = (notes, noteToDelete) => {
  const noteExists = notes.find(note => note.title === noteToDelete.title);

  if (noteExists) {
    return notes.filter(note => note.title !== noteExists.title);
  }

  return notes;
};

export const editNote = (notes, editedNote) => {
  const existingNote = notes.find(note => note.title === editedNote.title);

  if (existingNote) {
    existingNote.body = editedNote.body;

    return [...notes];
  }

  return notes;
};
