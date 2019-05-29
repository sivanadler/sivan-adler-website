import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

class Nav extends React.Component {

  render() {
    return (
      <div className="nav">
        <Router>
          <NavLink to="/" exact className="main-nav-link"><p className="main-nav-link-text"><strong>HOME</strong></p></NavLink>
          <NavLink to="/" exact className="main-nav-link"><p className="main-nav-link-text"><strong>ABOUT ME</strong></p></NavLink>
          <NavLink to="/" exact className="main-nav-link"><p className="main-nav-link-text"><strong>PROJECTS</strong></p></NavLink>
          <NavLink to="/" exact className="main-nav-link"><p className="main-nav-link-text"><strong>BLOG</strong></p></NavLink>
          <NavLink to="/" exact className="main-nav-link"><p className="main-nav-link-text"><strong>CONTACT</strong></p></NavLink>
        </Router>
      </div>
    )
  }
}
export default Nav
