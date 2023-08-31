import React from 'react'
import style from '../pages/assest/css/about.module.css'

function Echo() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 mt-5'>
                        <div className={`${style.Echooupper}`}>
                            <h2> Echo over BUZZ </h2>
                            <p> We care About the things that matter  </p>
                        </div>
                    </div>
                    <div className={`${style.EchoCarts}`}>
                        <div className={`${style.EchoCarts1}`}>
                            <div className='col-lg-12  px-4'>
                                <div className={`${style.EchoCartshead}`}>
                                    <h4> Our Team </h4>
                                </div>
                                <div className={`${style.EchoCartsp}`}>
                                    <p> Logomish believes that happy people do the best work, so as an equal opportunity employer, we make sure that we do everything to make them feel they are included and seen, no matter where we call home. We compensate them justly and on time so they can live decently here and support their families back home </p>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.EchoCarts2}`}>
                            <div className='col-lg-12  px-4'>
                                <div className={`${style.EchoCartshead}`}>
                                    <h4> Our Clients </h4>
                                </div>
                                <div className={`${style.EchoCartsp}`}>
                                    <p> Over the years, we’ve built amazing relationships with the people we’ve helped. They’re no longer seen as clients but have become our teammates. For us, it’s not just about going the extra mile—it’s knowing that everyone needs a partner that will help them get to the where they want to be </p>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.EchoCarts3}`}>
                            <div className='col-lg-12  px-4 '>
                                <div className={`${style.EchoCartshead}`}>
                                    <h4> Our Communities </h4>
                                </div>
                                <div className={`${style.EchoCartsp}`}>
                                    <p> One of our collective goals is to help improve life for all. We identify underserved communities, and through our partnerships with non-profit organisations and charitable groups, we hope to transform more lives for the better </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}

export default Echo