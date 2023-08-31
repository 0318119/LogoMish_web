import React, { useEffect } from 'react'
import styles from './assets/css/Ser_Mobile.module.css'
import Ser_Mobile_img from './assets/images/Mobile.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Mobile() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="container-fluid" id={styles.Ser_Mobile_Main_header}>
      <div className="row">
        <div className="col-lg-7 p-4 d-flex flex-column justify-content-center">
          <h4 className={styles.Ser_Mobile_Heading} data-aos="fade-left" data-aos-duration="1000">MOBILE APP</h4>
          <p className={styles.Ser_Mobile_para} data-aos="fade-left" data-aos-duration="1000">We specialize in providing top-notch mobile app development services to help our clients establish a strong mobile presence.Read More</p>
          <button className={styles.Ser_Mobile_btn} data-aos="fade-left" data-aos-duration="1000">Read More</button>
        </div>
        <div className="col-lg-4 p-4">
          <img src={Ser_Mobile_img} alt="" data-aos="fade-right" data-aos-duration="1000" />
        </div>
      </div>
    </div>
  )
}

export default Mobile