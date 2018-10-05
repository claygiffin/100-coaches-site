import React from 'react'
import ReactPlayer from 'react-player'

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: {
        hours: '',
        minutes: '',
        seconds: ''
      },
    }
    this.ref = this.ref.bind(this);
    this.getDuration = this.getDuration.bind(this);
  }

  ref(player) {
    this.player = player;
  }

  getDuration() {
    let duration = this.player.getDuration();
    let hours = Math.floor(duration / 3600);
    let minutes = Math.floor((duration - (hours * 3600)) / 60);
    let seconds = duration - (hours * 3600) - (minutes * 60);
    this.setState({
      duration: {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      },
    })
  }

  render() {
    return (
      <div className="video-container">
        <div className="player-wrapper" >
          <div className="player-wrapper-inner">
            <ReactPlayer 
              ref={this.ref} 
              url={this.props.url} 
              controls  
              playsinline 
              className="react-player" 
              onReady={() => this.getDuration() }
              width="100%"
              height="100%"
              config = {
                {
                  youtube: {
                    preload: true,
                  }
                }
              }
            />
          </div>
        </div>
        <div className="info-wrapper">
          <h3>{this.props.title}</h3>
          <h6>Video&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span className="duration">{this.state.duration.hours !== 0 && `${this.state.duration.hours}:`}{this.state.duration.minutes && `${this.state.duration.minutes}:`}{this.state.duration.seconds && this.state.duration.seconds}</span></h6>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }

}