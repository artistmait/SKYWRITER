import React from 'react'
import LoginPage from './components/pages/Login'
import DashboardPage from './components/pages/Dashboard'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import MainPage from './components/pages/MainPage'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
