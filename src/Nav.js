import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { Redirect } from 'react-router'
import sivan from './images/sivan-adler.jpg'
import linkedin from './icons/linkedin.png'
import wordpress from './icons/wordpress.png'
import github from './icons/github.png'
import logo from './images/my-logo.png'
import { Link, animateScroll as scroll } from "react-scroll";

class Nav extends React.Component {

  // handleAboutMe = () => {
  //   this.props.history.push('/about')
  // }
  //
  // handleGoHome = () => {
  //   this.props.history.push('/')
  // }
  //
  // handleProjects = () => {
  //   this.props.history.push('/projects')
  // }
  //
  // handleContact = () => {
  //   this.props.history.push('/contact')
  // }
  //
  // handleEducation = () => {
  //   this.props.history.push('/education')
  // }
  //
  // handleExperience = () => {
  //   this.props.history.push('/experience')
  // }

  handleMenuToggle = () => {
    var input = document.querySelector('#checkbox').checked = false
    return input

    //trying to figure out how to uncheck checkbox when navlink is clicked
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };


  render() {
    return (
      <div className="nav">
        <nav role="navigation">
          <div id="menuToggle">
            <input id="checkbox" type="checkbox" />
              <span className='hamburger'></span>
              <span className='hamburger'></span>
              <span className='hamburger'></span>
              <p className="menu-text">MENU</p>
              <p className="mobile-text"><strong>SIVAN ADLER:</strong> SOFTWARE ENGINEER</p>
            <ul id="menu">
              <li className="logo-nav-link">
              <img
                src={logo}
                className="logo"
                alt="Logo"
                onClick={this.scrollToTop}
              />
              </li>
              <li className="main-nav-link">
                <Link
                  activeClass="active"
                  to="home"
                  onClick={this.scrollToTop}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  <p><strong>HOME</strong></p>
                </Link>
              </li>
              <li className="main-nav-link" onClick={this.handleAboutMe}>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={this.handleMenuToggle}
                >
                  <p><strong>ABOUT</strong></p>
                </Link>
              </li>
              <li className="main-nav-link">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <p><strong>PROJECTS</strong></p>
                </Link>
              </li>
              <li className="main-nav-link">
                <Link
                  activeClass="active"
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <p><strong>EDUCATION</strong></p>
                </Link>
              </li>
              <li className="main-nav-link">
                <Link
                  activeClass="active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <p><strong>EXPERIENCE</strong></p>
                </Link>
              </li>
              <li className="main-nav-link">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <p><strong>CONTACT</strong></p>
                </Link>
              </li>
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


//<NavLink to="/" exact className={this.getclassName("/")} onClick={this.handleGoHome}><p className="main-nav-link-text"><strong>HOME</strong></p></NavLink>
