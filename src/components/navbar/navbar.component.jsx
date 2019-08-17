import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as NoteIcon } from "../../assets/notebook.svg";

import "./navbar.styles.scss";

const Navbar = () => (
  <div className="navbar">
    <Link to="/" className="navbar__logo">
      <NoteIcon className="note-icon" />
    </Link>
    <ul className="navbar__navigation">
      <li className="navbar__naviagation--item">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar__naviagation--item">
        <Link to="/">About</Link>
      </li>
      <li className="navbar__naviagation--item">
        <Link to="/">Login</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
