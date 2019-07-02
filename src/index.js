import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/about" component={About} />
    <Route exact path="/education" component={Education} />
    <Route exact path="/experience" component={Experience} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Project} />
    <Route exact path="/contact" component={Contact} />

  </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


//Component Hierarchy

//App
  //Nav
  //Home
  //About
  //Projects
    //ProjectCards
  //Blog
    //Posts
  //Contact
    //ContactForm
