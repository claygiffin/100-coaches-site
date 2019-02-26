import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import heroImage from '../assets/speaker-feature.jpg'
import ContactFormLink from '../components/ContactFormLink'

export const ServicesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout title='Our Services' navTransparent>
      <ServicesPageTemplate
        title={post.frontmatter.title}
        lede={post.frontmatter.lede}
        consulting={post.frontmatter.consulting}
        coaching={post.frontmatter.coaching}
        speaking={post.frontmatter.speaking}
      />
    </Layout>
  )
}

ServicesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export class ServicesPageTemplate extends React.Component {
  render() {
    return (
      <div id="services-page" className="page-content">
      <Hero image imgSrc={heroImage} >
        <h1>
          {this.props.title}
        </h1>
        <p className="intro-text">
          {this.props.lede}
        </p>
        <ContactFormLink className="text-link" linkText="Work With Us" />
      </Hero>
      <section id="top-row">
        <section id="coaching">
          <h2>Coaching Services</h2>
          <p>{this.props.coaching.description}</p>
          <Link to="/coaches/#executive-coaches">View all Executive Coaches</Link>
        </section>
        <section id="speaking">
          <h2>Speaking Engagements</h2>
          <p>{this.props.speaking.description}</p>
          <Link to="/coaches/#speakers">View all Speakers</Link>
        </section>
      </section>
      <section id="consulting">
        <h2>Consulting Services</h2>
        <p>{this.props.consulting.description}</p>
        <div className="services">
          {this.props.consulting.servicesList.map((service, i) => {
            return (            
              <div className="service" key={i}>
                <div className="service-inner">
                  <div className="text-block">
                    <h3>{service.title}</h3>
                    <h4>{service.provider}</h4>
                    <p>{service.description}</p>
                  </div>
                  <div className="image">
                    <img src={service.image} alt={service.provider} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      </div>
    )
  }
}

export default ServicesPage

export const ServicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        lede
        coaching {
          description
        }
        speaking {
          description
        }
        consulting {
          description
          servicesList {
            title
            provider
            description
            image
          }
        }
      }
    }
  }
`