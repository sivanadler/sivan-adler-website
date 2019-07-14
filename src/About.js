import React from "react";
import Nav from './Nav'
import sivan from './images/sivan-adler.jpg'
import react from './icons/react.svg'
import javascript from './icons/javascript.svg'
import ruby from './icons/ruby.svg'
import rails from './icons/rails.svg'
import css from './icons/css.svg'
import html from './icons/html.svg'
import sql from './icons/sql.svg'
import postgres from './icons/postgres.svg'
import git from './icons/git.svg'
import github from './icons/github.svg'
import heroku from './icons/heroku.svg'
import redux from './icons/redux.svg'
import aws from './icons/aws.svg'
import bootstrap from './icons/bootstrap.svg'
import npm from './icons/npm.svg'
import logo from './images/my-logo.png'

class About extends React.Component {

  render() {
    return (
      <div>
        <div className="left">
          <Nav history={this.props.history}/>
        </div>
        <div className="right">
          <div className="right">
            <div className="about-me-description">
            <h1 className="header">ABOUT ME</h1>
              <img className="sivan" src={sivan} />
              <p className="about-text">I am Full Stack Web Developer with an eye and passion for design. I  transitioned into web development to build visually attractive, highly functional and technically efficient web applications. With experience as a non-profit professional, I am highly capable of identifying creative and dynamic solutions to challenges and adapting quickly and seamlessly to change. My degree in Psychology enables me to bring my analytical and problem solving skills to all of my professional pursuits, enabling me to tackle technical problems from a different perspective. I am seeking a career that will allow me to infuse my keen eye for design with my technical skills to build products that solve business challenges.</p>
              <h2 className="about-text">TECHNICAL SKILLS</h2>
              <div id="skills-wrapper">
                <div id="wrapper">
                  <img className="icons rounded" src={javascript}/>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={react}/>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={redux}/>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={npm}/>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={ruby}/>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={rails}/>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={css}/>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={html}/>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={bootstrap}/>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={sql}/>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={postgres}/>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={git}/>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={github}/>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={heroku}/>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={aws}/>
                </div>
                <br/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default About
