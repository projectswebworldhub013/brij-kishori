import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './Components/Navbar'

import FooterSuperFast from './Components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import ServiceDetail from './pages/ServiceDetail'
import FloatingButtons from "./Components/FloatingButtons"
import ScrollToTop from "./Components/ScrollToTop"

const App = () => {
  return (
   <BrowserRouter>
   <ScrollToTop/>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/services/:slug' element={<ServiceDetail/>} />
    <Route path='/gallery' element={<Gallery/>} />
    <Route path='/contact' element={<Contact/>} />
   </Routes>
   <FloatingButtons/>
   <FooterSuperFast/>
    </BrowserRouter>
  )
}

export default App