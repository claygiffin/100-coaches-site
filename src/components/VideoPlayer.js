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
      <>
      <div className="player-wrapper">
        <ReactPlayer 
          ref={this.ref} 
          url='https://www.youtube.com/watch?v=jqe5XWzBHt0' 
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
      <h6>Video | <span className="duration">{this.state.duration.hours !== 0 && `${this.state.duration.hours}:`}{this.state.duration.minutes && `${this.state.duration.minutes}:`}{this.state.duration.seconds && this.state.duration.seconds}</span></h6>
      </>
    )
  }

  componentDidMount() {
    // console.log(this.player);
    // console.log(this.player.getDuration())
    // setTimeout(() => {
    //   console.log(this.player)
    //   console.log(this.player.getDuration())
    //   const duration = this.player.getDuration();
    //   this.setState({
    //     duration: duration,
    //   })
    // }, 1000)
  }
}