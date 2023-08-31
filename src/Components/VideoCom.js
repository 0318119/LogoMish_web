import React from "react";
import styles from '../pages/assest/css/home.module.css'
import one from '../pages/assest/images/videos/logomish1.mp4'
import Two from '../pages/assest/images/videos/logomish2.mp4'
import Three from '../pages/assest/images/videos/logomish3.mp4'
import four from '../pages/assest/images/videos/logomish4.mp4'




function VideoCom() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <video controls width="100%" playsInline loop muted autoPlay={true}>
                        <source src={one} type="video/mp4" />
                    </video>
                    <div className={`${styles.discription}`}>
                        <h2>BUILDING SUCCESS</h2>
                        <p>Set Your Mobile App Up for Success</p>
                        <p>Hybrid - iOS - Android</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <video controls width="100%" playsInline loop muted autoPlay={true}>
                        <source src={Two} type="video/mp4" />
                    </video>
                    <div className={`${styles.discription}`}>
                        <h2>RESPONSIVE DESIGN</h2>
                        <p>Leading Web Design Agency</p>
                        <p>Effective - User-Friendly - User-Experience</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <video controls width="100%" playsInline loop muted autoPlay={true}>
                        <source src={Three} type="video/mp4" />
                    </video>
                    <div className={`${styles.discription}`}>
                        <h2>GET FOUND ONLINE</h2>
                        <p>Localize Your SEO Efforts</p>
                        <p>Technical - On-Page - Off-Page</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <video controls width="100%" playsInline loop muted autoPlay={true}>
                        <source src={four} type="video/mp4" />
                    </video>
                    <div className={`${styles.discription}`}>
                        <h2>VIDEO PRODUCTION</h2>
                        <p>Bringing Your Vision to Life</p>
                        <p>Animation - 2d - 3d</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VideoCom;