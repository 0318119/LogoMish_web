import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/Home/Home';
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

  )
}

export default Routing