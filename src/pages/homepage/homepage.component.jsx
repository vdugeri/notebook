import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleFormHidden, selectNote } from "../../redux/note/note.actions";
import {
  selectHidden,
  selectNoteItem,
  selectNoteToEdit
} from "../../redux/note/note.selectors";

import Sidebar from "../../components/sidebar/sidebar.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import NoteForm from "../../components/note-form/note-form.component";
import Note from "../../components/note/note.component";
import EditNote from "../../components/edit-note/edit-note.component";

import "./homepage.styles.scss";

const HomePage = ({ hidden, toggleFormHidden, note, noteToEdit }) => (
  <div className="homepage">
    <Sidebar />
    <div className="homepage__main">
      <span className="homepage__button-container">
        <CustomButton onClick={() => toggleFormHidden()}>New Note</CustomButton>
      </span>
      <div className="homepage__note-form">{!hidden ? <NoteForm /> : null}</div>
      <div className="homepage__note">{note ? <Note note={note} /> : null}</div>
      <div className="homepage__edit-form">
        {noteToEdit ? <EditNote note={noteToEdit} /> : null}
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectHidden,
  note: selectNoteItem,
  noteToEdit: selectNoteToEdit
});

const mapDispatchToProps = dispatch => ({
  toggleFormHidden: () => {
    dispatch(toggleFormHidden());
    dispatch(selectNote(null));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
