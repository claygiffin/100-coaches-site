import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import CoachThumb from '../components/CoachThumb'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'
import ThoughtThumb from '../components/ThoughtThumb'
import logoOnColor from '../assets/100Coaches_logo_onColor.svg'
import videoMp4 from '../assets/GettyImages-178062441_6.mp4'
import videoWebM from '../assets/GettyImages-178062441_6.webm'

import CCLogo from '../assets/100-cc-logo-stacked.svg'
import CALogo from '../assets/100-ca-logo-stacked.svg'

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
          <Hero video videoMp4={videoMp4} videoOgg="" videoWebM={videoWebM}>
            <h1>{this.props.title}</h1>
            <img src={logoOnColor} alt={this.props.title} id="hero-logo" />
            <div className="intro-text">
              100 Coaches is comprised of our <Link to="/coaches/">community</Link> of the
              world’s best coaches and our{' '}
              <a href="https://agency.100coaches.com/">agency</a> that connects them with
              world’s best leaders.
            </div>
            {/* <div className="divider"></div> */}
            {/* <div className="links">
              <Link to="/about" className="text-link">
                {page.introLinkText}
              </Link>
              <a href="https://agency.100coaches.com/" className="text-link">
                Hire a Coach
              </a>
            </div> */}
          </Hero>
          <section id="coaches">
            <Link to="/coaches/">
              <h2 className="logo-heading">
                <img
                  src={CCLogo}
                  alt="100 Coaches Community"
                  title="100 Coaches Community"
                />
              </h2>
            </Link>
            <div className="intro-text">{page.coachesSectionDescription}</div>
            <Carousel slidesToShow={4} id="coaches-carousel">
              {this.props.coaches.map((coach) => (
                <CoachThumb
                  coach={coach}
                  key={coach.coachName}
                  onClick={this.handleCoachClick}
                />
              ))}
            </Carousel>
            <Link to="/coaches/" className="cta-link">
              Meet our community
            </Link>
          </section>
          <section id="consultancy">
            <a href="https://agency.100coaches.com/">
              <h2 className="logo-heading">
                <img src={CALogo} alt="100 Coaches Agency" title="100 Coaches Agency" />
              </h2>
            </a>
            <div className="intro-text">{page.servicesSectionDescription}</div>
            <a href="https://agency.100coaches.com/" className="cta-link">
              Hire a coach
            </a>
          </section>
          <section id="thought-leadership">
            <h2>Thought Leadership</h2>
            <Carousel slidesToShow={3} id="thought-leadership-carousel">
              {this.props.thoughts.map((thought, i) => (
                <ThoughtThumb key={i} thought={thought} />
              ))}
            </Carousel>
          </section>
          {/* <section id="education">
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
          </section> */}
        </main>
      </>
    )
  }
}

export default HomePage
