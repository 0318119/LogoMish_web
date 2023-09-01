import React from 'react'
import styles from '../packages/assets/css/LogoDesignPkg.module.css'
import PackageLogo from '../../pages/assest/images/package_log.png'
import { BiCheck as CheckTick } from 'react-icons/bi'
import { BsFillTelephoneFill as ContactIcon } from 'react-icons/bs'

function EcommercePkg() {
    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <div className="col-lg-4">
                    <div className={styles.logo_design_bronze}>
                        <div className={styles.Package_header}>
                            <img src={PackageLogo} alt="" className={styles.PackageLogo} />
                            <span className='d-flex flex-column align-items-end p-2'>
                                <h3 className={styles.logo_design_price}>$499.00</h3>
                                <p className={styles.logo_design_para}>E-Commerce essential Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>
                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />E-Commerce Website Design and Development</li>
                                <li> <CheckTick className={styles.CheckTick} />Basic Design</li>
                                <li> <CheckTick className={styles.CheckTick} />2 Banner Designs</li>
                                <li> <CheckTick className={styles.CheckTick} />3 Stock Photos</li>
                                <li> <CheckTick className={styles.CheckTick} />04 Revisions</li>
                                <li> <CheckTick className={styles.CheckTick} />Hover Effects</li>
                                <li> <CheckTick className={styles.CheckTick} />Up to 10 Products</li>
                                <li> <CheckTick className={styles.CheckTick} />Up to 2 Categories</li>
                                <li> <CheckTick className={styles.CheckTick} />Content/Inventory Management System</li>
                                <li> <CheckTick className={styles.CheckTick} />Shopping Cart Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Payment Module Integration (1)</li>
                                <li> <CheckTick className={styles.CheckTick} />Dedicated Project Manager</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Ownership Rights</li>
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
                                <h3 className={styles.logo_design_price}>$799.00</h3>
                                <p className={styles.logo_design_para}>E-commerce Standard Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>
                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />E-Commerce Website Design and Development</li>
                                <li> <CheckTick className={styles.CheckTick} />Standard Design</li>
                                <li> <CheckTick className={styles.CheckTick} />5 Banner Designs</li>
                                <li> <CheckTick className={styles.CheckTick} />Stock Photos</li>
                                <li> <CheckTick className={styles.CheckTick} />08 Revisions</li>
                                <li> <CheckTick className={styles.CheckTick} />Hover Effects</li>
                                <li> <CheckTick className={styles.CheckTick} />Up to 30 Products</li>
                                <li> <CheckTick className={styles.CheckTick} />Up to 5 Categories</li>
                                <li> <CheckTick className={styles.CheckTick} />Content/Inventory Management System</li>
                                <li> <CheckTick className={styles.CheckTick} />Shopping Cart Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Easy Product Search Bar</li>
                                <li> <CheckTick className={styles.CheckTick} />Payment Module Integration (2)</li>
                                <li> <CheckTick className={styles.CheckTick} />Direct Checkout</li>
                                <li> <CheckTick className={styles.CheckTick} />Search Engine Submission</li>
                                <li> <CheckTick className={styles.CheckTick} />Social Media Pages Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Dedicated Project Manager</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Ownership Rights</li>
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
                                <h3 className={styles.logo_design_price}>$1299.00</h3>
                                <p className={styles.logo_design_para}>E-Commerce Professional Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>

                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />E-commerce Website Design and Development</li>
                                <li> <CheckTick className={styles.CheckTick} />Professional Design</li>
                                <li> <CheckTick className={styles.CheckTick} />10 Banner Designs</li>
                                <li> <CheckTick className={styles.CheckTick} />Stock Photos</li>
                                <li> <CheckTick className={styles.CheckTick} />12 Revisions</li>
                                <li> <CheckTick className={styles.CheckTick} />Special Hover Effects</li>
                                <li> <CheckTick className={styles.CheckTick} />Interactive Sliding Banners</li>
                                <li> <CheckTick className={styles.CheckTick} />Up to 100 Products</li>
                                <li> <CheckTick className={styles.CheckTick} />Up to 10 Categories</li>
                                <li> <CheckTick className={styles.CheckTick} />Content/Inventory Management System</li>
                                <li> <CheckTick className={styles.CheckTick} />Search Engine Submission</li>
                                <li> <CheckTick className={styles.CheckTick} />Easy Product Search Bar</li>
                                <li> <CheckTick className={styles.CheckTick} />Shopping Cart Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Direct Checkout</li>
                                <li> <CheckTick className={styles.CheckTick} />Shipping Calculator Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Wishlist</li>
                                <li> <CheckTick className={styles.CheckTick} />Search Engine Submission</li>
                                <li> <CheckTick className={styles.CheckTick} />Social Media Pages Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Dedicated Project Manager</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Ownership Rights</li>
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
            <div className="row mt-2">
                <div className="col-lg-4">
                    <div className={styles.logo_design_bronze}>
                        <div className={styles.Package_header}>
                            <img src={PackageLogo} alt="" className={styles.PackageLogo} />
                            <span className='d-flex flex-column align-items-end p-2'>
                                <h3 className={styles.logo_design_price}>$2199.00</h3>
                                <p className={styles.logo_design_para}>E-Commerce identity kit</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>
                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li> <CheckTick className={styles.CheckTick} />E-commerce Website Design and Development</li>
                                <li> <CheckTick className={styles.CheckTick} />Custom WordPress Development</li>
                                <li> <CheckTick className={styles.CheckTick} />Modern, Interactive, and Unique Design</li>
                                <li> <CheckTick className={styles.CheckTick} />12 Banner Designs (Custom)</li>
                                <li> <CheckTick className={styles.CheckTick} />Interactive Sliding Banners</li>
                                <li> <CheckTick className={styles.CheckTick} />Special Hover Effects</li>
                                <li> <CheckTick className={styles.CheckTick} />Stock Photos</li>
                                <li> <CheckTick className={styles.CheckTick} />15 Revisions</li>
                                <li> <CheckTick className={styles.CheckTick} />Up to 350 products</li>
                                <li> <CheckTick className={styles.CheckTick} />Up to 20 Categories</li>
                                <li> <CheckTick className={styles.CheckTick} />Product Review and Ratings</li>
                                <li> <CheckTick className={styles.CheckTick} />Content/Inventory Management System</li>
                                <li> <CheckTick className={styles.CheckTick} />Mobile Responsive</li>
                                <li> <CheckTick className={styles.CheckTick} />Easy Product Search Bar</li>
                                <li> <CheckTick className={styles.CheckTick} />Shopping Cart Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Direct Checkout</li>
                                <li> <CheckTick className={styles.CheckTick} />Sign up Checkout</li>
                                <li> <CheckTick className={styles.CheckTick} />Tax Calculator Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Shipping Calculator Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Social Media Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Wishlist</li>
                                <li> <CheckTick className={styles.CheckTick} />Bulk Import/Export Order</li>
                                <li> <CheckTick className={styles.CheckTick} />Search Engine Submission</li>
                                <li> <CheckTick className={styles.CheckTick} />SEO Friendly</li>
                                <li> <CheckTick className={styles.CheckTick} />Social Media Pages Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Dedicated Project Manager</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Ownership Rights</li>
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
                                <h3 className={styles.logo_design_price}>$3199.00</h3>
                                <p className={styles.logo_design_para}>E-commerce Exclusive Package</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>
                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />E-Commerce Website Design and Development</li>
                                <li> <CheckTick className={styles.CheckTick} />Customized Tailor-Made Design</li>
                                <li> <CheckTick className={styles.CheckTick} />Professional, Modern, and Unique Design</li>
                                <li> <CheckTick className={styles.CheckTick} />User-friendly Navigation</li>
                                <li> <CheckTick className={styles.CheckTick} />20 Banner Designs</li>
                                <li> <CheckTick className={styles.CheckTick} />Sliding Banner</li>
                                <li> <CheckTick className={styles.CheckTick} />20 Stock Photos</li>
                                <li> <CheckTick className={styles.CheckTick} />Unlimited Revisions</li>
                                <li> <CheckTick className={styles.CheckTick} />Special Hover Effects</li>
                                <li> <CheckTick className={styles.CheckTick} />Content/Inventory Management System</li>
                                <li> <CheckTick className={styles.CheckTick} />Mobile Responsive</li>
                                <li> <CheckTick className={styles.CheckTick} />Up to 700 Products</li>
                                <li> <CheckTick className={styles.CheckTick} />Up to 70 Categories</li>
                                <li> <CheckTick className={styles.CheckTick} />Product Reviews & Ratings Product Summary Reports (Out of stock / Most Sold / Lowest sale etc) By Date</li>
                                <li> <CheckTick className={styles.CheckTick} />Multiple Filtrations Option</li>
                                <li> <CheckTick className={styles.CheckTick} />Product View with Multiple Views</li>
                                <li> <CheckTick className={styles.CheckTick} />Product Detail with Similar Product Range</li>
                                <li> <CheckTick className={styles.CheckTick} />Discounted Products Showcase</li>
                                <li> <CheckTick className={styles.CheckTick} />New Arrival Products Showcase</li>
                                <li> <CheckTick className={styles.CheckTick} />Discount Coupons</li>
                                <li> <CheckTick className={styles.CheckTick} />Easy Product Search Bar</li>
                                <li> <CheckTick className={styles.CheckTick} />Payment Module Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Direct Checkout</li>
                                <li> <CheckTick className={styles.CheckTick} />Sign up Checkout</li>
                                <li> <CheckTick className={styles.CheckTick} />Tax Calculator Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Shipping Calculator Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Wishlist</li>
                                <li> <CheckTick className={styles.CheckTick} />Import/Export Order</li>
                                <li> <CheckTick className={styles.CheckTick} />Bulk Import/Export Order Information</li>
                                <li> <CheckTick className={styles.CheckTick} />Live Chat Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Search Engine Submission</li>
                                <li> <CheckTick className={styles.CheckTick} />Social Media Pages Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Blog Page</li>
                                <li> <CheckTick className={styles.CheckTick} />Sitemap</li>
                                <li> <CheckTick className={styles.CheckTick} />Dedicated Project Manager</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Ownership Rights</li>
                                <li> <CheckTick className={styles.CheckTick} />100 Satisfaction Guarantee</li>
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
                                <h3 className={styles.logo_design_price}>$4999.00</h3>
                                <p className={styles.logo_design_para}>E-Commerce UltimatePackage</p>
                            </span>
                        </div>
                        <div className='p-2 d-flex justify-content-center'>
                            <button className={styles.Logo_design_order_btn}>Order Now</button>
                        </div>

                        <div className='p-3'>
                            <ul className={styles.detaillist}>
                                <li > <CheckTick className={styles.CheckTick} />E-Commerce Website Design and Development</li>
                                <li> <CheckTick className={styles.CheckTick} />Customized Tailor-Made Design</li>
                                <li> <CheckTick className={styles.CheckTick} />Professional, Modern, Dynamic, and Unique Design</li>
                                <li> <CheckTick className={styles.CheckTick} />User-friendly Navigation</li>
                                <li> <CheckTick className={styles.CheckTick} />Up to 20 Custom Banner Design</li>
                                <li> <CheckTick className={styles.CheckTick} />25 Banner Designs</li>
                                <li> <CheckTick className={styles.CheckTick} />Interactive Sliding Banner</li>
                                <li> <CheckTick className={styles.CheckTick} />Stock Photos</li>
                                <li> <CheckTick className={styles.CheckTick} />Unlimited Revisions</li>
                                <li> <CheckTick className={styles.CheckTick} />Special Hover Effects</li>
                                <li> <CheckTick className={styles.CheckTick} />Content/Inventory Management System</li>
                                <li> <CheckTick className={styles.CheckTick} />Mobile Responsive</li>
                                <li> <CheckTick className={styles.CheckTick} />Unlimited Products</li>
                                <li> <CheckTick className={styles.CheckTick} />Unlimited Categories</li>
                                <li> <CheckTick className={styles.CheckTick} />Product Reviews and Ratings</li>
                                <li> <CheckTick className={styles.CheckTick} />Product Summary Reports (Out of stock / Most Sold / Lowest sale etc.) By Date</li>
                                <li> <CheckTick className={styles.CheckTick} />Multiple Filtrations Option</li>
                                <li> <CheckTick className={styles.CheckTick} />Multiple Shorting Options (Newest / Price / Alphabetical / Rating)</li>
                                <li> <CheckTick className={styles.CheckTick} />Product View with Multiple Views</li>
                                <li> <CheckTick className={styles.CheckTick} />Product Detail with Similar Product Range</li>
                                <li> <CheckTick className={styles.CheckTick} />Coupon Code Generation (by category and product)</li>
                                <li> <CheckTick className={styles.CheckTick} />Product Comparison</li>
                                <li> <CheckTick className={styles.CheckTick} />User Signup Area</li>
                                <li> <CheckTick className={styles.CheckTick} />User Sign-in Area</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Satisfaction Guaranteer</li>
                                <li> <CheckTick className={styles.CheckTick} />User Dashboard Area</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Satisfaction Guaranteer</li>
                                <li> <CheckTick className={styles.CheckTick} />Auto Email for Profile Validation & Notification(s)</li>
                                <li> <CheckTick className={styles.CheckTick} />Customer profile management (From Backend and Frontend)</li>
                                <li> <CheckTick className={styles.CheckTick} />Discounted Products Showcase</li>
                                <li> <CheckTick className={styles.CheckTick} />New Arrival Products Showcase</li>
                                <li> <CheckTick className={styles.CheckTick} />Discount Coupons</li>
                                <li> <CheckTick className={styles.CheckTick} />Easy Product Search Bar</li>
                                <li> <CheckTick className={styles.CheckTick} />Shopping Cart Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Payment Module Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Multiple Currency Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Direct Checkout</li>
                                <li> <CheckTick className={styles.CheckTick} />Sign up Checkout</li>
                                <li> <CheckTick className={styles.CheckTick} />Tax calculator Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Shipping calculator Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Wishlist</li>
                                <li> <CheckTick className={styles.CheckTick} />Import/Export Order</li>
                                <li> <CheckTick className={styles.CheckTick} />Bulk Import/export of Order information</li>
                                <li> <CheckTick className={styles.CheckTick} />Export order into excel sheet</li>
                                <li> <CheckTick className={styles.CheckTick} />Live Chat Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Search Engine Submission</li>
                                <li> <CheckTick className={styles.CheckTick} />SEO Friendly</li>
                                <li> <CheckTick className={styles.CheckTick} />Social Media Pages Integration</li>
                                <li> <CheckTick className={styles.CheckTick} />Blog Page</li>
                                <li> <CheckTick className={styles.CheckTick} />Sitemap</li>
                                <li> <CheckTick className={styles.CheckTick} />Dedicated Project Manager</li>
                                <li> <CheckTick className={styles.CheckTick} />100% Ownership Rights</li>
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

export default EcommercePkg