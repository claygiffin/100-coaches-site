import React from 'react'

let pos = 0;

class Hero extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      pos: 0,
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.vidRef = React.createRef();
  }

  handleScroll(){
    if (window.scrollY < window.innerHeight || window.scrollY < this.vidRef.current.clientHeight) {
      pos = window.scrollY / 3;
      this.setState({
        pos: pos,
      });
    }
  }

  render(){
    return(
      <section id="hero" >
        {this.props.children}
        <video ref={this.vidRef} id="hero-video" loop autoPlay playsInline async muted style={{transform: `translate3d(0, ${this.state.pos}px, 0)`}}>
          {this.props.videoWebM && <source src={this.props.videoWebM} type="video/webm" /> }
          {this.props.videoOgg && <source src={this.props.videoOgg} type="video/ogg"/> }
          {this.props.videoMp4 && <source src={this.props.videoMp4} type="video/mp4" /> }
        </video>
      </section>
    )
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

}

export default Hero

