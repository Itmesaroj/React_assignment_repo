import { useState } from "react";
function Cart(){
    let data=JSON.parse(localStorage.getItem("User"))||[]
    console.log(data)
    let [dataarray,setData]=useState(data);
    function removeData(id){
        let array=data.splice(id,1);
        localStorage.setItem("User",JSON.stringify(array));
        let dataa=JSON.parse(localStorage.getItem("User"))||[]
        setData(dataa);
    }
    return(
        <>
         {dataarray.length>0 && data.map((item)=>
            <div key={item.id}>
                    <img src={item.image} alt="zxbhcv" width={"200px"} />
                    <h4>{item.title}</h4>
                    <p>Categroy:-{item.category}</p>
                    <p>Price:-{item.price}</p>
                    <button onClick={()=>{removeData(item.id)}}>Remove</button>
            </div>
            )}
        </>
    )
}
export {Cart};