import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { kebabCase } from 'lodash'
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
    name: 'Speakers',
    matches: [
      'Speaker',
      'Public Speaker'
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
    name: 'Iconic Leaders',
    matches: [
      'Iconic Leader',
    ],
  },
  {
    name: 'Corporate Executives',
    matches: [
      'Corporate Executive',
      'CEO',
      'Executive',
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
      allCoaches: this.props.coaches,
      filteredCoaches: this.props.coaches,
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
    let slug = `/coaches/`;
    window.history.replaceState({page: 'all coaches'}, null, `${slug}`);
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
    let slug = `/coaches/#${kebabCase(selectedTag.name)}`;
    window.history.replaceState({page: selectedTag.name}, null, `${slug}`);
  }

  render() {
    
    return (
      <main id="coaches-page" className="page-content" >
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
      </main>
    )
  }

  componentDidMount() {
    if(window.location.hash){
      tags.forEach(tag => {
        kebabCase(tag.name) === kebabCase(window.location.hash) && this.applyFilter(tag);
      })
    } else {
      this.popAllCoaches();
    }
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
