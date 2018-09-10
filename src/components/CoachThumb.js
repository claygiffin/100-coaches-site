import React from 'react'


export class CoachThumb extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleDrag(){
    this.props.ondrag();
  }

  handleClick(){
    this.props.onClick(this.props.coach)
  }

  render(){
    const {coach} = this.props;
    return (
      <div 
        onClick={this.handleClick}
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