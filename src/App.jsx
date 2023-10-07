import React from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './pages/Home'
import Edit from './components/Edit'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/edit' element={<Edit />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App