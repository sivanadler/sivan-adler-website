import React from "react";
import ProjectCard from './ProjectCard'
import Nav from './Nav'

class Project extends React.Component {

  render() {
    return (
      <div>
        <Nav history={this.props.history}/>
        <h1>PROJECTS</h1>
      </div>
    )
  }
}
export default Project
