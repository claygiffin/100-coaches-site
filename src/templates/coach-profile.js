import React from 'react'
// import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import {markdownContent} from '../components/Content'
import Helmet from 'react-helmet'

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


export class CoachProfileTemplate extends React.Component {

  render() {
    const { coach } = this.props;
    const Bio = markdownContent;
    return (
      <div id="profile-page" className="page-content">
        <div className="coach-profile">
          <Helmet title={`${coach.coachName}'s Profile`} />
          <div className="flex-row">
            <div className="coach-links">
              {coach.links &&
                <>
                  { coach.links.website && <a className="website icon" href={`//${coach.links.website.replace(/(^\w+:|^)\/\//, '')}`} title="Website" target="_blank" rel="noopener noreferrer" ><span className="hidden">{coach.links.website.replace(/(^\w+:|^)\/\//, '')}</span></a> }
                  { coach.links.linkedin && <a className="linkedin icon" href={`https://linkedin.com/${coach.links.linkedin}`} title="LinkedIn" target="_blank" rel="noopener noreferrer" ><span className="hidden">LinkedIn Profile</span></a> }
                  { coach.links.twitter && <a className="twitter icon" href={`https://twitter.com/${coach.links.twitter}`} title="Twitter" target="_blank" rel="noopener noreferrer" ><span className="hidden">@{coach.links.twitter}</span></a> }
                  { coach.links.facebook && <a className="facebook icon" href={`https://facebook.com/${coach.links.facebook}`} title="Facebook" target="_blank" rel="noopener noreferrer" ><span className="hidden">Facebook Profile</span></a> }
                  { coach.links.instagram && <a className="instagram icon" href={`https://instagram.com/${coach.links.instagram}`} title="Instagram" target="_blank" rel="noopener noreferrer" ><span className="hidden">@{coach.links.instagram}</span></a> }
                </>
              }
            </div>        
            <div className="coach-photo"><img src={coach.photo} alt={coach.coachName + ' 100 Coaches'}/></div>
            <div className="functional-links">
              <div className="share icon" title="Share"><span className="hidden">Share</span></div>
              <div className="print icon" title="Print"><span className="hidden">Print</span></div>
            </div>
          </div>
          <div className="profile-content" >
            <h1>
              {coach.coachName}
            </h1>
            <h5>
              {coach.jobTitle}
            </h5>
            <div className="tags">          
              {this.props.coach.tags && this.props.coach.tags.map((tag, i) => <h6 key={i}>{tag}</h6>)}
              <span className="divider"></span>
            </div>
            <div className="bio">
              <Bio content={coach.bio} />
            </div>   
          </div>
        </div>
      </div>
    )
  }

}

// CoachProfileTemplate.propTypes = {
//   content: PropTypes.string.isRequired,
//   contentComponent: PropTypes.func,
//   title: PropTypes.string,
//   helmet: PropTypes.object,
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
