import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectNoteItems } from "../../redux/note/note.selectors";

import NotePreview from "../note-preview/note-preview.component";

import "./sidebar.styles.scss";

const Sidebar = ({ notes }) => (
  <div className="sidebar">
    {notes.map((note, index) => (
      <NotePreview key={index} note={note} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  notes: selectNoteItems
});

export default connect(mapStateToProps)(Sidebar);
