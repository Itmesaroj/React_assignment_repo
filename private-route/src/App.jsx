import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link, Routes, Route } from "react-router-dom";
import Home from './component/component/Home'
import About from './component/component/About'
import Contact from './component/component/Contact'
import Products from './component/component/Products'
import Login from './component/component/Login'
import PrivateRoute from './component/component/Private';
function App() {
 return(
  <>
  <div className="Navbar"  style={{display:'flex', justifyContent:'space-around'}}>
    <Link to="/">Home</Link>
    <Link to="/About">About</Link>
    <Link to="/Contact">Contact</Link>
    <Link to="/Products">Products</Link>
    <Link to="/Login">Login</Link>
  </div>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Products' element={<PrivateRoute><Products/></PrivateRoute>}/>
    <Route path='/Login' element={<Login/>}/>
  </Routes>
  </>
 )
}

export default App
