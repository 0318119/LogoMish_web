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
                                <h3 className={styles.logo_design_price}>$125.00</h3>
                                <p className={styles.logo_design_para}>Social Media Presence</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>
                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />Social Business Account Creation (Any 3)</li>
                                <li> <CheckTick className={styles.CheckTick} />Cover Photo Design</li>
                                <li> <CheckTick className={styles.CheckTick} />Profile Picture Design</li>
                                <li> <CheckTick className={styles.CheckTick} />Welcome Post Design</li>
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
                                <p className={styles.logo_design_para}>Essential Monthly Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>
                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />2 Posting Per Week, Each Network (Instagram and Facebook)</li>
                                <li> <CheckTick className={styles.CheckTick} />Content Generation</li>
                                <li> <CheckTick className={styles.CheckTick} />Post Design</li>
                                <li> <CheckTick className={styles.CheckTick} />Business Page Optimization</li>
                                <li> <CheckTick className={styles.CheckTick} />Social Media Calendar</li>
                                <li> <CheckTick className={styles.CheckTick} />Monthly Progress Report</li>
                                <li> <CheckTick className={styles.CheckTick} />Paid Boosting (Additional Charges according to the budget)</li>
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
                                <h3 className={styles.logo_design_price}>$799.00</h3>
                                <p className={styles.logo_design_para}>Classic Monthly Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>

                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />5 Posting Per Week, Each Network (Facebook, Instagram, Twitter)</li>
                                <li> <CheckTick className={styles.CheckTick} />Business Page Optimization</li>
                                <li> <CheckTick className={styles.CheckTick} />Content Generation</li>
                                <li> <CheckTick className={styles.CheckTick} />Post Design</li>
                                <li> <CheckTick className={styles.CheckTick} />Social Media Calendar</li>
                                <li> <CheckTick className={styles.CheckTick} />Social Media Strategy</li>
                                <li> <CheckTick className={styles.CheckTick} />Spam Monitoring</li>
                                <li> <CheckTick className={styles.CheckTick} />Comment Moderation</li>
                                <li> <CheckTick className={styles.CheckTick} />Reputation Management</li>
                                <li> <CheckTick className={styles.CheckTick} />Monthly Progress Report</li>
                                <li> <CheckTick className={styles.CheckTick} />Paid Boosting (Additional Charges according to the budget)</li>
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
                                <h3 className={styles.logo_design_price}>$1199.00</h3>
                                <p className={styles.logo_design_para}>Advanced Monthly Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>
                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li> <CheckTick className={styles.CheckTick} />6 Posting Per Week, Each Network (Instagram, Facebook, Twitter, Pinterest)</li>
                                <li> <CheckTick className={styles.CheckTick} />45 Sec Video Animation</li>
                                <li> <CheckTick className={styles.CheckTick} />Content Generation</li>
                                <li> <CheckTick className={styles.CheckTick} />Social Account Setup</li>
                                <li> <CheckTick className={styles.CheckTick} />Business Page Optimization</li>
                                <li> <CheckTick className={styles.CheckTick} />Banner and Profile Picture Design</li>
                                <li> <CheckTick className={styles.CheckTick} />Social Media Calendar</li>
                                <li> <CheckTick className={styles.CheckTick} />Social Media Strategy</li>
                                <li> <CheckTick className={styles.CheckTick} />Facebook Likes Campaign</li>
                                <li> <CheckTick className={styles.CheckTick} />Comment Moderation</li>
                                <li> <CheckTick className={styles.CheckTick} />Complete Design and Development</li>
                                <li> <CheckTick className={styles.CheckTick} />Spam Monitoring</li>
                                <li> <CheckTick className={styles.CheckTick} />Reputation Management</li>
                                <li> <CheckTick className={styles.CheckTick} />Paid Boosting (Additional Charges according to the budget)</li>
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
                                <h3 className={styles.logo_design_price}>$2999.00</h3>
                                <p className={styles.logo_design_para}>Exlusive Monthly Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>
                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />30 Post Per Month, Each Network (Instagram, Facebook, Twitter, Pinterest, and LinkedIn)</li>
                                <li> <CheckTick className={styles.CheckTick} />4 20 Seconds Video Animation</li>
                                <li> <CheckTick className={styles.CheckTick} />Custom Post Design</li>
                                <li> <CheckTick className={styles.CheckTick} />Content Generation</li>
                                <li> <CheckTick className={styles.CheckTick} />5 Boosted Posts</li>
                                <li> <CheckTick className={styles.CheckTick} />Social Account Setup</li>
                                <li> <CheckTick className={styles.CheckTick} />Business Page Optimization</li>
                                <li> <CheckTick className={styles.CheckTick} />Banner and Profile Picture Design</li>
                                <li> <CheckTick className={styles.CheckTick} />Social Media Calendar</li>
                                <li> <CheckTick className={styles.CheckTick} />Social Media Strategy</li>
                                <li> <CheckTick className={styles.CheckTick} />Social Media Audit</li>
                                <li> <CheckTick className={styles.CheckTick} />Brand Analysis</li>
                                <li> <CheckTick className={styles.CheckTick} />Facebook Likes Campaign</li>
                                <li> <CheckTick className={styles.CheckTick} />Comment Moderation</li>
                                <li> <CheckTick className={styles.CheckTick} />Spam Monitoring</li>
                                <li> <CheckTick className={styles.CheckTick} />Reputation Management</li>
                                <li> <CheckTick className={styles.CheckTick} />Daily Monitoring of Boosted Posts</li>
                                <li> <CheckTick className={styles.CheckTick} />Monthly Progress Report</li>
                                <li> <CheckTick className={styles.CheckTick} />Paid Boosting (Additional Charges according to the budget)</li>
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