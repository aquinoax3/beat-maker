import React, {useEffect, useState} from "react";
// import { Routes, Route, Link } from "react-router-dom";
import {Route, Switch, BrowswerRouter as Router } from "react-router-dom"
import "./App.css";
import Home from "./Home";
import NavBar from "./Navbar";
import Beats from "./Beats";
import Authorize from "./Authorize"

function App() {

  useEffect(() => {
    fetch(`/authorize`)
  },[])

  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/beats">
          <Beats />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
