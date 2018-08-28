import React from 'react'
import Helmet from 'react-helmet'
import { markdownContent } from './Content'
import Lightbox from './Lightbox'

export class CoachLightbox extends React.Component {
  render(){
    const {coach} = this.props;
    // const PostContent = HTMLContent || Content
    const Bio = markdownContent
    return(
      <Lightbox 
        openState={this.props.openState}
        onClose={this.props.onClose}
      >
        <div 
          className="coach" 
          style={{backgroundImage: `url(${coach.photo}`}}
        >
          <Helmet title={`${coach.coachName}'s Profile`} />
          <h1>
            {coach.coachName}
          </h1>
          <h2>
            {coach.jobTitle}
          </h2>    
          <Bio content={coach.bio} />
        </div>
      </Lightbox>      
    )
  }
}

export default CoachLightbox