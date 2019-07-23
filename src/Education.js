import React from "react";
import Nav from './Nav'
import EducationListing from './EducationListing'

class Education extends React.Component {

  render() {
    return (
      <div>
        <div className="left" >
          <Nav history={this.props.history}/>
        </div>
        <div className="right">
          <div className="about-me-description">
            <h1 className="header">EDUCATION</h1>
            <EducationListing
              name={'Flatiron School'}
              degree={'Software Engineering Immersive'}
              location={'New York, NY'}
              date={'Jan - Apr 2019'}
              description={'15 week immersive software engineering program, focused on providing a solid foundation for students to become full-stack engineers. Languages and frameworks include JavaScript, React, Redux,  Ruby/Ruby on Rails, SQL, HTML/CSS, etc.'}
            />
            <EducationListing
              name={'New York Code and Design Academy'}
              degree={'UX/UI Design'}
              location={'New York, NY'}
              date={'May - July 2018'}
              description={'8 week evening course designed for beginners to explore User Interface & User Experience design from the ground up. Enables students to understand smart, functional design and from there, learn the necessary tools to optimize a users experience.'}
            />
            <EducationListing
              name={'Muhlenberg College'}
              degree={'Bachelor of Arts'}
              location={'Allentown, PA'}
              date={'Aug 2012 - May 2016'}
              description={'Major: Psychology | Minors: Studio Art and Jewish Studies'}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Education
