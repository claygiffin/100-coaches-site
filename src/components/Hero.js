import React from 'react'

class Hero extends React.Component {
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Hero