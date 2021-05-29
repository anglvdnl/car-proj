import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from '../Pages/Home'
import Categories from '../Pages/Categories'
import Comparison from '../Pages/Comparison'
import Contacts from '../Pages/Contacts'
import bmw from '../files/bmw.svg';
import audi from '../files/audi.svg';
import lambo from '../files/lambo.svg'


function Nav() {
  const data = [
    {
        brand: 'bmw',
        img: bmw,
        text: 'BMW',
    },

    {
        brand: 'audi',
        img: audi,
        text: 'AUDI',
    },

    {
        brand: 'lambo',
        img: lambo,
    },
]


  return (
        <Router>
            <nav>
              <h1 className="nav-name">CC</h1>
              <ul className="nav-ul">
                <li>
                  <NavLink exact={true} activeClassName="active" to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/categories">Categories</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/comparison">Comparison</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/contacts">Contacts</NavLink>
                </li>
              </ul>
              <IoPersonCircleOutline className="signup" />
            </nav>
            <Switch>
              <Route path="/categories">
                <Categories data={data} />
              </Route>
              <Route path="/comparison">
                <Comparison data={data} />
              </Route>
              <Route path="/contacts">
                <Contacts />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </Router>
  );
}

export default Nav;
