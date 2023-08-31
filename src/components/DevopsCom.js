import React, { useEffect } from 'react'
import logo from '../assets/images/logo.avi'
// import React from 'react'
import DevOps_style from '../pages/assest/css/home.module.css'
import Demo from '../pages/assest/images/videos/demo_video.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css';

const DevopsCom = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <>
    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
                    <div className={`${DevOps_style.devOpsDesBox}`}>
                        <h5>GET DEVOPS SERVICES FROM LOGOMISH.</h5>
                        <p>
                            We are Digital Marketing & DevOps consulting company, specialize in designing and strategizing your brands to establish them as market leaders, enabling you to bask in the spotlight of the digital media and enjoy the benefits it brings. we are the ultimate problem solvers for all your digital challenges.
                        </p>
                        <span>If you want free DevOps Consulting Services so contact us!</span>
                    </div>
                </div>

                <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
                    <div className={`${DevOps_style.devOpsDesBox} ${DevOps_style.devOpsImg}`}>
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div>
                        <video controls width="100%" playsInline loop muted autoPlay={true}>
                            <source src={Demo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default DevopsCom