import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './pages/Header'
import AddItems from './pages/Additems';
import HeroSec from './pages/Components/HeroSec';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HeroSec/>} />
          <Route path='/add-item' element={<AddItems/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App