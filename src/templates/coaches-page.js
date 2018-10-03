import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CoachThumb from '../components/CoachThumb'
import { kebabCase } from 'lodash'
import CoachLightbox from '../components/CoachLightbox'

export const CoachesPage = ({ data }) => {
  const { pageQuery, allCoaches } = data

  return (
    <Layout title="Our Members" >
      <CoachesPageTemplate
        title={pageQuery.frontmatter.title}
        coaches={allCoaches.frontmatter.coachList}
      />
    </Layout>
  )
}

CoachesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export class CoachesPageTemplate extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      allCoaches: [],
      filteredCoaches: [],
      coachLightboxOpen: false,
      activeCoach: '',
    }

    this.popAllCoaches = this.popAllCoaches.bind(this);
  }

  popAllCoaches() {
    const coaches = this.props.coaches
    this.setState({
      allCoaches: coaches,
      filteredCoaches: coaches,
    });
    this.handleCoachClose = this.handleCoachClose.bind(this);
    this.handleCoachClick = this.handleCoachClick.bind(this);
  }


  handleCoachClick(coach){
    console.log('coach is clicked');
    this.setState({
      coachLightboxOpen: true,
      activeCoach: coach,
    })
    let coachName = coach.coachName;
    let slug = `/coaches/${kebabCase(coachName)}/`;
    window.history.pushState({page: coachName}, null, `${slug}`);
    document.body.classList.add('lightbox-open');
    console.log(coach.photo);
  }

  handleCoachClose(){
    console.log('lightbox is closed');
    window.history.replaceState({page: 'home'}, null, `/`)
    document.body.classList.remove('lightbox-open');
    setTimeout(() => {
      this.setState({
        coachLightboxOpen: false,
        activeCoach: []
      })
    },
      300
    )
  }

  render() {
    return (
      <div id="coaches-page" className="page-content" >
        <div id="main-content">
          <h1>
            {this.props.title}
          </h1>
          <section className="coach-list" >
            {this.state.filteredCoaches.map(coach => (
              <div className="coach-wrap" key={coach.coachName} >
                <CoachThumb 
                  coach={coach} 
                  onClick={this.handleCoachClick}
                />
              </div>
            ))}
          </section>
        </div>
        <CoachLightbox 
          openState={this.state.coachLightboxOpen} 
          onClose={this.handleCoachClose}
          coach={this.state.activeCoach}
        />
      </div>
    )
  }

  componentDidMount() {
    this.popAllCoaches();
  }

}

CoachesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
}

export default CoachesPage

export const coachesPageQuery = graphql`
  fragment coachesFrontmatter on MarkdownRemark {
    frontmatter {
      coachList {
        bio
        coachName
        jobTitle
        photo
        tags
        links {
          facebook
          instagram
          linkedin
          twitter
          website
        }
      }
    }
  }
  query coachesPage($id: String!) {
    pageQuery: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
    allCoaches: markdownRemark(id: { eq: $id }) {
      ...coachesFrontmatter
    }
  }
`
