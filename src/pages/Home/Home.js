import React from 'react'
import Header from "../../components/Header"
import DevopsCom from '../../components/DevopsCom'
import Services from '../../components/Services'
import ClientSlider from '../../components/ClientSlider'
import DevopsServicesCom from '../../components/DevopsServicesCom'
import HomePort from '../../components/HomePort'
import HomeSlider from '../../components/HomeSlider'
import Footer from '../../components/Footer'
import Packages from '../../components/packages/packages'
import SmartChoice from '../../components/SmartChoice'
import VideoCom from '../../components/VideoCom'
import TheCohort from '../../components/TheCohort'
import ConnectourTeam from '../../components/ConnectourTeam'

function Home() {
  return (
    <>
      <Header />
      <HomeSlider />
      <DevopsCom />
      <Services />
      <SmartChoice />
      <Packages />
      <DevopsServicesCom />
      <ClientSlider />
      <HomePort />
      <VideoCom />
      <TheCohort />
      <ConnectourTeam />
      <Footer />
    </>
  )
}

export default Home;
