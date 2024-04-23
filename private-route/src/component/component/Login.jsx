import React, { useState } from 'react';
import axios from 'axios';
import {Navigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async event => {
    event.preventDefault();
  
    try {
      const response = await axios.post('https://reqres.in/api/login', { email, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" >Submit</button>
       
      </form>
    </div>
  );
};

export default Login;
