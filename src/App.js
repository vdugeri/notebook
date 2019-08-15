import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import Homepage from "./pages/homepage/homepage.component";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
