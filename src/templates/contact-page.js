import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import {markdownContent} from '../components/Content'

export const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout title='100 Coaches | Our Story' >
      <ContactPageTemplate
        title={post.frontmatter.title}
        lede={post.frontmatter.lede}
        email={post.frontmatter.email}
        phone={post.frontmatter.phone}
        services={post.frontmatter.services}
        coachList={data.coachQuery.edges[0].node.frontmatter.coachList}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export class ContactPageTemplate extends React.Component {
  render() {
    const phoneUnformatted = this.props.phone.split(/[\D,]+/).join('');
    const Description = markdownContent
    return (
      <div id="contact-page" className="page-content">
        <h1>
          {this.props.title}
        </h1>
        <p className="intro-text">
          {this.props.lede}
        </p>
        <h3 className="contact-link"><span>email: </span><a href={`mailto: ${this.props.email}`} target="_blank" rel="noopener noreferrer">{this.props.email}</a></h3>
        <h3 className="contact-link"><span>phone: </span><a href={`tel: ${phoneUnformatted}`}>{this.props.phone}</a></h3>
        {this.props.services.map(service => {
          const coachFallback = {
            coachName: `${service.coach}`,
            jobTitle: 'PROFILE NOT FOUND',
            photo: '',
          }
          const thisCoach = this.props.coachList.filter(coach => coach.coachName.toUpperCase() === service.coach.toUpperCase())[0] || coachFallback ;
          console.log(thisCoach);
          return(
            <div className="service" key={service.title}>
              <div className="service-text">
                <h3>{service.title}</h3>
                {service.provider && <h4>{service.provider}</h4>}
                <Description content={service.description} />
              </div>
              <div className="coach-wrap">
                <div className="coach">
                  <div className="image-wrap">
                    <img src={thisCoach.photo} alt={thisCoach.coachName + ' 100 Coaches'}/>
                  </div>
                  <div className="info">
                    <h4>{thisCoach.coachName}</h4>
                    <h5>{thisCoach.jobTitle}</h5>  
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ContactPage

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        lede
        email
        phone
        services {
          title
          description
          coach
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
