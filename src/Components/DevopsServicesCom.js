import React from 'react'
import DevopSer_style from '../pages/assest/css/home.module.css'
import { MdOutlineColorLens as Color_box } from 'react-icons/md';
import { GiWorld as Creative_ico } from 'react-icons/gi';
import { AiOutlineFundProjectionScreen as Screen_ico } from 'react-icons/ai';
import { BsRocketTakeoff as Rocket_ico } from 'react-icons/bs';
import { BsCalendarCheck as SCALABILITY_ico } from 'react-icons/bs';


const DevopsServicesCom = () => {
  return (
    <>
    <section className={`${DevopSer_style.devopsServicesSection}`}>
        <div className="container">
            <div className="row">
                <h5 className={`${DevopSer_style.devopsSerHead}`}>LEADING DEVOPS SERVICE COMPANY</h5>
                <p className={`${DevopSer_style.devopsSerDes}`}>
                     Logomish offers DevOps services for businesses, leading your business to build a strong brand. It caters to the specific needs and goals of organizations, focusing on enhancing collaboration, accelerating software delivery, and improving operational efficiency. As a DevOps provider, Logomish's expert DevOps developers believe in implementing strategies and practices to effectively meet these objectives.
                </p>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 mt-2">
                    <div className={`${DevopSer_style.devopsSerivesItem}`}>
                        <Creative_ico />
                        <h5>PRODUCTIVITY & AGILITY</h5>
                        <p>
                             DevOps infrastructure increases automation and streamlines processes, resulting in faster software development and deployment, making the overall process more efficient.
                        </p>
                    </div>
                </div>

                <div className="col-lg-4 mt-2">
                    <div className={`${DevopSer_style.devopsSerivesItem}`}>
                        <Color_box />
                        <h5>COLLABORATION & COMMUNICATION</h5>
                        <p>
                            DevOps service provider promote dialogue & interactions that leads to enhanced teamwork and a more cohesive and productive work environment.
                        </p>
                    </div>
                </div>

                <div className="col-lg-4 mt-2">
                    <div className={`${DevopSer_style.devopsSerivesItem}`}>
                        <Screen_ico />
                        <h5>QUALITY & RELIABILITY</h5>
                        <p>
                            Experience exceptional DevOps development services that prioritize continuous testing, monitoring, and feedback loops for unparalleled quality and reliability.
                        </p>
                    </div>
                </div>

                <div className="col-lg-4 mt-2">
                    <div className={`${DevopSer_style.devopsSerivesItem}`}>
                        <SCALABILITY_ico />
                        <h5>SCALABILITY AND FLEXIBILITY</h5>
                        <p>
                            DevOps Infrastructure Engineers enable businesses to scale, increased traffic, accommodate growth, & respond to changing demands effectively, scalable architectures and microservices.
                        </p>
                    </div>
                </div>

                <div className="col-lg-4 mt-2">
                    <div className={`${DevopSer_style.devopsSerivesItem}`}>
                        <Rocket_ico />
                        <h5>COST OPTIMIZATION</h5>
                        <p>
                            DevOps encourages efficient resource utilization through cloud platforms, enabling businesses to scale resources up or down, optimizing & eliminating needs for overprovisioning.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    </>
  )
}

export default DevopsServicesCom