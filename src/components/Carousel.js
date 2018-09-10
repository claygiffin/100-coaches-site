import React from 'react'
import Slider from 'react-slick'
import './Carousel.scss'

export class Carousel extends React.Component {
  render(){
    let settings = this.props.slidesToShow;
    switch (settings) {
      case 4 :
        settings = {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          respondTo: 'slider',
          swipeToSlide: true,
        };
    }
    return (
      <Slider {...settings}>
        {this.props.children}
      </Slider>
    )
  }
}

export default Carousel