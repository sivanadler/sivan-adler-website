import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { Redirect } from 'react-router'
import sivan from './images/sivan-adler.jpg'
import linkedin from './icons/linkedin.png'
import wordpress from './icons/wordpress.png'
import github from './icons/github.png'
import logo from './images/my-logo.png'

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

  handleEducation = () => {
    this.props.history.push('/education')
  }

  handleExperience = () => {
    this.props.history.push('/experience')
  }

  getclassName = (pathname) => {
    if(this.props.history.location.pathname === pathname){
      return 'active'
    } else {
      return 'main-nav-link'
    }
  }

  render() {
    return (
      <div className="nav">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
              <span className='hamburger'></span>
              <span className='hamburger'></span>
              <span className='hamburger'></span>
              <p className="mobile-text">SIVAN ADLER</p>
            <ul id="menu">
              <NavLink to="/" exact className='logo-nav-link'> <img className="logo" src={logo}/> </NavLink>
              <NavLink to="/" exact className={this.getclassName("/")} onClick={this.handleGoHome}><p className="main-nav-link-text"><strong>HOME</strong></p></NavLink>
              <NavLink to="/about" exact className={this.getclassName("/about")} onClick={this.handleAboutMe}><p className="main-nav-link-text"><strong>ABOUT ME</strong></p></NavLink>
              <NavLink to="/projects" exact className="main-nav-link"><p className="main-nav-link-text" onClick={this.handleProjects}><strong>PROJECTS</strong></p></NavLink>
              <NavLink to="/education" exact className="main-nav-link"><p className="main-nav-link-text" onClick={this.handleEducation}><strong>EDUCATION</strong></p></NavLink>
              <NavLink to="/experience" exact className="main-nav-link"><p className="main-nav-link-text" onClick={this.handleExperience}><strong>EXPERIENCE</strong></p></NavLink>
              <NavLink to="/contact" exact className="main-nav-link"><p className="main-nav-link-text" onClick={this.handleContact}><strong>CONTACT</strong></p></NavLink>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default Nav
// <Router>
//   <div>
//   <img className="logo" src={sivan} alt="photo of sivan adler" />
//   </div>
//   <NavLink to="/" exact className={this.getclassName("/")} onClick={this.handleGoHome}><p className="main-nav-link-text"><strong>HOME</strong></p></NavLink>
//   <NavLink to="/about" exact className="main-nav-link"><p className="main-nav-link-text" onClick={this.handleAboutMe}><strong>ABOUT ME</strong></p></NavLink>
//   <NavLink to="/projects" exact className="main-nav-link"><p className="main-nav-link-text" onClick={this.handleProjects}><strong>PROJECTS</strong></p></NavLink>
//   <NavLink to="/education" exact className="main-nav-link"><p className="main-nav-link-text" onClick={this.handleEducation}><strong>EDUCATION</strong></p></NavLink>
//   <NavLink to="/experience" exact className="main-nav-link"><p className="main-nav-link-text" onClick={this.handleExperience}><strong>EXPERIENCE</strong></p></NavLink>
//   <NavLink to="/contact" exact className="main-nav-link"><p className="main-nav-link-text" onClick={this.handleContact}><strong>CONTACT</strong></p></NavLink>
//   <br/>
// </Router>
