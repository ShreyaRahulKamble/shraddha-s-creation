import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/shraddha-s-creation">
      <Routes>
        <Route path="/" element={<App><Home /></App>} />
        <Route path="/products" element={<App><Products /></App>} />
        <Route path="/products/:id" element={<App><ProductDetail /></App>} />
        <Route path="/cart" element={<App><Cart /></App>} />
        <Route path="/checkout" element={<App><Checkout /></App>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
