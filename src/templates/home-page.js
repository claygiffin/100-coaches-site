import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'
import Layout from '../components/Layout'
import CoachThumb from '../components/CoachThumb'
import Carousel from '../components/Carousel'
import CoachLightbox from '../components/CoachLightbox'
import Hero from '../components/Hero'
import logoOnColor from '../assets/100Coaches_logo_onColor.svg'
import videoMp4 from '../assets/100-coaches-video-example.mp4'

export const HomePage = ({data}) => {
  const page = data.pageQuery
  const metaQuery = data.site.siteMetadata
  const coaches = data.coachQuery.edges

  return (
    <Layout title={metaQuery.title} >
      <HomePageTemplate 
        intro={page.frontmatter.intro}
        coachesSection={page.frontmatter.coaches}
        consultancy={page.frontmatter.consultancy}
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
      activeCoach: [],
    }

    this.handleCoachClose = this.handleCoachClose.bind(this);
    this.handleCoachClick = this.handleCoachClick.bind(this);
  }

  handleCoachClick(coach){
    console.log('coach is clicked');
    this.setState({
      coachLightboxOpen: true,
      activeCoach: coach,
    })
    let coachName = coach.coachName;
    let slug = `/coaches/${kebabCase(coachName)}/`;
    window.history.pushState({page: coachName}, null, `${slug}`);
    document.body.classList.add('lightbox-open');
  }

  handleCoachClose(){
    console.log('lightbox is closed');
    window.history.replaceState({page: 'home'}, null, `/`)
    document.body.classList.remove('lightbox-open');
    setTimeout(() => {
      this.setState({
        coachLightboxOpen: false,
        activeCoach: []
      })
    },
      300
    )

  }
  
  render() {
    return (
      <div id="main-content-wrap">
        <div id="main-content">
          <Hero videoMp4={videoMp4} videoOgg="" videoWebM="" >
            <h1>{this.props.title}</h1>
            <img src={logoOnColor} alt={this.props.title} id="hero-logo"/>
            <div className="intro-text">{this.props.intro.text}</div>
            <div className="divider"></div>
            <Link to="/about" className="text-link" >{this.props.intro.linkText}</Link>
          </Hero>
          <section id="coaches">
            <h3>{this.props.coachesSection.headline}</h3>
            <div className="intro-text">{this.props.coachesSection.text}</div>
            <Carousel slidesToShow={4} >
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
            <h3>{this.props.consultancy.headline}</h3>
            <div className="intro-text">{this.props.consultancy.text}</div>
            <Link to="/">{this.props.consultancy.linkText}</Link>
          </section>
        </div>
        <CoachLightbox 
          openState={this.state.coachLightboxOpen} 
          onClose={this.handleCoachClose}
          coach={this.state.activeCoach}
        />
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
  }
`
export default HomePage