import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputFocus} from './component/focus'
import { UncontrolledInput} from './component/uncontrolled'
import { ElementColorChange } from './component/color'
function App() { 
  return(
    <div>
      <h3>When the element mount the Input filed in the focus </h3>
      <InputFocus/>
      <h3>The Input filed value display in the console</h3>
      <UncontrolledInput/>
      <h3>The Element color change when you click on it</h3>
      <ElementColorChange/>
    </div>
  )
}

export default App
