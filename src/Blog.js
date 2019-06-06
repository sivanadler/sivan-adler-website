import React from "react";
import Post from './Post'
import Nav from './Nav'

class Blog extends React.Component {

  render() {
    return (
      <div>
        <Nav history={this.props.history}/>
        <h1 className="header">BLOG</h1>
      </div>
    )
  }
}
export default Blog
