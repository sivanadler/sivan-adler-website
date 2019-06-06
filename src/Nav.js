import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { Redirect } from 'react-router'

class Nav extends React.Component {

  handleAboutMe = () => {
    this.props.history.push('/about')
  }

  handleGoHome = () => {
    this.props.history.push('/')
  }

  handleProjects = () => {
    this.props.history.push('/projects')
  }

  handleBlog = () => {
    this.props.history.push('/blog')
  }

  handleContact = () => {
    this.props.history.push('/contact')
  }

  render() {
    return (
      <div className="nav">
        <Router>
          <NavLink to="/" exact className="main-nav-link" onClick={this.handleGoHome}><p className="main-nav-link-text"><strong>HOME</strong></p></NavLink>
          <NavLink to="/about" exact className="main-nav-link"><p className="main-nav-link-text" onClick={this.handleAboutMe}><strong>ABOUT ME</strong></p></NavLink>
          <NavLink to="/projects" exact className="main-nav-link"><p className="main-nav-link-text" onClick={this.handleProjects}><strong>PROJECTS</strong></p></NavLink>
          <NavLink to="/blog" exact className="main-nav-link"><p className="main-nav-link-text" onClick={this.handleBlog}><strong>BLOG</strong></p></NavLink>
          <NavLink to="/contact" exact className="main-nav-link"><p className="main-nav-link-text" onClick={this.handleContact}><strong>CONTACT</strong></p></NavLink>
        </Router>
      </div>
    )
  }
}
export default Nav
