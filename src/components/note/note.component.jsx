import React from "react";
import { connect } from "react-redux";
import { deleteNote, selectNote } from "../../redux/note/note.actions";

import "./note.styles.scss";

const Note = ({ note, deleteNote }) => (
  <div className="note">
    <div className="note__actions">
      <span className="delete" onClick={() => deleteNote(note)}>
        &#10007;
      </span>
      <span className="edit">&#9998;</span>
    </div>
    <h3>{note.title}</h3>
    <p>{note.body}</p>
  </div>
);

const mapDispatchToProps = dispatch => ({
  deleteNote: note => {
    dispatch(deleteNote(note));
    dispatch(selectNote(null));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Note);
