import React from 'react'
import Header from "../../components/Header"
import SmartChoice from '../../components/SmartChoice'
import DevopsCom from '../../components/DevopsCom'
import Services from '../../components/Services'

function Home() {
  return (
    <>
    <section>
        <Header />
    </section>
    
      <DevopsCom />
      <Services />
      <SmartChoice />
    </>
  )
}

export default Home