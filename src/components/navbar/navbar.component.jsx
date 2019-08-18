import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as NoteIcon } from "../../assets/notebook.svg";

import "./navbar.styles.scss";

const Navbar = () => (
  <div className="navbar">
    <Link to="/" className="navbar__logo">
      <NoteIcon className="note-icon" />
    </Link>
  </div>
);

export default Navbar;
