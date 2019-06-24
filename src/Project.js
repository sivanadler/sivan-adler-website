import React from "react";
import ProjectCard from './ProjectCard'
import Nav from './Nav'

class Project extends React.Component {


  render() {
    return (
      <div>
        <Nav history={this.props.history}/>
        <h1 className="header">PROJECTS</h1>

        <ProjectCard
          name={'Cycle Source'}
          link={''}
          description={'The best web application to find, book and manage cycling classes near you.'}
          technologies={['React', 'Javascript', 'Redux', 'Ruby on Rails', 'Custom CSS', 'Google Maps API', 'Amazon Web Services (AWS) S3 Image Hosting', 'Twilio', 'React Big Calendar', 'Google Maps React']}
          accomplishments={['Implemented dynamic Google Maps and Calendar components', 'Used Amazon Web Services (AWS) to host uploaded images', 'Configured text message alerts upon booking a cycling class using Twilio']}
          demo={'VolgRFBhA1A'}
        />
        <ProjectCard
          name={'SUPERscript'}
          link={''}
          description={'A game designed to teach children how to learn Javascript through completing code challenges. Each level prompts the user with a challenge, asking them to complete the function in the text editor based on that challenge. '}
          technologies={['Javascript', 'Ruby on Rails', 'Custom Chai Test Suite', 'Code Mirror', 'Custom CSS']}
          accomplishments={['Wrote custom Chai test suite validates if the return value of user’s input matches that of the challenge at hand', 'Utilized Code Mirror to embed a text editor into the interface and execute its code upon submit.']}
          demo={'cw5I2tYbEa0'}
        />
        <ProjectCard
          name={'Softipy'}
          link={'https://softipy.herokuapp.com'}
          description={' A music streaming service and playlist building application, allowing users to search for songs, build their own playlists, follow other users playlists.'}
          technologies={['React', 'Javascript', 'Ruby on Rails', 'Custom CSS', 'Deezer Music API']}
          accomplishments={['Developed a Rails API backend with endpoints for songs, playlists and users to persist data for future sessions', 'Utilized Deezer’s API’s to efficiently pull and parse song data, enabling users to quickly query for songs by any keyword', 'Implemented a drag and drop feature for adding songs into playlists']}
          demo={'ktvqV3r1Rus'}
        />
      </div>
    )
  }
}
export default Project
