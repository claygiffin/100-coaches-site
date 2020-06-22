import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { kebabCase } from 'lodash'
import Layout from '../components/Layout'
import CoachThumb from '../components/CoachThumb'
import Carousel from '../components/Carousel'

export const CoachesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsTheCoachesPage {
        headline
      }
      allDatoCmsCoachCategory(sort: {fields: position}) {
        nodes {
          categoryName
          categoryPlural
        }
      }
      allDatoCmsCoach(sort: { order: [ASC, ASC], fields: [priority, coachName] }) {
        nodes {
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
    }
  `)

  const _ = require('lodash')

  return (
    <Layout title="Our Members">
      <CoachesPageTemplate
        title={data.datoCmsTheCoachesPage.headline}
        coaches={data.allDatoCmsCoach.nodes}
        categories={data.allDatoCmsCoachCategory.nodes}
      />
    </Layout>
  )
}

let mouseXInit
let mouseYInit
let mouseX
let mouseY

export class CoachesPageTemplate extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filteredCoaches: this.props.coaches,
      activeFilter: 'default',
    }

    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseUpDefault = this.handleMouseUpDefault.bind(this)
    this.handleMouseUpFilter = this.handleMouseUpFilter.bind(this)

    this.popAllCoaches = this.popAllCoaches.bind(this)
    this.applyFilter = this.applyFilter.bind(this)
  }

  handleMouseDown(e) {
    mouseXInit = e.pageX
    mouseYInit = e.pageY
  }

  handleMouseMove(e) {
    mouseX = e.pageX
    mouseY = e.pageY
  }

  handleMouseUpDefault() {
    if (Math.abs(mouseX - mouseXInit) < 10 && Math.abs(mouseY - mouseYInit) < 10) {
      this.popAllCoaches()
    }
  }

  handleMouseUpFilter(selectedCategory) {
    if (Math.abs(mouseX - mouseXInit) < 10 && Math.abs(mouseY - mouseYInit) < 10) {
      this.applyFilter(selectedCategory)
    }
  }

  popAllCoaches() {
    const coaches = this.props.coaches
    this.setState({
      filteredCoaches: coaches,
      activeFilter: 'default',
    })
    let slug = `/coaches/`
    window.history.replaceState({ page: 'all coaches' }, null, `${slug}`)
  }

  applyFilter(selectedCategory) {
    const coaches = this.props.coaches

    let filteredCoaches = []
    coaches.forEach((coach) => {
      const match = coach.coachCategories.filter(category => category.categoryName === selectedCategory.categoryName)
      if (match.length > 0) {
        filteredCoaches.push(coach)
      }
    })
    this.setState({
      filteredCoaches: filteredCoaches,
      activeFilter: selectedCategory,
    })
    let slug = `/coaches/#${kebabCase(selectedCategory.categoryPlural)}`
    window.history.replaceState({ page: selectedCategory.categoryPlural }, null, `${slug}`)
  }

  render() {
    const { categories } = this.props

    return (
      <main id="coaches-page" className="page-content">
        <h1>{this.props.title}</h1>
        <div className="carousel-wrap">
          <Carousel id="filters" >
            <h3
              onMouseDown={this.handleMouseDown}
              onMouseMove={this.handleMouseMove}
              onMouseUp={this.handleMouseUpDefault}
              onTouchStart={this.handleMouseDown}
              onTouchMove={this.handleMouseMove}
              onTouchEnd={this.handleMouseUpDefault}
              className={this.state.activeFilter === 'default' ? 'active' : ''}
            >
              Everyone
            </h3>
            {categories.map((category, i) => {
              return (
                <h3
                  key={i}
                  onMouseDown={this.handleMouseDown}
                  onMouseMove={this.handleMouseMove}
                  onMouseUp={() => this.handleMouseUpFilter(category)}
                  onTouchStart={this.handleMouseDown}
                  onTouchMove={this.handleMouseMove}
                  onTouchEnd={() => this.handleMouseUpFilter(category)}
                  className={this.state.activeFilter === category ? 'active' : ''}
                >
                  {category.categoryPlural}
                </h3>
              )
            })}
          </Carousel>
        </div>
        <section className="coach-list">
          {this.state.filteredCoaches.map((coach, i) => (
            <div className="coach-wrap" key={i}>
              <CoachThumb coach={coach} />
            </div>
          ))}
        </section>
      </main>
    )
  }

  componentDidMount() {
    const { categories } = this.props

    if (window.location.hash) {
      categories.forEach((category) => {
        kebabCase(category.categoryPlural) === kebabCase(window.location.hash) && this.applyFilter(category)
      })
    } else {
      this.popAllCoaches()
    }
  }
}

export default CoachesPage
