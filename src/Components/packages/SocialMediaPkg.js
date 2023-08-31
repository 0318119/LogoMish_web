import React from 'react'
import styles from '../packages/assets/css/LogoDesignPkg.module.css'
import PackageLogo from '../../pages/assest/images/package_log.png'
import { BiCheck as CheckTick } from 'react-icons/bi'
import { BsFillTelephoneFill as ContactIcon } from 'react-icons/bs'

function SocialMediaPkg() {
    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-lg-4">
                    <div className={styles.logo_design_bronze}>
                        <div className={styles.Package_header}>
                            <img src={PackageLogo} alt="" className={styles.PackageLogo} />
                            <span className='d-flex flex-column align-items-end p-2'>
                                <h3 className={styles.logo_design_price}>$199.00</h3>
                                <p className={styles.logo_design_para}>Social Media Website Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>
                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />1-Page Website</li>
                                <li> <CheckTick className={styles.CheckTick} />Customized Design (basic)</li>
                                <li> <CheckTick className={styles.CheckTick} />WordPress</li>
                                <li> <CheckTick className={styles.CheckTick} />Contact Form</li>
                                <li> <CheckTick className={styles.CheckTick} />1 Banner Design (basic)</li>
                                <li> <CheckTick className={styles.CheckTick} />3 Revisions</li>
                                <li> <CheckTick className={styles.CheckTick} />Dedicated Project Manager</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Satisfaction Guarantee</li>
                            </ul>
                        </div>
                        <div className='p-3 d-flex justify-content-center'>
                            <span className='d-flex align-items-center' id={styles.contactBreak}>
                                <ContactIcon className={styles.ContactIcon} />
                                <span className={styles.Contact_para}>Speak with  us <br />
                                    +1786 305 7080
                                </span>
                            </span>
                            <span className='d-flex align-items-center'>
                                <span className={styles.Contact_para}>Want to discuss? <br />
                                    Live Chat Now
                                </span>
                            </span>
                        </div>

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={styles.logo_design_bronze}>
                        <div className={styles.Package_header}>
                            <img src={PackageLogo} alt="" className={styles.PackageLogo} />
                            <span className='d-flex flex-column align-items-end p-2'>
                                <h3 className={styles.logo_design_price}>$399.00</h3>
                                <p className={styles.logo_design_para}>Standard Website Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>
                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />Up to 3-Page Website</li>
                                <li> <CheckTick className={styles.CheckTick} />Customized Design (Standard)</li>
                                <li> <CheckTick className={styles.CheckTick} />WordPress</li>
                                <li> <CheckTick className={styles.CheckTick} />Mobile Responsive</li>
                                <li> <CheckTick className={styles.CheckTick} />Hover Effects</li>
                                <li> <CheckTick className={styles.CheckTick} />3 Banner Design (Standard)</li>
                                <li> <CheckTick className={styles.CheckTick} />Stock Photos</li>
                                <li> <CheckTick className={styles.CheckTick} />Contact Form</li>
                                <li> <CheckTick className={styles.CheckTick} />6 Revisions</li>
                                <li> <CheckTick className={styles.CheckTick} />Complete Design and Development</li>
                                <li> <CheckTick className={styles.CheckTick} />Dedicated Project Manager</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Satisfaction Guarantee</li>
                            </ul>
                        </div>
                        <div className='p-3 d-flex justify-content-center'>
                            <span className='d-flex align-items-center' id={styles.contactBreak}>
                                <ContactIcon className={styles.ContactIcon} />
                                <span className={styles.Contact_para}>Speak with  us <br />
                                    +1786 305 7080
                                </span>
                            </span>
                            <span className='d-flex align-items-center'>
                                <span className={styles.Contact_para}>Want to discuss? <br />
                                    Live Chat Now
                                </span>
                            </span>
                        </div>

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={styles.logo_design_bronze}>
                        <div className={styles.Package_header}>
                            <img src={PackageLogo} alt="" className={styles.PackageLogo} />
                            <span className='d-flex flex-column align-items-end p-2'>
                                <h3 className={styles.logo_design_price}>$749.00</h3>
                                <p className={styles.logo_design_para}>Professional Website Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>

                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />Up to 5-Page Website</li>
                                <li> <CheckTick className={styles.CheckTick} />Customized Design (Professional)</li>
                                <li> <CheckTick className={styles.CheckTick} />WordPress</li>
                                <li> <CheckTick className={styles.CheckTick} />CMS (Content Management System)</li>
                                <li> <CheckTick className={styles.CheckTick} />5 Banner Design (Professional)</li>
                                <li> <CheckTick className={styles.CheckTick} />Sliding Banners</li>
                                <li> <CheckTick className={styles.CheckTick} />Hover Effects</li>
                                <li> <CheckTick className={styles.CheckTick} />Mobile Responsive</li>
                                <li> <CheckTick className={styles.CheckTick} />Stock Photos</li>
                                <li> <CheckTick className={styles.CheckTick} />Contact Form</li>
                                <li> <CheckTick className={styles.CheckTick} />Search Engine Submission</li>
                                <li> <CheckTick className={styles.CheckTick} />9 Revisions</li>
                                <li> <CheckTick className={styles.CheckTick} />Complete Design and Development</li>
                                <li> <CheckTick className={styles.CheckTick} />Dedicated Project Manager</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Satisfaction Guarantee</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Ownership Rights</li>
                            </ul>
                        </div>
                        <div className='p-3 d-flex justify-content-center'>
                            <span className='d-flex align-items-center' id={styles.contactBreak}>
                                <ContactIcon className={styles.ContactIcon} />
                                <span className={styles.Contact_para}>Speak with  us <br />
                                    +1786 305 7080
                                </span>
                            </span>
                            <span className='d-flex align-items-center'>
                                <span className={styles.Contact_para}>Want to discuss? <br />
                                    Live Chat Now
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-lg-4">
                    <div className={styles.logo_design_bronze}>
                        <div className={styles.Package_header}>
                            <img src={PackageLogo} alt="" className={styles.PackageLogo} />
                            <span className='d-flex flex-column align-items-end p-2'>
                                <h3 className={styles.logo_design_price}>$1399.00</h3>
                                <p className={styles.logo_design_para}>Basic Website Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>
                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li> <CheckTick className={styles.CheckTick} />Up to 7-Page Website (Unique)</li>
                                <li> <CheckTick className={styles.CheckTick} />Custom WordPress Development</li>
                                <li> <CheckTick className={styles.CheckTick} />Stock Images</li>
                                <li> <CheckTick className={styles.CheckTick} />7 Banner Designs (Custom)</li>
                                <li> <CheckTick className={styles.CheckTick} />Sliding Banners</li>
                                <li> <CheckTick className={styles.CheckTick} />Hover Effects</li>
                                <li> <CheckTick className={styles.CheckTick} />Content Management System</li>
                                <li> <CheckTick className={styles.CheckTick} />Online Appointment/Booking/Scheduling Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Search Engine Submission</li>
                                <li> <CheckTick className={styles.CheckTick} />12 Revisions</li>
                                <li> <CheckTick className={styles.CheckTick} />Complete Design and Development</li>
                                <li> <CheckTick className={styles.CheckTick} />Stock Images</li>
                                <li> <CheckTick className={styles.CheckTick} />Interactive Hover Effects</li>
                                <li> <CheckTick className={styles.CheckTick} />18 Revisions</li>
                                <li> <CheckTick className={styles.CheckTick} />Content Management System (WordPress)</li>
                                <li> <CheckTick className={styles.CheckTick} />Online Appointment/Booking/Scheduling Integration (Optional)</li>
                                <li> <CheckTick className={styles.CheckTick} />Online Payment Integration (Optional)</li>
                                <li> <CheckTick className={styles.CheckTick} />Custom Contact Form (Optional)</li>
                                <li> <CheckTick className={styles.CheckTick} />Newsletter Sign up (Optional)</li>
                                <li> <CheckTick className={styles.CheckTick} />Social Media Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Search Bar</li>
                                <li> <CheckTick className={styles.CheckTick} />Google Friendly Sitemap</li>
                                <li> <CheckTick className={styles.CheckTick} />Complete Design and Development</li>
                                <li> <CheckTick className={styles.CheckTick} />Dedicated Project Manager</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Satisfaction Guarantee</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Ownership Rights</li>
                            </ul>
                        </div>
                        <div className='p-3 d-flex justify-content-center'>
                            <span className='d-flex align-items-center' id={styles.contactBreak}>
                                <ContactIcon className={styles.ContactIcon} />
                                <span className={styles.Contact_para}>Speak with  us <br />
                                    +1786 305 7080
                                </span>
                            </span>
                            <span className='d-flex align-items-center'>
                                <span className={styles.Contact_para}>Want to discuss? <br />
                                    Live Chat Now
                                </span>
                            </span>
                        </div>

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={styles.logo_design_bronze}>
                        <div className={styles.Package_header}>
                            <img src={PackageLogo} alt="" className={styles.PackageLogo} />
                            <span className='d-flex flex-column align-items-end p-2'>
                                <h3 className={styles.logo_design_price}>$1749.00</h3>
                                <p className={styles.logo_design_para}>Exclusive Web Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>
                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />Up to 10-Page Website (Unique)</li>
                                <li> <CheckTick className={styles.CheckTick} />Custom, Dynamic, and Interactive Design</li>
                                <li> <CheckTick className={styles.CheckTick} />Custom WordPress Development</li>
                                <li> <CheckTick className={styles.CheckTick} />Captivating Sliding Banners</li>
                                <li> <CheckTick className={styles.CheckTick} />Stock Images</li>
                                <li> <CheckTick className={styles.CheckTick} />10 Banner Design (Custom)</li>
                                <li> <CheckTick className={styles.CheckTick} />Interactive Hover Effects</li>
                                <li> <CheckTick className={styles.CheckTick} />15 Revisions</li>
                                <li> <CheckTick className={styles.CheckTick} />Content Management System (WordPress)</li>
                                <li> <CheckTick className={styles.CheckTick} />Online Appointment/Booking/Scheduling Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Google Friendly Sitemap</li>
                                <li> <CheckTick className={styles.CheckTick} />Search Engine Submission</li>
                                <li> <CheckTick className={styles.CheckTick} />Complete Design and Development</li>
                                <li> <CheckTick className={styles.CheckTick} />Dedicated Project Manager</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Satisfaction Guarantee</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Ownership Rights</li>
                            </ul>
                        </div>
                        <div className='p-3 d-flex justify-content-center'>
                            <span className='d-flex align-items-center' id={styles.contactBreak}>
                                <ContactIcon className={styles.ContactIcon} />
                                <span className={styles.Contact_para}>Speak with  us <br />
                                    +1786 305 7080
                                </span>
                            </span>
                            <span className='d-flex align-items-center'>
                                <span className={styles.Contact_para}>Want to discuss? <br />
                                    Live Chat Now
                                </span>
                            </span>
                        </div>

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={styles.logo_design_bronze}>
                        <div className={styles.Package_header}>
                            <img src={PackageLogo} alt="" className={styles.PackageLogo} />
                            <span className='d-flex flex-column align-items-end p-2'>
                                <h3 className={styles.logo_design_price}>$3199.00</h3>
                                <p className={styles.logo_design_para}>Professional Website Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>

                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />10-20-Page Website (Unique)</li>
                                <li> <CheckTick className={styles.CheckTick} />Custom, Dynamic, and High-end Design</li>
                                <li> <CheckTick className={styles.CheckTick} />Custom WordPress Development</li>
                                <li> <CheckTick className={styles.CheckTick} />Attractive Sliding Banners</li>
                                <li> <CheckTick className={styles.CheckTick} />Up to 20 Custom Banner Design</li>
                                <li> <CheckTick className={styles.CheckTick} />Stock Images</li>
                                <li> <CheckTick className={styles.CheckTick} />Interactive Hover Effects</li>
                                <li> <CheckTick className={styles.CheckTick} />18 Revisions</li>
                                <li> <CheckTick className={styles.CheckTick} />Content Management System (WordPress)</li>
                                <li> <CheckTick className={styles.CheckTick} />Online Appointment/Booking/Scheduling Integration (Optional)</li>
                                <li> <CheckTick className={styles.CheckTick} />Online Payment Integration (Optional)</li>
                                <li> <CheckTick className={styles.CheckTick} />Custom Contact Form (Optional)</li>
                                <li> <CheckTick className={styles.CheckTick} />Newsletter Sign up (Optional)</li>
                                <li> <CheckTick className={styles.CheckTick} />Social Media Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Search Bar</li>
                                <li> <CheckTick className={styles.CheckTick} />Google Friendly Sitemap</li>
                                <li> <CheckTick className={styles.CheckTick} />Search Engine Submission</li>
                                <li> <CheckTick className={styles.CheckTick} />Complete Design and Development</li>
                                <li> <CheckTick className={styles.CheckTick} />Dedicated Project Manager</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Satisfaction Guaranteer</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Ownership Rights</li>
                            </ul>
                        </div>
                        <div className='p-3 d-flex justify-content-center'>
                            <span className='d-flex align-items-center' id={styles.contactBreak}>
                                <ContactIcon className={styles.ContactIcon} />
                                <span className={styles.Contact_para}>Speak with  us <br />
                                    +1786 305 7080
                                </span>
                            </span>
                            <span className='d-flex align-items-center'>
                                <span className={styles.Contact_para}>Want to discuss? <br />
                                    Live Chat Now
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaPkg