import React from 'react';
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Cat from './components/Categories/Cat'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
        <Home />
    </div>
  );
}

function Home() {
  return(
    <div>
      <Nav />
      <Hero />
    </div>
  )
}

function  Categories() {
  return(
    <div>
      <Cat />
    </div>
  )
}

function Comparison() {
}

function Contacts() {
}


export default App;
