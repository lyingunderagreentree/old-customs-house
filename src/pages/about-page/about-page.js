import React from 'react'
import '../page-slider.scss'
import './about-page.scss'
import Slide1 from './slide1'
import Slide2 from './slide2'
import Slide3 from './slide3'
import Slide4 from './slide4'
import Slide5 from './slide5'
import Slider from 'react-slick' 
import Lottie from 'react-lottie'
import animationScroll from '../scroll.json' 

const sliderSettings = {
  dots: true,
  speed: 300,
  slidesToShow: 1,
  arrows: false
}

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animationScroll,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default () => (
  <div className="about-page page">

    <Slider className="page__slider" {...sliderSettings}>
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
    </Slider>
    <div className="animated-scroll">
      <Lottie options={defaultOptions} width={50}/>
    </div>

  </div>
)