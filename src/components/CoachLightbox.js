import React from 'react'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from './Content'
import Lightbox from './Lightbox'

export class CoachLightbox extends React.Component {
  render(){
    const {coach} = this.props;
    const PostContent = HTMLContent || Content
    return(
      <Lightbox 
        openState={this.props.openState}
        onClose={this.props.onClose}
        slug={coach.coachName.toString()}
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
          <PostContent content={coach.html} />
        </div>
      </Lightbox>      
    )
  }
}

export default CoachLightbox