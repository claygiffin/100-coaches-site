import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const CoachesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CoachesPageTemplate
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

CoachesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const CoachesPageTemplate = ({ title }) => {
  return (
    <section>
      <h2>
        {title}
      </h2>
    </section>
  )
}

CoachesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

export default CoachesPage

export const coachesPageQuery = graphql`
  query CoachesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
