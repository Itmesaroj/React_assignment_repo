import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { ContextAuth } from "./context";

function Private({children}){
    let {Auth}=useContext(ContextAuth)
    console.log(Auth)
    if(Auth==null){
        return <Navigate to="/login"/>
    }
   else{
    return children;
   
   }
    
}
export default Private