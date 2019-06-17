import React from "react";
import Nav from './Nav'
import sivan from './images/sivan-adler.jpg'
class About extends React.Component {

  render() {
    return (
      <div className="about-me-div">
        <Nav history={this.props.history}/>
        <h1 className="header">ABOUT ME</h1>
        <div className="about-me-description">
          <p>I am Full Stack Web Developer with an eye and passion for design. I  transitioned into web development to build visually attractive, highly functional and technically efficient web applications. With experience as a non-profit professional, I am highly capable of identifying creative and dynamic solutions to challenges and adapting quickly and seamlessly to change. My degree in Psychology enables me to bring my analytical and problem solving skills to all of my professional pursuits, enabling me to tackle technical problems from a different perspective. I am seeking a career that will allow me to infuse my keen eye for design with my technical skills to build products that solve business challenges.</p>
          <br/>
          <h2>TECHNICAL SKILLS</h2>
          <p>React, Javascript, Redux, Ruby, Rails, SQL, HTML, CSS, Git, Amazon Web Services (AWS), Twilio, Mapbox </p>
          <br/>
          <h2>MORE RESOURCES</h2>
          <span><a class="portfolio-links" href="https://sivanadler.wordpress.com/">BLOG</a></span>
          <span><a class="portfolio-links" href="https://sivanadler.wixsite.com/sivanportfolio">ART & DESIGN</a></span>
        </div>
        <img className="about-me-image" src={sivan} alt="photo of sivan adler" />
      </div>
    )
  }
}
export default About
