import React from "react";
import ProjectCard from './ProjectCard'
import Nav from './Nav'

class Project extends React.Component {


  render() {
    return (
      <div>
        <div className="left" >
          <Nav history={this.props.history}/>
        </div>
        <div className="right">
          <h1 className="header">PROJECTS</h1>

          <ProjectCard
            name={'Cycle Source'}
            link={'not yet'}
            description={'The best web application to find, book and manage cycling classes near you. Users can search for studios in their area, follow studios and instructors and book spin classes all in one place.'}
            technologies={['React', 'Javascript', 'Redux', 'Ruby on Rails', 'Custom CSS', 'Google Maps API', 'AWS S3 Image Hosting', 'Twilio', 'React Big Calendar', 'Google Maps React']}
            accomplishments={['Implemented dynamic Google Maps and Calendar components', 'Used Amazon Web Services (AWS) to host uploaded images', 'Configured text message alerts upon booking a cycling class using Twilio']}
            frontend={'https://github.com/sivanadler/cycle-source-frontend'}
            backend={'https://github.com/sivanadler/cycle-source-backend'}
            demo={'https://www.youtube.com/watch?v=VolgRFBhA1A&t=2s'}
          />
          <ProjectCard
            name={'SUPERscript'}
            link={'not yet'}
            description={'A game designed to teach children how to learn Javascript through completing code challenges. Each level prompts the user with a challenge, asking them to complete the function in the text editor based on that challenge. '}
            technologies={['Javascript', 'Ruby on Rails', 'Custom Chai Test Suite', 'Code Mirror', 'Custom CSS']}
            accomplishments={['Wrote custom Chai test suite validates if the return value of user’s input matches that of the challenge at hand', 'Utilized Code Mirror to embed a text editor into the interface and execute its code upon submit.']}
            frontend={'https://github.com/MCSimoes18/superscript_front-end'}
            backend={'https://github.com/MCSimoes18/superscript_back-end'}
            demo={'https://www.youtube.com/watch?v=cw5I2tYbEa0&t=29s'}
          />
          <ProjectCard
            name={'Softipy'}
            link={'https://softipy.herokuapp.com'}
            description={' A music streaming service and playlist building application, allowing users to search for songs, build their own playlists, follow other users playlists.'}
            technologies={['React', 'Javascript', 'Ruby on Rails', 'Custom CSS', 'Deezer Music API']}
            accomplishments={['Developed a Rails API backend with endpoints for songs, playlists and users to persist data for future sessions', 'Utilized Deezer’s API’s to efficiently pull and parse song data, enabling users to quickly query for songs by any keyword', 'Implemented a drag and drop feature for adding songs into playlists']}
            frontend={'https://github.com/elicleveland12/softipy-front-end'}
            backend={'https://github.com/sivanadler/Softipy-Back-End'}
            demo={'https://www.youtube.com/watch?v=ktvqV3r1Rus&t=10s'}
          />
        </div>
      </div>
    )
  }
}
export default Project
