import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const ThoughtPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ThoughtPostTemplate
        helmet={<Helmet title={`${post.frontmatter.title} | Thought Leadership`} />}
        title={post.frontmatter.title}
        author={post.frontmatter.author}
      />
    </Layout>
  )
}

ThoughtPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export const ThoughtPostTemplate = ({
  title,
  author,
  helmet,
}) => {

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <h1 >
          {title}{author}
        </h1>
      </div>
    </section>
  )
}

ThoughtPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

export default ThoughtPost

export const pageQuery = graphql`
  query ThoughtPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        image
      }
    }
  }
`
