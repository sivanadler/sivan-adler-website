import React from "react";
import ContactForm from './ContactForm'
import Nav from './Nav'

class Contact extends React.Component {

  render() {
    return (
      <div>
        <Nav history={this.props.history}/>
        <h1>CONTACT</h1>
      </div>
    )
  }
}
export default Contact
