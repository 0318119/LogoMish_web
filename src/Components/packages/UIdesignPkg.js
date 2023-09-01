import React from 'react'
import styles from '../packages/assets/css/LogoDesignPkg.module.css'
import PackageLogo from '../../pages/assest/images/package_log.png'
import { BiCheck as CheckTick } from 'react-icons/bi'
import { BsFillTelephoneFill as ContactIcon } from 'react-icons/bs'

function UIdesignPkg() {
    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-lg-4">
                    <div className={styles.logo_design_bronze}>
                        <div className={styles.Package_header}>
                            <img src={PackageLogo} alt="" className={styles.PackageLogo} />
                            <span className='d-flex flex-column align-items-end p-2'>
                                <h3 className={styles.logo_design_price}>$1499.00</h3>
                                <p className={styles.logo_design_para}>Basic UI Design Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>
                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />Homepage design</li>
                                <li> <CheckTick className={styles.CheckTick} />Up to 5 additional pages</li>
                                <li> <CheckTick className={styles.CheckTick} />Basic layout and design elements</li>
                                <li> <CheckTick className={styles.CheckTick} />Typography</li>
                                <li> <CheckTick className={styles.CheckTick} />Color scheme</li>
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
                                <h3 className={styles.logo_design_price}>$1999.00</h3>
                                <p className={styles.logo_design_para}>Advanced UI Design Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>
                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />Homepage design</li>
                                <li> <CheckTick className={styles.CheckTick} />Up to 10 additional pages</li>
                                <li> <CheckTick className={styles.CheckTick} />More complex design elements</li>
                                <li> <CheckTick className={styles.CheckTick} />Illustrations</li>
                                <li> <CheckTick className={styles.CheckTick} />Animations</li>
                                <li> <CheckTick className={styles.CheckTick} />Interactive features</li>
                                <li> <CheckTick className={styles.CheckTick} />Iconography and graphic design</li>
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
                                <p className={styles.logo_design_para}>E-Commerce Design Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>

                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />Homepage design</li>
                                <li> <CheckTick className={styles.CheckTick} />Up to 20 additional pages</li>
                                <li> <CheckTick className={styles.CheckTick} />Shopping cart design</li>
                                <li> <CheckTick className={styles.CheckTick} />Product page design</li>
                                <li> <CheckTick className={styles.CheckTick} />Checkout process design</li>
                                <li> <CheckTick className={styles.CheckTick} />Custom graphic design for promotional materials</li>
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
                                <h3 className={styles.logo_design_price}>$3499.00</h3>
                                <p className={styles.logo_design_para}>Responsive Design Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>
                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li> <CheckTick className={styles.CheckTick} />Homepage design</li>
                                <li> <CheckTick className={styles.CheckTick} />Up to 10 additional pages</li>
                                <li> <CheckTick className={styles.CheckTick} />Optimized for all devices, including desktops, tablets, and mobile phones</li>
                                <li> <CheckTick className={styles.CheckTick} />Touch-friendly interfaces and larger fonts for easier reading on smaller screens</li>
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
                                <h3 className={styles.logo_design_price}>$5999.00</h3>
                                <p className={styles.logo_design_para}>Custom Design Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>
                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />Completely tailored to the client’s specific needs</li>
                                <li> <CheckTick className={styles.CheckTick} />Can include any combination of design elements, from basic to advanced</li>
                                <li> <CheckTick className={styles.CheckTick} />Customizable for any type of website or web application</li>
                                <li> <CheckTick className={styles.CheckTick} />Illustrations</li>
                                <li> <CheckTick className={styles.CheckTick} />Animations</li>
                                <li> <CheckTick className={styles.CheckTick} />Interactive features</li>
                                <li> <CheckTick className={styles.CheckTick} />Iconography and graphic design</li>
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
                                <h3 className={styles.logo_design_price}>$3499.00</h3>
                                <p className={styles.logo_design_para}>Application UI/UX Design Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>

                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />Design for the application’s main screen</li>
                                <li> <CheckTick className={styles.CheckTick} />Up to 5 additional screens</li>
                                <li> <CheckTick className={styles.CheckTick} />Custom layout and design elements, such as typography, color scheme, and graphics</li>
                                <li> <CheckTick className={styles.CheckTick} />Custom iconography, graphic design, and branding</li>
                                <li> <CheckTick className={styles.CheckTick} />Design for user interface (UI) elements, such as buttons, menus, and forms</li>
                                <li> <CheckTick className={styles.CheckTick} />User experience (UX) design, including user flow diagrams and wireframes</li>
                               
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
                                <h3 className={styles.logo_design_price}>$6499.00</h3>
                                <p className={styles.logo_design_para}>Advanced Application UI/UX Design Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>

                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />Design for the application’s main screen</li>
                                <li> <CheckTick className={styles.CheckTick} />Up to 10 additional screens</li>
                                <li> <CheckTick className={styles.CheckTick} />More complex design elements, such as custom illustrations, animations, and interactive features</li>
                                <li> <CheckTick className={styles.CheckTick} />Custom iconography, graphic design, and branding</li>
                                <li> <CheckTick className={styles.CheckTick} />Design for user interface (UI) elements, such as buttons, menus, and forms</li>
                                <li> <CheckTick className={styles.CheckTick} />User experience (UX) design, including user flow diagrams and wireframes</li>
                                <li> <CheckTick className={styles.CheckTick} />Customized user research and user testing to optimize the design</li>
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
                                <h3 className={styles.logo_design_price}>$7499.00</h3>
                                <p className={styles.logo_design_para}>E-Commerce Application Design Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>

                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />Design for the application’s main screen, plus up to 20 additional screens</li>
                                <li> <CheckTick className={styles.CheckTick} />Shopping cart design, product page design, and checkout process design</li>
                                <li> <CheckTick className={styles.CheckTick} />Custom layout and design elements, such as typography, color scheme, and graphics</li>
                                <li> <CheckTick className={styles.CheckTick} />Custom graphic design for promotional materials</li>
                                <li> <CheckTick className={styles.CheckTick} />Custom iconography, graphic design, and branding</li>
                                <li> <CheckTick className={styles.CheckTick} />Design for user interface (UI) elements, such as buttons, menus, and forms</li>
                                <li> <CheckTick className={styles.CheckTick} />User experience (UX) design, including user flow diagrams and wireframes</li>
                                <li> <CheckTick className={styles.CheckTick} />Customized user research and user testing to optimize the design</li>
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

export default UIdesignPkg