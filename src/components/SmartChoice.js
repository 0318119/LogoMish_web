// import React from 'react'
import SmartChoice_style from '../pages/assest/css/home.module.css'
import { MdOutlineColorLens as Color_box } from 'react-icons/md';
import { GiWorld as Creative_ico } from 'react-icons/gi';
import { AiOutlineFundProjectionScreen as Screen_ico } from 'react-icons/ai';
import { BsRocketTakeoff as Rocket_ico } from 'react-icons/bs';



const SmartChoice = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className="row justify-content-center align-item-center">
                <div className="col-12">
                    <div className={`${SmartChoice_style.smartChoiceBox}`}>
                        <h5 className={`${SmartChoice_style.smartChoiceHead}`}>
                            LOGOMISH YOUR SMART CHOICE!
                        </h5>
                        <p  className={`${SmartChoice_style.smartChoiceDes}`}>
                            Ignite Your Brand's Potential with Logomish's Dynamic DevOps Development and Digital Media Marketing Services. Unleash Your Extraordinary Image in the Digital Realm as Our Brilliant Team of DevOps Wizards and Marketing Maestros Stand Ready to Propel You to New Heights. Experience the Power of our Intelligent Solutions and Result-Driven Approach as we Fuel Your Brand's Journey to Unprecedented Success.
                        </p>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center align-item-center'>
                <div className="col-lg-12">
                    <div className={`${SmartChoice_style.smartChoiceItems}`}>
                        <div class={`${SmartChoice_style.flip_card}`} tabIndex="0">
                            <div class={`${SmartChoice_style.flip_card_inner}`}>
                                <div class={`${SmartChoice_style.flip_card_front}`}>
                                    <Color_box />
                                    <h5>Expert & Expertise</h5>
                                </div>
                                <div class={`${SmartChoice_style.flip_card_back}`}>
                                <p> 
                                    We prioritize your success, offering an exceptional 
                                    experience and guiding you towards brand growth and gratitude.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div class={`${SmartChoice_style.flip_card}`} tabIndex="0">
                            <div class={`${SmartChoice_style.flip_card_inner}`}>
                                <div class={`${SmartChoice_style.flip_card_front}`}>
                                    <Creative_ico />
                                    <h5>Creative & Innovative Solutions</h5>
                                </div>
                                <div class={`${SmartChoice_style.flip_card_back}`}>
                                <p> 
                                    Embark on a journey of innovative, creative excellence with our top-notch,
                                    result-driven solutions in digital marketing.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div class={`${SmartChoice_style.flip_card}`} tabIndex="0">
                            <div class={`${SmartChoice_style.flip_card_inner}`}>
                                <div class={`${SmartChoice_style.flip_card_front}`}>
                                    <Screen_ico />
                                    <h5>Personalized Approach</h5>
                                </div>
                                <div class={`${SmartChoice_style.flip_card_back}`}>
                                <p> 
                                    Customization tailored to your unique requirements,
                                    ensuring personalized excellence and alignment with your objectives.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div class={`${SmartChoice_style.flip_card}`} tabIndex="0">
                            <div class={`${SmartChoice_style.flip_card_inner}`}>
                                <div class={`${SmartChoice_style.flip_card_front}`}>
                                    <Rocket_ico />
                                    <h5>Prompt Delivery</h5>
                                </div>
                                <div class={`${SmartChoice_style.flip_card_back}`}>
                                <p> 
                                    We are dedicated to meeting deadlines and delivering timely results because we 
                                    value your time and trust.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default SmartChoice