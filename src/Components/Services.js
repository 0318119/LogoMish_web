// import React from 'react'
import services from '../pages/assest/css/home.module.css'
import serviceIMG from '../pages/assest/images/Devops.webp'
import web_dev from '../pages/assest/images/Icons/web_dev.webp'
import SMM from '../pages/assest/images/Icons/SMM.avi'
import Applicationsetting from '../pages/assest/images/Icons/Application-setting.avi'
import Designidea from '../pages/assest/images/Icons/Design-idea.avi'
import Layer from '../pages/assest/images/Icons/Layer.avi'
import moviecamera from '../pages/assest/images/Icons/movie-camera.avi'
import Penciltools from '../pages/assest/images/Icons/Pencil-tools.avi'
import SEOoptimization from '../pages/assest/images/Icons/SEO-optimization.avi'
import rightArrow from '../pages/assest/images/Icons/rightArrow.avi'

const Services = () => {
    return (
        <>

        <section className='mt-5'>
            <div className="container">
                <div className='row'>
                    <div className="col-md-6">
                        <div className={`${services.logomisAimBox}`}>
                        <img src={serviceIMG} alt="Service Above" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className={`${services.logomisAimBox}`}>
                        <h2 className=''>OUR AIM TO FIX YOUR DEVOPS INFRA!</h2>
                        <p className=''>We boast a team of top-notch DevOps infrastructure engineers who excel in their field. Our primary objective with DevOps Infrastructure is to establish a collaborative and automated environment that facilitates swift software development, continuous integration, and frequent software releases. Throughout this process, we prioritize stability, scalability, and security to ensure optimal outcomes. By leveraging DevOps Infra, organizations can streamline their software delivery processes, improve efficiency, and enhance the overall quality of their software products and services.</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-12">
                        <div className={`${services.servicesSection}`}>
                            <marquee className={`${services.textAnimations}`}>SERVICES</marquee>
                            <p className={`${services.homeServciesDes}`}>
                                We specialize in transforming your ideas into reality and amplifying your brand’s digital presence. 
                                Our comprehensive range of digital media marketing services is designed to cater to all your digital needs.
                                We offer a comprehensive range of digital marketing services, covering everything from development to social
                                media branding. Our expertise and experience ensure that we deliver top-notch solutions tailored to your unique 
                                needs. Trust us to be your partner in conquering the digital landscape and achieving remarkable success.
                            </p>
                        </div>
                        <div className={`${services.servicesTabsSection}`}>
                            <div className={`${services.servicesSecInnerBox}`}>
                                <div className={`${services.servicesleftBox}`}>
                                    <img src={web_dev} alt="" />
                                    <h5>WEB DESIGN</h5>
                                </div>
                                <img className={`${services.rightArrowImgServices}`} src={rightArrow} alt="" />
                            </div>
                            <div className={`${services.servicesSecInnerBox}`}>
                                <div className={`${services.servicesleftBox}`}>
                                    <img src={SMM} alt="" />
                                    <h5>LOGO DESIGN</h5>
                                </div>
                                <img className={`${services.rightArrowImgServices}`} src={rightArrow} alt="" />
                            </div>
                            <div className={`${services.servicesSecInnerBox}`}>
                                <div className={`${services.servicesleftBox}`}>
                                    <img src={Applicationsetting} alt="" />
                                    <h5>MOBILE APP</h5>
                                </div>
                                <img className={`${services.rightArrowImgServices}`} src={rightArrow} alt="" />
                            </div>
                            <div className={`${services.servicesSecInnerBox}`}>
                                <div className={`${services.servicesleftBox}`}>
                                    <img src={Designidea} alt="" />
                                    <h5>GRAPIC DESIGN</h5>
                                </div>
                                <img className={`${services.rightArrowImgServices}`} src={rightArrow} alt="" />
                            </div>
                            <div className={`${services.servicesSecInnerBox}`}>
                                <div className={`${services.servicesleftBox}`}>
                                    <img src={Layer} alt="" />
                                    <h5>VIDEO ANIMATION</h5>
                                </div>
                                <img className={`${services.rightArrowImgServices}`} src={rightArrow} alt="" />
                            </div>
                            <div className={`${services.servicesSecInnerBox}`}>
                                <div className={`${services.servicesleftBox}`}>
                                    <img src={moviecamera} alt="" />
                                    <h5>UI/UX DESIGN</h5>
                                </div>
                                <img className={`${services.rightArrowImgServices}`} src={rightArrow} alt="" />
                            </div>
                            <div className={`${services.servicesSecInnerBox}`}>
                                <div className={`${services.servicesleftBox}`}>
                                    <img src={Penciltools} alt="" />
                                    <h5>SEO</h5>
                                </div>
                                <img className={`${services.rightArrowImgServices}`} src={rightArrow} alt="" />
                            </div>
                            <div className={`${services.servicesSecInnerBox}`}>
                                <div className={`${services.servicesleftBox}`}>
                                    <img src={SEOoptimization} alt="" />
                                    <h5>SMM</h5>
                                </div>
                                <img className={`${services.rightArrowImgServices}`} src={rightArrow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default Services