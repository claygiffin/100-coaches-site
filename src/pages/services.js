import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import heroImage from '../assets/speaker-feature.jpg'
import ContactFormLink from '../components/ContactFormLink'

export const ServicesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsServicesPage {
        headline
        lede
        coachingServicesDescription
        speakingEngagementsDescription
        consultingServicesDescription
        consultingServicesList(
          sort: { fields: position, order: ASC }
        ) {
          serviceHeadline
          coach {
            coachName
            photo {
              fluid(maxWidth: 120, imgixParams: { ar: "1:1", fit: "crop" }) {
                ...GatsbyDatoCmsFluid
              }
            }
          }
          description
        }
      }
    }
  `)

  return (
    <Layout title="Our Services" navTransparent>
      <ServicesPageTemplate page={data.datoCmsServicesPage} />
    </Layout>
  )
}

export class ServicesPageTemplate extends React.Component {
  render() {
    const { page } = this.props
    return (
      <main id="services-page" className="page-content">
        <Hero image imgSrc={heroImage}>
          <h1>{page.headline}</h1>
          <p className="intro-text">{page.lede}</p>
          <ContactFormLink className="text-link" linkText="Work With Us" />
        </Hero>
        <section id="top-row">
          <section id="coaching">
            <h2>Coaching Services</h2>
            <p>{page.coachingServicesDescription}</p>
            <Link to="/coaches/#executive-coaches">View all Executive Coaches</Link>
          </section>
          <section id="speaking">
            <h2>Speaking Engagements</h2>
            <p>{page.speakingEngagementsDescription}</p>
            <Link to="/coaches/#speakers">View all Speakers</Link>
          </section>
        </section>
        <section id="consulting">
          <h2>Consulting Services</h2>
          <p>{page.consultingServicesDescription}</p>
          <div className="services">
            {page.consultingServicesList.map((service, i) => {
              return (
                <div className="service" key={i}>
                  <div className="service-inner">
                    <div className="text-block">
                      <h3>{service.serviceHeadline}</h3>
                      <h4>{service.coach.coachName}</h4>
                      <p>{service.description}</p>
                    </div>
                    <div className="image">
                      <Img fluid={service.coach.photo.fluid} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    )
  }
}

export default ServicesPage
