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
import Footer from './Footer'

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
              <img className="sivan" src={sivan} />
              <p className="about-text">I am Full Stack Web Developer with an eye and passion for design. I  transitioned into web development to build visually attractive, highly functional and technically efficient web applications. With experience as a non-profit professional, I am highly capable of identifying creative and dynamic solutions to challenges and adapting quickly and seamlessly to change. My degree in Psychology enables me to bring my analytical and problem solving skills to all of my professional pursuits, enabling me to tackle technical problems from a different perspective. I am seeking a career that will allow me to infuse my keen eye for design with my technical skills to build products that solve business challenges.</p>
              <h2 className="about-text">TECHNICAL SKILLS</h2>
              <div id="skills-wrapper">
                <div id="wrapper">
                  <img className="icons rounded" src={javascript}/>
                  <div class="overlay">
                    <div class="text">Javascript</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={react}/>
                  <div class="overlay">
                    <div class="text">React</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={redux}/>
                  <div class="overlay">
                    <div class="text">Redux</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={npm}/>
                  <div class="overlay">
                    <div class="text">npm</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={ruby}/>
                  <div class="overlay">
                    <div class="text">Ruby</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={rails}/>
                  <div class="overlay">
                    <div class="text">Rails</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={css}/>
                  <div class="overlay">
                    <div class="text">CSS</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={html}/>
                  <div class="overlay">
                    <div class="text">HTML</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={bootstrap}/>
                  <div class="overlay">
                    <div class="text">Bootstrap</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={sql}/>
                  <div class="overlay">
                    <div class="text">SQL</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={postgres}/>
                  <div class="overlay">
                    <div class="text">PostgreSQL</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={git}/>
                  <div class="overlay">
                    <div class="text">Git</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={github}/>
                  <div class="overlay">
                    <div class="text">Github</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={heroku}/>
                  <div class="overlay">
                    <div class="text">Heroku</div>
                  </div>
                </div>
                <div id="wrapper">
                  <img className="icons rounded" src={aws}/>
                  <div class="overlay">
                    <div class="text">AWS</div>
                  </div>
                </div>
            </div>
            <h2 className="about-text">OTHER SKILLS</h2>
            <div id="wrapper">
              <img className="icons rounded" src={ux}/>
              <div class="overlay">
                <div class="text">UX/UI Design</div>
              </div>
            </div>
            <div id="wrapper">
              <img className="icons rounded" src={designthinking}/>
              <div class="overlay">
                <div class="text">Design Thinking</div>
              </div>
            </div>
            <div id="wrapper">
              <img className="icons rounded" src={sketch}/>
              <div class="overlay">
                <div class="text">Sketch</div>
              </div>
            </div>
            <div id="wrapper">
              <img className="icons rounded" src={invision}/>
              <div class="overlay">
                <div class="text">Invision</div>
              </div>
            </div>
            <div id="wrapper">
              <img className="icons rounded" src={photoshop}/>
              <div class="overlay">
                <div class="text"> Adobe Photoshop</div>
              </div>
            </div>
            <div id="wrapper">
              <img className="icons rounded" src={illustrator}/>
              <div class="overlay">
                <div class="text"> Adobe Illustrator</div>
              </div>
            </div>
            <div id="wrapper">
              <img className="icons rounded" src={indesign}/>
              <div class="overlay">
                <div class="text"> Adobe Indesign</div>
              </div>
            </div>
            <div id="wrapper">
              <img className="icons rounded" src={excel}/>
              <div class="overlay">
                <div class="text">Microsoft Excel</div>
              </div>
            </div>
            <div id="wrapper">
              <img className="icons rounded" src={word}/>
              <div class="overlay">
                <div class="text">Microsoft Word</div>
              </div>
            </div>
            <div id="wrapper">
              <img className="icons rounded" src={powerpoint}/>
              <div class="overlay">
                <div class="text">Microsoft Powerpoint</div>
              </div>
            </div>
            <div id="wrapper">
              <img className="icons rounded" src={outlook}/>
              <div class="overlay">
                <div class="text">Microsoft Outlook</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default About
