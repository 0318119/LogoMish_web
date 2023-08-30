import React from 'react'
import SmartChoice from '../../components/SmartChoice'
import DevopsCom from '../../components/DevopsCom'
import Services from '../../components/Services'
import ClientSlider from '../../components/ClientSlider'
import DevopsServicesCom from '../../components/DevopsServicesCom'
import HomePort from '../../components/HomePort'
import HomeSlider from '../../components/HomeSlider'

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
    </>
  )
}

export default Home