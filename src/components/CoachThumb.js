import React from 'react'
import { kebabCase } from 'lodash'
import CoachLightbox from '../components/CoachLightbox'
import Img from 'gatsby-image'

let mouseXInit
let mouseYInit
let mouseX
let mouseY

export class CoachThumb extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lightboxOpen: false,
    }

    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleCoachClose = this.handleCoachClose.bind(this)
    this.handleCoachClick = this.handleCoachClick.bind(this)
  }
  handleMouseDown(e) {
    mouseXInit = e.pageX
    mouseYInit = e.pageY
  }
  handleMouseMove(e) {
    mouseX = e.pageX
    mouseY = e.pageY
  }
  handleMouseUp() {
    if (Math.abs(mouseX - mouseXInit) < 10 && Math.abs(mouseY - mouseYInit) < 10) {
      this.handleCoachClick()
    }
  }

  handleCoachClick() {
    this.setState({
      lightboxOpen: true,
    })
    let coachName = this.props.coach.coachName
    window.localStorage.setItem('lightboxCloseURL', window.location.pathname)
    window.location.hash
      ? window.localStorage.setItem('lightboxCloseHash', window.location.hash)
      : window.localStorage.setItem('lightboxCloseHash', '')
    let slug = `/coaches/${kebabCase(coachName)}/`
    window.history.replaceState({ page: coachName }, null, `${slug}`)
    setTimeout(() => {
      document.body.classList.add('lightbox-open')
    }, 10)
  }

  handleCoachClose() {
    window.history.replaceState(
      null,
      null,
      `${window.localStorage.getItem('lightboxCloseURL')}${window.localStorage.getItem(
        'lightboxCloseHash',
      )}`,
    )
    document.body.classList.remove('lightbox-open')
    setTimeout(() => {
      this.setState({
        lightboxOpen: false,
      })
    }, 300)
  }

  render() {
    const { coach } = this.props
    return (
      <>
        <div
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onMouseUp={this.handleMouseUp}
          // onTouchStart={this.handleMouseDown}
          // onTouchMove={this.handleMouseMove}
          // onTouchEnd={this.handleMouseUp}
          className="coach"
        >
          <div className="image-wrap">
            <Img sizes={{ ...coach.photo.fluid, aspectRatio: 1 }} alt={coach.coachName + ' 100 Coaches'} />
          </div>
          <div className="info">
            <h4>{coach.coachName}</h4>
            <h5>{coach.jobTitle}</h5>
          </div>
        </div>
        <CoachLightbox isOpen={this.state.lightboxOpen} onClose={this.handleCoachClose} coach={coach} />
      </>
    )
  }

  componentDidMount() {
    window.onpopstate = () => {
      document.body.classList.remove('lightbox-open')
      this.setState({
        lightboxOpen: false,
      })
    }
  }
}

export default CoachThumb
