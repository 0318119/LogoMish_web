import React, {useEffect} from 'react'
import styles from './assets/css/webdesign.module.css'
import webdesin_Img from './assets/images/Webdesign.webp'
import Logodesign_img from './assets/images/LogoDesign.webp'
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
                  <h5 className={styles.web_design_header}>WEB DESIGN</h5>
                  <p className={styles.web_design_para}>Web design is the process of creating visually appealing and user-friendly websites that effectively communicate a brand’s message and values. We are offering these services:</p>
                  <button className={styles.web_design_btn}>Read More</button>
              </div>
              <div className="col-lg-4 px-5" data-aos="fade-right" data-aos-duration="1000">
                 <img src={webdesin_Img} alt="" />
              </div>
          </div>
          <div className="row d-flex justify-content-between">
              <div className="col-lg-4" data-aos="fade-left" data-aos-duration="1000">
                  <img src={Logodesign_img} alt="" />
              </div>
              <div className="col-lg-7 d-flex flex-column justify-content-center py-4 px-2" data-aos="fade-right" data-aos-duration="1000">
                  <h5 className={styles.web_design_header2}>LOGO DESIGN</h5>
                  <p className={styles.web_design_para2}>Web design is the process of creating visually appealing and user-friendly websites that effectively communicate a brand’s message and values. We are offering these services:</p>
                  <button className={styles.web_design_btn2}>Read More</button>
              </div>
          </div>
    </div>
  )
}

export default WebDesign