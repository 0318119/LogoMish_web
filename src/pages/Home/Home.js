import React from 'react'
import Header from "../../components/Header"
import SmartChoice from '../../components/SmartChoice'
import DevopsCom from '../../components/DevopsCom'
import Services from '../../components/Services'
import Footer from '../../components/Footer'
import Packages from '../../components/packages/packages'

function Home() {
  return (
    <>
      
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