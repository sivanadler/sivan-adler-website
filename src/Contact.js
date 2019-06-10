import React from "react";
import ContactForm from './ContactForm'
import Nav from './Nav'
import ReactContactForm from 'react-mail-form';

class Contact extends React.Component {

  render() {
    return (
      <div>
        <Nav history={this.props.history}/>
        <h1 className="header">CONTACT</h1>
        <ReactContactForm
          titlePlaceholder="Subject"
          contentsPlaceholder="Message..."
          buttonText="Send"
          className="contact-form"
          to="sadler2007@gmail.com"
          onClick={() => console.log("hey")}
        />

      </div>
    )
  }
}
export default Contact
