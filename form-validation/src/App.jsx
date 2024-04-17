// App.js
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useRef } from 'react'
import { DynamicFormInputFocus } from './comp/inputRender';

function App() {
  const InputRef1 = useRef(null);
  const InputRef2 = useRef(null);
  const InputRef3 = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: InputRef1.current.value,
      email: InputRef2.current.value,
      password: InputRef3.current.value,
    };
    if (formData.name.trim() === "" || formData.email.trim() === "" || formData.password.trim() === "") {
      alert("Please fill in all fields");
      return;
    }
    submitForm(formData);
  };

  const submitForm = (formData) => {
    alert("form submitting")
    console.log('Submitting form with data:', formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <DynamicFormInputFocus InputRef1={InputRef1} InputRef2={InputRef2} InputRef3={InputRef3} handleSubmit={handleSubmit} />
      </form>
    </div>
  );
}

export default App;
