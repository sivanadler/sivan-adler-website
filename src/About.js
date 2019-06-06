import React from "react";
import Nav from './Nav'

class About extends React.Component {

  render() {
    return (
      <div className="about-me-div">
        <Nav history={this.props.history}/>
        <h1 className="header">ABOUT ME</h1>
        <p className="about-me-description">I am Full Stack Web Developer proficient in React, Redux, Javascript, Ruby, Rails, SQL, HTML, and CSS, with added experience with Git, Amazon Web Services (AWS) and Twilio. I have an eye and passion for design and transitioned into web development to build visually attractive, highly functional and technically efficient web applications. With a demonstrated history of working in a fast paced environment, I have proven to be highly articulate, driven, efficient and determined. With experience as a non-profit professional, I am highly capable of identifying creative and dynamic solutions to challenges and adapting quickly and seamlessly to change. My degree in Psychology enables me to bring my analytical and problem solving skills to all of my professional pursuits, enabling me to tackle technical problems from a different perspective. I have a passion for continuous learning, making me highly capable of learning new frameworks and technologies. I am seeking a career that will allow me to infuse my keen eye for design with my technical skills to build products that solve business challenges.</p>
        <img className="about-me-image" src="" alt="photo of sivan adler" />
      </div>
    )
  }
}
export default About
