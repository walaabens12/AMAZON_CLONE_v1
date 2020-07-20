import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Navbar.js"
import Home from "./Home.js"
import Footer from "./Footer.js"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Checkout">
          <Navbar />
          </Route>
          <Route path="/login">
            <h1> Login</h1>
          </Route>
          <Route path="/">
             <Navbar />
             <Home/>
             <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
