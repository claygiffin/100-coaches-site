import React from 'react'
import Slider from 'react-slick'
import {Link} from 'gatsby'
import './Carousel.scss'

export class Carousel extends React.Component {

  constructor(props) {
    super(props);

    this.preventTouch = this.preventTouch.bind(this);
    this.touchStart = this.touchStart.bind(this);
  }

  touchStart(e) {
    // capture user's starting finger position, for later comparison
    this.firstClientX = e.touches[0].clientX;
  }

  preventTouch(e) {
    // only prevent touch on horizontal scroll (for horizontal carousel)
    // this allows the users to scroll vertically past the carousel when touching the carousel
    // this also stabilizes the horizontal scroll somewhat, decreasing vertical scroll while horizontal scrolling
    const clientX = e.touches[0].clientX - this.firstClientX;
    const horizontalScroll = Math.abs(clientX) > 5;
    if (horizontalScroll) {
      e.preventDefault();
    }
  }

  render(){
    let settings;
    let defaultSettings = {
      dots: false,
      infinite: false,
      speed: 500,
      respondTo: 'slider',
      lazyLoad: `progressive`,
    }
    switch (this.props.slidesToShow) {
      case 3 :
        settings = {
          ...defaultSettings,
          slidesToShow: 5,
          slidesToScroll: 5,
          responsive: [
            {
              breakpoint: 1800,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              }
            },
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
        }
      break;
      case 4 :
        settings = {
          ...defaultSettings,
          slidesToShow: 6,
          slidesToScroll: 6,
          responsive: [
            {
              breakpoint: 1800,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
              }
            },
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 540,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            }
          ]
        }
        break;
      default:
        settings = {
          ...defaultSettings,
          slidesToScroll: 3,
          variableWidth: true,
          swipeToSlide: true,
          lazyLoad: false,
        }
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
    const thisCarousel = document.querySelector(`#${this.props.id} .slick-slider`);
    const carouselNav =  document.querySelector(`#${this.props.id} .slick-nav`);
    const nextButton = thisCarousel.querySelector('.slick-next');
    const prevButton = thisCarousel.querySelector('.slick-prev');
    prevButton && carouselNav.appendChild(prevButton) && (prevButton.style.display = null);
    nextButton && carouselNav.appendChild(nextButton) && (nextButton.style.display = null);

    // Disable touchmove to prevent scrolling entire page
    const carousel = document.getElementById(this.props.id); // Your site element containing react-slick's carousel-container
    carousel.addEventListener('touchstart', this.touchStart);
    carousel.addEventListener('touchmove', this.preventTouch, { passive: false });
  }
}

export default Carousel