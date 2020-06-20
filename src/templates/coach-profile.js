import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CoachProfile from '../components/CoachProfile'

export const CoachProfilePage = ({ data }) => {
  const coach = data.datoCmsCoach
  return (
    <Layout>
      <CoachProfileTemplate coach={coach} />
    </Layout>
  )
}

export class CoachProfileTemplate extends React.Component {
  render() {
    return (
      <main id="profile-page" className="page-content">
        <CoachProfile coach={this.props.coach} />
      </main>
    )
  }
}

export default CoachProfilePage

export const pageQuery = graphql`

  query($coachName: String!) {
    datoCmsCoach(coachName: { eq: $coachName }) {
      id
      coachName
      jobTitle
      photo {
        fluid(maxWidth: 480, imgixParams: { ar: "1:1", fit: "crop" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      coachCategories {
        categoryName
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
      website
      linkedin
      twitter
      facebook
      instagram
    }
  }

`
