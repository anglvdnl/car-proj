import React, { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from '../Pages/Home'
import Categories from '../Pages/Categories'
import Comparison from '../Pages/Comparison'
import Contacts from '../Pages/Contacts'
import Auth from '../Pages/Auth'
import bmw from '../files/bmw.svg';
import audi from '../files/audi.svg';


function Nav() {
  const data = [
    {
      year: 2020,
      model: 'M5 F90',
      wb:	2982,
      length: 4965,
      width:  1903,
      height: 1473,
      weight: 1855,
      engine: '4.4 V8',
      hp: 600,
      cmpg: 14.5,
      hmpg: 8.2,
      maxspeed: 250,
      to100: 3.4,
      tc: 750,
    },

    {
      year: 2019,
      model: 'Audi RS7',
      wb:	2930,
      length: 5009,
      width:  1950,
      height: 1424,
      weight: 2065,
      engine: '4.0 V8',
      hp: 600,
      cmpg: 16.1,
      hmpg: 8.7,
      maxspeed: 250,
      to100: 3.6,
      tc: 800
    },
]
const imgs=  [
  {
    img: bmw,
  },
  {
    img: audi,
  },
]

const [cars, addNewCar] = useState([])

const addCar = (car) => {

  if (!cars.some(x => x === car)) {
    addNewCar([...cars, car])
  }
}

const clearCars = () => {
  addNewCar([])
}


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
            <NavLink to="/authentication"><IoPersonCircleOutline className="signup" /></NavLink>
          </nav>
          <Switch>
            <Route path="/authentication">
              <Auth />
            </Route>
            <Route path="/categories">
              <Categories addCar={addCar} data={data} imgs={imgs} />
            </Route>
            <Route path="/comparison">
              <Comparison clearCars={clearCars} cars={cars} data={data} />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
  );
}

export default Nav;
