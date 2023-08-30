import React from 'react'
import Header from "../../Components/Header"
import SmartChoice from '../../Components/SmartChoice'
import DevopsCom from '../../Components/DevopsCom'
import Services from '../../Components/Services'
import VideoCom from '../../Components/VideoCom'

function Home() {
  return (
    <>
      <Header />
      <VideoCom />
      <DevopsCom />
      <Services />
      <SmartChoice />
    </>
  )
}

export default Home;