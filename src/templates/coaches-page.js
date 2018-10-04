import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CoachThumb from '../components/CoachThumb'
import Carousel from '../components/Carousel'

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

const tags = [
  {
    name: 'Executive Coaches',
    matches: [
      'Coach',
      'Executive Coach',
    ],
  },
  {
    name: 'Authors',
    matches: [
      'Author',
    ],
  },
  {
    name: 'Speakers',
    matches: [
      'Speaker',
    ],
  },
  {
    name: 'Entrepreneurs',
    matches: [
      'Entrepreneur',
    ],
  },
  {
    name: 'Non-Profit',
    matches: [
      'Non-Profit',
      'Nonprofit'
    ],
  },
  {
    name: 'Iconic Leaders',
    matches: [
      'Iconic Leader',
    ],
  },
]

export class CoachesPageTemplate extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      allCoaches: [],
      filteredCoaches: [],
      activeFilter: 'default',
    }

    this.popAllCoaches = this.popAllCoaches.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
  }

  popAllCoaches() {
    const coaches = this.props.coaches
    this.setState({
      allCoaches: coaches,
      filteredCoaches: coaches,
      activeFilter: 'default',
    });
  }

  applyFilter(selectedTag) {
    let matches = selectedTag.matches
    let filteredCoaches = [];
    matches.forEach(match => {
      this.state.allCoaches.forEach(coach => {
        coach.tags.filter(tag => tag === match).length > 0 && filteredCoaches.push(coach);
      });
    });
    this.setState({
      filteredCoaches: filteredCoaches,
      activeFilter: selectedTag.name,
    })
  }

  render() {
    
    return (
      <div id="coaches-page" className="page-content" >
        <div id="main-content">
          <h1>
            {this.props.title}
          </h1>
          <div className="carousel-wrap">
            <Carousel id="filters">
              <h3 onClick={this.popAllCoaches} className={this.state.activeFilter === 'default' ? 'active' : '' }>Everyone</h3>
              {tags.map(tag => <h3 key={tag.name} onClick={() => {this.applyFilter(tag)}} className={this.state.activeFilter === tag.name ? 'active' : '' }>{tag.name}</h3>)}
            </Carousel>
          </div>
          <section className="coach-list" >
            {this.state.filteredCoaches.map(coach => (
              <div className="coach-wrap" key={coach.coachName} >
                <CoachThumb 
                  coach={coach} 
                />
              </div>
            ))}
          </section>
        </div>
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
