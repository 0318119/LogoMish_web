import React from 'react'
import plot from '../pages/assest/css/home.module.css'
import { Container } from 'react-bootstrap'
import About_Video from '../pages/assest/images/videos/About_Video.mp4'


function AboutVideoSection() {
  return (
    <>
   
          <div className='{${plot.AboutVideoSection}}'>
            <video src={About_Video} width="100%" height= "100%" controls />
          </div>
        
  

    </>
  )
}

export default AboutVideoSection