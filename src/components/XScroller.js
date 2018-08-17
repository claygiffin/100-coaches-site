import React from 'react'

export class XScroller extends React.Component {
  render(){
    return (
      <div className={`${this.props.className} x-scroller`} >
        {this.props.children}
      </div>
    )
  }
}

export default XScroller