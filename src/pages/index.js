import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import CoachThumb from '../components/CoachThumb'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'
import ThoughtThumb from '../components/ThoughtThumb'
import logoOnColor from '../assets/100Coaches_logo_onColor.svg'
import videoMp4 from '../assets/GettyImages-178062441_3.mp4'

export const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      datoCmsHomePage {
        introText
        introLinkText
        coachesSectionHeading
        coachesSectionDescription
        servicesSectionHeadline
        servicesSectionDescription
        servicesSectionLinkText
        educationSectionHeadline
        educationSectionDescription
        educationSectionLinkText
        educationSectionLinkUrl
        educationSectionImage {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
      allDatoCmsCoach(sort: { order: [ASC, ASC], fields: [priority, coachName] }) {
        nodes {
          id
          coachName
          jobTitle
          photo {
            fluid(maxWidth: 480, imgixParams: { ar: "1:1", fit: "crop" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          coachCategories {
            categoryName
          }
          bioNode {
            childMarkdownRemark {
              html
            }
          }
          website
          linkedin
          twitter
          facebook
          instagram
        }
      }
      allDatoCmsThoughtLeadership(sort: { fields: meta___updatedAt, order: DESC }) {
        nodes {
          title
          url
          coachAuthor {
            coachName
          }
          nonMemberAuthor
          image {
            fluid(maxWidth: 480, imgixParams: { ar: "16:9", fit: "crop" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }      
    }
  `)

  const _ = require('lodash')

  return (
    <Layout title={data.site.siteMetadata.title} navTransparent>
      <HomePageTemplate
        title={data.site.siteMetadata.title}
        coaches={data.allDatoCmsCoach.nodes}
        thoughts={data.allDatoCmsThoughtLeadership.nodes}
        page={data.datoCmsHomePage}
      />
    </Layout>
  )
}

export class HomePageTemplate extends React.Component {
  render() {
    const page = this.props.page
    return (
      <>
        <main id="home-page" className="page-content">
          <Hero video videoMp4={videoMp4} videoOgg="" videoWebM="">
            <h1>{this.props.title}</h1>
            <img src={logoOnColor} alt={this.props.title} id="hero-logo" />
            <div className="intro-text">{page.introText}</div>
            <div className="divider"></div>
            <Link to="/about" className="text-link">
              {page.introLinkText}
            </Link>
          </Hero>
          <section id="coaches">
            <h2>{page.coachesSectionHeading}</h2>
            <div className="intro-text">{page.coachesSectionDescription}</div>
            <Carousel slidesToShow={4} id="coaches-carousel" viewAll="/coaches">
              {this.props.coaches.map((coach) => (
                <CoachThumb coach={coach} key={coach.coachName} onClick={this.handleCoachClick} />
              ))}
            </Carousel>
          </section>
          <section id="consultancy">
            <h2>{page.servicesSectionHeadline}</h2>
            <div className="intro-text">{page.servicesSectionDescription}</div>
            <Link to="/services/" className="cta-link">
              {page.servicesSectionLinkText}
            </Link>
          </section>
          <section id="thought-leadership">
            <h2>Thought Leadership</h2>
            <Carousel slidesToShow={3} id="thought-leadership-carousel">
              {this.props.thoughts.map((thought, i) => (
                <ThoughtThumb key={i} thought={thought} />
              ))}
            </Carousel>
          </section>
          <section id="education">
            <div className="image-wrap">
              <div className="image">
                <Img fluid={page.educationSectionImage.fluid} />
              </div>
            </div>
            <div className="text">
              <h3>{page.educationSectionHeadline}</h3>
              <p>{page.educationSectionDescription}</p>
              <a
                className="text-link"
                href={page.educationSectionLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {page.educationSectionLinkText}
              </a>
            </div>
          </section>
        </main>
      </>
    )
  }
}

// export const indexPageQuery = graphql`
//   query IndexQuery($id: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     pageQuery: markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         intro {
//           text
//           linkText
//         }
//         coaches {
//           headline
//           text
//         }
//         consultancy {
//           headline
//           text
//           linkText
//         }
//         education {
//           headline
//           text
//           linkText
//           url
//           image
//         }
//         institute {
//           headline
//           text
//           linkText
//           url
//         }
//       }
//     }
//     coachQuery: allMarkdownRemark(
//       filter: { frontmatter: { templateKey: { eq: "coaches-page" } }}
//     ) {
//       edges {
//         node {
//           frontmatter {
//             coachList {
//               bio
//               coachName
//               jobTitle
//               photo
//               tags
//               links {
//                 facebook
//                 instagram
//                 linkedin
//                 twitter
//                 website
//               }
//             }
//           }
//         }
//       }
//     }
//     thoughtQuery: allMarkdownRemark(
//       filter: { frontmatter: { templateKey: {eq: "thought-post"}}},
//       sort: {fields: [frontmatter___date], order: DESC}
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             author
//             date
//             url
//             image
//           }
//         }
//       }
//     }
//   }
// `
export default HomePage
