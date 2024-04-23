import { Link, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import Navigate from "./Navigate";
function App() {
  return (
    <>
      <div className="Navbar" style={{ display: 'flex', justifyContent: 'space-around' }}>
       <Navigate/>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
