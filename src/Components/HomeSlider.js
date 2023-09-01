import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import style from '../pages/assest/css/home.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import one from '../pages/assest/images/sliders_images/new.avi'
import two from '../pages/assest/images/sliders_images/head-man.avi'
import three from '../pages/assest/images/sliders_images/box1-1.avi'
import four from '../pages/assest/images/sliders_images/box-bottom.avi'
import five from '../pages/assest/images/sliders_images/shape3.avi'
import six from '../pages/assest/images/sliders_images/metrix.avi'
import seven from '../pages/assest/images/sliders_images/glow-bottom.avi'
// ===============================================================
import scd_slide_one from '../pages/assest/images/sliders_images/logo1-1.avi'
import scd_slide_two  from  '../pages/assest/images/sliders_images/women-2.avi'
import scd_slide_three from '../pages/assest/images/sliders_images/logo6-1.avi'
import scd_slide_four from '../pages/assest/images/sliders_images/lavender-1.avi'
import scd_slide_five from '../pages/assest/images/sliders_images/butterfly1.avi'



import AOS from 'aos';
import 'aos/dist/aos.css';





const HomeSlider = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <>
    <section>
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-12" id={`${style.homeSLiderBg}`}>
                    {/* <div className={`${style.homeSLiderMainBox}`}> */}
                        <SimpleSlider />
                    {/* </div> */}
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
        // <div className={`${style.homeSLiderBg}`}>
          <Slider {...settings}>
            <div className={`${style.homeSliderWholeBox}`}>
                <div className={`${style.homeSliderBox}`} id={`${style.firstSlide}`}>
                    <div className="">
                        <img src={two} alt=""  className={`${style.one}`}/>
                        <img src={one} alt="" className={`${style.two}`}/>
                        <img src={five} alt=""  className={`${style.five}`}/>
                        <img src={three} alt="" className={`${style.three}`}/>
                        <img src={seven} alt="" className={`${style.blinkerOne}`}/>
                        <img src={seven} alt="" className={`${style.blinkerTwo}`}/>
                        <img src={four} alt="" className={`${style.four}`}/>
                        <img src={seven} alt="" className={`${style.blinkerthree}`}/>
                        <img src={six} alt=""  className={`${style.six}`}/>
                    </div>
                </div>
                <div className={`${style.contentBox1}`}>
                  <div className={`${style.contentBox1FlexTagline}`}>
                      <span className={`${style.tagLine}`}>We are</span>
                  </div>
                  <div className={`${style.contentBox1FlexTagline}`}>
                    <h4 className={`${style.text}`}>Devops Services agency</h4>
                  </div>
                </div>
            </div>

            <div className={`${style.homeSliderWholeBox}`}>
                <div className={`${style.homeSliderBox}`} id={`${style.scdSlide}`}>
                    <div className={`${style.multipleImages}`}>
                      <img src={scd_slide_four} alt="" className={`${style.four}`} />
                      <img src={scd_slide_one} alt="" className={`${style.one}`} />
                      <img src={scd_slide_three} alt="" className={`${style.three}`} />
                      <img src={scd_slide_two} alt="" className={`${style.two}`} />
                      <img src={scd_slide_five} alt="" className={`${style.five}`} />
                    </div>
                </div>
                {/* <div className={`${style.contentBox1}`}>
                  <div className={`${style.contentBox1FlexTagline}`}>
                      <span className={`${style.tagLine}`}>We are</span>
                  </div>
                  <div className={`${style.contentBox1FlexTagline}`}>
                    <h4 className={`${style.text}`}>Devops Services agency</h4>
                  </div>
                </div> */}
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
            {/* </div> */}
          </Slider>
      );
    }
  }
export default HomeSlider