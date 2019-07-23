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
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <div className="App">
          <Nav history={this.props.history}/>
        <div className="right">
        <Element name="home" className="home" >
            <Home />
        </Element>
          <Route exact path="/about">
            <Element name="about" className="about" >
              <About />
            </Element>
          </Route>
        <Element name="projects" className="projects" >
            <Project />
        </Element>
        <Element name="education" className="education" >
            <Education />
        </Element>
        <Element name="experience" className="experience" >
            <Experience />
        </Element>
        <Element name="contact" className="contact" >
            <Contact />
        </Element>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

// <Route exact path="/home" render={routerProps => <Home {...routerProps}/>}/>
//
// <Route exact path="/about" render={routerProps => <About {...routerProps}/>}/>
//
// <Route exact path="/projects" render={routerProps => <Project {...routerProps}/>}/>
//
// <Route exact path="/education" render={routerProps => <Education {...routerProps}/>}/>
//
// <Route exact path="/experience" render={routerProps => <Experience {...routerProps}/>}/>
//
// <Route exact path="/contact" render={routerProps => <Contact {...routerProps}/>}/>
