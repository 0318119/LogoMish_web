import React from 'react'
import style from '../pages/assest/css/about.module.css'

const Promo = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className="row">
                <h4 className={`${style.Promouph4}`}>WE ARE</h4>
                <span className={`${style.Promoupspan}`}>
                    Logomish is a US-based brand consultancy. We develop brands that inspire wonder, establish connections and underscore transformative impact
                </span>
            </div>

            <div className="row">
                <div className="col-12">
                    <h5 className={`${style.Promodownh5}`}>PURPOSE OVER PROMO</h5>
                    <span className={`${style.Promodownspan}`}>
                    Brands happen when curiosity meets creativity, emotion converges with reason and passion embraces purpose. We also believe that..
                    </span>
                </div>
            </div>

            <div className="row justify-content-between">
                <div className="col-lg-2 p-0">
                    <div className={`${style.Promoboxes}`}>
                        <h6> 1.</h6>
                        <p> Human Beings are intuitive and emotional </p>
                    </div>
                </div>
                <div className="col-lg-2 p-0">
                    <div className={`${style.Promoboxes}`}>
                        <h6> 2.</h6>
                        <p> Authenticity is the strongest magnet </p>
                    </div>
                </div>
                <div className="col-lg-2 p-0">
                    <div className={`${style.Promoboxes}`}>
                        <h6> 3.</h6>
                        <p> Honesty always win </p>
                    </div>
                </div>
                <div className="col-lg-2 p-0">
                    <div className={`${style.Promoboxes}`}>
                        <h6> 4.</h6>
                        <p> Creativity is not bound by age, gender or race </p>
                    </div>
                </div>
                <div className="col-lg-2 p-0">
                    <div className={`${style.Promoboxes}`}>
                        <h6> 5.</h6>
                        <p> Integrity cannot be bought </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Promo