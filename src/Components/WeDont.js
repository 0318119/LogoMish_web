import React from 'react'
import style from '../pages/assest/css/about.module.css'

function WeDont() {
    return (
        <>

            <section className='mt-5'>
                <div className="container">
                    <div className="row">
                        <h5 className={`${style.WeDonth5}`}>WE DON'T</h5>


                        <div className="col-lg-4">
                            <div className={`${style.WeDont1}`}>
                                <h5 className={`${style.WeDonth51}`}>Engage in unethical practices</h5>
                                <p className={`${style.WeDontp1}`}>
                                    Some of the biggest issues the creative economy faces are ethics-related: Plagiarism. Fraud. Unpaid talent. Inequities in the workplace. Unethical leadership. We create original work for our clients because we understand that what makes you different makes you stand out. We do not copy someone else’s homework and pass it off as our own
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={`${style.WeDont2}`}>
                                <h5 className={`${style.WeDonth51}`}>Say yes to everything and everyone</h5>
                                <p className={`${style.WeDontp1}`}>
                                    Over the years, we’ve built amazing relationships with the people we’ve helped. They’re no longer seen as clients but have become our teammates. For us, it’s not just about going the extra mile—it’s knowing that everyone needs a partner that will help them get to the where they want to be
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={`${style.WeDont3}`}>
                                <h5 className={`${style.WeDonth51}`}>Work for free</h5>
                                <p className={`${style.WeDontp1}`}>
                                    One of our collective goals is to help improve life for all. We identify underserved communities, and through our partnerships with non-profit organisations and charitable groups, we hope to transform more lives for the better
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>

    )

}

export default WeDont