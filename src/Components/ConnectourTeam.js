import React from 'react'
import design from '../pages/assest/css/home.module.css'

const ConnectourTeam = () => {
    return (
        <>

        
            <section className='mt-5'>
                <div className="container">
                    <div className='row mt-5'>
                        <div className={`${design.ConnectourTeamSections}`}>
                            <h1> CONNECT OUR TEAM </h1>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-6 mt-5'>
                            <div className={`${design.ConnectourTeamSection}`}>
                                <p>Take the initial stride towards smart business growth, whether you yearn to delve deeper into our offerings or discuss further. Feel no apprehension or hesitation in reaching out to us for any inquiries. Contact us promptly, and our round-the-clock team will graciously extend their unfettered assistance, offering complimentary consultations. Rest assured, Logomish vows to deliver exceptional and tailored outcomes that precisely align with your business requisites. Every predicament you face shall be met with our unwavering commitment to serve. Our adept experts are poised to breathe life into your ideas. So, establish a connection with us, and together, let us embark upon the next venture.</p>
                            </div>
                        </div>
                        <div className='col-md-6 mt-4 ps-5 '>
                            <form action="">
                                <label for="fname"></label>
                                <input type="text" id="fname" name="" placeholder="Full Name"></input>
                                <label for="Compname"></label>
                                <input type="text" id="Compname" name="" placeholder="Company Name"></input>
                                <label for="Title"></label>
                                <input type="text" id="title" name="" placeholder="Title"></input>
                                <label for="Email"></label>
                                <input type="text" id="Email" name="" placeholder="Email"></input>
                                <select name="" id="Serctocon" className='bg-dark'>
                                    <option label="Service to consult"></option>
                                    <option label="Web Design"></option>
                                    <option label="Logo Design"></option>
                                    <option label="Mobile Application"></option>
                                    <option label="Graphic Design"></option>
                                    <option label="Video Animation"></option>
                                    <option label="UI/UX Design"></option>
                                    <option label="Search Engine Optimization"></option>
                                    <option label="Social Media Marketing"></option>
                                    <option label="Email Marketing"></option>
                                    <option label="E-commerce Store"></option>
                                    <option label="Others"></option>
                                </select>
                                <label for="Message"></label>
                                <textarea name="" id="Message" placeholder="Message" cols="20" rows="5"></textarea>
                            <button type='button' className='btn btn-danger btn-lg mt-4 px-4 py-2'> Submit </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default ConnectourTeam 