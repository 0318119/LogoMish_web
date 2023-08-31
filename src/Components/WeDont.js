import React from 'react'
import style from '../pages/assest/css/about.module.css'

function WeDont() {
    return (
        <>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 mt-5'>
                        <div className={`${style.WeDontupper}`}>
                            <h2> WE DON'T </h2>
                        </div>
                    </div>
                    <div className={`${style.WeDontCarts}`}>
                        <div className={`${style.WeDontCarts1}`}>
                            <div className='col-lg-12  px-4'>
                                <div className={`${style.WeDontCartshead}`}>
                                    <h4> Engage in unethical practices </h4>
                                </div>
                                <div className={`${style.WeDontCartsp}`}>
                                    <p> Some of the biggest issues the creative economy faces are ethics-related: Plagiarism. Fraud. Unpaid talent. Inequities in the workplace. Unethical leadership. We create original work for our clients because we understand that what makes you different makes you stand out. We do not copy someone else’s homework and pass it off as our own </p>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.WeDontCarts2}`}>
                            <div className='col-lg-12  px-4'>
                                <div className={`${style.WeDontCartshead}`}>
                                    <h4> Say yes to everything and everyone </h4>
                                </div>
                                <div className={`${style.WeDontCartsp}`}>
                                    <p> Over the years, we’ve built amazing relationships with the people we’ve helped. They’re no longer seen as clients but have become our teammates. For us, it’s not just about going the extra mile—it’s knowing that everyone needs a partner that will help them get to the where they want to be </p>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.WeDontCarts3}`}>
                            <div className='col-lg-12  px-4 '>
                                <div className={`${style.WeDontCartshead}`}>
                                    <h4> Work for free </h4>
                                </div>
                                <div className={`${style.WeDontCartsp}`}>
                                    <p>One of our collective goals is to help improve life for all. We identify underserved communities, and through our partnerships with non-profit organisations and charitable groups, we hope to transform more lives for the better </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>



        </>

    )

}

export default WeDont