import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import {Link, graphql} from 'gatsby'
import Content, { HTMLContent } from '../components/Content'

export const CoachProfileTemplate = ({
  content,
  contentComponent,
  title,
  jobTitle,
  photo,
  tags,
  helmet
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section"> 
      {helmet}
      <div className="container content">
        <h1 className="title">
          {title}
        </h1>
        <h2 className="job-title" >
          {jobTitle}
        </h2>
        <img src={photo} alt={title}/>
        <PostContent content={content} />
        {tags && tags.length ? (
          <div style={{ marginTop: `4rem` }}>
            <h4>Tags</h4>
            <ul className="taglist">
              {tags.map(tag => (
                <li key={tag + `tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  )
}

CoachProfileTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const CoachProfile = ({ data }) => {
  const { markdownRemark: coach } = data

  return (
    <CoachProfileTemplate
      content={coach.html}
      contentComponent={HTMLContent}
      helmet={<Helmet title={`${coach.frontmatter.title}'s Profile`} />}
      tags={coach.frontmatter.tags}
      photo={coach.frontmatter.photo}
      title={coach.frontmatter.title}
      jobTitle={coach.frontmatter.jobTitle}
    />
  )
}

CoachProfile.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default CoachProfile

export const pageQuery = graphql`
  query CoachProfileByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tags
        jobTitle
        photo
      }
    }
  }
`
