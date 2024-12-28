import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import ProductPage from './pages/ProductPage'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import './App.css'

function App() {
  return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/product" element={<ProductPage/>} />
            <Route path="/sign-in" element={<Signin/>} />
            <Route path="/sign-up" element={<Signup/>} />
        </Routes>
    </BrowserRouter>
}

export default App
