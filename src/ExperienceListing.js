import React from "react";

class ExperienceListing extends React.Component {

  getDescription = () => {
    return this.props.description.map(item => {
      return <p>{item}</p>
    })
  }

  render() {
    return (
      <div className='education-listing'>
        <div className='education-right'>
          <p>{this.props.date}</p>
        </div>
        <h1 className='education-header'>{this.props.link !== '' ? <a href={this.props.link}>{this.props.position}</a> : this.props.position}</h1>
        <h4 className='education-subheader'>{this.props.company} <span className='seperator'>|</span> {this.props.location}</h4>
        <p>{this.getDescription()}</p>

      </div>
    )
  }
}
export default ExperienceListing
