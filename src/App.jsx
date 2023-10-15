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

function App() {

  return (
    <>
      <Loader />
      <section className='page'>
        <Routes>
          <Route path='/' element={<Home />} />
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
