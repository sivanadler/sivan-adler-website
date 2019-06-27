import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { Redirect } from 'react-router'
import sivan from './images/sivan-adler.jpg'
import linkedin from './icons/linkedin.png'
import wordpress from './icons/wordpress.png'
import github from './icons/github.png'

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

  handleContact = () => {
    this.props.history.push('/contact')
  }

  render() {
    return (
      <div className="nav">
        <Router>
          <div>
          <img className="about-me-image" src={sivan} alt="photo of sivan adler" />
          </div>
          <NavLink to="/" exact className="main-nav-link" onClick={this.handleGoHome}><p className="main-nav-link-text"><strong>HOME</strong></p></NavLink>
          <NavLink to="/about" exact className="main-nav-link"><p className="main-nav-link-text" onClick={this.handleAboutMe}><strong>ABOUT ME</strong></p></NavLink>
          <NavLink to="/projects" exact className="main-nav-link"><p className="main-nav-link-text" onClick={this.handleProjects}><strong>PROJECTS</strong></p></NavLink>
          <NavLink to="/contact" exact className="main-nav-link"><p className="main-nav-link-text" onClick={this.handleContact}><strong>CONTACT</strong></p></NavLink>
          <br/>
        </Router>
      </div>
    )
  }
}
export default Nav
