import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Home from "./Home";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/userProfile" component={UserProfile}></Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
