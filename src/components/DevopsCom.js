import React from 'react'
import logo from '../assets/images/logo.avi'
import DevOps_style from '../pages/assest/css/home.module.css'

const DevopsCom = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className={`${DevOps_style.devOpsDesBox}`}>
                        <h5>GET DEVOPS SERVICES FROM LOGOMISH.</h5>
                        <p>
                        We are Digital Marketing & DevOps consulting company, specialize in designing and strategizing your brands to establish them as market leaders, enabling you to bask in the spotlight of the digital media and enjoy the benefits it brings. we are the ultimate problem solvers for all your digital challenges.
                        </p>
                        <span>If you want free DevOps Consulting Services so contact us!</span>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className={`${DevOps_style.devOpsDesBox} ${DevOps_style.devOpsImg}`}>
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default DevopsCom