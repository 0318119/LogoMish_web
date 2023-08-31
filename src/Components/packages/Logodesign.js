import React from 'react'
import styles from '../packages/assets/css/LogoDesignPkg.module.css'
import PackageLogo from '../../pages/assest/images/package_log.png'
import { BiCheck as CheckTick } from 'react-icons/bi'
import { BsFillTelephoneFill as ContactIcon } from 'react-icons/bs'

function Logodesign() {
    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-lg-4">
                    <div className={styles.logo_design_bronze}>
                        <div className={styles.Package_header}>
                            <img src={PackageLogo} alt="" className={styles.PackageLogo} />
                            <span className='d-flex flex-column align-items-end p-2'>
                                <h3 className={styles.logo_design_price}>$80.00</h3>
                                <p className={styles.logo_design_para}>Bronze Logo Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>
                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} /> 2 Logo Design Conceptsc</li>
                                <li> <CheckTick className={styles.CheckTick} />1 Dedicated Designer</li>
                                <li> <CheckTick className={styles.CheckTick} />3 Revisions</li>
                                <li> <CheckTick className={styles.CheckTick} /> 24 Hours Turn Around Time</li>
                                <li> <CheckTick className={styles.CheckTick} /> Final Files (JPEG, PNG, PDF)</li>
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
                                <h3 className={styles.logo_design_price}>$150.00</h3>
                                <p className={styles.logo_design_para}>Silver Logo Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>
                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} /> 4 Logo Design Concept</li>
                                <li> <CheckTick className={styles.CheckTick} />2 Dedicated Designers</li>
                                <li> <CheckTick className={styles.CheckTick} />5 Revisions</li>
                                <li> <CheckTick className={styles.CheckTick} /> 24 Hours Turn Around Time</li>
                                <li> <CheckTick className={styles.CheckTick} /> Final Files (JPEG, PNG, PDF)</li>
                                <li> <CheckTick className={styles.CheckTick} />Dedicated Project Manager</li>
                                <li> <CheckTick className={styles.CheckTick} /> 100% Unique Concepts</li>
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
                                <h3 className={styles.logo_design_price}>$250.00</h3>
                                <p className={styles.logo_design_para}>Gold Logo Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>

                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} /> 8 Logo Design Concepts</li>
                                <li> <CheckTick className={styles.CheckTick} />Business Card Design</li>
                                <li> <CheckTick className={styles.CheckTick} />3 Dedicated Designers</li>
                                <li> <CheckTick className={styles.CheckTick} /> 7 Revisions</li>
                                <li> <CheckTick className={styles.CheckTick} /> 24-48 hours Turn Around Time</li>
                                <li> <CheckTick className={styles.CheckTick} /> Final Files (JPEG, PNG, PDF)</li>
                                <li> <CheckTick className={styles.CheckTick} />Dedicated Project Manager</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Satisfaction Guarantee</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Unique Concepts</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Unique Concepts</li>
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
                <div className="col-lg-6">
                    <div className={styles.logo_design_bronze}>
                        <div className={styles.Package_header}>
                            <img src={PackageLogo} alt="" className={styles.PackageLogo2} />
                            <span className='d-flex flex-column align-items-end p-2'>
                                <h3 className={styles.logo_design_price}>$400.00</h3>
                                <p className={styles.logo_design_para}>Platinum Logo Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn2}>Order Now</button>
                        </div>

                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />10 Logo Design Concepts</li>
                                <li> <CheckTick className={styles.CheckTick} />Stationery Design (Business card design, Letterhead Design, Envelope Design)</li>
                                <li> <CheckTick className={styles.CheckTick} />4 Dedicated Designers</li>
                                <li> <CheckTick className={styles.CheckTick} />9 Revisions (Additional Revision Per Change $30)</li>
                                <li> <CheckTick className={styles.CheckTick} />48-72 Hours Turn Around Time</li>
                                <li> <CheckTick className={styles.CheckTick} />Final Files (JPEG, PNG, PDF)</li>
                                <li> <CheckTick className={styles.CheckTick} />Dedicated Project Manager</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Unique Concepts</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Approval Assurance</li>
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
                <div className="col-lg-6">
                    <div className={styles.logo_design_bronze}>
                        <div className={styles.Package_header}>
                            <img src={PackageLogo} alt="" className={styles.PackageLogo2} />
                            <span className='d-flex flex-column align-items-end p-2'>
                                <h3 className={styles.logo_design_price}>$550.00</h3>
                                <p className={styles.logo_design_para}>Ultimate Logo Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn2}>Order Now</button>
                        </div>

                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />12 Logo Design Concepts</li>
                                <li> <CheckTick className={styles.CheckTick} />Stationery Design (Business card design, Letterhead Design, Envelope Design)</li>
                                <li> <CheckTick className={styles.CheckTick} />Flyer Design</li>
                                <li> <CheckTick className={styles.CheckTick} />Free Icon Design</li>
                                <li> <CheckTick className={styles.CheckTick} />6 Dedicated Designers</li>
                                <li> <CheckTick className={styles.CheckTick} />12 Revisions (Additional Revision Per Change $50)</li>
                                <li> <CheckTick className={styles.CheckTick} />48-72 Hours Turn Around Time</li>
                                <li> <CheckTick className={styles.CheckTick} />Final Files (AI, PSD, EPS, JPEG, PNG, PDF, SVG)</li>
                                <li> <CheckTick className={styles.CheckTick} />Dedicated Project Manager</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Unique Concepts</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Approval Assurance</li>
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
            </div>
        </div>
    )
}

export default Logodesign