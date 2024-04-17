// DynamicFormInputFocus.js
import { useState } from 'react';

function DynamicFormInputFocus({ InputRef1, InputRef2, InputRef3, handleSubmit }) {
  const [input1Valid, setInput1Valid] = useState(true);
  const [input2Valid, setInput2Valid] = useState(true);
  const [input3Valid, setInput3Valid] = useState(true);

  const handleChange = (inputRef) => {
    inputRef.current.focus();
  };

  const handleChangeInput1 = () => {
    setInput1Valid(InputRef1.current.value.length >= 2);
  };

  const handleChangeInput2 = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setInput2Valid(emailRegex.test(InputRef2.current.value));
  };

  const handleChangeInput3 = () => {
    setInput3Valid(InputRef3.current.value.length >= 8);
  };

  return (
    <>
      <div className="input-container">
        <input type="text" ref={InputRef1} placeholder="Enter Your Name" onChange={handleChangeInput1} />
        <button onClick={() => handleChange(InputRef1)}>Focus on Input 1</button>
        {!input1Valid && <span>Name must be at least 2 characters</span>}
      </div>

      <div className="input-container">
        <input type="email" ref={InputRef2} placeholder="Enter Your Email Address" onChange={handleChangeInput2} />
        <button onClick={() => handleChange(InputRef2)}>Focus on Input 2</button>
        {!input2Valid && <span>Please enter a valid email address</span>}
      </div>

      <div className="input-container">
        <input type="password" ref={InputRef3} placeholder="Enter password minimum 8 characters" onChange={handleChangeInput3} />
        <button onClick={() => handleChange(InputRef3)}>Focus on Input 3</button>
        {!input3Valid && <span>Please enter a password of at least 8 characters</span>}
      </div>

      <button type="submit">Submit</button>
    </>
  );
}

export { DynamicFormInputFocus };
