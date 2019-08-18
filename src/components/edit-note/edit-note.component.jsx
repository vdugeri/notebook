import React from "react";
import { connect } from "react-redux";

import { editNote } from "../../redux/note/note.actions";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./edit-note.styles.scss";

class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.note.title || "",
      body: props.note.body || ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleNoteEdit(this.state);
  };

  render() {
    const { title, body } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <form className="edit-note" onSubmit={handleSubmit}>
        <FormInput
          name="title"
          value={title}
          label="Title"
          handleChange={handleChange}
        />
        <FormInput
          name="body"
          value={body}
          label="Note"
          handleChange={handleChange}
        />
        <CustomButton>Save</CustomButton>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleNoteEdit: note => dispatch(editNote(note))
});

export default connect(
  null,
  mapDispatchToProps
)(EditNote);
