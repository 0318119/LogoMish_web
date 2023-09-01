import React from 'react'
import About_Video from '../pages/assest/images/videos/About_Video.mp4'


function AboutVideoSection() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 pt-1 '>
            <video controls width="100%" playsInline loop muted autoPlay={true}>
              <source src={About_Video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

    </>
  )
}

export default AboutVideoSection