import { useState } from "react"
import axios from "axios";
function Login(){
    let [obj,setObj]=useState({
        email:"",password:""
    });
    async function handleChange(e){
        e.preventDefault();
        let data= await axios.post("https://reqres.in/api/login",obj)
        localStorage.setItem("takon",data.data.token);
    }
    return(
        <>
        <form onSubmit={handleChange}>
            <input type="email" placeholder="enter email" onChange={(e)=>{setObj({...obj,email:e.target.value})}} />
            <input type="password"  placeholder="enter password" onChange={(e)=>{setObj({...obj,password:e.target.value})}}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export {Login}