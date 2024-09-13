import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import VideoPlayer from '../components/VideoPlayer'

export const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsAboutPage {
        headline
        lede
        mainContentNode {
          childMarkdownRemark {
            html
          }
        }
        videoUrl
        videoDetailsTitle
        videoDetailsDescriptionNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)

  return (
    <Layout title="Our Story">
      <AboutPageTemplate page={data.datoCmsAboutPage} />
    </Layout>
  )
}

export class AboutPageTemplate extends React.Component {
  render() {
    const getHtml = (node) => ({
      __html: node.childMarkdownRemark.html,
    })
    const { page } = this.props
    return (
      <main id="about-page" className="page-content">
        <h1>{page.headline}</h1>
        <p className="intro-text">{page.lede}</p>
        {/* <VideoPlayer
          url={page.videoUrl}
          title={page.videoDetailsTitle}
          description={page.videoDetailsDescriptionNode}
        /> */}
        <div className="content" dangerouslySetInnerHTML={getHtml(page.mainContentNode)} />
      </main>
    )
  }
}

export default AboutPage
