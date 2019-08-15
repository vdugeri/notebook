import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as NoteIcon } from "../../assets/notebook.svg";

import "./navbar.styles.scss";

const Navbar = () => (
  <div className="navbar">
    <div className="navbar__logo">
      <NoteIcon className="note-icon" />
    </div>
    <ul className="navbar__navigation">
      <li className="navbaar__naviagation--item">
        <Link to="/">Home</Link>
      </li>
      <li className="navbaar__naviagation--item">
        <Link to="/">About</Link>
      </li>
      <li className="navbaar__naviagation--item">
        <Link to="/">Login</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
