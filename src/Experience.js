import React from "react";
import Nav from './Nav'

class Experience extends React.Component {

  render() {
    return (
      <div>
        <div className="left" >
          <Nav history={this.props.history}/>
        </div>
        <div className="right">
        <h1>EXPERIENCE</h1>
          </div>
      </div>
    )
  }
}
export default Experience
