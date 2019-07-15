import React from 'react';
import './App.css';
import Home from './Home'
import Nav from './Nav'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Footer from './Footer'
import { Link, animateScroll as scroll } from "react-scroll";

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="left">
          <Nav history={this.props.history}/>
        </div>
        <div className="right">

          <Route exact path="/home" render={routerProps => <Home {...routerProps}/>}/>

          <Route exact path="/about" render={routerProps => <About {...routerProps}/>}/>

          <Route exact path="/projects" render={routerProps => <Project {...routerProps}/>}/>

          <Route exact path="/education" render={routerProps => <Education {...routerProps}/>}/>

          <Route exact path="/experience" render={routerProps => <Experience {...routerProps}/>}/>

          <Route exact path="/contact" render={routerProps => <Contact {...routerProps}/>}/>
          <Home />

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
