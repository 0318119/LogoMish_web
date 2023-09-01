import React, { useEffect } from 'react'
import styles from './assets/css/Ser_Animation.module.css'
import Animation from './assets/images/Animation.webp'
import graphic from './assets/images/graphic.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Ser_Animation() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-between">
                <div className="col-lg-4 p-4">
                    <img src={Animation} alt="" data-aos="fade-left" data-aos-duration="1000" />
                </div>
                <div className="col-lg-7 d-flex flex-column justify-content-center  py-4 px-6">
                    <h6 className={styles.web_design_header} data-aos="fade-right" data-aos-duration="1000">VIDEO ANIMATION</h6>
                    <p className={styles.web_design_para} data-aos="fade-right" data-aos-duration="1000">
                        VIDEO ANIMATION
                        LogoMish provides high-quality video animation services that can help businesses bring their message to life in an engaging and dynamic way. </p>
                    <button className={styles.web_design_btn} data-aos="fade-right" data-aos-duration="1000">Read More</button>
                </div>
            </div>
            <div className="row d-flex justify-content-between">
                <div className="col-lg-7 d-flex flex-column justify-content-center py-4 px-2">
                    <h5 className={styles.web_design_header2} data-aos="fade-left" data-aos-duration="1000">GRAPHIC DESIGN</h5>
                    <p className={styles.web_design_para2} data-aos="fade-left" data-aos-duration="1000">Graphic design is the art of creating visual content to communicate information and ideas through various forms of media.</p>
                    <button className={styles.web_design_btn2} data-aos="fade-left" data-aos-duration="1000">Read More</button>
                </div>
                <div className="col-lg-4">
                    <img src={graphic} alt="" data-aos="fade-right" data-aos-duration="1000" />
                </div>
            </div>
        </div>
    )
}

export default Ser_Animation