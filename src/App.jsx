import { useState } from 'react'
import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import CreateProfile from './Pages/Host/CreateProfile'
import Register from './Pages/Host/Register'
import Loader from './Components/Loader'
import Login from './Pages/Host/Login'
import ViewProfile from './Pages/Client/ViewProfile'
import Home from './Pages/Client/Home'

function App() {

  return (
    <>
    <Loader />
      <section className='page'>
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login/>} />
          <Route path='createProfile/:id' element={<CreateProfile />} />
          <Route path='viewProfile' element={<ViewProfile/> } /> 
        </Routes>
      </section>
    </>
  )
}

export default App
