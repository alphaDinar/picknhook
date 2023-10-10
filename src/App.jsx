import { useState } from 'react'
import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import Profile from './Pages/Client/Profile'
import CreateProfile from './Pages/Host/CreateProfile'

function App() {
  return (
    <>
      <section className='page'>
        <Routes>
          <Route path='/' element={<Profile/>}/>
          <Route path='create' element={<CreateProfile/>}/>
        </Routes>
      </section>
    </>
  )
}

export default App
