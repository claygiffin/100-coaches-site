import React from 'react'


export class CoachThumb extends React.Component {
  constructor(props){
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  handleMouseDown(){
    this.eventType = 0;
  }
  handleMouseMove(){
    this.eventType = 1;
  }
  handleMouseUp(){
    this.eventType === 0 ? this.props.onClick(this.props.coach) : null;
  }  

  render(){
    const {coach} = this.props;
    return (
      <div 
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
        className="coach" 
      >
        <img src={coach.photo} alt={coach.coachName + ' 100 Coaches'}/>
        <div className="info">
          <h4>{coach.coachName}</h4>
          <h5>{coach.jobTitle}</h5>  
        </div>

      </div>
    )
  }
}

export default CoachThumb