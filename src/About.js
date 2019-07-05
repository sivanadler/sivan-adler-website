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

class About extends React.Component {

  render() {
    return (
      <div>
        <div className="left">
          <Nav history={this.props.history}/>
        </div>
        <div className="right">
          <div className="about-me-div">
            <div className="about-me-description">
            <h1 className="header">ABOUT ME</h1>
              <p className="about-text">I am Full Stack Web Developer with an eye and passion for design. I  transitioned into web development to build visually attractive, highly functional and technically efficient web applications. With experience as a non-profit professional, I am highly capable of identifying creative and dynamic solutions to challenges and adapting quickly and seamlessly to change. My degree in Psychology enables me to bring my analytical and problem solving skills to all of my professional pursuits, enabling me to tackle technical problems from a different perspective. I am seeking a career that will allow me to infuse my keen eye for design with my technical skills to build products that solve business challenges.</p>
              <br/>
              <h2 className="about-text">TECHNICAL SKILLS</h2>
              <div id="skills-wrapper">
                <div id="wrapper">
                  <img className="icons rounded" src={javascript}/>
                  <p class="text">Javascript</p>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={react}/>
                  <p class="text">React</p>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={redux}/>
                  <p class="text">Redux</p>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={npm}/>
                  <p class="text">npm</p>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={ruby}/>
                  <p class="text">Ruby</p>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={rails}/>
                  <p class="text">Rails</p>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={css}/>
                  <p class="text">CSS</p>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={html}/>
                  <p class="text">HTML</p>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={bootstrap}/>
                  <p class="text">Bootstrap</p>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={sql}/>
                  <p class="text">SQL</p>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={postgres}/>
                  <p class="text">PostgreSQL</p>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={git}/>
                  <p class="text">Git</p>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={github}/>
                  <p class="text">Github</p>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={heroku}/>
                  <p class="text">Heroku</p>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={aws}/>
                  <p class="text">AWS</p>
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
