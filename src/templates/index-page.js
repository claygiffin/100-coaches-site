import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import CoachThumb from '../components/CoachThumb'
import XScroller from '../components/XScroller'
import CoachLightbox from '../components/CoachLightbox'

export default class IndexPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      coachLightboxOpen: false,
      activeCoach: []
    }

    this.handleCoachClose = this.handleCoachClose.bind(this);
    this.handleCoachClick = this.handleCoachClick.bind(this);
  }

  handleCoachClick(coach){
    console.log('coach is clicked');
    this.setState({
      coachLightboxOpen: true,
      activeCoach: []
    })
    this.state.activeCoach.unshift(coach);
    this.setState({
      activeCoach: this.state.activeCoach,
    });
    let slug = this.state.activeCoach[0].fields.slug;
    window.history.pushState({page: slug}, null, `${slug}`);
    document.body.classList.add('lightbox-open');
  }

  handleCoachClose(){
    console.log('lightbox is closed');
    this.setState({
      coachLightboxOpen: false,
      activeCoach: []
    })
    // window.history.back();
    window.history.replaceState({page: 'home'}, null, `/`)
    document.body.classList.remove('lightbox-open');
  }

  render() {
    const { data } = this.props
    const { edges: coaches } = data.coachQuery
    return (
      <div id="main-content-wrap">
        <div id="main-content">
          <section>
            <XScroller className="coaches">
              {coaches.map(({ node: coach }) => (
                <CoachThumb coach={coach} key={coach.id} onClick={this.handleCoachClick} />
              ))}
            </XScroller>
          </section>
        </div>
        {this.state.coachLightboxOpen ? (
          <CoachLightbox 
            openState={this.state.coachLightboxOpen} 
            onClose={this.handleCoachClose}
            coach={this.state.activeCoach[0]}
          />
        ) : null }
      </div>
    )
  }

}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    coachQuery: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "coach-profile" } }}
    ) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            jobTitle
            photo
            tags
          }
        }
      }
    }
  }
`
