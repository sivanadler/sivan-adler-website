import React from "react";

class ProjectCard extends React.Component {

  getTechnologies = () => {
    if (this.props.technologies !== []) {
      return this.props.technologies.map(el => {
        return (
          <li className="description">{el}</li>
        )
      })
    }
  }

  getAccomplishments = () => {
    if (this.props.accomplishments !== []) {
      return this.props.accomplishments.map(el => {
        return (
          <li className="description">{el}</li>
        )
      })
    }
  }

  render() {
    return (
      <div className='project-card'>
          <h1 className='project-card-header'>
            <a href={this.props.link}>{this.props.name}</a>
          </h1>

          <h1 className='project-card-links'>
            <a href={this.props.frontend}>FRONTEND GITHUB</a>
            <span className='seperator'>|</span>
            <a href={this.props.backend}>BACKEND GITHUB</a>
            <span className='seperator'>|</span>
            <a href={this.props.demo}>DEMO</a>
          </h1>
          <p className="description">{this.props.description}</p>

          <table>
            <tr>
              <td className='project-card-sub-header'>
                TECHNOLOGIES:
              </td>
              <td>
              </td>
              <td className='project-card-sub-header'>
                FUNCTIONALITY HIGHLIGHTS:
              </td>
            </tr>

            <tr>
              <td valign="top" id="technologies-list">
                <ul>
                  {this.getTechnologies()}
                </ul>
              </td>
              <td className="empty-column">
              </td>
              <td valign="top" id="functionality-list">
                <ul>
                  {this.getAccomplishments()}
                </ul>
              </td>
            </tr>
          </table>
      </div>
    )
  }
}
export default ProjectCard
