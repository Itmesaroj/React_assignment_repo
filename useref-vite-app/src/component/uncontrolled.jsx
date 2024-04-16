import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleInputChange = () => {
    const value = inputRef.current.value;
    console.log('Current value:', value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} onChange={handleInputChange} />
      <p>Current value: {inputRef.current ? inputRef.current.value : ''}</p>
    </div>
  );
}

export {UncontrolledInput};
