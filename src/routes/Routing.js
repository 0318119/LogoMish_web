import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/Home/Home';
<<<<<<< HEAD
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
=======
import About from '../pages/About/About';
// import Home from '../pages/Home/Home';

const Routing = () => {
  return (
    <Router>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
     </Routes>
    </Router>

>>>>>>> d4b433d2c00424213249064107c8e348547b5deb
  )
}

export default Routing