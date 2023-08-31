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

function Home() {
  return (
    <>
      <HomeSlider />
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

export default Home