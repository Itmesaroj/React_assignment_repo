
import './App.css'
import useForm from './costumHook/costumHook'

function App() {
  let [value,handleChange,handleReset,handleSubmit]=useForm({userName:"",password:""})
  return(
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="userName" id="userName" value={value.userName}  placeholder='Enter UserName' onChange={handleChange}/>
      <br />
      <input type='password' name="password" id="password" value={value.password} placeholder='Enter Password' onChange={handleChange}/>
      <button>Submit</button>
      <br />
      <button onClick={handleReset}>Reset</button>
    </form>
    </>
  )
}

export default App
