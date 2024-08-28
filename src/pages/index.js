import { graphql, useStaticQuery } from 'gatsby'
import { kebabCase } from 'lodash'
import React, { useCallback, useEffect, useState } from 'react'
import logoOnColor from '../assets/100Coaches_logo_onColor.svg'
import videoMp4 from '../assets/GettyImages-178062441_6.mp4'
import videoWebM from '../assets/GettyImages-178062441_6.webm'
import Carousel from '../components/Carousel'
import CoachThumb from '../components/CoachThumb'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      datoCmsHomePage {
        introText
        introLinkText
      }
      allDatoCmsCoachCategory(sort: { fields: position }) {
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

  const [activeFilter, setActiveFilter] = useState('default')
  const [filteredCoaches, setFilteredCoaches] = useState([])

  const categories = data.allDatoCmsCoachCategory.nodes

  useEffect(() => {
    switch (activeFilter) {
      case 'default': {
        setFilteredCoaches(data.allDatoCmsCoach.nodes)
        break
      }
      default: {
        const allCoaches = data.allDatoCmsCoach.nodes

        const filteredCoaches = allCoaches.reduce((acc, coach) => {
          const match = coach.coachCategories.filter(
            (category) => category.categoryName === activeFilter.categoryName,
          )
          if (match.length > 0) {
            acc.push(coach)
          }
          return acc
        }, [])

        setFilteredCoaches(filteredCoaches)
        break
      }
    }
  }, [activeFilter, data.allDatoCmsCoach.nodes])

  const applyFilter = useCallback((selectedCategory) => {
    setActiveFilter(selectedCategory)
    let slug = `/#${kebabCase(selectedCategory.categoryPlural)}`
    window.history.replaceState(
      { page: selectedCategory.categoryPlural },
      null,
      `${slug}`,
    )
  }, [])

  useEffect(() => {
    if (window.location.hash) {
      categories.forEach((category) => {
        if (kebabCase(category.categoryPlural) === kebabCase(window.location.hash)) {
          applyFilter(category)
        }
      })
    } else {
      setActiveFilter('default')
    }
  }, [categories, applyFilter])

  return (
    <Layout title={data.site.siteMetadata.title} navTransparent>
      <main id="home-page" className="page-content">
        <Hero video videoMp4={videoMp4} videoOgg="" videoWebM={videoWebM}>
          <h1>{data.site.siteMetadata.title}</h1>
          <img src={logoOnColor} alt={data.site.siteMetadata.title} id="hero-logo" />
          <div className="intro-text">
            100 Coaches is a community of coaches and leadership experts, and an{' '}
            <a href="https://www.100coaches.com/">agency</a> that connects them with
            the world’s best leaders.
          </div>
          <div className="divider"></div>
          <div className="links">
            <a href="https://www.100coaches.com/" className="text-link">
              Hire a Coach
            </a>
          </div>
        </Hero>
      </main>
      <section id="coaches-page">
        <div className="carousel-wrap">
          <Carousel id="filters">
            <h3
              role="button"
              onClick={() => setActiveFilter('default')}
              className={activeFilter === 'default' ? 'active' : ''}
            >
              Everyone
            </h3>
            {categories.map((category, i) => {
              return (
                <h3
                  key={i}
                  role="button"
                  onClick={() => setActiveFilter(category)}
                  className={activeFilter === category ? 'active' : ''}
                >
                  {category.categoryPlural}
                </h3>
              )
            })}
          </Carousel>
        </div>
        <section className="coach-list">
          {filteredCoaches.map((coach, i) => (
            <div className="coach-wrap" key={i}>
              <CoachThumb coach={coach} />
            </div>
          ))}
        </section>
      </section>
    </Layout>
  )
}

export default HomePage
