import {useState} from 'react'
import styles from '../Assets/css/header.module.css'
import { FiPhoneCall as PhoneICon} from 'react-icons/fi'
import { RxCross1 as MenuIcon } from 'react-icons/rx'
import ImgLogo from '../assets/image/logo-mesh-final-logo.png'
import box1 from '../assets/image/box1-1.png'
import metrix from '../assets/image/metrix.png'
import menImg from '../assets/image/head-man.png'
import boxBotton from '../assets/image/box-bottom.png'
import shapes from '../assets/image/shape3.png'
import StandImg from '../assets/image/new.png'
import { CgMenuLeft as MenuIcon } from 'react-icons/cg'
import ImgLogo from '../Assets/image/logo-mesh-final-logo.png'
import box1 from '../Assets/image/box1-1.png'
import metrix from '../Assets/image/metrix.png'
import menImg from '../Assets/image/head-man.png'
import boxBotton from '../Assets/image/box-bottom.png'
import shapes from '../Assets/image/shape3.png'
import StandImg from '../Assets/image/new.png'
import Slider from "react-slick";
// import { a } from 'react-router-dom'


function Header() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

  return (
    <>
    {/* <div className='container-fluid' id={styles.Main_Container}>
        <div className="container p-2">
         <div className="row">
            <div className="col-lg-12 d-flex justify-content-between">
                <div className={styles.Header}>
                          <img src={ImgLogo} alt="" className={styles.header_logo} />
                </div>
                      <div className='px-3 d-flex align-items-center justify-content-center'>
                    <span className='mx-1'><PhoneICon className={styles.HeaderIcon} /></span>
                          <span className={styles.Header_number}>(786) 305 7060</span>
                    <span><MenuIcon className={styles.MenuIcon} /></span>
                </div>
            </div>
         </div>
        </div>
          <Slider {...settings}>

        <div className="container">
            <div className='row'>
                <div className="col-lg-12 d-flex justify-content-center">
                    <div>
                       <img src={box1} alt="" />
                    </div>
                     <div className='d-flex flex-column' id={styles.Cont}>
                              <img src={menImg} alt="" className={styles.menhead} />   
                    <img src={StandImg} className={styles.std_imgs} />
                    <img src={metrix} alt="" className={styles.metrix} />
                    </div> 
                    <div className='d-flex  flex-column justify-content-between' id={styles.rightside}>
                              <img src={shapes} className={styles.Shapes}/>
                              <img src={boxBotton} alt="" />
                    </div>
                </div>
            </div>
        </div>
      </Slider>
    </div> */}
    <div className='container-fluid' id={styles.Header_Contact_Container}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-between p-3">
              <div className={styles.Header}>
                <img src={ImgLogo} alt="" className={styles.header_logo} />
              </div>
              <div className='px-3 d-flex align-items-center justify-content-between'>
                <span className='mx-1'><PhoneICon className={styles.HeaderIcon} /></span>
                <span className={styles.Header_number}>(786) 305 7060</span>
                <span><MenuIcon className={styles.MenuIcon} /></span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className='d-flex flex-column align-items-center' id={styles.Header_heading}>
                <a className={styles.Header_Link}>ABOUT</a>
                <a className={styles.Header_Link} >SERVICE</a>
                <a className={styles.Header_Link}>WORK</a>
                <a className={styles.Header_Link}>BLOG</a>
                <a className={styles.Header_Link}>PACKAGES</a>
                <a className={styles.Header_Link}>CONTACT</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
<<<<<<< HEAD
            <div className="col-lg-12 col-md-12 col-sm-12" >
              <div className='d-flex justify-content-center' id={styles.social_Links}>
              <Link to="/" className={styles.Social_link}>FACEBOOK</Link>
              <Link to="/" className={styles.Social_link}>INSTAGRAM</Link>
              <Link to="/" className={styles.Social_link}>TWITTER</Link>
              <Link to="/" className={styles.Social_link}>LINKEDIN</Link>
              <Link to="/" className={styles.Social_link}>PINTEREST</Link>
              <Link to="/" className={styles.Social_link}>YOUTUBE</Link>
            </div>
=======
            <div className="col-lg-12">
              <div className='p-4 d-flex  justify-content-between'>
                <a className={styles.Social_link}>FACEBOOK</a>
                <a className={styles.Social_link}>INSTAGRAM</a>
                <a className={styles.Social_link}>TWITTER</a>
                <a className={styles.Social_link}>LINKEDIN</a>
                <a className={styles.Social_link}>PINTEREST</a>
                <a className={styles.Social_link}>YOUTUBE</a>
              </div>
>>>>>>> 2bcf490e497ee3cbd239155058d906dce93d9064
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
<<<<<<< HEAD
              <div className='p-4 d-flex  justify-content-evenly' id={styles.social_Links}>
                <Link to="/" className={styles.contact_link}>team@logomish.com</Link>
                <Link to="/" className={styles.contact_link}>privacy policy</Link>
                <Link to="/" className={styles.contact_link}>accessibility</Link>
=======
              <div className='p-4 d-flex  justify-content-evenly'>
                <a className={styles.contact_link}>team@logomish.com</a>
                <a className={styles.contact_link}>privacy policy</a>
                <a className={styles.contact_link}>accessibility</a>
>>>>>>> 2bcf490e497ee3cbd239155058d906dce93d9064
              </div>
            </div>
          </div>
        </div>
    </div>
    </>

  )
}

export default Header