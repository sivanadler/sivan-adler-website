import React from "react";
import github from './icons/github.svg'
import linkedin from './icons/linkedin.svg'
import wordpress from './icons/wordpress.svg'
import wix from './icons/wix.svg'

class Home extends React.Component {

  render() {
    return (
      <div className="home-page-div">
        <h1 className="header">SIVAN ADLER</h1>
        <h3 className="sub-header">Full Stack Software Engineer with An Eye For Design</h3>
        <p className="interests"> NYC Native <span className='seperator'>|</span> Israeli  <span className='seperator'>|</span> Foodie <span className='seperator'>|</span> Dog Lover <span className='seperator'>|</span> Studio Artist </p>
        <div className="socials">
          <a className="icon-link" href="https://www.linkedin.com/in/sivanadler/"> <img className="social-icons" alt="social icons" src={linkedin}/>< /a>
          <a className="icon-link" href="https://github.com/sivanadler"> <img className="social-icons" alt="social icons" src={github}/> </a>
          <a className="icon-link" href="https://sivanadler.wordpress.com/"> <img className="social-icons" alt="social icons" src={wordpress}/> </a>
          <a className="icon-link" href="https://sivanadler.wixsite.com/sivanportfolio"> <img className="social-icons" alt="social icons" src={wix}/> </a>
        </div>
      </div>
    )
  }
}
export default Home


// <SocialIcon
//   url="http://linkedin.com/in/sivanadler"
//   bgColor="currentColor"
//   fgColor="white"
//   className="social-icons"
//   style={{ height: 75, width: 75 }}
// />
// <SocialIcon
//   url="http://github.com/sivanadler"
//   bgColor="currentColor"
//   fgColor="white"
//   className="social-icons"
//   style={{ height: 75, width: 75 }}
// />
// <SocialIcon
//   url="https://sivanadler.wixsite.com/sivanportfolio"
//   bgColor="currentColor"
//   fgColor="white"
//   className="social-icons"
//   style={{ height: 75, width: 75 }}
// />
