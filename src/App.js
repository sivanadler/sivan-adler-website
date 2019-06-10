import React from 'react';
import './App.css';
import Home from './Home'
import Nav from './Nav'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Nav history={this.props.history}/>
          <Route exact path="/home" render={routerProps => <Home {...routerProps}/>}/>
          <Route exact path="/about" render={routerProps => <About {...routerProps}/>}/>
          <Route exact path="/projects" render={routerProps => <Project {...routerProps}/>}/>
          <Route exact path="/contact" render={routerProps => <Contact {...routerProps}/>}/>
        <Home />
      </div>
    );
  }
}

export default App;
