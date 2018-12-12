import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CoachThumb from '../components/CoachThumb'
import Carousel from '../components/Carousel'

export const CoachesPage = ({ data }) => {
  const { pageQuery, allCoaches } = data
  const _ = require('lodash')

  return (
    <Layout title="Our Members" >
      <CoachesPageTemplate
        title={pageQuery.frontmatter.title}
        coaches={_.uniqBy(allCoaches.frontmatter.coachList, 'coachName')}
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
      'CEO Coach',
    ],
  },
  {
    name: 'Consultants',
    matches: [
      'Consultant',
      'Corporate Consultant',
    ],
  },
  {
    name: 'Authors',
    matches: [
      'Author',
      'Writer',
    ],
  },
  {
    name: 'Speakers',
    matches: [
      'Speaker',
    ],
  },
  {
    name: 'Iconic Leaders',
    matches: [
      'Iconic Leader',
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
]

let mouseXInit;
let mouseYInit;
let mouseX;
let mouseY;

export class CoachesPageTemplate extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      allCoaches: [],
      filteredCoaches: [],
      activeFilter: 'default',
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUpDefault = this.handleMouseUpDefault.bind(this);
    this.handleMouseUpFilter = this.handleMouseUpFilter.bind(this);

    this.popAllCoaches = this.popAllCoaches.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
  }

  handleMouseDown(e){
    mouseXInit = e.pageX;
    mouseYInit = e.pageY;
  }

  handleMouseMove(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
  }

  handleMouseUpDefault(){
    if ((Math.abs(mouseX - mouseXInit) < 10) && (Math.abs(mouseY - mouseYInit) < 10) ){
      this.popAllCoaches();
    }
  }  

  handleMouseUpFilter(selectedTag){
    if ((Math.abs(mouseX - mouseXInit) < 10) && (Math.abs(mouseY - mouseYInit) < 10) ){
      this.applyFilter(selectedTag);
    }
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
        coach.tags && coach.tags.filter(tag => tag.toUpperCase() === match.toUpperCase()).length > 0 && filteredCoaches.push(coach);
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
        <h1>
          {this.props.title}
        </h1>
        <div className="carousel-wrap">
          <Carousel id="filters">
            <h3 
              onMouseDown={this.handleMouseDown}
              onMouseMove={this.handleMouseMove}
              onMouseUp={this.handleMouseUpDefault}
              onTouchStart={this.handleMouseDown}
              onTouchMove={this.handleMouseMove}
              onTouchEnd={this.handleMouseUpDefault}
              className={this.state.activeFilter === 'default' ? 'active' : '' }
            >
              Everyone
            </h3>
            {tags.map(tag => {
              return (
                <h3 
                  key={tag.name} 
                  onMouseDown={this.handleMouseDown}
                  onMouseMove={this.handleMouseMove}
                  onMouseUp={() => this.handleMouseUpFilter(tag)}
                  onTouchStart={this.handleMouseDown}
                  onTouchMove={this.handleMouseMove}
                  onTouchEnd={() => this.handleMouseUpFilter(tag)}
                  className={this.state.activeFilter === tag.name ? 'active' : '' }
                >
                  {tag.name}
                </h3>
              )
            })}
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
