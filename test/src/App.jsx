import { Routes,Route,Link } from 'react-router-dom';
import './App.css'
import {Home} from './Component/Home';
import {Cart} from './Component/Cart'
import {Login} from './Component/Login'
import { CheckOut } from './Component/CheckOut';
import { Products } from './Component/Products';
import { ProductsDetails } from './Component/ProductDetails';
import Private from './Component/Private'
function App() {
  return(
    <>
    <div className="Navbar" style={{display:'flex', justifyContent:"space-around", alignItems:"center"}}>
      <Link to="/">Home</Link>
      <Link to="/Products">Products</Link>
      <Link to="/Cart">Cart</Link>
      <Link to="/Login">Login</Link>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Private><Products/></Private>}/>
      <Route path='/cart'  element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/checkOut' element={<CheckOut/>}/>
      <Route path="/products/:id" element={<ProductsDetails/>}/>
    </Routes>
    </>
  )  
}

export default App
