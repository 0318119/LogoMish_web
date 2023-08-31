import React from 'react'
import styles from '../pages/assest/css/Footer.module.css'
import FooterlogoImg from '../assets/image/logo-mesh-final-logo.png'
import { Link } from 'react-router-dom'
import { AiOutlineMail as Main_Ico } from 'react-icons/ai'

function Footer() {
    return (
        <>
        <div className="container-fluid py-5 px-5 mt-1" id={styles.Footer_Main_Container}>
            <div className="row">
                <div className="col-lg-4 p-4">
                     <img src={FooterlogoImg} alt="" className={styles.Footer_Logo} />
                     <h3 className={styles.footer_heading}>FOLLOW US ON</h3>
                </div>
                <div className="col-lg-4 p-2">
                    <h3 className={styles.Footer_quick_header}>QUICK LINKS</h3>
                    <div className={styles.Quick_list}>
                        <Link to="" className={styles.Quick_links}>LOGO DESIGN</Link>
                        <Link to="" className={styles.Quick_links}>WEB DESIGN</Link>
                        <Link to="" className={styles.Quick_links}>MOBILE APP</Link>
                        <Link to="" className={styles.Quick_links}>GRAPHIC DESIGN</Link>
                        <Link to="" className={styles.Quick_links}>VIDEO ANIMATION</Link>
                    </div>
                </div>
                <div className="col-lg-4 p-2">
                    <h3 className={styles.Footer_about}>ABOUT US</h3>
                    <p className={styles.Footer_para}>We offer a comprehensive range of Digital Design Agency services that cater to your specific business needs</p>
                    <span className={styles.MAil}> <Main_Ico className={styles.Mail_ico} /> team@logomish.com</span>
                </div>
            </div>
           
        </div>
        <div className="container-fluid" id={styles.Copy_right}>
                <div className="row">
                <div className="col-lg-12 p-3 d-flex justify-content-center">
                    <p className={styles.copy_right_para}>COPYRIGHT © 2023 LOGOMISH LLC . ALL RIGHT RESERVED.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer