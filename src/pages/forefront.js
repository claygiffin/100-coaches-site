import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import ReactPlayer from 'react-player'
import { StructuredText } from 'react-datocms'
import logo from '../assets/forefront-logo.png'

const ForefrontPage = () => {
  const data = useStaticQuery(graphql`
    query {
      page: datoCmsForefrontPage {
        headline
        lede
        body {
          value
          blocks {
            ... on DatoCmsVideoPlayer {
              __typename
              id: originalId
              videoUrl
            }
            ... on DatoCmsExternalLink {
              __typename
              id: originalId
              linkText
              url
            }
          }
        }
      }
    }
  `)

  const { page } = data
  return (
    <Layout title="Forefront">
      <main id="forefront-page" className="page-content">
        <img src={logo} alt="Forefront" className="logo" />
        <h1>{page.headline}</h1>
        <p className="intro-text">{page.lede}</p>
        <div className="content">
          <StructuredText
            data={page.body}
            renderBlock={({ record }) => {
              switch (record.__typename) {
                case 'DatoCmsExternalLink':
                  return (
                    <a href={record.url} className="cta-link">
                      {record.linkText}
                    </a>
                  )
                case 'DatoCmsVideoPlayer':
                  return (
                    <div className="video-container">
                      <div>
                        <div className="react-player-wrapper">
                          <ReactPlayer
                            url={record.videoUrl}
                            controls
                            playsinline
                            className="react-player"
                            width="100%"
                            height="100%"
                            config={{
                              youtube: {
                                preload: true,
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )
                default:
                  return null
              }
            }}
          />
        </div>
      </main>
    </Layout>
  )
}

export default ForefrontPage
