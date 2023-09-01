import React from 'react'
import AboutVideoSection from '../../components/AboutVideoSection'
import Promo from '../../components/Promo'
import Echo from '../../components/Echo'
import WeDont from '../../components/WeDont'
import AboutForm from '../../components/AboutForm'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function About() {
    return (
      <>
        <Header/>
        <AboutVideoSection />
        <Promo/>
        <Echo/>
        <WeDont/>
        <AboutForm/>
        <Footer/>
        
      </>
  )
}

export default About