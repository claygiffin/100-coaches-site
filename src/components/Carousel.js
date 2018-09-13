import React from 'react'
import Slider from 'react-slick'
import './Carousel.scss'

export class Carousel extends React.Component {

  render(){
    let settings;
    switch (this.props.slidesToShow) {
      case 4 :
        settings = {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          respondTo: 'slider',
          swipeToSlide: true,
        }
        break;
      default:
        console.log('Carousels must provide a number of slides to show');
    }
    return (
      <Slider {...settings}>
        {this.props.children}
      </Slider>
    )
  }
}

export default Carousel