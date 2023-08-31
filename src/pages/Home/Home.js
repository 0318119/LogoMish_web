import React from 'react'
import Header from "../../components/Header"
import SmartChoice from '../../components/SmartChoice'
import DevopsCom from '../../components/DevopsCom'
import Services from '../../components/Services'
import ClientSlider from '../../components/ClientSlider'
import DevopsServicesCom from '../../components/DevopsServicesCom'
import HomePort from '../../components/HomePort'
import HomeSlider from '../../components/HomeSlider'
import Footer from '../../components/Footer'
import Packages from '../../components/packages/packages'
import Header from "../../Components/Header"
import SmartChoice from '../../Components/SmartChoice'
import DevopsCom from '../../Components/DevopsCom'
import Services from '../../Components/Services'
import VideoCom from '../../Components/VideoCom'

function Home() {
  return (
    <>
      <HomeSlider />
      <Header />
      <VideoCom />
      <DevopsCom />
      <Services />
      <SmartChoice />
      <DevopsServicesCom />
      <ClientSlider />
      <HomePort />
      
        <Header />
        <DevopsCom />
        <Services />
        <SmartChoice />
        <Packages />
        <Footer />
    </>
  )
}

export default Home;