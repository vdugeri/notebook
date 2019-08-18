import React from "react";
import { connect } from "react-redux";
import {
  deleteNote,
  selectNote,
  startEdit
} from "../../redux/note/note.actions";

import "./note.styles.scss";

const Note = ({ note, handleNoteDelete, handleNoteEdit }) => (
  <div className="note">
    <div className="note__actions">
      <span className="delete" onClick={() => handleNoteDelete(note)}>
        <i className="fa fa-trash" />
      </span>
      <span className="edit" onClick={() => handleNoteEdit(note)}>
        &#9998;
      </span>
    </div>
    <h3>{note.title}</h3>
    <p>{note.body}</p>
  </div>
);

const mapDispatchToProps = dispatch => ({
  handleNoteDelete: note => {
    dispatch(deleteNote(note));
    dispatch(selectNote(null));
  },
  handleNoteEdit: note => dispatch(startEdit(note))
});

export default connect(
  null,
  mapDispatchToProps
)(Note);
