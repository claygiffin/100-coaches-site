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
    return (
      <div id="about-page" className="page-content">
        <h1>
          {this.props.title}
        </h1>
        <p className="intro-text">
          {this.props.lede}
        </p>
        <h3><span>email: </span><a href={`mailto: ${this.props.email}`}>{this.props.email}</a></h3>
        <h3><span>phone: </span><a href={`tel: ${phoneUnformatted}`}>{this.props.phone}</a></h3>
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
  }
`
