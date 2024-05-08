/* eslint-disable react/prop-types */
import React from 'react';


const Counter = ({ count, onIncrement, onDecrement }) => {
  console.log('Counter rendered');
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

export default React.memo(Counter);
