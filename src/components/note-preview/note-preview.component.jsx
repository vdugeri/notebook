import React from "react";
import { connect } from "react-redux";
import { selectNote } from "../../redux/note/note.actions";

import "./note-preview.styles.scss";

const NotePreivew = ({ note, chooseNote }) => (
  <div onClick={() => chooseNote(note)} className="note-preview">
    <span>{note.title}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  chooseNote: note => dispatch(selectNote(note))
});

export default connect(
  null,
  mapDispatchToProps
)(NotePreivew);
