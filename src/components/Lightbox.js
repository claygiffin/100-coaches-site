import React from 'react'

export class Lightbox extends React.Component {

  render(){
    return (
      <div className={`lightbox ${this.props.openState ? 'open' : 'closed'}`} >
        <div className="close-button" onClick={this.props.onClose}>Close</div>
        {this.props.children}
      </div>
    )
  }
}

export default Lightbox