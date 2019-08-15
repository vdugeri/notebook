import React from "react";

import FormInput from "../form-input/form-input.component";

import "./note-form.styles.scss";

const NoteForm = () => (
  <div className="note-form">
    <FormInput label="Title" />
    <FormInput label="Note" />
  </div>
);

export default NoteForm;
