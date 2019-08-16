import React from "react";
import { connect } from "react-redux";

import { toggleFormHidden } from "../../redux/note/note.actions";

import Sidebar from "../../components/sidebar/sidebar.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import NoteForm from "../../components/note-form/note-form.component";

import "./homepage.styles.scss";

const HomePage = ({ hidden, toggleFormHidden }) => (
  <div className="homepage">
    <Sidebar />
    <div className="homepage__main">
      {!hidden ? (
        <NoteForm />
      ) : (
        <CustomButton onClick={() => toggleFormHidden()}>New Note</CustomButton>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  hidden: state.notes.hidden
});

const mapDispatchToProps = dispatch => ({
  toggleFormHidden: () => dispatch(toggleFormHidden)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
