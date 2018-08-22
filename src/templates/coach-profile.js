import React from 'react'
// import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'

export class CoachProfileTemplate extends React.Component {

  render() {
    return (
      <section className="section"> 
        Testing
        {this.props.coach.coachName}
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
      }
    }
  }
`
