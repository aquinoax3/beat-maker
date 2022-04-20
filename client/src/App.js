import React, {useEffect, useState} from "react";
// import { Routes, Route, Link } from "react-router-dom";
import {Route, Switch, BrowswerRouter as Router } from "react-router-dom"
import "./App.css";
import Home from "./Home";
import NavBar from "./Navbar";
import Beats from "./Beats";
import SignUp from "./SignUp"
import Login from "./Login"
// import Authorize from "./SignUp"

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

  // console.log(currentUser)
  // if(!currentUser) 
  // return <Home setCurrentUser={setCurrentUser} />

  
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
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
