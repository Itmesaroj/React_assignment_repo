import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './login';
import Users from './user';

function App() {
  return (
<>
      <div className="Navbar" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Users">Users</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
      </>
  );
}

export default App;
