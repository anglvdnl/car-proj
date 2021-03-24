import React from 'react';
import { FaSearch } from "react-icons/fa";
import Home from '../../App'
import Categories from '../../App'
import Comparison from '../../App'
import Contacts from '../../App'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Nav() {
    return (
      <Router>
        <div className="nav">
          <h1 className="nav-name">CC</h1>
          <ul className="nav-ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="Categories">Categories</Link>
            </li>
            <li>
              <Link to="Comparison">Comparison</Link>
            </li>
            <li>
              <Link to="Contacts">Contacts</Link>
            </li>
          </ul>
          <FaSearch className="search" />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Catwgories">
              <Categories />
            </Route>
            <Route path="/Comparison">
              <Comparison />
            </Route>
            <Route path="/Contacts">
              <Contacts />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}


export default Nav