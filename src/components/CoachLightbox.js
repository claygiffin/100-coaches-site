import React from 'react'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from './Content'
import Lightbox from './Lightbox'

export class CoachLightbox extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {coach} = this.props;
    const PostContent = HTMLContent || Content
    return(
      <Lightbox 
        openState={this.props.openState}
        onClose={this.props.onClose}
        slug={coach.fields.slug}
      >
        <div 
          className="coach" 
          style={{backgroundImage: `url(${coach.frontmatter.photo}`}}
        >
          <Helmet title={`${coach.frontmatter.title}'s Profile`} />
          <h1>
            {coach.frontmatter.title}
          </h1>
          <h2>
            {coach.frontmatter.jobTitle}
          </h2>    
          <PostContent content={coach.html} />
        </div>
      </Lightbox>      
    )
  }
}

export default CoachLightbox