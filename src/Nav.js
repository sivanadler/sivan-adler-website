import React from "react";
import logo from './images/my-logo.png'
import { Link, animateScroll as scroll } from "react-scroll";

class Nav extends React.Component {
  state = {
    checked: false,
  }

  handleCloseNav = () => {
    var input = document.querySelector('input')
    this.setState({
      checked: false
    })
  }

  scrollToTop = () => {
    scroll.scrollToTop()
    this.setState({
      checked: false
    })
  };

  toggleMenu = e => {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    return (
      <div className="nav">
        <nav role="navigation">
          <div id="menuToggle">
            <input id="checkbox" type="checkbox" checked={this.state.checked} onClick={this.toggleMenu}/>
              <span className='hamburger'></span>
              <span className='hamburger'></span>
              <span className='hamburger'></span>
              <p className="menu-text">MENU</p>
              <p className="mobile-text" onClick={this.scrollToTop}><strong>SIVAN ADLER:</strong> SOFTWARE ENGINEER</p>
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
                  onClick={this.handleCloseNav}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <p><strong>ABOUT</strong></p>
                </Link>
              </li>
              <li className="main-nav-link">
                <Link
                  onClick={this.handleCloseNav}
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
                  onClick={this.handleCloseNav}
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
                  onClick={this.handleCloseNav}
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
                  onClick={this.handleCloseNav}
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
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
