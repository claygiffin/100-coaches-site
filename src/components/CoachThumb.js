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
    return (
      <div onClick={this.handleClick}>
        <div 
          className="coach" 
          style={{backgroundImage: `url(${coach.frontmatter.photo}`}}
          onClick={this.handleLightboxOpen}
        >
          <h3>
            {coach.frontmatter.title}
          </h3>
          <h4>
            {coach.frontmatter.jobTitle}
          </h4>  
        </div>

      </div>
    )
  }
}

export default CoachThumb