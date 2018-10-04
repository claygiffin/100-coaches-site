import React from 'react'
import { kebabCase } from 'lodash'
import CoachLightbox from '../components/CoachLightbox'

export class CoachThumb extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      lightboxOpen: false,
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleCoachClose = this.handleCoachClose.bind(this);
    this.handleCoachClick = this.handleCoachClick.bind(this);
  }

  handleMouseDown(){
    this.eventType = 0;
  }
  handleMouseMove(){
    this.eventType = 1;
  }
  handleMouseUp(){
    this.eventType === 0 && this.handleCoachClick();
  }  

  handleCoachClick(){
    console.log('coach is clicked');
    this.setState({
      lightboxOpen: true,
    })
    let coachName = this.props.coach.coachName;
    let slug = `/coaches/${kebabCase(coachName)}/`;
    window.history.pushState({page: coachName}, null, `${slug}`);
    setTimeout(() => {document.body.classList.add('lightbox-open')}, 10);
  }

  handleCoachClose(){
    console.log('lightbox is closed');
    window.history.go(-1);
    document.body.classList.remove('lightbox-open');
    setTimeout(() => {
      this.setState({
        lightboxOpen: false,
      })
    },
      300
    )
  }

  render(){
    const {coach} = this.props;
    return (
      <>
        <div 
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onMouseUp={this.handleMouseUp}
          onTouchStart={this.handleMouseDown}
          onTouchMove={this.handleMouseMove}
          onTouchEnd={this.handleMouseUp}
          className="coach" 
        >
          <img src={coach.photo} alt={coach.coachName + ' 100 Coaches'}/>
          <div className="info">
            <h4>{coach.coachName}</h4>
            <h5>{coach.jobTitle}</h5>  
          </div>
        </div>
        <CoachLightbox 
          isOpen={this.state.lightboxOpen} 
          onClose={this.handleCoachClose}
          coach={coach}
        />
      </>
    )
  }

  componentDidMount() {
    window.onpopstate = () => {
      document.body.classList.remove('lightbox-open');
      this.setState({
        lightboxOpen: false,
      });
    }
  }

  componentWillUnmount() {
    
  }
}

export default CoachThumb