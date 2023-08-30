import React, { Component } from "react";
import Slider from "react-slick";
import style from '../pages/assest/css/home.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import one from '../pages/assest/images/sliders_images/new.avi'
import two from '../pages/assest/images/sliders_images/head-man.avi'
import three from '../pages/assest/images/sliders_images/box1-1.avi'
import four from '../pages/assest/images/sliders_images/box-bottom.avi'




const HomeSlider = () => {
  return (
    <>
    <section>
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-12">
                    <div className={`${style.homeSLiderMainBox}`}>
                        <SimpleSlider />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
export class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        centerMode: true,
        arrows: false,
        className: "homeSlider",
        padding: false,
        centerPadding: "0",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className={`${style.homeSLiderBg}`}>
          <Slider {...settings}>
            <div className={`${style.homeSliderWholeBox}`}>
                <div className={`${style.homeSliderImageBox}`} id={`${style.firstSlide}`}>
                    <img src={two} alt=""  className={`${style.one}`}/>
                    <img src={one} alt="" className={`${style.two}`}/>
                    <img src={three} alt="" className={`${style.three}`}/>
                    <img src={four} alt="" className={`${style.four}`}/>
                </div>

                <div className={`${style.homeSLiderContent}`}></div>
            </div>

            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      );
    }
  }
export default HomeSlider