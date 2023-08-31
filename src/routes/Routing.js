import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/Home/Home';
import Services from '../pages/services/Services';
import Blog from '../pages/blog/Blog'
import Packages from '../pages/packages/Packages'

const Routing = () => {
  return (
    <>
      <Router>
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Packages' element={<Packages />} />

        </Routes>
      </Router>
    </>
  )
}

export default Routing