import React from 'react'
import styles from '../packages/assets/css/LogoDesignPkg.module.css'
import PackageLogo from '../../pages/assest/images/package_log.png'
import { BiCheck as CheckTick } from 'react-icons/bi'
import { BsFillTelephoneFill as ContactIcon } from 'react-icons/bs'

function SeoPkg() {
  return (
      <div className="container-fluid">
          <div className="row d-flex">
              <div className="col-lg-4">
                  <div className={styles.logo_design_bronze}>
                      <div className={styles.Package_header}>
                          <img src={PackageLogo} alt="" className={styles.PackageLogo} />
                          <span className='d-flex flex-column align-items-end p-2'>
                              <h3 className={styles.logo_design_price}>$249.00</h3>
                              <p className={styles.logo_design_para}>SEO Essential</p>
                          </span>
                      </div>
                      <div className='p-2 d-flex justify-content-center'>
                          <button className={styles.Logo_design_order_btn}>Order Now</button>
                      </div>
                      <div className='p-3'>
                          <ul className={styles.detaillist}>
                              <li > <CheckTick className={styles.CheckTick} />5 Keywords</li>
                              <li> <CheckTick className={styles.CheckTick} />Off-page Optimization</li>
                              <li> <CheckTick className={styles.CheckTick} />Link Building</li>
                              <li> <CheckTick className={styles.CheckTick} />Social Bookmarking</li>
                              <li> <CheckTick className={styles.CheckTick} />Guaranteed Ranking on Google</li>
                              <li> <CheckTick className={styles.CheckTick} />Basic Analytical Report</li>
                              <li> <CheckTick className={styles.CheckTick} />Dedicated Project Manager</li>
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
                              <h3 className={styles.logo_design_price}>$499.00</h3>
                              <p className={styles.logo_design_para}>SEO Standard</p>
                          </span>
                      </div>
                      <div className='p-2 d-flex justify-content-center'>
                          <button className={styles.Logo_design_order_btn}>Order Now</button>
                      </div>
                      <div className='p-3'>
                          <ul className={styles.detaillist}>
                              <li > <CheckTick className={styles.CheckTick} />10 Keywords</li>
                              <li> <CheckTick className={styles.CheckTick} />Off-page Optimization</li>
                              <li> <CheckTick className={styles.CheckTick} />On-page Optimization</li>
                              <li> <CheckTick className={styles.CheckTick} />Link Building Social Bookmarking</li>
                              <li> <CheckTick className={styles.CheckTick} />Guaranteed Ranking on Google</li>
                              <li> <CheckTick className={styles.CheckTick} />Comprehensive Analytical Report</li>
                              <li> <CheckTick className={styles.CheckTick} />Dedicated Project Manager</li>
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
                              <h3 className={styles.logo_design_price}>$699.00</h3>
                              <p className={styles.logo_design_para}>SEO Classic</p>
                          </span>
                      </div>
                      <div className='p-2 d-flex justify-content-center'>
                          <button className={styles.Logo_design_order_btn}>Order Now</button>
                      </div>

                      <div className='p-3'>
                          <ul className={styles.detaillist}>
                              <li > <CheckTick className={styles.CheckTick} />20 Keywords</li>
                              <li> <CheckTick className={styles.CheckTick} />Off-page Optimization</li>
                              <li> <CheckTick className={styles.CheckTick} />On-page Optimization</li>
                              <li> <CheckTick className={styles.CheckTick} />Link Building</li>
                              <li> <CheckTick className={styles.CheckTick} />Social Bookmarking</li>
                              <li> <CheckTick className={styles.CheckTick} />Guaranteed Ranking on Google</li>
                              <li> <CheckTick className={styles.CheckTick} />Comprehensive Analytical Report</li>
                              <li> <CheckTick className={styles.CheckTick} />Dedicated Project Manager</li>
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
                              <h3 className={styles.logo_design_price}>$1299.00</h3>
                              <p className={styles.logo_design_para}>SEO Exclusive</p>
                          </span>
                      </div>
                      <div className='p-2 d-flex justify-content-center'>
                          <button className={styles.Logo_design_order_btn}>Order Now</button>
                      </div>
                      <div className='p-3'>
                          <ul className={styles.detaillist}>
                              <li> <CheckTick className={styles.CheckTick} />30 keywords</li>
                              <li> <CheckTick className={styles.CheckTick} />Off-page Optimization</li>
                              <li> <CheckTick className={styles.CheckTick} />On-page Optimization</li>
                              <li> <CheckTick className={styles.CheckTick} />Technical SEO</li>
                              <li> <CheckTick className={styles.CheckTick} />Website Audit</li>
                              <li> <CheckTick className={styles.CheckTick} />Link Building</li>
                              <li> <CheckTick className={styles.CheckTick} />Social Bookmarking</li>
                              <li> <CheckTick className={styles.CheckTick} />Website Performance Enhancement</li>
                              <li> <CheckTick className={styles.CheckTick} />Comprehensive Analytical Report</li>
                              <li> <CheckTick className={styles.CheckTick} />Dedicated Project Manager</li>
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

export default SeoPkg