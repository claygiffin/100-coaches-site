import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import CoachThumb from '../components/CoachThumb'
import XScroller from '../components/XScroller'
import CoachLightbox from '../components/CoachLightbox'

export const HomePage = ({data}) => {
  const page = data.pageQuery
  const { edges: coaches } = data.coachQuery

  return (
    <Layout>
      <HomePageTemplate 
        title={page.frontmatter.title}
        coaches={coaches}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export class HomePageTemplate extends React.Component {
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
    window.history.replaceState({page: 'home'}, null, `/`)
    document.body.classList.remove('lightbox-open');
  }
  
  render() {
    return (
        <div id="main-content-wrap">
          <div id="main-content">
            <h1> Test: {this.props.title}</h1>
            <Link to="/about">read our story</Link>
            <section>
              <XScroller className="coaches">
                {this.props.coaches.map(({ node: coach }) => (
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

export const indexPageQuery = graphql`
  query IndexQuery($id: String!) {
    pageQuery: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
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
export default HomePage