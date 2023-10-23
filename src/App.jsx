import { useState } from 'react'
import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import CreateProfile from './Pages/Host/CreateProfile'
import Register from './Pages/Host/Register'
import Loader from './Components/Loader'
import Login from './Pages/Host/Login'
import ViewProfile from './Pages/Client/ViewProfile'
import Home from './Pages/Client/Home'
import ViewGallery from './Pages/Client/ViewGallery'
import CreateGallery from './Pages/Host/CreateGallery'
import NewEscorts from './Pages/Client/NewEscorts'
import PremiumEscorts from './Pages/Client/PremiumEscorts'
import PremiumAccount from './Pages/Client/PremiumAccount'

function App() {

  return (
    <>
      <Loader />
      <section className='page'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='premiumAccount' element={<PremiumAccount/>} />
          <Route path='newEscorts' element={<NewEscorts/>}/>
          <Route path='premiumEscorts' element={<PremiumEscorts/>} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='createProfile' element={<CreateProfile />} />
          <Route path='viewProfile/:id' element={<ViewProfile />} />
          <Route path='viewGallery/:id' element={<ViewGallery />} />
          <Route path='createGallery' element={<CreateGallery />} />
        </Routes>
      </section>
    </>
  )
}

export default App
