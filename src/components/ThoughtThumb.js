import React from 'react'
import Img from 'gatsby-image'

export default class ThoughtThumb extends React.Component {
  render() {
    const { thought } = this.props
    return (
      <a
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
        onTouchStart={this.handleMouseDown}
        onTouchMove={this.handleMouseMove}
        onTouchEnd={this.handleMouseUp}
        className="thought"
        href={thought.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="image">
          <Img sizes={{ ...thought.image.fluid, aspectRatio: 16/9 }} alt={thought.title} />
        </div>
        <h5>{thought.title}</h5>
        <h6>{thought.coachAuthor ? thought.coachAuthor.coachName : thought.nonMemberAuthor ? thought.nonMemberAuthor : ''}</h6>
      </a>
    )
  }
}
