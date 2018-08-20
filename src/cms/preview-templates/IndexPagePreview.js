import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const { edges: coaches } = data.coachQuery

const IndexPagePreview = ({ entry }) => (
  
  <IndexPageTemplate
    title={entry.getIn(['data', 'title'])}
    coaches={coaches}
  />
)

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default IndexPagePreview

export const indexPagePreviewQuery = graphql`
  query IndexPreviewQuery{
    coachQuery: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "coach-profile" } }}
    ) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            jobTitle
            photo
            tags
          }
        }
      }
    }
  }
`