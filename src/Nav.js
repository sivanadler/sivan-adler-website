import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { Redirect } from 'react-router'
import sivan from './images/sivan-adler.jpg'
import linkedin from './icons/linkedin.png'
import wordpress from './icons/wordpress.png'
import github from './icons/github.png'
import logo from './images/my-logo.png'
import { SocialIcon } from 'react-social-icons';

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
        <Router>
          <div>
          <img className="logo" src={sivan} alt="photo of sivan adler" />
          </div>
          <NavLink to="/" exact className={this.getclassName("/")} onClick={this.handleGoHome}><p className="main-nav-link-text"><strong>HOME</strong></p></NavLink>
          <NavLink to="/about" exact className="main-nav-link"><p className="main-nav-link-text" onClick={this.handleAboutMe}><strong>ABOUT ME</strong></p></NavLink>
          <NavLink to="/projects" exact className="main-nav-link"><p className="main-nav-link-text" onClick={this.handleProjects}><strong>PROJECTS</strong></p></NavLink>
          <NavLink to="/contact" exact className="main-nav-link"><p className="main-nav-link-text" onClick={this.handleContact}><strong>CONTACT</strong></p></NavLink>
          <br/>
        </Router>
        <div className="socials-mini">
          <SocialIcon
            url="http://linkedin.com/in/sivanadler"
            bgColor="currentColor"
            fgColor="white"
            className="social-mini-icons"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="http://github.com/sivanadler"
            bgColor="currentColor"
            fgColor="white"
            className="social-mini-icons"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://sivanadler.wordpress.com/"
            network="medium"
            bgColor="currentColor"
            fgColor="white"
            className="social-mini-icons"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://sivanadler.wixsite.com/sivanportfolio"
            bgColor="currentColor"
            fgColor="white"
            className="social-mini-icons"
            onMouseOver="#e6f2fb"
            style={{ height: 40, width: 40 }}
          />

        </div>
      </div>
    )
  }
}
export default Nav
