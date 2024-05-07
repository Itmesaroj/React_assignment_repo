
import './App.css'
import useTimer from './custom/TimerHook'

function App() {
  let [timer,isRunning,startTimer,stopTimer,resetTimer]=useTimer();
  return(
    <>
    {timer}
    <button onClick={startTimer}>Start Timer</button>
    <button onClick={stopTimer}>Stop Timer</button>
    <button onClick={resetTimer}>ResetTimer</button>
    </>
  )
}

export default App
