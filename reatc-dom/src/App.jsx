import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home'
import Products from './component/Products'
import ProductDetails from './component/ProductDetails'
import { Link, Routes,Route } from 'react-router-dom'
function App() {
  return(
    <div>
      <div className='Navbar' style={{display:'flex', justifyContent:'space-around'}}>
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails/>} />
      </Routes>
    </div>
  )
}

export default App
