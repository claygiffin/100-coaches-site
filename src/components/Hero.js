import React from 'react'

class Hero extends React.Component {
  render(){
    return(
      <div id="hero">
        {this.props.children}
        <video id="hero-video" loop autoPlay playsInline async muted >
          {this.props.videoWebM ? <source src={this.props.videoWebM} type="video/webm" /> : null }
          {this.props.videoOgg ? <source src={this.props.videoOgg} type="video/ogg"/> : null }
          {this.props.videoMp4 ? <source src={this.props.videoMp4} type="video/mp4" /> : null }
        </video>
      </div>
    )
  }
}

export default Hero

