import React, { useEffect } from 'react'
import styles from './assets/css/Uidesign.module.css'
import UIdesign_img from './assets/images/UIdesign.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'

function UIDesign() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="container-fluid" id={styles.Ser_Mobile_Main_header}>
            <div className="row d-flex justify-content-between">
                <div className="col-lg-4 p-4">
                    <img src={UIdesign_img} alt="" data-aos="fade-right" data-aos-duration="1000" />
                </div>
                <div className="col-lg-7 p-4 d-flex flex-column justify-content-center">
                    <h4 className={styles.Ser_Mobile_Heading} data-aos="fade-left" data-aos-duration="1000">UI/UX DESIGN</h4>
                    <p className={styles.Ser_Mobile_para} data-aos="fade-left" data-aos-duration="1000">LogoMish offers comprehensive UI/UX design services to help businesses develop intuitive and user-friendly interfaces for their digital products. </p>
                    <button className={styles.Ser_Mobile_btn} data-aos="fade-left" data-aos-duration="1000">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default UIDesign