import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ArrowPrev from '../ArrowPrev';
import ArrowNext from '../ArrowNext';
import './Banner.scss';
import BannerItem from './BannerItem';

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        {
          title: 'У тебя к этому талант',
          bannerUrl: 'img/banner-1.png',
        },
        {
          title: 'У тебя всё под контролем',
          bannerUrl: 'img/banner-2.png',
        },
      ],
    };
  }

  render() {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
      <div className="arrow__wrapper">
        <button
          {...props}
          className={'prev arrow' + (currentSlide === 0 ? ' disabled' : '')}
          aria-hidden="true"
          aria-disabled={currentSlide === 0 ? true : false}
          type="button">
          <ArrowPrev />
        </button>
      </div>
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
      <div className="arrow__wrapper">
        <button
          {...props}
          className={'next arrow' + (currentSlide === slideCount - 1 ? ' disabled' : '')}
          aria-hidden="true"
          aria-disabled={currentSlide === slideCount - 1 ? true : false}
          type="button">
          <ArrowNext />
        </button>
      </div>
    );

    const settings = {
      infinite: false,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            infinite: true,
          },
        },
      ],
    };

    return (
      <section className="banner sec-bottom">
        <Slider {...settings}>
          {this.state.slides.map((slide, index) => {
            return <BannerItem key={index} title={slide.title} bannerUrl={slide.bannerUrl} />;
          })}
        </Slider>
        <div className="container">
          <div className="banner__wrapper">
            <span></span>
          </div>
        </div>
      </section>
    );
  }
}
