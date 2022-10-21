import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import About from '../pages/About'
import Home from '../pages/Home'
import Profile from '../pages/Profile'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter