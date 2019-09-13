import React from 'react'

export default class ThoughtThumb extends React.Component {

  render() {
    const {thought} = this.props
    return(
      <a 
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
        onTouchStart={this.handleMouseDown}
        onTouchMove={this.handleMouseMove}
        onTouchEnd={this.handleMouseUp}
        className="thought"
        href={`//${thought.url.replace(/(^\w+:|^)\/\//, '')}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="image" >
          <img src={thought.image} alt={thought.title} />
        </div>
        <h5>{thought.title}</h5>
        <h6>{thought.author}</h6>
      </a>
    )
  }
}