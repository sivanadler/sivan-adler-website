import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { Redirect } from 'react-router'

class Nav extends React.Component {

  render() {
    return (
      <div className="nav">
        <Router>
          <NavLink to="/" exact className="main-nav-link"><p className="main-nav-link-text"><strong>HOME</strong></p></NavLink>
          <NavLink to="/about" exact className="main-nav-link"><p className="main-nav-link-text" onClick={this.handleAboutMe}><strong>ABOUT ME</strong></p></NavLink>
          <NavLink to="/projects" exact className="main-nav-link"><p className="main-nav-link-text"><strong>PROJECTS</strong></p></NavLink>
          <NavLink to="/blog" exact className="main-nav-link"><p className="main-nav-link-text"><strong>BLOG</strong></p></NavLink>
          <NavLink to="/contact" exact className="main-nav-link"><p className="main-nav-link-text"><strong>CONTACT</strong></p></NavLink>
        </Router>
      </div>
    )
  }
}
export default Nav
