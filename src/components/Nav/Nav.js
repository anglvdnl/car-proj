import React, {useState} from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../Pages/Home'
import Categories from '../Pages/Categories'
import Comparison from '../Pages/Comparison'
import Contacts from '../Pages/Contacts'
import classNames from 'classnames/dedupe';


function Nav() {
  const [bg, setBg] = useState('home-bg')

  let classes = {'wrapper': true}
  classes[bg] = true

  return (
    <div className={classNames(classes)}>
        <Router>
          <div>
            <nav>
              <h1 className="nav-name">CC</h1>
              <ul className="nav-ul">
                <li>
                  <Link onClick={() => setBg('home-bg')} to="/">Home</Link>
                </li>
                <li>
                  <Link onClick={() => setBg('cat-bg')} to="/categories">Categories</Link>
                </li>
                <li>
                  <Link onClick={() => setBg('comp-bg')} to="/comparison">Comparison</Link>
                </li>
                <li>
                  <Link onClick={() => setBg('cont-bg')} to="/contacts">Contacts</Link>
                </li>
              </ul>
              <IoPersonCircleOutline className="signup" />
            </nav>
            <Switch>
              <Route path="/categories">
                <Categories />
              </Route>
              <Route path="/comparison">
                <Comparison />
              </Route>
              <Route path="/contacts">
                <Contacts />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default Nav;
