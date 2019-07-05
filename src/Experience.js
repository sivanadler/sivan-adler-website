import React from "react";
import Nav from './Nav'
import ExperienceListing from './ExperienceListing'

class Experience extends React.Component {

  render() {
    return (
      <div>
        <div className="left" >
          <Nav history={this.props.history}/>
        </div>
        <div className="right">
          <div className="about-me-description">
            <h1 className="header">EXPERIENCE</h1>
            <ExperienceListing
              position={'Planning Associate'}
              company={'UJA-Federation of New York'}
              location={'New York, NY'}
              date={'Aug 2017 - Dec 2018'}
              description={['Promoted in role to represent UJA from a federation perspective on $2 million grant making committees of donors that vote on how UJA dollars are spent around issue areas, such as diversity, access to Jewish childcare, Israel education curriculum, etc', 'Acted as liaison between the organization and donors to balance objectives of both entities in disbursement of federation funds, each grant ranging between $20,000 -$1,000,000 depending on size and scale of the project', 'Identified challenges in the community and developed grant making strategies for over 30 grants to meet those needs and advance the organizational mission of strengthening the Jewish infrastructure in New York', 'Evaluated grantee impact through site visits and report oversight to make recommendations for future funding decisions']}
              link={''}
            />

            <ExperienceListing
              position={'Program Coordinator'}
              company={'UJA-Federation of New York'}
              location={'New York, NY'}
              date={'Jan 2017 - July 2017'}
              description={['Served as a professional on a million dollar grant making committee of donors', 'Assisted professionals and donors with their operational needs, meeting prep and general inquiries', 'Provided content expertise around issues of diversity for over 150 donors and 500+ staff members on a day-to-day basis']}
              link={''}
            />

            <ExperienceListing
              position={'Planning Assistant'}
              company={'UJA-Federation of New York'}
              location={'New York, NY'}
              date={'Aug 2016 - Dec 2016'}
              description={['Planned over 100 committee meetings across two planning divisions', 'Coordinated events and conferences hosted at UJA with grantee agencies', 'Managed homegrown CRM system to track donor engagement and annual giving']}
              link={''}
            />

            <ExperienceListing
              position={'Artistic Designer'}
              company={'Wyman Institute for Holocaust Studies'}
              location={'New York, NY'}
              date={'May 2014'}
              description={['`Designed and created a graphically cohesive ten-panel digital storyboard that was showcased in exhibitions across the country, commemorating the 50th anniversary of the St. Louis Ship during WWII']}
              link={'https://sivanadler.wixsite.com/sivanportfolio/wyman-institute'}
            />
            </div>
          </div>
        </div>
    )
  }
}
export default Experience
