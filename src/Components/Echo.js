import React from 'react'
import style from '../pages/assest/css/about.module.css'

function Echo() {
    return (
        <>
            <section className='mt-5'>
                <div className="container">
                    <div className="row">
                        <h5 className={`${style.Echoh5}`}>Echo over BUZZ</h5>
                        <span className={`${style.Echospan}`}>We care About the things that matter</span>

                        <div className="col-lg-4">
                            <div className={`${style.EchoCart1}`}>
                                <h5 className={`${style.EchoCarth51}`}>Our Team</h5>
                                <p className={`${style.EchoCartp1}`}>
                                    Logomish believes that happy people do the best work, so as an equal opportunity employer, we make sure that we do everything to make them feel they are included and seen, no matter where we call home. We compensate them justly and on time so they can live decently here and support their families back home
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={`${style.EchoCart2}`}>
                                <h5 className={`${style.EchoCarth51}`}>Our Clients</h5>
                                <p className={`${style.EchoCartp1}`}>
                                    Over the years, we’ve built amazing relationships with the people we’ve helped. They’re no longer seen as clients but have become our teammates. For us, it’s not just about going the extra mile—it’s knowing that everyone needs a partner that will help them get to the where they want to be
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={`${style.EchoCart3}`}>
                                <h5 className={`${style.EchoCarth51}`}>Our Communities</h5>
                                <p className={`${style.EchoCartp1}`}>
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

export default Echo