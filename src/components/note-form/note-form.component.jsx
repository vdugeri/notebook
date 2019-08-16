import React from "react";
import { connect } from "react-redux";

import { createNote } from "../../redux/note/note.actions";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./note-form.styles.scss";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { title, body } = this.state;

    if (title && body) {
      this.props.addNote({ title, body });

      this.setState({
        title: "",
        body: ""
      });
    }
  };

  render() {
    const { title, body } = this.state;
    return (
      <form className="note-form" onSubmit={this.handleSubmit}>
        <FormInput
          handleChange={this.handleChange}
          value={title}
          label="Title"
          type="text"
          name="title"
        />
        <FormInput
          type="text"
          handleChange={this.handleChange}
          value={body}
          label="Note"
          name="body"
        />
        <CustomButton>Submit</CustomButton>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addNote: note => dispatch(createNote(note))
});

export default connect(
  null,
  mapDispatchToProps
)(NoteForm);
