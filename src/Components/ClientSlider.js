import React, { Component } from "react";
import Slider from "react-slick";
import Client_style from '../pages/assest/css/home.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from '../pages/assest/images/sliders_images/adidas.avi'
import two from '../pages/assest/images/sliders_images/Asset.avi'
import three from '../pages/assest/images/sliders_images/diageo.avi'
import four from '../pages/assest/images/sliders_images/Electrolux_logo_master_black_CMYK.avi'
import five from '../pages/assest/images/sliders_images/flickpla.avi'
import six from '../pages/assest/images/sliders_images/Genius-logo-blanco.avi'
import seven from '../pages/assest/images/sliders_images/Genius-logo-blanco.avi'
import eight from '../pages/assest/images/sliders_images/loccitane.avi'
import nine from '../pages/assest/images/sliders_images/novartis.avi'
import ten from '../pages/assest/images/sliders_images/petrobras-logo.avi'
import eleven from '../pages/assest/images/sliders_images/reebok.avi'
import twelve from '../pages/assest/images/sliders_images/ypf-logo.avi'



const ClientSlider = () => {
    return (
        <>
            <section className={`${Client_style.ClientSliderSection}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className={`${Client_style.mainBoxofClientSlider}`}>
                                <h4>CLIENTELE</h4>
                                <span>Trust is cultivated through a deep comprehension of partners’ requirements and a shared understanding. We take pride in our privileged collaborations with exceptional partners spanning diverse industries, each presenting distinctive challenges and objectives. Our team of trailblazers thrives on pushing boundaries and delivering remarkable outcomes that set our clients apart from their competitors.</span>
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
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                      slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                      slidesToShow: 1,
                    }
                },
              ]
        };
        return (
            <div className={`${Client_style.clientSlidingBox}`}>
                <Slider {...settings}>
                    <div className={`${Client_style.innerclientSlidingBox}`}>
                        <img src={one} alt="" />
                    </div>
                    <div className={`${Client_style.innerclientSlidingBox}`}>
                        <img src={two} alt="" />
                    </div>
                    <div className={`${Client_style.innerclientSlidingBox}`}>
                        <img src={three} alt="" />
                    </div>
                    <div className={`${Client_style.innerclientSlidingBox}`}>
                        <img src={four} alt="" />
                    </div>
                    <div className={`${Client_style.innerclientSlidingBox}`}>
                        <img src={five} alt="" />
                    </div>
                    <div className={`${Client_style.innerclientSlidingBox}`}>
                        <img src={six} alt="" />
                    </div>
                    <div className={`${Client_style.innerclientSlidingBox}`}>
                        <img src={seven} alt="" />
                    </div>
                    <div className={`${Client_style.innerclientSlidingBox}`}>
                        <img src={eight} alt="" />
                    </div>
                    <div className={`${Client_style.innerclientSlidingBox}`}>
                        <img src={nine} alt="" />
                    </div>
                    <div className={`${Client_style.innerclientSlidingBox}`}>
                        <img src={ten} alt="" />
                    </div>
                    <div className={`${Client_style.innerclientSlidingBox}`}>
                        <img src={eleven} alt="" />
                    </div>
                    <div className={`${Client_style.innerclientSlidingBox}`}>
                        <img src={twelve} alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}

export default ClientSlider