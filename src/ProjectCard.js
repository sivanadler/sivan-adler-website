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

  getAccomplishments = () => {
    if (this.props.accomplishments !== []) {
      return this.props.accomplishments.map(el => {
        return (
          <li>{el}</li>
        )
      })
    }
  }

  render() {
    return (
      <div className='project-card'>
      <div className='text-div'>
          <a className='project-card-header' href={this.props.link}>
            <h1 className='project-card-header'>{this.props.name}</h1>
          </a>
          <p>{this.props.description}</p>

          <br />

          <p className='project-card-sub-header'>TECHNOLOGIES:</p>
          <ul>
            {this.getFrontEndTechnologies()}
          </ul>

          <br />

          <p className='project-card-sub-header'>FUNCTIONALITY HIGHLIGHTS:</p>
          <ul>
            {this.getAccomplishments()}
          </ul>
        </div>
        <div className="video" >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "90%"
            }}
            src={`https://www.youtube.com/embed/${this.props.demo}`}
            frameBorder="0"
          />
        </div>
      </div>
    )
  }
}
export default ProjectCard
