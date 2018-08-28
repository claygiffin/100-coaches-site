import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'
import Layout from '../components/Layout'
import CoachThumb from '../components/CoachThumb'
import XScroller from '../components/XScroller'
import CoachLightbox from '../components/CoachLightbox'
import Hero from '../components/Hero'
import logoOnColor from '../img/100Coaches_logo_onColor.svg'

export const HomePage = ({data}) => {
  const page = data.pageQuery
  const coaches = data.coachQuery.edges
  const metaQuery = data.site.siteMetadata

  return (
    <Layout>
      <HomePageTemplate 
        title={metaQuery.title}
        intro={page.frontmatter.intro}
        coachesSection={page.frontmatter.coaches}
        coaches={coaches}
        consultancy={page.frontmatter.consultancy}
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
    console.log(coach);
    this.setState({
      coachLightboxOpen: true,
      activeCoach: coach
    })
    console.log(this.state.activeCoach);
    let coachName = coach.coachName;
    let slug = `/coaches/${kebabCase(coachName)}/`;
    window.history.pushState({page: coachName}, null, `${slug}`);
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
            <section id="intro">
              <Hero>
                <h1>{this.props.title}</h1>
                <img src={logoOnColor} alt={this.props.title} />
                <div className="intro-text">{this.props.intro.text}</div>
                <Link to="/about" className="text-link" >{this.props.intro.linkText}</Link>
              </Hero>
            </section>
            <section id="coaches">
              <h3>{this.props.coachesSection.headline}</h3>
              <div className="intro-text">{this.props.coaches.text}</div>
              <XScroller className="coaches">
                {this.props.coaches.map(({ node }) => (
                  node.frontmatter.coachList.map(coach => (
                    <CoachThumb coach={coach} key={coach.coachName} onClick={this.handleCoachClick} />
                  ))
                ))}
              </XScroller>
            </section>
            <section id="consultancy">
              <h3>{this.props.consultancy.headline}</h3>
              <div className="intro-text">{this.props.consultancy.text}</div>
              <Link to="/">{this.props.consultancy.linkText}</Link>
            </section>
          </div>
          {this.state.coachLightboxOpen ? ( 
            <CoachLightbox 
              openState={this.state.coachLightboxOpen} 
              onClose={this.handleCoachClose}
              coach={this.state.activeCoach}
            />
          ) : null }
        </div>        
    )
  }
}

export const indexPageQuery = graphql`
  query IndexQuery($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    pageQuery: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        intro {
          text
          linkText
        }
        coaches {
          headline
          text
        }
        consultancy {
          headline
          text
          linkText
        }
      }
    }
    coachQuery: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "coaches-page" } }}
    ) {
      edges {
        node {
          frontmatter {
            coachList {
              body
              coachName
              jobTitle
              photo
            }
          }
        }
      }
    }
  }
`
export default HomePage