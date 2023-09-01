import React from 'react'
import styles from './assets/css/Ser_Video.module.css'
import Video from '../../components/services/assets/images/Services_Dark.mp4'

function Ser_Video() {
  return (
    <div className="container mt-2">
        <div className="row">
            <div className="col-lg-12">
                <video controls width='100%' playsInline loop muted autoPlay={true}>
                        <source src={Video} type='Video/mp4' />
                </video>
            </div>
            <div className="col-lg-12 d-flex justify-content-center py-5 px-2">
              <p className={styles.Vd_Para}>We are a creative agency dedicated to providing our clients with stunning and functional designs. With a focus on personalized solutions, we work closely with each client to understand their unique needs and create designs that are tailored to their brand. Our team of experienced professionals offers a comprehensive range of services which are listed below:</p>
            </div>
        </div>
 

    </div>
  )
}

export default Ser_Video 