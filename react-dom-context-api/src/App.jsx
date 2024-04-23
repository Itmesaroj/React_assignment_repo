import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home'
import About from './component/About'
import Products from './component/Products'
import ProductDetails from './component/ProductDetails'
import { Link, Routes,Route } from 'react-router-dom'
function App() {
  return(
    <>
    <div className="Navbar" style={{display:'flex', justifyContent:'space-around'}}>
    <Link to="/">Home</Link>
    <Link to="/About">About</Link>
    <Link to="/Products">Products</Link>
    </div>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Products" element={<Products/>}/>
      <Route path='/Products/:id' element={<ProductDetails/>}/>
    </Routes>
    </>
  )
}

export default App
