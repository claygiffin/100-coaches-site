import React from 'react'


export class CoachThumb extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.onClick(this.props.coach)
  }

  render(){
    const {coach} = this.props;
    console.log(coach);
    return (
      <div onClick={this.handleClick}>
        <div 
          className="coach" 
          style={{backgroundImage: `url(${coach.photo}`}}
          onClick={this.handleLightboxOpen}
        >
          <h3>
            {coach.coachName}
          </h3>
          <h4>
            {coach.jobTitle}
          </h4>  
        </div>

      </div>
    )
  }
}

export default CoachThumb