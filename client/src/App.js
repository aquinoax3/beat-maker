import React, {useEffect, useState} from "react";
// import { Routes, Route, Link } from "react-router-dom";
import {Route, Switch, BrowswerRouter as Router } from "react-router-dom"
import "./App.css";
import Home from "./Home";
import NavBar from "./Navbar";
import Beats from "./Sounds";
import KitDisplay from "./KitDisplay";
import Profile from "./Profile";

import SignUp from "./SignUp"
import Login from "./Login"
import Kits from "./Kits";
import KitDropDown from "./KitDropDown";

function App() {

  const [currentUser, setCurrentUser] = useState("")

  useEffect(() => {
    fetch(`/auth`)
    .then(response => {
      if(response.ok) {
        response.json().then(user => setCurrentUser(user))
      }
    })
  },[])


  //Fix This to proper route
  console.log(currentUser)
  if(!currentUser) 
  // return <Home setCurrentUser={setCurrentUser} />
  console.log("not logged in")

  
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/sounds">
          <KitDropDown />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login setCurrentUser={setCurrentUser} />
        </Route>

        <Route exact path="/kitdisplay">
          <KitDisplay />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
