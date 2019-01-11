import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import CoachThumb from '../components/CoachThumb'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'
import ContactFormLink from '../components/ContactFormLink'
import ThoughtThumb from '../components/ThoughtThumb'
import logoOnColor from '../assets/100Coaches_logo_onColor.svg'
import videoMp4 from '../assets/GettyImages-178062441_3.mp4'

export const HomePage = ({data}) => {
  const page = data.pageQuery
  const metaQuery = data.site.siteMetadata
  const _ = require('lodash')
  const coaches = _.uniqBy(data.coachQuery.edges, 'coachName')
  const thoughts = data.thoughtQuery.edges

  return (
    <Layout title={metaQuery.title} navTransparent >
      <HomePageTemplate 
        title={metaQuery.title}
        intro={page.frontmatter.intro}
        coachesSection={page.frontmatter.coaches}
        consultancy={page.frontmatter.consultancy}
        education={page.frontmatter.education}
        institute={page.frontmatter.institute}
        coaches={coaches}
        thoughts={thoughts}
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
  render() {
    return (
      <>
        <div id="home-page" className="page-content">
          <Hero video videoMp4={videoMp4} videoOgg="" videoWebM="" >
            <h1>{this.props.title}</h1>
            <img src={logoOnColor} alt={this.props.title} id="hero-logo"/>
            <div className="intro-text">{this.props.intro.text}</div>
            <div className="divider"></div>
            <Link to="/about" className="text-link" >{this.props.intro.linkText}</Link>
          </Hero>
          <section id="coaches">
            <h2>{this.props.coachesSection.headline}</h2>
            <div className="intro-text">{this.props.coachesSection.text}</div>
            <Carousel slidesToShow={4} id="coaches-carousel" viewAll="/coaches">
              {this.props.coaches.map(({ node }) => (
                node.frontmatter.coachList.map(coach => (
                  <CoachThumb 
                    coach={coach} 
                    key={coach.coachName} 
                    onClick={this.handleCoachClick}
                  />
                ))
              ))}
            </Carousel>
          </section>
          <section id="consultancy">
            <h2>{this.props.consultancy.headline}</h2>
            <div className="intro-text">{this.props.consultancy.text}</div>
            <ContactFormLink className="cta-link" linkText="Work With Us" />
          </section>
          <section id="thought-leadership">
            <h2>Thought Leadership</h2>
            <Carousel slidesToShow={3} id="thought-leadership-carousel" >
              {this.props.thoughts.map(({ node }) => (
                <ThoughtThumb key={node.frontmatter.title} thought={node.frontmatter} />
              ))}
            </Carousel>
          </section>
          <section id="education">
            <div className="image">
              <img src={this.props.education.image} alt="" />
            </div>
            <div className="text">
              <h3>{this.props.education.headline}</h3>
              <p>{this.props.education.text}</p>
              <a className="text-link" 
                href={`//${this.props.education.url.replace(/(^\w+:|^)\/\//, '')}`} 
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.education.linkText}
              </a>
            </div>
          </section>
          <section id="institute" >
          {this.props.institute.headline &&
            <div className="headline">
              <h3>{this.props.institute.headline}</h3>
            </div>
          }
          {this.props.institute.text &&           
            <div className="text" >
              <p>{this.props.institute.text}</p>
              {this.props.institute.linkText &&                
                <a className="text-link" 
                  href={`//${this.props.institute.url.replace(/(^\w+:|^)\/\//, '')}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {this.props.institute.linkText}
                </a>
              }
            </div>
          }
          </section>
        </div>
      </>        
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
        education {
          headline
          text
          linkText
          url
          image
        }
        institute {
          headline
          text
          linkText
          url
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
              bio
              coachName
              jobTitle
              photo
              tags
              links {
                facebook
                instagram
                linkedin
                twitter
                website
              }
            }
          }
        }
      }
    }
    thoughtQuery: allMarkdownRemark(
      filter: { frontmatter: { templateKey: {eq: "thought-post"}}},
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            title
            author
            date
            url
            image
          }
        }
      }
    }
  }
`
export default HomePage