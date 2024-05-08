import  { useState, useCallback, useMemo } from 'react';
import Counter from './Counter';
import Timer from './Timer';

function App(){
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerId, setTimerId] = useState(null);
  console.log("App")
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  const startTimer = useCallback(() => {
    setIsRunning(true);
    setTimerId(setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000));
  }, []);

  const stopTimer = useCallback(() => {
    setIsRunning(false);
    clearInterval(timerId);
    setTime(0);
  }, [timerId]);

  const pauseTimer = useCallback(() => {
    setIsRunning(false);
    clearInterval(timerId);
  }, [timerId]);

  const counterProps = useMemo(() => ({
    count,
    onIncrement: increment,
    onDecrement: decrement,
  }), [count, increment, decrement]);

  const timerProps = useMemo(() => ({
    time,
  }), [time]);

  return (
    <div>
      <h1>Parent Component</h1>
      <Counter {...counterProps} />
      <Timer {...timerProps} />
      <div>
        <button onClick={isRunning ? pauseTimer : startTimer}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={stopTimer}>Stop</button>
      </div>
    </div>
  );
}

export default App;
