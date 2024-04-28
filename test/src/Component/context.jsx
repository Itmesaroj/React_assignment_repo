import { createContext, useState } from "react";
export let ContextAuth=createContext();

export function AuthProvider({children}){
    let token=localStorage.getItem("takon");
   
    let [Auth,setAuth]=useState(token)
    
    return(
        <ContextAuth.Provider value={{Auth}}>
            {children}
        </ContextAuth.Provider>
    )
}
