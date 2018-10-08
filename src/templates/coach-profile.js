import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import CoachProfile from '../components/CoachProfile'


export const CoachProfilePage = ({ data }) => {
  const { context: coach } = data.coachQuery
  return (
    <Layout>
      <CoachProfileTemplate
        coach={coach}
      />
    </Layout>
  )
}


export class CoachProfileTemplate extends React.Component {
  render(){
    return(
      <div id="profile-page" className="page-content">
        <CoachProfile coach={this.props.coach} />
      </div>
    )
  }
  

}


export default CoachProfilePage

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
          linkedin
          twitter
          facebook
          instagram
        }
      }
    }
  }
`
