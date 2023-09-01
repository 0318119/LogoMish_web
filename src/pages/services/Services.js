import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Ser_Video from '../../components/services/Ser_Video'
import WebDesign from '../../components/services/WebDesign'
import Ser_Mobile from '../../components/services/Ser_Mobile'
import Ser_Animation from '../../components/services/Ser_Animation'
import UIDesign from '../../components/services/UIDesign'
import Ser_Seo from '../../components/services/Ser_Seo'

function Services() {
    return (
        <>
            <Header />
            <Ser_Video />
            <WebDesign />
            <Ser_Mobile />
            <Ser_Animation />
            <UIDesign />
            <Ser_Seo />
            <Footer />
        </>
    )
}

export default Services