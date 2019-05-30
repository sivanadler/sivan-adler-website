import React from "react";
import Nav from './Nav'

class About extends React.Component {

  render() {
    return (
      <div>
        <Nav history={this.props.history}/>
        <h1>ABOUT ME</h1>
      </div>
    )
  }
}
export default About
