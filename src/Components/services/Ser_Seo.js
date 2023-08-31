import React, { useEffect } from 'react'
import styles from './assets/css/Ser_Seo.module.css'
import SEO_Img from './assets/images/SEO.webp'
import SMM_img from './assets/images/SMM.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'

function WebDesign() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-around">
                <div className="col-lg-7 d-flex flex-column justify-content-center  py-4 px-2" data-aos="fade-left" data-aos-duration="1000">
                    <h5 className={styles.web_design_header}>SEO</h5>
                    <p className={styles.web_design_para}>We provide comprehensive SEO services to help businesses improve their online visibility and attract more organic traffic to their website. </p>
                    <button className={styles.web_design_btn}>Read More</button>
                </div>
                <div className="col-lg-4 px-5" data-aos="fade-right" data-aos-duration="1000">
                    <img src={SEO_Img} alt="" />
                </div>
            </div>
            <div className="row d-flex justify-content-between">
                <div className="col-lg-4" data-aos="fade-left" data-aos-duration="1000">
                    <img src={SMM_img} alt="" />
                </div>
                <div className="col-lg-7 d-flex flex-column justify-content-center py-4 px-2" data-aos="fade-right" data-aos-duration="1000">
                    <h5 className={styles.web_design_header2}>SMM</h5>
                    <p className={styles.web_design_para2}>LogoMish provides exceptional social media management services to help businesses streamline their social media presence and grow their online following. </p>
                    <button className={styles.web_design_btn2}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default WebDesign