import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectNote } from "../../redux/note/note.selectors";

import "./note.styles.scss";

const Note = ({ note }) => (
  <div className="note">
    <h3>{note.title}</h3>
    <p>{note.body}</p>
  </div>
);

export default Note;
