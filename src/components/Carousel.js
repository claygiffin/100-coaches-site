import React from 'react'
import Slider from 'react-slick'
import {Link} from 'gatsby'
import './Carousel.scss'

export class Carousel extends React.Component {
  render(){
    let settings;
    let defaultSettings = {
      dots: false,
      infinite: false,
      speed: 500,
      respondTo: 'slider',
    }
    switch (this.props.slidesToShow) {
      case 3 :
        settings = {
          ...defaultSettings,
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      break;
      case 4 :
        settings = {
          ...defaultSettings,
          slidesToShow: 4,
          slidesToScroll: 4,
        }
        break;
      default:
        settings = defaultSettings;
        console.log('Carousels must provide a number of slides to show');
    }
    return (
      <div className="slick-wrap" id={this.props.id}>
        <div className="slick-nav">
          {this.props.viewAll && <Link className="view-all" to={this.props.viewAll}>View All</Link> }          
        </div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {this.props.children}
        </Slider>               
      </div>

    )
  }
  componentDidMount() {
    const thisCarousel = document.querySelectorAll(`#${this.props.id} .slick-slider`)[0];
    const carouselNav =  document.querySelectorAll(`#${this.props.id} .slick-nav`)[0];
    const nextButton = thisCarousel.getElementsByClassName('slick-next')[0];
    const prevButton = thisCarousel.getElementsByClassName('slick-prev')[0];
    prevButton && carouselNav.appendChild(prevButton);
    nextButton && carouselNav.appendChild(nextButton);
  }
}

export default Carousel