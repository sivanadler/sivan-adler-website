import React from 'react';
import './App.css';
import ImageGallery from './ImageGallery'
import Home from './Home'
import Nav from './Nav'
import About from './About'
import Project from './Project'
import Blog from './Blog'
import Contact from './Contact'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Nav history={this.props.history}/>
          <Route exact path="/about" render={routerProps => <About {...routerProps}/>}/>
      </div>
    );
  }
}

export default App;
