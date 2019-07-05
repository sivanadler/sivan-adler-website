import React from "react";

class EducationListing extends React.Component {

  render() {
    return (
      <div className='education-listing'>
        <div className='education-right'>
          <p>{this.props.date}</p>
        </div>
        <h1 className='education-header'>{this.props.name}</h1>
        <h4 className='education-subheader'>{this.props.degree} <span className='seperator'>|</span> {this.props.location}</h4>
        <p>{this.props.description}</p>

      </div>
    )
  }
}
export default EducationListing
