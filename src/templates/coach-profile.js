import React from 'react'
// import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import {markdownContent} from '../components/Content'

export class CoachProfileTemplate extends React.Component {

  render() {
    const Bio = markdownContent
    return (
      <section className="section"> 
        {this.props.coach.coachName}
        <Bio content={this.props.coach.bio} />
      </section>
    )
  }

}

// CoachProfileTemplate.propTypes = {
//   content: PropTypes.string.isRequired,
//   contentComponent: PropTypes.func,
//   title: PropTypes.string,
//   helmet: PropTypes.object,
// }

export const CoachProfile = ({ data }) => {
  const { context: coach } = data.coachQuery
  console.log(coach)
  return (
    <Layout>
      <CoachProfileTemplate
        coach={coach}
      />
    </Layout>
  )
}

// CoachProfile.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.object,
//   }),
// }

export default CoachProfile

export const pageQuery = graphql`
  query coachProfileQuery($path: String!) {
    coachQuery: sitePage(path: { eq: $path }) {
      id
      context {
        coachName
        jobTitle
        photo
        tags
        bio
        links {
          website
        }
      }
    }
  }
`
