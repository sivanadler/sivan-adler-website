import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/dist/styles.css';

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
          <li>{el}</li>
        )
      })
    }
  }

  getImageGalleryPhotos = () => {
    return this.props.screenShots.map(photo => {
      return <div className="image" data-src={photo} />
    })
  }

  render() {
    return (
      <div className='project-card'>
          <h1 className='project-card-header'>
            {this.props.link !== '' ? <a href={this.props.link}>{this.props.name}</a> : this.props.name}
          </h1>

          <h1 className='project-card-links'>
            <a href={this.props.frontend}>FRONTEND GITHUB</a>
            <span className='seperator'>|</span>
            <a href={this.props.backend}>BACKEND GITHUB</a>
            <span className='seperator'>|</span>
            <a href={this.props.demo}>DEMO</a>
          </h1>
          <p className="description">{this.props.description}</p>

          <div className="table">
              <h1 className='project-card-sub-header'>
                TECHNOLOGIES:
              </h1>
                <p className="technologies">{this.props.technologies}</p>
            <h1 className='project-card-sub-header'>
              FUNCTIONALITY HIGHLIGHTS:
            </h1>
            <ul id="functionality-list">
              {this.getAccomplishments()}
            </ul>
          </div>
          <div className="image-gallery">
            <AwesomeSlider className="slider" cssModule={AwsSliderStyles}>
              {this.getImageGalleryPhotos()}
            </AwesomeSlider>
          </div>
      </div>
    )
  }
}
export default ProjectCard
