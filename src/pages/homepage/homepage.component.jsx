import React from "react";

import Sidebar from "../../components/sidebar/sidebar.component";
import CustomButton from "../../components/button/custom-button.component";
import NoteForm from "../../components/note-form/note-form.component";

import "./homepage.styles.scss";

const HomePage = () => {
  const handleClick = () => {
    console.log("handle click");
  };

  return (
    <div className="homepage">
      <Sidebar />
      <div className="homepage__main">
        <CustomButton handleClick={handleClick} label="New Note" />
        <NoteForm />
      </div>
    </div>
  );
};

export default HomePage;
