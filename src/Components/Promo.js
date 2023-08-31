import React from 'react'
import style from '../pages/assest/css/about.module.css'

function Promo() {
    return (
        <>

            <div className="Container">
                <div className="row">
                    <div className='col-lg-12'>
                        <div className={`${style.Promoupper}`}>
                            <h2> WE ARE </h2>
                            <p> Logomish is a US-based brand consultancy. We develop brands that inspire wonder, establish connections and underscore transformative impact   </p>
                        </div>
                    </div>

                    <div className='col-lg-12'>
                        <div className={`${style.Promodown}`}>
                            <h2> PURPOSE OVER PROMO </h2>
                            <p> Brands happen when curiosity meets creativity, emotion converges with reason and passion embraces purpose. We also believe that..   </p>
                        </div>
                    </div>

                    <div className='row d-flex justify-content-center align-item-center'>
                        <div className='col-lg-12'>
                            <div className={`${style.Promoboxes}`}>
                                <div className={`${style.Promoboxes1}`}>
                                    <h4>
                                        1.
                                    </h4>
                                    <p> Human Beings are intuitive and emotional </p>
                                </div>
                                <div className={`${style.Promoboxes2}`}>
                                    <h4>
                                        2.
                                    </h4>
                                    <p> Authenticity is the strongest magnet </p>
                                </div>

                                <div className={`${style.Promoboxes3}`}>
                                    <h4>
                                        3.
                                    </h4>
                                    <p> Honesty always win </p>
                                </div>
                                <div className={`${style.Promoboxes4}`}>
                                    <h4>
                                        4.
                                    </h4>
                                    <p> Creativity is not bound by age, gender or race </p>
                                </div>
                                <div className={`${style.Promoboxes5}`}>
                                    <h4>
                                        5.
                                    </h4>
                                    <p> Integrity cannot be bought </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Promo