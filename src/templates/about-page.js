import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import VideoPlayer from '../components/VideoPlayer'

export const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout title='100 Coaches | Our Story' >
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        lede={post.frontmatter.lede}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export class AboutPageTemplate extends React.Component {
  render() {
    const PageContent = this.props.contentComponent || Content
    return (
      <div id="about-page" className="page-content">
        <h1>
          {this.props.title}
        </h1>
        <p className="intro-text">
          {this.props.lede}
        </p>
        <VideoPlayer />
        <PageContent className="content" content={this.props.content} />
      </div>
    )
  }
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        lede
      }
    }
  }
`
