import React from "react";
import Nav from './Nav'
import ReactContactForm from 'react-mail-form';

class Contact extends React.Component {

  clearInput = () => {
    debugger
    //need to figure out how to clear inputs after clicking send
  }

  render() {
    return (
      <div>
        <div className="left">
          <Nav history={this.props.history}/>
        </div>
        <div className="right">
          <div className="contact-form">
            <h1 className="header">CONTACT</h1>
            <p className="contact-sub-header">To get in touch, please send me an email and I will get back to you as soon as possible: </p>
            <ReactContactForm
              titlePlaceholder="Subject"
              contentsPlaceholder="Message..."
              buttonText="Send"
              to="sadler2007@gmail.com"
              onClick={this.clearInput}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Contact
