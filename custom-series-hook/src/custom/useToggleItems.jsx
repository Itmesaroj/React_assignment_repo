import { useState } from 'react';

function useToggleItems(initialValue, initialPosition = 0){
  const [position, setPosition] = useState(initialPosition);
  
  const toggleState = () => {
    setPosition((position + 1) % initialValue.length);
  };

  return [initialValue[position], toggleState];
}

export default useToggleItems;
