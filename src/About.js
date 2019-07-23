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
import excel from './icons/excel.svg'
import word from './icons/word.svg'
import powerpoint from './icons/powerpoint.svg'
import sketch from './icons/sketch.svg'
import ux from './icons/ux.svg'
import photoshop from './icons/photoshop.svg'
import indesign from './icons/indesign.svg'
import illustrator from './icons/illustrator.svg'
import designthinking from './icons/designthinking.svg'
import invision from './icons/invision.svg'
import outlook from './icons/outlook.svg'

class About extends React.Component {

  render() {
    return (
      <div>
        <div className="left">
          <Nav history={this.props.history}/>
        </div>
        <div className="right">
            <div className="about-me-description">
            <h1 className="header">ABOUT ME</h1>
              <img className="sivan" alt="profile picture" src={sivan} />
              <p className="about-text">I am Full Stack Web Developer with an eye and passion for design. I  transitioned into web development to build visually attractive, highly functional and technically efficient web applications. With experience as a non-profit professional, I am highly capable of identifying creative and dynamic solutions to challenges and adapting quickly and seamlessly to change. My degree in Psychology enables me to bring my analytical and problem solving skills to all of my professional pursuits, enabling me to tackle technical problems from a different perspective. I am seeking a career that will allow me to infuse my keen eye for design with my technical skills to build products that solve business challenges.</p>
              <h2 className="about-text">TECHNICAL SKILLS</h2>
              <div id="skills-wrapper">
                <div id="wrapper">
                  <img className="icons rounded" alt="skills icons" src={javascript}/>
                  <div className="overlay">
                    <div className="text">Javascript</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" alt="skills icons" src={react}/>
                  <div className="overlay">
                    <div className="text">React</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" alt="skills icons" src={redux}/>
                  <div className="overlay">
                    <div className="text">Redux</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" alt="skills icons" src={npm}/>
                  <div className="overlay">
                    <div className="text">npm</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" alt="skills icons" src={ruby}/>
                  <div className="overlay">
                    <div className="text">Ruby</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" alt="skills icons" src={rails}/>
                  <div className="overlay">
                    <div className="text">Rails</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" alt="skills icons" src={css}/>
                  <div className="overlay">
                    <div className="text">CSS</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" alt="skills icons" src={html}/>
                  <div className="overlay">
                    <div className="text">HTML</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" alt="skills icons" src={bootstrap}/>
                  <div className="overlay">
                    <div className="text">Bootstrap</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" alt="skills icons" src={sql}/>
                  <div className="overlay">
                    <div className="text">SQL</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" alt="skills icons" src={postgres}/>
                  <div className="overlay">
                    <div className="text">PostgreSQL</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" alt="skills icons" src={git}/>
                  <div className="overlay">
                    <div className="text">Git</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" alt="skills icons" src={github}/>
                  <div className="overlay">
                    <div className="text">Github</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" alt="skills icons" src={heroku}/>
                  <div className="overlay">
                    <div className="text">Heroku</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" alt="skills icons" src={aws}/>
                  <div className="overlay">
                    <div className="text">AWS</div>
                  </div>
                </div>
            </div>
            <h2 className="about-text">OTHER SKILLS</h2>
            <div id="skills-wrapper">
              <div id="wrapper">
                <img className="icons rounded" alt="skills icons" src={ux}/>
                <div className="overlay">
                  <div className="text">UX/UI Design</div>
                </div>
              </div>
              <div id="wrapper">
                <img className="icons rounded" alt="skills icons" src={designthinking}/>
                <div className="overlay">
                  <div className="text">Design Thinking</div>
                </div>
              </div>
              <div id="wrapper">
                <img className="icons rounded" alt="skills icons" src={sketch}/>
                <div className="overlay">
                  <div className="text">Sketch</div>
                </div>
              </div>
              <div id="wrapper">
                <img className="icons rounded" alt="skills icons" src={invision}/>
                <div className="overlay">
                  <div className="text">Invision</div>
                </div>
              </div>
              <div id="wrapper">
                <img className="icons rounded" alt="skills icons" src={photoshop}/>
                <div className="overlay">
                  <div className="text"> Adobe Photoshop</div>
                </div>
              </div>
              <div id="wrapper">
                <img className="icons rounded" alt="skills icons" src={illustrator}/>
                <div className="overlay">
                  <div className="text"> Adobe Illustrator</div>
                </div>
              </div>
              <div id="wrapper">
                <img className="icons rounded" alt="skills icons" src={indesign}/>
                <div className="overlay">
                  <div className="text"> Adobe Indesign</div>
                </div>
              </div>
              <div id="wrapper">
                <img className="icons rounded" alt="skills icons" src={excel}/>
                <div className="overlay">
                  <div className="text">Microsoft Excel</div>
                </div>
              </div>
              <div id="wrapper">
                <img className="icons rounded" alt="skills icons" src={word}/>
                <div className="overlay">
                  <div className="text">Microsoft Word</div>
                </div>
              </div>
              <div id="wrapper">
                <img className="icons rounded" alt="skills icons" src={powerpoint}/>
                <div className="overlay">
                  <div className="text">Microsoft Powerpoint</div>
                </div>
              </div>
              <div id="wrapper">
                <img className="icons rounded" alt="skills icons" src={outlook}/>
                <div className="overlay">
                  <div className="text">Microsoft Outlook</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default About
