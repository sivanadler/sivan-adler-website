import React from "react";

class ProjectCard extends React.Component {

  getFrontEndTechnologies = () => {
    if (this.props.technologies !== []) {
      return this.props.technologies.map(el => {
        return (
          <li>{el}</li>
        )
      })
    }
  }

  render() {
    return (
      <div className='project-card'>
        <a className='project-card-header' href={this.props.link}>
          <h1 className='project-card-header'>{this.props.name}</h1>
        </a>
        <p>{this.props.description}</p>
        <p>TECHNOLOGIES:</p>
        <ul>
          {this.getFrontEndTechnologies()}
        </ul>
      </div>
    )
  }
}
export default ProjectCard
