import React, { useState } from 'react';
import { TimerComponent, ScrollEvent } from './component';

function App() {
  const [showTimer, setShowTimer] = useState(true);
  const [showScroll ,setShowScroll] = useState(true);

  const toggleTimer = () => {
    setShowTimer(prevShowTimer => !prevShowTimer);
  };

  const toggleScrollEventListener = () => {
    setShowScroll(prevShowScrollEventListener => !prevShowScrollEventListener);
  };

  return (
    <div style={{minHeight:"2000px"}}>
      <button onClick={toggleTimer}>Toggle Timer Component</button>
      {showTimer && <TimerComponent />}

      <button onClick={toggleScrollEventListener}>Toggle ScrollEventListener Component</button>
      {showScroll && <ScrollEvent />}
    </div>
  );
}

export default App;
